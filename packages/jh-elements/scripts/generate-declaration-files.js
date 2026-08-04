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
      const deprecated = m.deprecated ? `@deprecated ${m.deprecated}` : '';

      const jsdocLines = [
        description,
        attribute,
        defaultValue,
        deprecated
        //filter out empty lines
      ].filter(Boolean);

      return `
  /**
   * ${jsdocLines.join('\n   * ')}
   */
  ${propName}: ${propType};`;
    })
    .join('\n');
}

function generateClassLevelJsDoc(declaration) {
  const blocks = [];

  // Component description
  if (declaration.description) {
    blocks.push(declaration.description);
  }

  // Element tag (base classes without a tagName skip this)
  if (declaration.tagName) {
    blocks.push(`@element ${declaration.tagName}`);
  }

  // Slots
  (declaration.slots || []).forEach(slot => {
    const desc = slot.description || '';
    blocks.push(`@slot ${slot.name}${desc ? ` - ${desc}` : ''}`);
  });

  // Custom Events
  (declaration.events || []).forEach(event => {
    const desc = event.description || 'Dispatched by the component.';
    blocks.push(`@fires ${event.name} - ${desc}`);
  });

  return blocks
    .join('\n')
    .split('\n')
    .map(line => ` * ${line}`)
    .join('\n');
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
  } else if (declaration.superclass && declaration.superclass.name === 'LitElement') {
    // Base classes (e.g. JhElement) extend LitElement directly so the type chain is preserved.
    importStatement = `import { LitElement } from 'lit';`;
    extendsClause = ` extends LitElement`;
  }

  const classProperties = generateProperties(declaration.members || []);
  const classJsDoc = generateClassLevelJsDoc(declaration);

  // Base classes (no tagName) are not registered elements, so skip the tag name map.
  const tagNameMapBlock = tagName
    ? `\ndeclare global {
  interface HTMLElementTagNameMap {
    '${tagName}': ${className};
  }
}
`
    : '';

  return `
// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0
${importStatement ? '\n' + importStatement : ''}
${tagNameMapBlock}
/**
${classJsDoc}
 */
export declare class ${className}${extendsClause} {
${classProperties}
}`;
}

try {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));

  // Collect base classes that components extend (e.g. JhElement) so declaration
  // files are generated for them too, even though they have no tagName.
  const baseClassNames = new Set();
  manifest.modules.forEach((module) => {
    module.declarations.forEach((declaration) => {
      const superclass = declaration.superclass;
      if (superclass && superclass.module && superclass.name !== 'LitElement') {
        baseClassNames.add(superclass.name);
      }
    });
  });

  manifest.modules.forEach((module) => {
    module.declarations.forEach((declaration) => {
      const isComponent =
        declaration.kind === 'class' &&
        declaration.customElement &&
        declaration.tagName;
      const isBaseClass =
        declaration.kind === 'class' &&
        !declaration.tagName &&
        baseClassNames.has(declaration.name);

      if (isComponent || isBaseClass) {
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