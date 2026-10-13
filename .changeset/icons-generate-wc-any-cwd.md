---
"@jack-henry/jh-icons": patch
---

`generate-wc.js` now resolves its hygen template relative to the script instead of the current working directory, so it works from any cwd. Repeated identical failures are grouped into a single line with a count, and a missing-template failure names the path where the template was expected.
