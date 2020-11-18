const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
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
      })
    );
    config.plugins.push(
      copy({
        targets: [
          {
            src: './sass/utils/variables.scss',
            dest: './dist/',
            rename: 'myLib-variables.scss',
          },
        ],
      })
    )
    return config;
  },
};
