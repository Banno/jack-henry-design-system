---
to: index.d.ts
inject: true
before: '\ndeclare global'
skip_if: 'import \{ <%= className %>'
#
# SPDX-FileCopyrightText: 2025 Jack Henry
# 
# SPDX-License-Identifier: Apache-2.0
---
import { <%= className %> } from './components/<%= unprefixedName %>/<%= unprefixedName %>.js';