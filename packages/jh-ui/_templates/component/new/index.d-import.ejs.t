---
to: index.d.ts
inject: true
before: '\ndeclare global'
skip_if: 'import \{ <%= className %>'
# 
# Copyright 2025 Jack Henry.
# SPDX-License-Identifier: Apache-2.0
# See LICENSE file in project root for full terms.
---
import { <%= className %> } from './components/<%= unprefixedName %>/<%= unprefixedName %>.js';