const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const copy = require('rollup-plugin-copy');
const alias = require('rollup-plugin-alias');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      ...config.plugins,
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      }),
      copy({
        targets: [
          {
            src: './sass/utils/variables.scss',
            dest: './dist/',
            rename: 'myLib-variables.scss',
          },
        ],
      }),
      alias({
        resolve: ['.jsx', '.js', '.ts', '.tsx'],
        entries: [{ find: '@src', replacement: './src/*' }],
      }),
    ]
    return config;
  },
};
