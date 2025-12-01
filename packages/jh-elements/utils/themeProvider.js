// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import JhThemeLight from '@jack-henry/jh-tokens/platforms/web/esm/jh-theme-light.js';
import JhThemeDark from '@jack-henry/jh-tokens/platforms/web/esm/jh-theme-dark.js';

const themes = [
  {
    id: 'jh-theme-light',
    value: JhThemeLight,
  },
  {
    id: 'jh-theme-dark',
    value: JhThemeDark,
  },
];

export const setJhTheme = () => {
  themes.forEach((theme) => {
    const defaultTheme = document.getElementById(theme.id);

    if (defaultTheme) {
      defaultTheme.innerHTML = theme.value;
    } else {
      const newTheme = document.createElement('style');
      newTheme.id = theme.id;
      newTheme.innerHTML = theme.value;
      document.head.prepend(newTheme);
    }
  });
};
