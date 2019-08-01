import $ from 'jquery'
window._ = import('lodash')
window.Popper = import('popper.js').default

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = $

  import('bootstrap')
  import('typeface-ubuntu-mono')
} catch (e) {
  throw e
}
