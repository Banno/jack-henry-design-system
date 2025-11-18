---
to: index.d.ts
inject: true
before: '^  \}\n\}'
skip_if: "'<%= elementName %>': <%= className %>"
#
# SPDX-FileCopyrightText: 2025 Jack Henry
# 
# SPDX-License-Identifier: Apache-2.0
---
    '<%= elementName %>': <%= className %>;