module.exports = {
  plugins: {
    /**
     * Consumes files by @import rule
     * https://github.com/postcss/postcss-import
     */
    'postcss-import': {},

    /**
     * Enable custom property sets references (@apply rule and custom property sets)
     * https://www.npmjs.com/package/postcss-apply
     */
    'postcss-apply': {},

    /**
     * Convert modern CSS into something most browsers can understand
     * https://github.com/csstools/postcss-preset-env
     */
    'postcss-preset-env': {
      /**
       * Polyfill CSS features
       * https://github.com/csstools/postcss-preset-env#stage
       *
       * List of features with levels: https://cssdb.org/
       */
      stage: 0
    },

    /**
     * Nested rules unwrapper
     * https://github.com/postcss/postcss-nested
     * As you know 'postcss-preset-env' plugin has a 'postcss-nesting' feature
     * but it does not work with nested rules like BEM
     * Report: https://github.com/jonathantneal/postcss-nesting/issues/41
     */
    'postcss-nested': {},

    /**
     * Compression tool
     * https://github.com/cssnano/cssnano
     */
    cssnano: {}
  }
};
