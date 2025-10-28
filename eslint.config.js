import  { jhEslintConfig }   from './packages/jh-eslint-config/index.js';

export default [
  jhEslintConfig,
  {
    ignores: ["packages/jh-ui/components/**/*.stories.js"]
  }
];