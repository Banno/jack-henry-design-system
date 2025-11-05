---
to: index.d.ts
inject: true
before: '^  \}\n\}'
skip_if: "'<%= elementName %>': <%= className %>"
# 
# Copyright 2025 Jack Henry.
# SPDX-License-Identifier: Apache-2.0
# See LICENSE file in project root for full terms.
---
    '<%= elementName %>': <%= className %>;