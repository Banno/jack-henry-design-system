---
to: index.d.ts
inject: true
before: '^  \}\n\}'
skip_if: "'<%= elementName %>': <%= className %>"
---
    '<%= elementName %>': <%= className %>;