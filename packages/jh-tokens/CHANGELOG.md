# @jack-henry/jh-tokens

## 2.2.0

### Minor Changes

- [#395](https://github.com/Banno/jack-henry-design-system/pull/395) [`243d092`](https://github.com/Banno/jack-henry-design-system/commit/243d09243d15022a418ee8cf2e7dec1287eb5192) Thanks [@stephhubka](https://github.com/stephhubka)! - Add breakpoint tokens (sm/md/lg/xl)

- [#345](https://github.com/Banno/jack-henry-design-system/pull/345) [`805e876`](https://github.com/Banno/jack-henry-design-system/commit/805e876cf2a90c0bf05860c08082176fa96bed57) Thanks [@stephhubka](https://github.com/stephhubka)! - [tokens] Update the gray primitive ramp to match the Figma v2 Forge Kit. Adds two grays: `color.gray.0` (`#ffffff`) and `color.gray.1000` (`#000000`). Makes four dark grays one step darker: `gray.800` is `[#343434](https://github.com/Banno/jack-henry-design-system/issues/343434)` (was `#3e3e3e`), `gray.850` is `#2c2c2c` (was `[#343434](https://github.com/Banno/jack-henry-design-system/issues/343434)`), `gray.900` is `[#202020](https://github.com/Banno/jack-henry-design-system/issues/202020)` (was `#2c2c2c`), and `gray.950` is `[#161616](https://github.com/Banno/jack-henry-design-system/issues/161616)` (was `[#202020](https://github.com/Banno/jack-henry-design-system/issues/202020)`). Dark mode surfaces (page, containers, dividers) and light mode primary text change visually as a result. No token is renamed or removed.

- [#333](https://github.com/Banno/jack-henry-design-system/pull/333) [`2f4fcd1`](https://github.com/Banno/jack-henry-design-system/commit/2f4fcd1a9cb3dfceed849fd580de57c3fb80454a) Thanks [@stephhubka](https://github.com/stephhubka)! - [tokens] adds color.state.hover / .active / .selected semantic tokens (translucent state layers) and the color.blue.alpha.10 primitive.

## 2.1.0

### Minor Changes

- [#340](https://github.com/Banno/jack-henry-design-system/pull/340) [`265d0cc`](https://github.com/Banno/jack-henry-design-system/commit/265d0cc42f374fc890440c68e674b88f7420b199) Thanks [@stephhubka](https://github.com/stephhubka)! - [tokens] `font.family.sans` now leads with Figtree: `Figtree, 'Roboto Flex', Roboto, Helvetica, Arial, sans-serif`. Matches the stack Anvil libraries already ship. Roboto Flex stays as the next fallback, so apps that don't load Figtree render as before. Figtree is added to `assets/fonts` for self-hosting.
