import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getWebTypesData } from "custom-element-jet-brains-integration";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifestPath = path.resolve(__dirname, '../custom-elements.json');
const outputPath = path.resolve(__dirname, '../web-types.json');

if (!fs.existsSync(manifestPath)) {
  console.error(`Error: Could not find manifest at ${manifestPath}`);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const options = {
  hideCssPropertiesDocs: true,
  hideEventDocs: true,
  hideSlotDocs: true,
};

const webTypesString = getWebTypesData(manifest, options);

const webTypes = JSON.parse(webTypesString);

// Helper function to extract URL from description
function extractUrlFromDescription(description) {
  if (!description) return null;
  
  // Match markdown links: [text](url)
  const markdownLinkMatch = description.match(/\[([^\]]+)\]\(([^)]+)\)/);
  if (markdownLinkMatch) {
    return markdownLinkMatch[2];
  }
  
  // Match plain URLs: http(s)://...
  const urlMatch = description.match(/https?:\/\/[^\s<>"]+/);
  if (urlMatch) {
    return urlMatch[0];
  }
  
  return null;
}

webTypes.contributions?.html?.elements?.forEach(element => {
  // Extract and set doc-url from element description
  const elementUrl = extractUrlFromDescription(element.description);
  if (elementUrl) {
    element['doc-url'] = elementUrl;
  }
  
  element.attributes?.forEach(attr => {
    const typeText = attr.value?.type;

    // Check if the type contains numbers or is a numeric union
    // Matches "80", "1|2|3", or "0|8|16|null"
    if (typeof typeText === 'string' && /[\d]/.test(typeText)) {
      
      // Convert the type string: 1|2|3 -> "1"|"2"|"3"
      attr.value.type = typeText
        .split('|')
        .map(t => {
          const trimmed = t.trim();
          // Wrap numbers in quotes, leave 'null' or existing strings alone. 
          // Use Regex to find numbers: Matches optional sign, digits, and optional decimal point
        const isNumeric = /^-?\d*\.?\d+$/.test(trimmed);
        
        return isNumeric ? `"${trimmed}"` : trimmed;
        })
        .join('|');

      // Fix the default value to match the new string type
      if (attr.default !== undefined && attr.default !== null) {
        const cleanDefault = String(attr.default).replace(/['"]/g, '');
        const isNumericDefault = /^-?\d*\.?\d+$/.test(cleanDefault);
      
      if (isNumericDefault) {
        attr.default = `"${cleanDefault}"`;
      }
    }
  }
});
});

const formattedJson = JSON.stringify(webTypes, null, 2);

fs.writeFileSync(outputPath, formattedJson, 'utf8');

console.log('Web-types generated: Numeric unions converted to string literals.');