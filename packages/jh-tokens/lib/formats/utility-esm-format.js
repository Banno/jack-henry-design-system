// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { fileHeader } from 'style-dictionary/utils';
import { buildUtilityRules } from './utility-rules.js';

async function FormatUtilityEsm({ dictionary, file }) {
  const header = await fileHeader({ file });
  return `${header}export default \`\n${buildUtilityRules(dictionary)}\n\`;\n`;
}

export default FormatUtilityEsm;
