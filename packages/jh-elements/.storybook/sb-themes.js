import { create } from '@storybook/theming';

//more options like fonts and colors can be added later as needed
export const lightTheme = create({
  base: 'light',
  // Brand assets
  brandTitle: 'Jack Henry Storybook',
  brandUrl: 'https://jackhenry.design',
  brandImage: '/logos/Jack-Henry-Wordmark-Hex.png',
  //sets the background of the preview in Canvas
  appPreviewBg: '#FFFFFF',
});

export const darkTheme = create({
  base: 'dark',
  // Brand assets
  brandTitle: 'Jack Henry Storybook',
  brandUrl: 'https://jackhenry.design',
  brandImage: '/logos/Jack-Henry-Wordmark-Hex-Inversed.png',
  appPreviewBg: '#333333',
});
