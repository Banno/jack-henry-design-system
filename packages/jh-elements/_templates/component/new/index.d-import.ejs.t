---
to: index.d.ts
inject: true
before: '\ndeclare global'
skip_if: 'import \{ <%= className %>'
---
import { <%= className %> } from './components/<%= unprefixedName %>/<%= unprefixedName %>.js';