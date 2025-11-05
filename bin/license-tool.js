import { glob } from 'glob';
import fs from 'fs/promises';
import path from 'path';

const CURRENT_YEAR = new Date().getFullYear();

const LICENSE_CORE_TEXT = `
 * Copyright $YEAR Jack Henry.
 * SPDX-License-Identifier: Apache-2.0
 * * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * * http://www.apache.org/licenses/LICENSE-2.0
 * * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
`;

// Concise version for config files
const LICENSE_CONCISE_TEXT = `
 * Copyright $YEAR Jack Henry. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
`;

// Map file extensions to their comment wrappers and required license text
const COMMENT_MAP = {
    '.js': { start: '/**', end: '*/\n\n', text: LICENSE_CORE_TEXT },
    '.ts': { start: '/**', end: '*/\n\n', text: LICENSE_CORE_TEXT }, //also for d.ts
    '.css': { start: '/*\n', end: '*/\n\n', text: LICENSE_CORE_TEXT },
    '.svg': { start: '<!--\n', end: '-->\n\n', text: LICENSE_CORE_TEXT },
    '.mdx': { 
        start: '{/*\n', 
        end: '*/}\n\n', 
        text: LICENSE_CORE_TEXT,
        stripAsterisks: true // Removes leading * from each line
    }, 
    '.yml': { start: '# ', end: '\n\n', text: LICENSE_CONCISE_TEXT, prefixLines: true },
    '.yaml': { start: '# ', end: '\n\n', text: LICENSE_CONCISE_TEXT, prefixLines: true },
};

// Include all supported file types across the repo
const INCLUDE_PATTERNS = ['**/*.js', '**/*.ts', '**/*.d.ts', '**/*.css', '**/*.svg', '**/*.mdx', '**/*.yml', '**/*.yaml'];

//Ignore folders with external or generated files
const IGNORE_PATTERNS = [
    'package-lock.json',
    'package.json',
    'pnpm-lock.yaml',
    'pnpm-workspace.yaml',
    'LICENSE',
    'NOTICE',
    'CODEOWNERS',
    '**/node_modules/**',
    '**/.storybook/public/**', //includes not owned svgs
    'bin/license-tool.js' // Don't check yourself recursively
];

function getFormattedHeader(filePath) {
    const ext = path.extname(filePath);
    const style = COMMENT_MAP[ext];

    if (!style) {
        return null;
    }

    let headerText = style.text.replace('$YEAR', CURRENT_YEAR);

    if (style.stripAsterisks) {
        headerText = headerText.replace(/^\s*\*/gm, ''); 
    }
    if (style.prefixLines) {
        const prefix = style.start.trim();
        headerText = headerText.replace(/\n\s*/g, `\n${prefix} `).trim(); 
        headerText = `\n${prefix} ${headerText}`;
    }
    return `${style.start}${headerText}\n${style.end}`;
}

async function checkFile(filePath, isFixMode) {
    const TARGET_HEADER = getFormattedHeader(filePath);
    if (!TARGET_HEADER) return true; // File type was unsupported/skipped

    // Regex to check for the presence of the required SPDX identifier
    const CHECK_REGEX = /SPDX-License-Identifier: Apache-2\.0/; 

    try {
        const content = await fs.readFile(filePath, 'utf-8');

        if (CHECK_REGEX.test(content)) {
            return true;
        }
        if (isFixMode) {
            console.log(`🔨 Applying header to ${filePath}...`);
            const newContent = TARGET_HEADER + content;
            await fs.writeFile(filePath, newContent, 'utf-8');
            return true; //Fixed: added header
        } else {
            console.error(`❌ ${filePath}: MISSING license header!`);
            return false; // Checked: missing and not fixed
        }

    } catch (err) {
        console.error(`Error processing ${filePath}:`, err.message);
        return false;
    }
}

async function run(mode) {
    const isFixMode = mode === 'fix';
    let missingCount = 0;

    // process.argv[0] is 'node', [1] is 'license-tool.js', [2] is 'mode'
    const customPatterns = process.argv.slice(3); 

    const patternsToUse = customPatterns.length > 0 ? customPatterns : INCLUDE_PATTERNS;

    const isCliTest = customPatterns.length > 0;

    console.log(`\n--- Starting License ${isFixMode ? 'Fix' : 'Check'} ---\n`);

    try {
        const files = await glob(patternsToUse, { ignore: IGNORE_PATTERNS, cwd: process.cwd(), dot: true });

        if (isCliTest && files.length === 0) {
        console.warn('⚠️ WARNING: No files found matching the provided path/pattern. Check your input.');
        process.exit(0); 
        }
        
        const results = await Promise.all(
            files.map(filePath => checkFile(filePath, isFixMode))
        );
        
        missingCount = results.filter(result => !result).length;

    } catch (err) {
        console.error(`\nFatal error during file search: ${err.message}`);
        process.exit(1);
    }

    if (missingCount === 0) {
        console.log(`\n✅ License check passed. All files compliant.`);
        process.exit(0);
    } else {
        console.error(`\n🚨 License check FAILED. ${missingCount} files are missing headers.`);
        if (!isFixMode) {
            console.error('Run "pnpm run license:fix" to automatically add them.');
        }
        process.exit(1);
    }
}
const mode = process.argv[2] || 'check'; 
run(mode);