import fs from 'fs';
import path from 'path';

const MANIFEST_PATH = path.resolve(process.cwd(), 'custom-elements.json');

function getTsType(type) {
  if (!type || !type.text) return 'any';
  
  // Remove leading ? and handle nullable types
  let tsType = type.text.replace(/^\?/, '').trim();
  
  // Check if it's nullable (had ? prefix or explicitly includes null)
  const isNullable = type.text.startsWith('?') || type.text.includes('| null');
  
  // Clean up the type
  tsType = tsType.replace(/\s\|\snull/g, '').trim() || 'any';
  
  // Add null union if needed (without parentheses for cleaner output)
  if (isNullable && !tsType.includes('null')) {
    tsType = `${tsType} | null`;
  }
  
  return tsType;
}

function generateProperties(members) {
  return members
    .filter((m) => m.kind === 'field' && m.privacy !== 'private')
    .map((m) => {
      const propName = m.name;
      const propType = getTsType(m.type);
      const description = m.description || '';
      const attribute = m.attribute ? `@attr ${m.attribute}` : '';
      const defaultValue = m.default ? `@default ${m.default}` : '';

      // Build JSDoc lines
      const jsdocLines = [
        description,
        attribute,
        defaultValue
      ].filter(Boolean);

      return `
    /**
     * ${jsdocLines.join('\n     * ')}
     */
    ${propName}: ${propType};`;
    })
    .join('\n');
}

function generateClassLevelJsDoc(declaration) {
  const lines = [];
  
  // Component description
  if (declaration.description) {
    lines.push(declaration.description);
    lines.push('');
  }
  
  // Element tag
  lines.push(`@element ${declaration.tagName}`);
  
  // Slots
  if (declaration.slots && declaration.slots.length > 0) {
    declaration.slots.forEach(slot => {
      const slotName = slot.name === 'default' ? '' : slot.name;
      const desc = slot.description || '';
      lines.push(`@slot ${slotName}${desc ? ` - ${desc}` : ''}`);
    });
  }
  
  // Events (only custom events, not inherited ones)
  if (declaration.events && declaration.events.length > 0) {
    lines.push('');
    declaration.events.forEach(event => {
      const desc = event.description || 'Dispatched by the component.';
      lines.push(`@fires ${event.name} - ${desc}`);
    });
  }
  
  return lines.map(line => ` * ${line}`).join('\n');
}

function generateComponentDts(declaration) {
  const className = declaration.name;
  const tagName = declaration.tagName;

  const properties = generateProperties(declaration.members || []);
  const classJsDoc = generateClassLevelJsDoc(declaration);

  // Generate property list for class export (fields only, skip methods)
  const allMembers = declaration.members || [];
  const publicFields = allMembers.filter(m => 
    m.kind === 'field' && m.privacy !== 'private'
  );
  
  const classProperties = publicFields.map(m => {
    const propType = getTsType(m.type);
    return `  ${m.name}: ${propType};`;
  }).join('\n');

  return `// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0import { LitElement } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    '${tagName}': ${className};
  }
}

/**
${classJsDoc}
 */
export declare interface ${className} extends LitElement {
${properties}
}

export declare class ${className} extends LitElement {
${classProperties}
}`;
}

try {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));

  manifest.modules.forEach((module) => {
    module.declarations.forEach((declaration) => {
      if (
        declaration.kind === 'class' &&
        declaration.customElement &&
        declaration.tagName
      ) {
        // 1. DETERMINE OUTPUT PATH:
        const sourceDir = path.dirname(module.path); // 'components/checkbox'
        const sourceFileName = path.basename(module.path, '.js'); // 'checkbox'
        const fileName = `${sourceFileName}.d.ts`; // e.g., checkbox.d.ts

        // Final DTS path: components/checkbox/checkbox.d.ts
        const filePath = path.join(process.cwd(), sourceDir, fileName);

        // 2. GENERATE AND WRITE FILE:
        const content = generateComponentDts(declaration);

        fs.writeFileSync(filePath, content.trim() + '\n');
      }
    });
  });
  console.log('Type generation complete!');
} catch (error) {
  console.error('Error generating types:', error);
}
