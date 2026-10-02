# @jack-henry/jh-icons

## 2.1.3

### Patch Changes

- [#303](https://github.com/Banno/jack-henry-design-system/pull/303) [`efbec00`](https://github.com/Banno/jack-henry-design-system/commit/efbec00e22ee28d6450b6c2030edf1a97de6f579) Thanks [@stephhubka](https://github.com/stephhubka)! - `generate-wc.js` now resolves its hygen template relative to the script instead of the current working directory, so it works from any cwd. Repeated identical failures are grouped into a single line with a count, and a missing-template failure names the path where the template was expected.

## 2.1.2

### Patch Changes

- [#238](https://github.com/Banno/jack-henry-design-system/pull/238) [`b945c11`](https://github.com/Banno/jack-henry-design-system/commit/b945c11b5b3c760d206322a77dae3d1e7ef3e5fa) Thanks [@stephhubka](https://github.com/stephhubka)! - [icons] bug fix - generate-wc.js now reports generation failures and exits non-zero instead of always reporting success.

## 2.1.1

### Patch Changes

- [#276](https://github.com/Banno/jack-henry-design-system/pull/276) [`1c3374a`](https://github.com/Banno/jack-henry-design-system/commit/1c3374a30735e945844b4f3cab403da5c3eb5343) Thanks [@mayabuserde](https://github.com/mayabuserde)! - [icons] updates icon generation script and corrects robot-sparkles icon class name.

## 2.1.0

### Minor Changes

- [#213](https://github.com/Banno/jack-henry-design-system/pull/213) [`134c663`](https://github.com/Banno/jack-henry-design-system/commit/134c663512bb066b0d0e6cf9faf83095a049f63c) Thanks [@abissier](https://github.com/abissier)! - [robot sparkles] adds robot sparkles icon.

### Patch Changes

- [#225](https://github.com/Banno/jack-henry-design-system/pull/225) [`3270bdd`](https://github.com/Banno/jack-henry-design-system/commit/3270bdd2813dec23908a498d1034b63d9e7698f1) Thanks [@mayabuserde](https://github.com/mayabuserde)! - It fixes a bug in the icon generation template and regenerates the wc-icons.
