---
"@jack-henry/jh-elements": patch
---

[badge] fixes single-digit badges rendering oval and stabilizes multi-digit width. Rendered badge width changes: a single-digit count is now a 16x16 circle rather than ~15x16, and multi-digit counts no longer shift width depending on which digits are shown. Vertical centering of the count is now explicit rather than incidental.
