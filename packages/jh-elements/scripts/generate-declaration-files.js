import fs from 'fs';
import path from 'path';

const MANIFEST_PATH = path.resolve(process.cwd(), 'custom-elements.json');

function getTsType(type) {
  if (!type || !type.text) return 'any';
  
  // Convert nullable types to Typescript syntax
  let tsType = type.text.replace(/^\?/, '').trim();
  const isNullable = type.text.startsWith('?') || type.text.includes('| null');
  tsType = tsType.replace(/\s\|\snull/g, '').trim() || 'any';
  if (isNullable && !tsType.includes('null')) {
    tsType = `${tsType} | null`;
  }
  
  return tsType;
}

function isOwnField(member) {
  return member.kind === 'field' 
    && !member.inheritedFrom;
}

function generateProperties(members) {
  return members
    .filter(isOwnField)
    .map((m) => {
      const propName = m.name;
      const propType = getTsType(m.type);
      const description = m.description || '';
      const attribute = m.attribute ? `@attr ${m.attribute}` : '';
      const defaultValue = m.default ? `@default ${m.default}` : '';

      const jsdocLines = [
        description,
        attribute,
        defaultValue
        //filter out empty lines
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
      //may not be needed if I want to keep default
      const slotName = slot.name === 'default' ? 'default' : slot.name;
      const desc = slot.description || '';
      lines.push(`@slot ${slotName}${desc ? ` - ${desc}` : ''}`);
    });
  }
  
  // Custom Events
  if (declaration.events && declaration.events.length > 0) {
    lines.push('');
    declaration.events.forEach(event => {
      const desc = event.description || 'Dispatched by the component.';
      lines.push(`@fires ${event.name} - ${desc}`);
    });
  }
  
  return lines.map(line => ` * ${line}`).join('\n');
}

function generateComponentDts(declaration, currentModulePath) {
  const className = declaration.name;
  const tagName = declaration.tagName;

  // For components extending off our components, we need to generate the import
  let importStatement = '';
  let extendsClause = '';

  // Check if this component extends another component (not LitElement) & generate the import
  if (declaration.superclass && declaration.superclass.name !== 'LitElement' && declaration.superclass.module) {
    const superclassName = declaration.superclass.name;
    const fromDir = path.dirname(currentModulePath);
    const toFile = declaration.superclass.module.replace(/^\//, ''); 
    let relativePath = path.relative(fromDir, toFile).replace(/\.js$/, '').replace(/\\/g, '/');
    if (!relativePath.startsWith('.')) relativePath = './' + relativePath;
    importStatement = `import { ${superclassName} } from '${relativePath}';`;
    extendsClause = ` extends ${superclassName}`;
  }

  const interfaceProperties = generateProperties(declaration.members || []);
  const classJsDoc = generateClassLevelJsDoc(declaration);

  const allMembers = declaration.members || [];
  const publicFields = allMembers.filter(isOwnField);
  const classProperties = publicFields.map(m => {
    const propType = getTsType(m.type);
    return `  ${m.name}: ${propType};`;
  }).join('\n');

  // Do not extend off LitElements so it hides framework/HTMLElement internals from autocomplete
  return `// SPDX-FileCopyrightText: 2026 Jack Henry

// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0
${importStatement ? '\n' + importStatement : ''}

declare global {
  interface HTMLElementTagNameMap {
    '${tagName}': ${className};
  }
}

export declare interface ${className} {
${interfaceProperties}
}

/**
${classJsDoc}
 */
export declare class ${className}${extendsClause} {
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
        const sourceDir = path.dirname(module.path); // 'components/checkbox'
        const sourceFileName = path.basename(module.path, '.js'); // 'checkbox'
        const fileName = `${sourceFileName}.d.ts`; // e.g., checkbox.d.ts

        // Final DTS path: components/checkbox/checkbox.d.ts
        const filePath = path.join(process.cwd(), sourceDir, fileName);

        const content = generateComponentDts(declaration, module.path);

        fs.writeFileSync(filePath, content.trim() + '\n');
      }
    });
  });
  console.log('Type generation complete!');
} catch (error) {
  console.error('Error generating types:', error);
}