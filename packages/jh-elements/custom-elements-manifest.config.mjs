export default {
  /** Globs to analyze */
  globs: ['./components/**/**.js'],
  /** Globs to exclude */
  exclude: ['./components/**/**.stories.js'],
  /** Run in dev mode, provides extra logging */
  dev: false,
  /** Run in watch mode, runs on file changes */
  watch: false,
  /** Output CEM path to `package.json`, defaults to true */
  packagejson: false,
  /** Enable special handling for litelement */
  litelement: true,
  plugins: [
  ],
}