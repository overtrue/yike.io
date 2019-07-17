const mix = require('laravel-mix')
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
  .js('src/app.js', 'public/')
  .sass('src/scss/app.scss', 'public/')
  .setPublicPath('public')

mix.babelConfig({
  plugins: ['@babel/plugin-syntax-dynamic-import']
})

mix.webpackConfig({
  resolve: {
    alias: {
      $modules: path.resolve(__dirname, 'src/modules'),
      $plugins: path.resolve(__dirname, 'src/plugins'),
      $utils: path.resolve(__dirname, 'src/utils'),
      $components: path.resolve(__dirname, 'src/components'),
      $scss: path.resolve(__dirname, 'src/sass'),
      $icons: path.resolve(__dirname, 'node_modules/vue-material-design-icons'),
      $config: path.resolve(__dirname, 'src/config')
    }
  }
})
