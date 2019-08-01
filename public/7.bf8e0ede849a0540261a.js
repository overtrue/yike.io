(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/editor/src/Editor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/src/Editor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emoji_completer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emoji-completer */ "./src/components/editor/emoji-completer.js");
/* harmony import */ var _at_completer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../at-completer */ "./src/components/editor/at-completer.js");
/* harmony import */ var _attachment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../attachment */ "./src/components/editor/attachment.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var $icons_Plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! $icons/Plus */ "./node_modules/vue-material-design-icons/Plus.vue");
/* harmony import */ var $icons_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! $icons/Link */ "./node_modules/vue-material-design-icons/Link.vue");
/* harmony import */ var $icons_FormatHeader1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! $icons/FormatHeader1 */ "./node_modules/vue-material-design-icons/FormatHeader1.vue");
/* harmony import */ var $icons_FormatHeader2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! $icons/FormatHeader2 */ "./node_modules/vue-material-design-icons/FormatHeader2.vue");
/* harmony import */ var $icons_FormatHeader3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! $icons/FormatHeader3 */ "./node_modules/vue-material-design-icons/FormatHeader3.vue");
/* harmony import */ var $icons_FormatBold__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! $icons/FormatBold */ "./node_modules/vue-material-design-icons/FormatBold.vue");
/* harmony import */ var $icons_FormatItalic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! $icons/FormatItalic */ "./node_modules/vue-material-design-icons/FormatItalic.vue");
/* harmony import */ var $icons_FormatQuoteOpen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! $icons/FormatQuoteOpen */ "./node_modules/vue-material-design-icons/FormatQuoteOpen.vue");
/* harmony import */ var $icons_CodeTags__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! $icons/CodeTags */ "./node_modules/vue-material-design-icons/CodeTags.vue");
/* harmony import */ var $icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! $icons/FormatListBulleted */ "./node_modules/vue-material-design-icons/FormatListBulleted.vue");
/* harmony import */ var $icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! $icons/FormatListNumbered */ "./node_modules/vue-material-design-icons/FormatListNumbered.vue");
/* harmony import */ var $components_markdown_body__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! $components/markdown-body */ "./src/components/markdown-body.vue");
/* harmony import */ var codemirror_mode_gfm_gfm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! codemirror/mode/gfm/gfm */ "./node_modules/codemirror/mode/gfm/gfm.js");
/* harmony import */ var codemirror_mode_gfm_gfm__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_gfm_gfm__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var codemirror_addon_edit_continuelist__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! codemirror/addon/edit/continuelist */ "./node_modules/codemirror/addon/edit/continuelist.js");
/* harmony import */ var codemirror_addon_edit_continuelist__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_continuelist__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! codemirror/addon/edit/matchbrackets */ "./node_modules/codemirror/addon/edit/matchbrackets.js");
/* harmony import */ var codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! codemirror/addon/edit/closebrackets */ "./node_modules/codemirror/addon/edit/closebrackets.js");
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var codemirror_addon_edit_matchtags__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! codemirror/addon/edit/matchtags */ "./node_modules/codemirror/addon/edit/matchtags.js");
/* harmony import */ var codemirror_addon_edit_matchtags__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchtags__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var codemirror_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! codemirror/addon/display/placeholder */ "./node_modules/codemirror/addon/display/placeholder.js");
/* harmony import */ var codemirror_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var codemirror_keymap_sublime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! codemirror/keymap/sublime */ "./node_modules/codemirror/keymap/sublime.js");
/* harmony import */ var codemirror_keymap_sublime__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(codemirror_keymap_sublime__WEBPACK_IMPORTED_MODULE_23__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//























 // import '../theme/yike.css'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'editor',
  props: {
    value: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Boolean,
      default: false
    },
    editorClass: {
      type: String,
      default: 'p-2'
    },
    placeholder: {
      type: String,
      default: '请在这里输入你的内容'
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  components: {
    MarkdownBody: $components_markdown_body__WEBPACK_IMPORTED_MODULE_16__["default"],
    PlusIcon: $icons_Plus__WEBPACK_IMPORTED_MODULE_5__["default"],
    FormatHeader1Icon: $icons_FormatHeader1__WEBPACK_IMPORTED_MODULE_7__["default"],
    FormatHeader2Icon: $icons_FormatHeader2__WEBPACK_IMPORTED_MODULE_8__["default"],
    FormatHeader3Icon: $icons_FormatHeader3__WEBPACK_IMPORTED_MODULE_9__["default"],
    FormatBoldIcon: $icons_FormatBold__WEBPACK_IMPORTED_MODULE_10__["default"],
    FormatItalicIcon: $icons_FormatItalic__WEBPACK_IMPORTED_MODULE_11__["default"],
    FormatQuoteOpenIcon: $icons_FormatQuoteOpen__WEBPACK_IMPORTED_MODULE_12__["default"],
    FormatListNumbersIcon: $icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_15__["default"],
    FormatListBulletedIcon: $icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_14__["default"],
    CodeTagsIcon: $icons_CodeTags__WEBPACK_IMPORTED_MODULE_13__["default"],
    LinkIcon: $icons_Link__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      contentBackup: false,
      editor: null,
      editSession: null,
      selection: null,
      undoManager: null,
      tribute: null,
      html: '预览生成中...'
    };
  },
  watch: {
    value: function value() {
      if (this.contentBackup === this.value) {
        return;
      }

      this.setValue();
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['authToken'])),
  methods: {
    init: function init() {
      this.initEditor();
    },
    initEditor: function initEditor() {
      var _this = this;

      this.editor = codemirror__WEBPACK_IMPORTED_MODULE_0___default.a.fromTextArea(document.getElementById('editor'), {
        keyMap: 'sublime',
        mode: 'markdown',
        lineWrapping: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        matchBothTags: true,
        value: this.value || '',
        profile: 'html',
        extraKeys: {
          Enter: 'newlineAndIndentContinueMarkdownList'
        }
      });
      this.editor.on('change', _emoji_completer__WEBPACK_IMPORTED_MODULE_1__["default"]);
      this.editor.on('change', _at_completer__WEBPACK_IMPORTED_MODULE_2__["default"]);
      this.editor.on('change', function (editor) {
        var content = editor.getValue();

        _this.$emit('input', content);

        _this.contentBackup = content;
      });
      window.inlineAttachment.editors.codemirror4.attach(this.editor, {
        uploadFieldName: 'file',
        jsonFieldName: 'url',
        uploadUrl: this.$http.defaults.baseURL + '/files/upload',
        extraHeaders: {
          Authorization: "Bearer ".concat(this.authToken)
        }
      });
    },
    setValue: function setValue() {
      if (this.value) {
        this.editor.setValue(this.value, 1);
      }
    },
    preview: function preview() {
      var _this2 = this;

      if (this.value.length <= 0) {
        return this.html = '请先输入内容';
      }

      this.html = '预览生成中...';
      this.$http.post('contents/preview', {
        markdown: this.value
      }).then(function (html) {
        return _this2.html = html;
      });
    }
  },
  mounted: function mounted() {
    this.init();
    this.setValue();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/markdown-body.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/markdown-body.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-markup-templating */ "./node_modules/prismjs/components/prism-markup-templating.js");
/* harmony import */ var prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-php */ "./node_modules/prismjs/components/prism-php.js");
/* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-sass */ "./node_modules/prismjs/components/prism-sass.js");
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-scss */ "./node_modules/prismjs/components/prism-scss.js");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-json */ "./node_modules/prismjs/components/prism-json.js");
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'markdown-body',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  watch: {},
  mounted: function mounted() {
    this.$nextTick(function () {
      prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlightAll();
    });
  },
  updated: function updated() {
    prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlightAll();
  },
  methods: {
    replaceUserMention: function replaceUserMention(body) {
      return body.replace(new RegExp(/@([a-zA-Z][a-zA-Z_\-0-9]+)/, 'g'), '<a href="/$1" class="username">@$1</a>');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/editor/src/Editor.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-3!./node_modules/sass-loader/lib/loader.js??ref--7-4!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/src/Editor.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".ace_gutter {\n  -webkit-font-smoothing: antialiased;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/extract-text-webpack-plugin/dist/loader.js?!./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/editor/src/Editor.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/extract-text-webpack-plugin/dist/loader.js??ref--7-0!./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-3!./node_modules/sass-loader/lib/loader.js??ref--7-4!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/src/Editor.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-3!../../../../node_modules/sass-loader/lib/loader.js??ref--7-4!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/editor/src/Editor.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/editor/src/Editor.vue?vue&type=template&id=278995cc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/src/Editor.vue?vue&type=template&id=278995cc& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "editor" }, [
    _c("div", { staticClass: "card-header" }, [
      _c(
        "ul",
        {
          staticClass: "nav nav-tabs card-header-tabs",
          attrs: { role: "tablist" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  "data-toggle": "tab",
                  href: "#form-tab-preview",
                  role: "tab",
                  "aria-controls": "form-tab-editor",
                  "aria-selected": "false"
                },
                on: { click: _vm.preview }
              },
              [_vm._v("预览")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item ml-auto" }, [
            _vm.toolbar
              ? _c("div", {
                  staticClass:
                    "editor-toolbar border-bottom d-flex align-items-center px-2"
                })
              : _vm._e()
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "tab-content card-body",
        attrs: { id: "form-tab-content" }
      },
      [
        _c(
          "div",
          {
            staticClass: "tab-pane fade show active",
            staticStyle: { "margin-left": "-0.35rem" },
            attrs: { id: "form-tab-editor" }
          },
          [
            _c("textarea", {
              attrs: { id: "editor", placeholder: _vm.placeholder }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab-pane fade",
            staticStyle: { "min-height": "100%" },
            attrs: { id: "form-tab-preview" }
          },
          [
            _c("markdown-body", {
              model: {
                value: _vm.html,
                callback: function($$v) {
                  _vm.html = $$v
                },
                expression: "html"
              }
            })
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link active",
          attrs: {
            "data-toggle": "tab",
            href: "#form-tab-editor",
            role: "tab",
            "aria-controls": "form-tab-editor",
            "aria-selected": "true"
          }
        },
        [_vm._v("编辑")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/markdown-body.vue?vue&type=template&id=161dffe0&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/markdown-body.vue?vue&type=template&id=161dffe0& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", {
    staticClass: "markdown-body",
    domProps: { innerHTML: _vm._s(_vm.replaceUserMention(_vm.value)) }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/editor/at-completer.js":
/*!***********************************************!*\
  !*** ./src/components/editor/at-completer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var $utils_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $utils/http */ "./src/utils/http/index.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // require('codemirror/addon/hint/show-hint.css')

__webpack_require__(/*! codemirror/addon/hint/show-hint */ "./node_modules/codemirror/addon/hint/show-hint.js");

__webpack_require__(/*! codemirror/addon/hint/html-hint */ "./node_modules/codemirror/addon/hint/html-hint.js");

var emojiCompleter = function emojiCompleter(cm) {
  var pageUsers = window['pageUsers'] || [];
  codemirror__WEBPACK_IMPORTED_MODULE_2___default.a.showHint(cm,
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var cur, token, start, end, line, currentWord, mapToList, users, filtered;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cur = cm.getCursor();
            token = cm.getTokenAt(cur);
            start = token.start;
            end = cur.ch;
            line = cur.line;
            currentWord = token.string;

            if (!(currentWord.indexOf('@') !== 0)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", false);

          case 8:
            mapToList = function mapToList() {
              var users = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              var results = [];
              pageUsers.concat(users).forEach(function (user) {
                if (!results.some(function (o) {
                  return o.text === user.username + ' ';
                })) {
                  results.push({
                    text: user.username + ' ',
                    render: function render(element) {
                      element.innerHTML = "<img style=\"width:1.2em;height: 1.2em;\" src=\"".concat(user.avatar, "\" alt=\"").concat(user.name, "\" async > ").concat(user.username);
                    }
                  });
                }
              });
              return results;
            };

            if (!(currentWord === '@' && pageUsers.length > 0)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              list: mapToList(),
              from: codemirror__WEBPACK_IMPORTED_MODULE_2___default.a.Pos(line, start + 1),
              to: codemirror__WEBPACK_IMPORTED_MODULE_2___default.a.Pos(line, end)
            });

          case 11:
            if (!(currentWord.length >= 2)) {
              _context.next = 20;
              break;
            }

            _context.next = 14;
            return $utils_http__WEBPACK_IMPORTED_MODULE_1__["default"].get('users?query=' + currentWord.substring(1));

          case 14:
            users = _context.sent;

            if (!(users.data.length >= 1)) {
              _context.next = 18;
              break;
            }

            filtered = mapToList(users.data);
            return _context.abrupt("return", {
              list: filtered,
              from: codemirror__WEBPACK_IMPORTED_MODULE_2___default.a.Pos(line, start + 1),
              to: codemirror__WEBPACK_IMPORTED_MODULE_2___default.a.Pos(line, end)
            });

          case 18:
            _context.next = 21;
            break;

          case 20:
            return _context.abrupt("return", false);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), {
    completeSingle: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (emojiCompleter);

/***/ }),

/***/ "./src/components/editor/attachment.js":
/*!*********************************************!*\
  !*** ./src/components/editor/attachment.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inline_attachment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline-attachment */ "./src/components/editor/inline-attachment.js");
/* harmony import */ var _inline_attachment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inline_attachment__WEBPACK_IMPORTED_MODULE_0__);

/* jslint newcap: true */

/* global inlineAttachment: false */

/**
 * CodeMirror version for inlineAttachment
 *
 * Call inlineAttachment.attach(editor) to attach to a codemirror instance
 */

(function () {
  'use strict';

  var codeMirrorEditor = function codeMirrorEditor(instance) {
    if (!instance.getWrapperElement) {
      throw 'Invalid CodeMirror object given';
    }

    this.codeMirror = instance;
  };

  codeMirrorEditor.prototype.getValue = function () {
    return this.codeMirror.getValue();
  };

  codeMirrorEditor.prototype.insertValue = function (val) {
    this.codeMirror.replaceSelection(val);
  };

  codeMirrorEditor.prototype.setValue = function (val) {
    var cursor = this.codeMirror.getCursor();
    this.codeMirror.setValue(val);
    this.codeMirror.setCursor(cursor);
  };
  /**
   * Attach InlineAttachment to CodeMirror
   *
   * @param {CodeMirror} codeMirror
   */


  codeMirrorEditor.attach = function (codeMirror, options) {
    options = options || {};
    var editor = new codeMirrorEditor(codeMirror);
    var inlineattach = new inlineAttachment(options, editor);
    var el = codeMirror.getWrapperElement();
    el.addEventListener('paste', function (e) {
      inlineattach.onPaste(e);
    }, false);
    codeMirror.setOption('onDragEvent', function (data, e) {
      if (e.type === 'drop') {
        e.stopPropagation();
        e.preventDefault();
        return inlineattach.onDrop(e);
      }
    });
  };

  var codeMirrorEditor4 = function codeMirrorEditor4(instance) {
    codeMirrorEditor.call(this, instance);
  };

  codeMirrorEditor4.attach = function (codeMirror, options) {
    options = options || {};
    var editor = new codeMirrorEditor(codeMirror);
    var inlineattach = new inlineAttachment(options, editor);
    var el = codeMirror.getWrapperElement();
    el.addEventListener('paste', function (e) {
      inlineattach.onPaste(e);
    }, false);
    codeMirror.on('drop', function (data, e) {
      if (inlineattach.onDrop(e)) {
        e.stopPropagation();
        e.preventDefault();
        return true;
      } else {
        return false;
      }
    });
  };

  inlineAttachment.editors.codemirror4 = codeMirrorEditor4;
})();

/***/ }),

/***/ "./src/components/editor/emoji-completer.js":
/*!**************************************************!*\
  !*** ./src/components/editor/emoji-completer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_0__);
 // require('codemirror/addon/hint/show-hint.css')

__webpack_require__(/*! codemirror/addon/hint/show-hint */ "./node_modules/codemirror/addon/hint/show-hint.js");

__webpack_require__(/*! codemirror/addon/hint/html-hint */ "./node_modules/codemirror/addon/hint/html-hint.js");

var emojiList = [];
var emojis = {
  '+1': '/emojis/1f44d.png',
  '-1': '/emojis/1f44e.png',
  '100': '/emojis/1f4af.png',
  '1234': '/emojis/1f522.png',
  '1st_place_medal': '/emojis/1f947.png',
  '2nd_place_medal': '/emojis/1f948.png',
  '3rd_place_medal': '/emojis/1f949.png',
  '8ball': '/emojis/1f3b1.png',
  'a': '/emojis/1f170.png',
  'ab': '/emojis/1f18e.png',
  'abc': '/emojis/1f524.png',
  'abcd': '/emojis/1f521.png',
  'accept': '/emojis/1f251.png',
  'aerial_tramway': '/emojis/1f6a1.png',
  'afghanistan': '/emojis/1f1e6-1f1eb.png',
  'airplane': '/emojis/2708.png',
  'aland_islands': '/emojis/1f1e6-1f1fd.png',
  'alarm_clock': '/emojis/23f0.png',
  'albania': '/emojis/1f1e6-1f1f1.png',
  'alembic': '/emojis/2697.png',
  'algeria': '/emojis/1f1e9-1f1ff.png',
  'alien': '/emojis/1f47d.png',
  'ambulance': '/emojis/1f691.png',
  'american_samoa': '/emojis/1f1e6-1f1f8.png',
  'amphora': '/emojis/1f3fa.png',
  'anchor': '/emojis/2693.png',
  'andorra': '/emojis/1f1e6-1f1e9.png',
  'angel': '/emojis/1f47c.png',
  'anger': '/emojis/1f4a2.png',
  'angola': '/emojis/1f1e6-1f1f4.png',
  'angry': '/emojis/1f620.png',
  'anguilla': '/emojis/1f1e6-1f1ee.png',
  'anguished': '/emojis/1f627.png',
  'ant': '/emojis/1f41c.png',
  'antarctica': '/emojis/1f1e6-1f1f6.png',
  'antigua_barbuda': '/emojis/1f1e6-1f1ec.png',
  'apple': '/emojis/1f34e.png',
  'aquarius': '/emojis/2652.png',
  'argentina': '/emojis/1f1e6-1f1f7.png',
  'aries': '/emojis/2648.png',
  'armenia': '/emojis/1f1e6-1f1f2.png',
  'arrow_backward': '/emojis/25c0.png',
  'arrow_double_down': '/emojis/23ec.png',
  'arrow_double_up': '/emojis/23eb.png',
  'arrow_down': '/emojis/2b07.png',
  'arrow_down_small': '/emojis/1f53d.png',
  'arrow_forward': '/emojis/25b6.png',
  'arrow_heading_down': '/emojis/2935.png',
  'arrow_heading_up': '/emojis/2934.png',
  'arrow_left': '/emojis/2b05.png',
  'arrow_lower_left': '/emojis/2199.png',
  'arrow_lower_right': '/emojis/2198.png',
  'arrow_right': '/emojis/27a1.png',
  'arrow_right_hook': '/emojis/21aa.png',
  'arrow_up': '/emojis/2b06.png',
  'arrow_up_down': '/emojis/2195.png',
  'arrow_up_small': '/emojis/1f53c.png',
  'arrow_upper_left': '/emojis/2196.png',
  'arrow_upper_right': '/emojis/2197.png',
  'arrows_clockwise': '/emojis/1f503.png',
  'arrows_counterclockwise': '/emojis/1f504.png',
  'art': '/emojis/1f3a8.png',
  'articulated_lorry': '/emojis/1f69b.png',
  'artificial_satellite': '/emojis/1f6f0.png',
  'aruba': '/emojis/1f1e6-1f1fc.png',
  'asterisk': '/emojis/002a-20e3.png',
  'astonished': '/emojis/1f632.png',
  'athletic_shoe': '/emojis/1f45f.png',
  'atm': '/emojis/1f3e7.png',
  'atom': '/emoji/atom.png',
  'atom_symbol': '/emojis/269b.png',
  'australia': '/emojis/1f1e6-1f1fa.png',
  'austria': '/emojis/1f1e6-1f1f9.png',
  'avocado': '/emojis/1f951.png',
  'azerbaijan': '/emojis/1f1e6-1f1ff.png',
  'b': '/emojis/1f171.png',
  'baby': '/emojis/1f476.png',
  'baby_bottle': '/emojis/1f37c.png',
  'baby_chick': '/emojis/1f424.png',
  'baby_symbol': '/emojis/1f6bc.png',
  'back': '/emojis/1f519.png',
  'bacon': '/emojis/1f953.png',
  'badminton': '/emojis/1f3f8.png',
  'baggage_claim': '/emojis/1f6c4.png',
  'baguette_bread': '/emojis/1f956.png',
  'bahamas': '/emojis/1f1e7-1f1f8.png',
  'bahrain': '/emojis/1f1e7-1f1ed.png',
  'balance_scale': '/emojis/2696.png',
  'balloon': '/emojis/1f388.png',
  'ballot_box': '/emojis/1f5f3.png',
  'ballot_box_with_check': '/emojis/2611.png',
  'bamboo': '/emojis/1f38d.png',
  'banana': '/emojis/1f34c.png',
  'bangbang': '/emojis/203c.png',
  'bangladesh': '/emojis/1f1e7-1f1e9.png',
  'bank': '/emojis/1f3e6.png',
  'bar_chart': '/emojis/1f4ca.png',
  'barbados': '/emojis/1f1e7-1f1e7.png',
  'barber': '/emojis/1f488.png',
  'baseball': '/emojis/26be.png',
  'basecamp': '/emoji/basecamp.png',
  'basecampy': '/emoji/basecampy.png',
  'basketball': '/emojis/1f3c0.png',
  'basketball_man': '/emojis/26f9.png',
  'basketball_woman': '/emojis/26f9-2640.png',
  'bat': '/emojis/1f987.png',
  'bath': '/emojis/1f6c0.png',
  'bathtub': '/emojis/1f6c1.png',
  'battery': '/emojis/1f50b.png',
  'beach_umbrella': '/emojis/1f3d6.png',
  'bear': '/emojis/1f43b.png',
  'bed': '/emojis/1f6cf.png',
  'bee': '/emojis/1f41d.png',
  'beer': '/emojis/1f37a.png',
  'beers': '/emojis/1f37b.png',
  'beetle': '/emojis/1f41e.png',
  'beginner': '/emojis/1f530.png',
  'belarus': '/emojis/1f1e7-1f1fe.png',
  'belgium': '/emojis/1f1e7-1f1ea.png',
  'belize': '/emojis/1f1e7-1f1ff.png',
  'bell': '/emojis/1f514.png',
  'bellhop_bell': '/emojis/1f6ce.png',
  'benin': '/emojis/1f1e7-1f1ef.png',
  'bento': '/emojis/1f371.png',
  'bermuda': '/emojis/1f1e7-1f1f2.png',
  'bhutan': '/emojis/1f1e7-1f1f9.png',
  'bicyclist': '/emojis/1f6b4.png',
  'bike': '/emojis/1f6b2.png',
  'biking_man': '/emojis/1f6b4.png',
  'biking_woman': '/emojis/1f6b4-2640.png',
  'bikini': '/emojis/1f459.png',
  'biohazard': '/emojis/2623.png',
  'bird': '/emojis/1f426.png',
  'birthday': '/emojis/1f382.png',
  'black_circle': '/emojis/26ab.png',
  'black_flag': '/emojis/1f3f4.png',
  'black_heart': '/emojis/1f5a4.png',
  'black_joker': '/emojis/1f0cf.png',
  'black_large_square': '/emojis/2b1b.png',
  'black_medium_small_square': '/emojis/25fe.png',
  'black_medium_square': '/emojis/25fc.png',
  'black_nib': '/emojis/2712.png',
  'black_small_square': '/emojis/25aa.png',
  'black_square_button': '/emojis/1f532.png',
  'blonde_man': '/emojis/1f471.png',
  'blonde_woman': '/emojis/1f471-2640.png',
  'blossom': '/emojis/1f33c.png',
  'blowfish': '/emojis/1f421.png',
  'blue_book': '/emojis/1f4d8.png',
  'blue_car': '/emojis/1f699.png',
  'blue_heart': '/emojis/1f499.png',
  'blush': '/emojis/1f60a.png',
  'boar': '/emojis/1f417.png',
  'boat': '/emojis/26f5.png',
  'bolivia': '/emojis/1f1e7-1f1f4.png',
  'bomb': '/emojis/1f4a3.png',
  'book': '/emojis/1f4d6.png',
  'bookmark': '/emojis/1f516.png',
  'bookmark_tabs': '/emojis/1f4d1.png',
  'books': '/emojis/1f4da.png',
  'boom': '/emojis/1f4a5.png',
  'boot': '/emojis/1f462.png',
  'bosnia_herzegovina': '/emojis/1f1e7-1f1e6.png',
  'botswana': '/emojis/1f1e7-1f1fc.png',
  'bouquet': '/emojis/1f490.png',
  'bow': '/emojis/1f647.png',
  'bow_and_arrow': '/emojis/1f3f9.png',
  'bowing_man': '/emojis/1f647.png',
  'bowing_woman': '/emojis/1f647-2640.png',
  'bowling': '/emojis/1f3b3.png',
  'bowtie': '/emoji/bowtie.png',
  'boxing_glove': '/emojis/1f94a.png',
  'boy': '/emojis/1f466.png',
  'brazil': '/emojis/1f1e7-1f1f7.png',
  'bread': '/emojis/1f35e.png',
  'bride_with_veil': '/emojis/1f470.png',
  'bridge_at_night': '/emojis/1f309.png',
  'briefcase': '/emojis/1f4bc.png',
  'british_indian_ocean_territory': '/emojis/1f1ee-1f1f4.png',
  'british_virgin_islands': '/emojis/1f1fb-1f1ec.png',
  'broken_heart': '/emojis/1f494.png',
  'brunei': '/emojis/1f1e7-1f1f3.png',
  'bug': '/emojis/1f41b.png',
  'building_construction': '/emojis/1f3d7.png',
  'bulb': '/emojis/1f4a1.png',
  'bulgaria': '/emojis/1f1e7-1f1ec.png',
  'bullettrain_front': '/emojis/1f685.png',
  'bullettrain_side': '/emojis/1f684.png',
  'burkina_faso': '/emojis/1f1e7-1f1eb.png',
  'burrito': '/emojis/1f32f.png',
  'burundi': '/emojis/1f1e7-1f1ee.png',
  'bus': '/emojis/1f68c.png',
  'business_suit_levitating': '/emojis/1f574.png',
  'busstop': '/emojis/1f68f.png',
  'bust_in_silhouette': '/emojis/1f464.png',
  'busts_in_silhouette': '/emojis/1f465.png',
  'butterfly': '/emojis/1f98b.png',
  'cactus': '/emojis/1f335.png',
  'cake': '/emojis/1f370.png',
  'calendar': '/emojis/1f4c6.png',
  'call_me_hand': '/emojis/1f919.png',
  'calling': '/emojis/1f4f2.png',
  'cambodia': '/emojis/1f1f0-1f1ed.png',
  'camel': '/emojis/1f42b.png',
  'camera': '/emojis/1f4f7.png',
  'camera_flash': '/emojis/1f4f8.png',
  'cameroon': '/emojis/1f1e8-1f1f2.png',
  'camping': '/emojis/1f3d5.png',
  'canada': '/emojis/1f1e8-1f1e6.png',
  'canary_islands': '/emojis/1f1ee-1f1e8.png',
  'cancer': '/emojis/264b.png',
  'candle': '/emojis/1f56f.png',
  'candy': '/emojis/1f36c.png',
  'canoe': '/emojis/1f6f6.png',
  'cape_verde': '/emojis/1f1e8-1f1fb.png',
  'capital_abcd': '/emojis/1f520.png',
  'capricorn': '/emojis/2651.png',
  'car': '/emojis/1f697.png',
  'card_file_box': '/emojis/1f5c3.png',
  'card_index': '/emojis/1f4c7.png',
  'card_index_dividers': '/emojis/1f5c2.png',
  'caribbean_netherlands': '/emojis/1f1e7-1f1f6.png',
  'carousel_horse': '/emojis/1f3a0.png',
  'carrot': '/emojis/1f955.png',
  'cat': '/emojis/1f431.png',
  'cat2': '/emojis/1f408.png',
  'cayman_islands': '/emojis/1f1f0-1f1fe.png',
  'cd': '/emojis/1f4bf.png',
  'central_african_republic': '/emojis/1f1e8-1f1eb.png',
  'chad': '/emojis/1f1f9-1f1e9.png',
  'chains': '/emojis/26d3.png',
  'champagne': '/emojis/1f37e.png',
  'chart': '/emojis/1f4b9.png',
  'chart_with_downwards_trend': '/emojis/1f4c9.png',
  'chart_with_upwards_trend': '/emojis/1f4c8.png',
  'checkered_flag': '/emojis/1f3c1.png',
  'cheese': '/emojis/1f9c0.png',
  'cherries': '/emojis/1f352.png',
  'cherry_blossom': '/emojis/1f338.png',
  'chestnut': '/emojis/1f330.png',
  'chicken': '/emojis/1f414.png',
  'children_crossing': '/emojis/1f6b8.png',
  'chile': '/emojis/1f1e8-1f1f1.png',
  'chipmunk': '/emojis/1f43f.png',
  'chocolate_bar': '/emojis/1f36b.png',
  'christmas_island': '/emojis/1f1e8-1f1fd.png',
  'christmas_tree': '/emojis/1f384.png',
  'church': '/emojis/26ea.png',
  'cinema': '/emojis/1f3a6.png',
  'circus_tent': '/emojis/1f3aa.png',
  'city_sunrise': '/emojis/1f307.png',
  'city_sunset': '/emojis/1f306.png',
  'cityscape': '/emojis/1f3d9.png',
  'cl': '/emojis/1f191.png',
  'clamp': '/emojis/1f5dc.png',
  'clap': '/emojis/1f44f.png',
  'clapper': '/emojis/1f3ac.png',
  'classical_building': '/emojis/1f3db.png',
  'clinking_glasses': '/emojis/1f942.png',
  'clipboard': '/emojis/1f4cb.png',
  'clock1': '/emojis/1f550.png',
  'clock10': '/emojis/1f559.png',
  'clock1030': '/emojis/1f565.png',
  'clock11': '/emojis/1f55a.png',
  'clock1130': '/emojis/1f566.png',
  'clock12': '/emojis/1f55b.png',
  'clock1230': '/emojis/1f567.png',
  'clock130': '/emojis/1f55c.png',
  'clock2': '/emojis/1f551.png',
  'clock230': '/emojis/1f55d.png',
  'clock3': '/emojis/1f552.png',
  'clock330': '/emojis/1f55e.png',
  'clock4': '/emojis/1f553.png',
  'clock430': '/emojis/1f55f.png',
  'clock5': '/emojis/1f554.png',
  'clock530': '/emojis/1f560.png',
  'clock6': '/emojis/1f555.png',
  'clock630': '/emojis/1f561.png',
  'clock7': '/emojis/1f556.png',
  'clock730': '/emojis/1f562.png',
  'clock8': '/emojis/1f557.png',
  'clock830': '/emojis/1f563.png',
  'clock9': '/emojis/1f558.png',
  'clock930': '/emojis/1f564.png',
  'closed_book': '/emojis/1f4d5.png',
  'closed_lock_with_key': '/emojis/1f510.png',
  'closed_umbrella': '/emojis/1f302.png',
  'cloud': '/emojis/2601.png',
  'cloud_with_lightning': '/emojis/1f329.png',
  'cloud_with_lightning_and_rain': '/emojis/26c8.png',
  'cloud_with_rain': '/emojis/1f327.png',
  'cloud_with_snow': '/emojis/1f328.png',
  'clown_face': '/emojis/1f921.png',
  'clubs': '/emojis/2663.png',
  'cn': '/emojis/1f1e8-1f1f3.png',
  'cocktail': '/emojis/1f378.png',
  'cocos_islands': '/emojis/1f1e8-1f1e8.png',
  'coffee': '/emojis/2615.png',
  'coffin': '/emojis/26b0.png',
  'cold_sweat': '/emojis/1f630.png',
  'collision': '/emojis/1f4a5.png',
  'colombia': '/emojis/1f1e8-1f1f4.png',
  'comet': '/emojis/2604.png',
  'comoros': '/emojis/1f1f0-1f1f2.png',
  'computer': '/emojis/1f4bb.png',
  'computer_mouse': '/emojis/1f5b1.png',
  'confetti_ball': '/emojis/1f38a.png',
  'confounded': '/emojis/1f616.png',
  'confused': '/emojis/1f615.png',
  'congo_brazzaville': '/emojis/1f1e8-1f1ec.png',
  'congo_kinshasa': '/emojis/1f1e8-1f1e9.png',
  'congratulations': '/emojis/3297.png',
  'construction': '/emojis/1f6a7.png',
  'construction_worker': '/emojis/1f477.png',
  'construction_worker_man': '/emojis/1f477.png',
  'construction_worker_woman': '/emojis/1f477-2640.png',
  'control_knobs': '/emojis/1f39b.png',
  'convenience_store': '/emojis/1f3ea.png',
  'cook_islands': '/emojis/1f1e8-1f1f0.png',
  'cookie': '/emojis/1f36a.png',
  'cool': '/emojis/1f192.png',
  'cop': '/emojis/1f46e.png',
  'copyright': '/emojis/00a9.png',
  'corn': '/emojis/1f33d.png',
  'costa_rica': '/emojis/1f1e8-1f1f7.png',
  'cote_divoire': '/emojis/1f1e8-1f1ee.png',
  'couch_and_lamp': '/emojis/1f6cb.png',
  'couple': '/emojis/1f46b.png',
  'couple_with_heart': '/emojis/1f491.png',
  'couple_with_heart_man_man': '/emojis/1f468-2764-1f468.png',
  'couple_with_heart_woman_man': '/emojis/1f491.png',
  'couple_with_heart_woman_woman': '/emojis/1f469-2764-1f469.png',
  'couplekiss_man_man': '/emojis/1f468-2764-1f48b-1f468.png',
  'couplekiss_man_woman': '/emojis/1f48f.png',
  'couplekiss_woman_woman': '/emojis/1f469-2764-1f48b-1f469.png',
  'cow': '/emojis/1f42e.png',
  'cow2': '/emojis/1f404.png',
  'cowboy_hat_face': '/emojis/1f920.png',
  'crab': '/emojis/1f980.png',
  'crayon': '/emojis/1f58d.png',
  'credit_card': '/emojis/1f4b3.png',
  'crescent_moon': '/emojis/1f319.png',
  'cricket': '/emojis/1f3cf.png',
  'croatia': '/emojis/1f1ed-1f1f7.png',
  'crocodile': '/emojis/1f40a.png',
  'croissant': '/emojis/1f950.png',
  'crossed_fingers': '/emojis/1f91e.png',
  'crossed_flags': '/emojis/1f38c.png',
  'crossed_swords': '/emojis/2694.png',
  'crown': '/emojis/1f451.png',
  'cry': '/emojis/1f622.png',
  'crying_cat_face': '/emojis/1f63f.png',
  'crystal_ball': '/emojis/1f52e.png',
  'cuba': '/emojis/1f1e8-1f1fa.png',
  'cucumber': '/emojis/1f952.png',
  'cupid': '/emojis/1f498.png',
  'curacao': '/emojis/1f1e8-1f1fc.png',
  'curly_loop': '/emojis/27b0.png',
  'currency_exchange': '/emojis/1f4b1.png',
  'curry': '/emojis/1f35b.png',
  'custard': '/emojis/1f36e.png',
  'customs': '/emojis/1f6c3.png',
  'cyclone': '/emojis/1f300.png',
  'cyprus': '/emojis/1f1e8-1f1fe.png',
  'czech_republic': '/emojis/1f1e8-1f1ff.png',
  'dagger': '/emojis/1f5e1.png',
  'dancer': '/emojis/1f483.png',
  'dancers': '/emojis/1f46f.png',
  'dancing_men': '/emojis/1f46f-2642.png',
  'dancing_women': '/emojis/1f46f.png',
  'dango': '/emojis/1f361.png',
  'dark_sunglasses': '/emojis/1f576.png',
  'dart': '/emojis/1f3af.png',
  'dash': '/emojis/1f4a8.png',
  'date': '/emojis/1f4c5.png',
  'de': '/emojis/1f1e9-1f1ea.png',
  'deciduous_tree': '/emojis/1f333.png',
  'deer': '/emojis/1f98c.png',
  'denmark': '/emojis/1f1e9-1f1f0.png',
  'department_store': '/emojis/1f3ec.png',
  'derelict_house': '/emojis/1f3da.png',
  'desert': '/emojis/1f3dc.png',
  'desert_island': '/emojis/1f3dd.png',
  'desktop_computer': '/emojis/1f5a5.png',
  'detective': '/emojis/1f575.png',
  'diamond_shape_with_a_dot_inside': '/emojis/1f4a0.png',
  'diamonds': '/emojis/2666.png',
  'disappointed': '/emojis/1f61e.png',
  'disappointed_relieved': '/emojis/1f625.png',
  'dizzy': '/emojis/1f4ab.png',
  'dizzy_face': '/emojis/1f635.png',
  'djibouti': '/emojis/1f1e9-1f1ef.png',
  'do_not_litter': '/emojis/1f6af.png',
  'dog': '/emojis/1f436.png',
  'dog2': '/emojis/1f415.png',
  'dollar': '/emojis/1f4b5.png',
  'dolls': '/emojis/1f38e.png',
  'dolphin': '/emojis/1f42c.png',
  'dominica': '/emojis/1f1e9-1f1f2.png',
  'dominican_republic': '/emojis/1f1e9-1f1f4.png',
  'door': '/emojis/1f6aa.png',
  'doughnut': '/emojis/1f369.png',
  'dove': '/emojis/1f54a.png',
  'dragon': '/emojis/1f409.png',
  'dragon_face': '/emojis/1f432.png',
  'dress': '/emojis/1f457.png',
  'dromedary_camel': '/emojis/1f42a.png',
  'drooling_face': '/emojis/1f924.png',
  'droplet': '/emojis/1f4a7.png',
  'drum': '/emojis/1f941.png',
  'duck': '/emojis/1f986.png',
  'dvd': '/emojis/1f4c0.png',
  'e-mail': '/emojis/1f4e7.png',
  'eagle': '/emojis/1f985.png',
  'ear': '/emojis/1f442.png',
  'ear_of_rice': '/emojis/1f33e.png',
  'earth_africa': '/emojis/1f30d.png',
  'earth_americas': '/emojis/1f30e.png',
  'earth_asia': '/emojis/1f30f.png',
  'ecuador': '/emojis/1f1ea-1f1e8.png',
  'egg': '/emojis/1f95a.png',
  'eggplant': '/emojis/1f346.png',
  'egypt': '/emojis/1f1ea-1f1ec.png',
  'eight': '/emojis/0038-20e3.png',
  'eight_pointed_black_star': '/emojis/2734.png',
  'eight_spoked_asterisk': '/emojis/2733.png',
  'el_salvador': '/emojis/1f1f8-1f1fb.png',
  'electric_plug': '/emojis/1f50c.png',
  'electron': '/emoji/electron.png',
  'elephant': '/emojis/1f418.png',
  'email': '/emojis/2709.png',
  'end': '/emojis/1f51a.png',
  'envelope': '/emojis/2709.png',
  'envelope_with_arrow': '/emojis/1f4e9.png',
  'equatorial_guinea': '/emojis/1f1ec-1f1f6.png',
  'eritrea': '/emojis/1f1ea-1f1f7.png',
  'es': '/emojis/1f1ea-1f1f8.png',
  'estonia': '/emojis/1f1ea-1f1ea.png',
  'ethiopia': '/emojis/1f1ea-1f1f9.png',
  'eu': '/emojis/1f1ea-1f1fa.png',
  'euro': '/emojis/1f4b6.png',
  'european_castle': '/emojis/1f3f0.png',
  'european_post_office': '/emojis/1f3e4.png',
  'european_union': '/emojis/1f1ea-1f1fa.png',
  'evergreen_tree': '/emojis/1f332.png',
  'exclamation': '/emojis/2757.png',
  'expressionless': '/emojis/1f611.png',
  'eye': '/emojis/1f441.png',
  'eye_speech_bubble': '/emojis/1f441-1f5e8.png',
  'eyeglasses': '/emojis/1f453.png',
  'eyes': '/emojis/1f440.png',
  'face_with_head_bandage': '/emojis/1f915.png',
  'face_with_thermometer': '/emojis/1f912.png',
  'facepunch': '/emojis/1f44a.png',
  'factory': '/emojis/1f3ed.png',
  'falkland_islands': '/emojis/1f1eb-1f1f0.png',
  'fallen_leaf': '/emojis/1f342.png',
  'family': '/emojis/1f46a.png',
  'family_man_boy': '/emojis/1f468-1f466.png',
  'family_man_boy_boy': '/emojis/1f468-1f466-1f466.png',
  'family_man_girl': '/emojis/1f468-1f467.png',
  'family_man_girl_boy': '/emojis/1f468-1f467-1f466.png',
  'family_man_girl_girl': '/emojis/1f468-1f467-1f467.png',
  'family_man_man_boy': '/emojis/1f468-1f468-1f466.png',
  'family_man_man_boy_boy': '/emojis/1f468-1f468-1f466-1f466.png',
  'family_man_man_girl': '/emojis/1f468-1f468-1f467.png',
  'family_man_man_girl_boy': '/emojis/1f468-1f468-1f467-1f466.png',
  'family_man_man_girl_girl': '/emojis/1f468-1f468-1f467-1f467.png',
  'family_man_woman_boy': '/emojis/1f46a.png',
  'family_man_woman_boy_boy': '/emojis/1f468-1f469-1f466-1f466.png',
  'family_man_woman_girl': '/emojis/1f468-1f469-1f467.png',
  'family_man_woman_girl_boy': '/emojis/1f468-1f469-1f467-1f466.png',
  'family_man_woman_girl_girl': '/emojis/1f468-1f469-1f467-1f467.png',
  'family_woman_boy': '/emojis/1f469-1f466.png',
  'family_woman_boy_boy': '/emojis/1f469-1f466-1f466.png',
  'family_woman_girl': '/emojis/1f469-1f467.png',
  'family_woman_girl_boy': '/emojis/1f469-1f467-1f466.png',
  'family_woman_girl_girl': '/emojis/1f469-1f467-1f467.png',
  'family_woman_woman_boy': '/emojis/1f469-1f469-1f466.png',
  'family_woman_woman_boy_boy': '/emojis/1f469-1f469-1f466-1f466.png',
  'family_woman_woman_girl': '/emojis/1f469-1f469-1f467.png',
  'family_woman_woman_girl_boy': '/emojis/1f469-1f469-1f467-1f466.png',
  'family_woman_woman_girl_girl': '/emojis/1f469-1f469-1f467-1f467.png',
  'faroe_islands': '/emojis/1f1eb-1f1f4.png',
  'fast_forward': '/emojis/23e9.png',
  'fax': '/emojis/1f4e0.png',
  'fearful': '/emojis/1f628.png',
  'feelsgood': '/emoji/feelsgood.png',
  'feet': '/emojis/1f43e.png',
  'female_detective': '/emojis/1f575-2640.png',
  'ferris_wheel': '/emojis/1f3a1.png',
  'ferry': '/emojis/26f4.png',
  'field_hockey': '/emojis/1f3d1.png',
  'fiji': '/emojis/1f1eb-1f1ef.png',
  'file_cabinet': '/emojis/1f5c4.png',
  'file_folder': '/emojis/1f4c1.png',
  'film_projector': '/emojis/1f4fd.png',
  'film_strip': '/emojis/1f39e.png',
  'finland': '/emojis/1f1eb-1f1ee.png',
  'finnadie': '/emoji/finnadie.png',
  'fire': '/emojis/1f525.png',
  'fire_engine': '/emojis/1f692.png',
  'fireworks': '/emojis/1f386.png',
  'first_quarter_moon': '/emojis/1f313.png',
  'first_quarter_moon_with_face': '/emojis/1f31b.png',
  'fish': '/emojis/1f41f.png',
  'fish_cake': '/emojis/1f365.png',
  'fishing_pole_and_fish': '/emojis/1f3a3.png',
  'fist': '/emojis/270a.png',
  'fist_left': '/emojis/1f91b.png',
  'fist_oncoming': '/emojis/1f44a.png',
  'fist_raised': '/emojis/270a.png',
  'fist_right': '/emojis/1f91c.png',
  'five': '/emojis/0035-20e3.png',
  'flags': '/emojis/1f38f.png',
  'flashlight': '/emojis/1f526.png',
  'fleur_de_lis': '/emojis/269c.png',
  'flight_arrival': '/emojis/1f6ec.png',
  'flight_departure': '/emojis/1f6eb.png',
  'flipper': '/emojis/1f42c.png',
  'floppy_disk': '/emojis/1f4be.png',
  'flower_playing_cards': '/emojis/1f3b4.png',
  'flushed': '/emojis/1f633.png',
  'fog': '/emojis/1f32b.png',
  'foggy': '/emojis/1f301.png',
  'football': '/emojis/1f3c8.png',
  'footprints': '/emojis/1f463.png',
  'fork_and_knife': '/emojis/1f374.png',
  'fountain': '/emojis/26f2.png',
  'fountain_pen': '/emojis/1f58b.png',
  'four': '/emojis/0034-20e3.png',
  'four_leaf_clover': '/emojis/1f340.png',
  'fox_face': '/emojis/1f98a.png',
  'fr': '/emojis/1f1eb-1f1f7.png',
  'framed_picture': '/emojis/1f5bc.png',
  'free': '/emojis/1f193.png',
  'french_guiana': '/emojis/1f1ec-1f1eb.png',
  'french_polynesia': '/emojis/1f1f5-1f1eb.png',
  'french_southern_territories': '/emojis/1f1f9-1f1eb.png',
  'fried_egg': '/emojis/1f373.png',
  'fried_shrimp': '/emojis/1f364.png',
  'fries': '/emojis/1f35f.png',
  'frog': '/emojis/1f438.png',
  'frowning': '/emojis/1f626.png',
  'frowning_face': '/emojis/2639.png',
  'frowning_man': '/emojis/1f64d-2642.png',
  'frowning_woman': '/emojis/1f64d.png',
  'fu': '/emojis/1f595.png',
  'fuelpump': '/emojis/26fd.png',
  'full_moon': '/emojis/1f315.png',
  'full_moon_with_face': '/emojis/1f31d.png',
  'funeral_urn': '/emojis/26b1.png',
  'gabon': '/emojis/1f1ec-1f1e6.png',
  'gambia': '/emojis/1f1ec-1f1f2.png',
  'game_die': '/emojis/1f3b2.png',
  'gb': '/emojis/1f1ec-1f1e7.png',
  'gear': '/emojis/2699.png',
  'gem': '/emojis/1f48e.png',
  'gemini': '/emojis/264a.png',
  'georgia': '/emojis/1f1ec-1f1ea.png',
  'ghana': '/emojis/1f1ec-1f1ed.png',
  'ghost': '/emojis/1f47b.png',
  'gibraltar': '/emojis/1f1ec-1f1ee.png',
  'gift': '/emojis/1f381.png',
  'gift_heart': '/emojis/1f49d.png',
  'girl': '/emojis/1f467.png',
  'globe_with_meridians': '/emojis/1f310.png',
  'goal_net': '/emojis/1f945.png',
  'goat': '/emojis/1f410.png',
  'goberserk': '/emoji/goberserk.png',
  'godmode': '/emoji/godmode.png',
  'golf': '/emojis/26f3.png',
  'golfing_man': '/emojis/1f3cc.png',
  'golfing_woman': '/emojis/1f3cc-2640.png',
  'gorilla': '/emojis/1f98d.png',
  'grapes': '/emojis/1f347.png',
  'greece': '/emojis/1f1ec-1f1f7.png',
  'green_apple': '/emojis/1f34f.png',
  'green_book': '/emojis/1f4d7.png',
  'green_heart': '/emojis/1f49a.png',
  'green_salad': '/emojis/1f957.png',
  'greenland': '/emojis/1f1ec-1f1f1.png',
  'grenada': '/emojis/1f1ec-1f1e9.png',
  'grey_exclamation': '/emojis/2755.png',
  'grey_question': '/emojis/2754.png',
  'grimacing': '/emojis/1f62c.png',
  'grin': '/emojis/1f601.png',
  'grinning': '/emojis/1f600.png',
  'guadeloupe': '/emojis/1f1ec-1f1f5.png',
  'guam': '/emojis/1f1ec-1f1fa.png',
  'guardsman': '/emojis/1f482.png',
  'guardswoman': '/emojis/1f482-2640.png',
  'guatemala': '/emojis/1f1ec-1f1f9.png',
  'guernsey': '/emojis/1f1ec-1f1ec.png',
  'guinea': '/emojis/1f1ec-1f1f3.png',
  'guinea_bissau': '/emojis/1f1ec-1f1fc.png',
  'guitar': '/emojis/1f3b8.png',
  'gun': '/emojis/1f52b.png',
  'guyana': '/emojis/1f1ec-1f1fe.png',
  'haircut': '/emojis/1f487.png',
  'haircut_man': '/emojis/1f487-2642.png',
  'haircut_woman': '/emojis/1f487.png',
  'haiti': '/emojis/1f1ed-1f1f9.png',
  'hamburger': '/emojis/1f354.png',
  'hammer': '/emojis/1f528.png',
  'hammer_and_pick': '/emojis/2692.png',
  'hammer_and_wrench': '/emojis/1f6e0.png',
  'hamster': '/emojis/1f439.png',
  'hand': '/emojis/270b.png',
  'handbag': '/emojis/1f45c.png',
  'handshake': '/emojis/1f91d.png',
  'hankey': '/emojis/1f4a9.png',
  'hash': '/emojis/0023-20e3.png',
  'hatched_chick': '/emojis/1f425.png',
  'hatching_chick': '/emojis/1f423.png',
  'headphones': '/emojis/1f3a7.png',
  'hear_no_evil': '/emojis/1f649.png',
  'heart': '/emojis/2764.png',
  'heart_decoration': '/emojis/1f49f.png',
  'heart_eyes': '/emojis/1f60d.png',
  'heart_eyes_cat': '/emojis/1f63b.png',
  'heartbeat': '/emojis/1f493.png',
  'heartpulse': '/emojis/1f497.png',
  'hearts': '/emojis/2665.png',
  'heavy_check_mark': '/emojis/2714.png',
  'heavy_division_sign': '/emojis/2797.png',
  'heavy_dollar_sign': '/emojis/1f4b2.png',
  'heavy_exclamation_mark': '/emojis/2757.png',
  'heavy_heart_exclamation': '/emojis/2763.png',
  'heavy_minus_sign': '/emojis/2796.png',
  'heavy_multiplication_x': '/emojis/2716.png',
  'heavy_plus_sign': '/emojis/2795.png',
  'helicopter': '/emojis/1f681.png',
  'herb': '/emojis/1f33f.png',
  'hibiscus': '/emojis/1f33a.png',
  'high_brightness': '/emojis/1f506.png',
  'high_heel': '/emojis/1f460.png',
  'hocho': '/emojis/1f52a.png',
  'hole': '/emojis/1f573.png',
  'honduras': '/emojis/1f1ed-1f1f3.png',
  'honey_pot': '/emojis/1f36f.png',
  'honeybee': '/emojis/1f41d.png',
  'hong_kong': '/emojis/1f1ed-1f1f0.png',
  'horse': '/emojis/1f434.png',
  'horse_racing': '/emojis/1f3c7.png',
  'hospital': '/emojis/1f3e5.png',
  'hot_pepper': '/emojis/1f336.png',
  'hotdog': '/emojis/1f32d.png',
  'hotel': '/emojis/1f3e8.png',
  'hotsprings': '/emojis/2668.png',
  'hourglass': '/emojis/231b.png',
  'hourglass_flowing_sand': '/emojis/23f3.png',
  'house': '/emojis/1f3e0.png',
  'house_with_garden': '/emojis/1f3e1.png',
  'houses': '/emojis/1f3d8.png',
  'hugs': '/emojis/1f917.png',
  'hungary': '/emojis/1f1ed-1f1fa.png',
  'hurtrealbad': '/emoji/hurtrealbad.png',
  'hushed': '/emojis/1f62f.png',
  'ice_cream': '/emojis/1f368.png',
  'ice_hockey': '/emojis/1f3d2.png',
  'ice_skate': '/emojis/26f8.png',
  'icecream': '/emojis/1f366.png',
  'iceland': '/emojis/1f1ee-1f1f8.png',
  'id': '/emojis/1f194.png',
  'ideograph_advantage': '/emojis/1f250.png',
  'imp': '/emojis/1f47f.png',
  'inbox_tray': '/emojis/1f4e5.png',
  'incoming_envelope': '/emojis/1f4e8.png',
  'india': '/emojis/1f1ee-1f1f3.png',
  'indonesia': '/emojis/1f1ee-1f1e9.png',
  'information_desk_person': '/emojis/1f481.png',
  'information_source': '/emojis/2139.png',
  'innocent': '/emojis/1f607.png',
  'interrobang': '/emojis/2049.png',
  'iphone': '/emojis/1f4f1.png',
  'iran': '/emojis/1f1ee-1f1f7.png',
  'iraq': '/emojis/1f1ee-1f1f6.png',
  'ireland': '/emojis/1f1ee-1f1ea.png',
  'isle_of_man': '/emojis/1f1ee-1f1f2.png',
  'israel': '/emojis/1f1ee-1f1f1.png',
  'it': '/emojis/1f1ee-1f1f9.png',
  'izakaya_lantern': '/emojis/1f3ee.png',
  'jack_o_lantern': '/emojis/1f383.png',
  'jamaica': '/emojis/1f1ef-1f1f2.png',
  'japan': '/emojis/1f5fe.png',
  'japanese_castle': '/emojis/1f3ef.png',
  'japanese_goblin': '/emojis/1f47a.png',
  'japanese_ogre': '/emojis/1f479.png',
  'jeans': '/emojis/1f456.png',
  'jersey': '/emojis/1f1ef-1f1ea.png',
  'jordan': '/emojis/1f1ef-1f1f4.png',
  'joy': '/emojis/1f602.png',
  'joy_cat': '/emojis/1f639.png',
  'joystick': '/emojis/1f579.png',
  'jp': '/emojis/1f1ef-1f1f5.png',
  'kaaba': '/emojis/1f54b.png',
  'kazakhstan': '/emojis/1f1f0-1f1ff.png',
  'kenya': '/emojis/1f1f0-1f1ea.png',
  'key': '/emojis/1f511.png',
  'keyboard': '/emojis/2328.png',
  'keycap_ten': '/emojis/1f51f.png',
  'kick_scooter': '/emojis/1f6f4.png',
  'kimono': '/emojis/1f458.png',
  'kiribati': '/emojis/1f1f0-1f1ee.png',
  'kiss': '/emojis/1f48b.png',
  'kissing': '/emojis/1f617.png',
  'kissing_cat': '/emojis/1f63d.png',
  'kissing_closed_eyes': '/emojis/1f61a.png',
  'kissing_heart': '/emojis/1f618.png',
  'kissing_smiling_eyes': '/emojis/1f619.png',
  'kiwi_fruit': '/emojis/1f95d.png',
  'knife': '/emojis/1f52a.png',
  'koala': '/emojis/1f428.png',
  'koko': '/emojis/1f201.png',
  'kosovo': '/emojis/1f1fd-1f1f0.png',
  'kr': '/emojis/1f1f0-1f1f7.png',
  'kuwait': '/emojis/1f1f0-1f1fc.png',
  'kyrgyzstan': '/emojis/1f1f0-1f1ec.png',
  'label': '/emojis/1f3f7.png',
  'lantern': '/emojis/1f3ee.png',
  'laos': '/emojis/1f1f1-1f1e6.png',
  'large_blue_circle': '/emojis/1f535.png',
  'large_blue_diamond': '/emojis/1f537.png',
  'large_orange_diamond': '/emojis/1f536.png',
  'last_quarter_moon': '/emojis/1f317.png',
  'last_quarter_moon_with_face': '/emojis/1f31c.png',
  'latin_cross': '/emojis/271d.png',
  'latvia': '/emojis/1f1f1-1f1fb.png',
  'laughing': '/emojis/1f606.png',
  'leaves': '/emojis/1f343.png',
  'lebanon': '/emojis/1f1f1-1f1e7.png',
  'ledger': '/emojis/1f4d2.png',
  'left_luggage': '/emojis/1f6c5.png',
  'left_right_arrow': '/emojis/2194.png',
  'leftwards_arrow_with_hook': '/emojis/21a9.png',
  'lemon': '/emojis/1f34b.png',
  'leo': '/emojis/264c.png',
  'leopard': '/emojis/1f406.png',
  'lesotho': '/emojis/1f1f1-1f1f8.png',
  'level_slider': '/emojis/1f39a.png',
  'liberia': '/emojis/1f1f1-1f1f7.png',
  'libra': '/emojis/264e.png',
  'libya': '/emojis/1f1f1-1f1fe.png',
  'liechtenstein': '/emojis/1f1f1-1f1ee.png',
  'light_rail': '/emojis/1f688.png',
  'link': '/emojis/1f517.png',
  'lion': '/emojis/1f981.png',
  'lips': '/emojis/1f444.png',
  'lipstick': '/emojis/1f484.png',
  'lithuania': '/emojis/1f1f1-1f1f9.png',
  'lizard': '/emojis/1f98e.png',
  'lock': '/emojis/1f512.png',
  'lock_with_ink_pen': '/emojis/1f50f.png',
  'lollipop': '/emojis/1f36d.png',
  'loop': '/emojis/27bf.png',
  'loud_sound': '/emojis/1f50a.png',
  'loudspeaker': '/emojis/1f4e2.png',
  'love_hotel': '/emojis/1f3e9.png',
  'love_letter': '/emojis/1f48c.png',
  'low_brightness': '/emojis/1f505.png',
  'luxembourg': '/emojis/1f1f1-1f1fa.png',
  'lying_face': '/emojis/1f925.png',
  'm': '/emojis/24c2.png',
  'macau': '/emojis/1f1f2-1f1f4.png',
  'macedonia': '/emojis/1f1f2-1f1f0.png',
  'madagascar': '/emojis/1f1f2-1f1ec.png',
  'mag': '/emojis/1f50d.png',
  'mag_right': '/emojis/1f50e.png',
  'mahjong': '/emojis/1f004.png',
  'mailbox': '/emojis/1f4eb.png',
  'mailbox_closed': '/emojis/1f4ea.png',
  'mailbox_with_mail': '/emojis/1f4ec.png',
  'mailbox_with_no_mail': '/emojis/1f4ed.png',
  'malawi': '/emojis/1f1f2-1f1fc.png',
  'malaysia': '/emojis/1f1f2-1f1fe.png',
  'maldives': '/emojis/1f1f2-1f1fb.png',
  'male_detective': '/emojis/1f575.png',
  'mali': '/emojis/1f1f2-1f1f1.png',
  'malta': '/emojis/1f1f2-1f1f9.png',
  'man': '/emojis/1f468.png',
  'man_artist': '/emojis/1f468-1f3a8.png',
  'man_astronaut': '/emojis/1f468-1f680.png',
  'man_cartwheeling': '/emojis/1f938-2642.png',
  'man_cook': '/emojis/1f468-1f373.png',
  'man_dancing': '/emojis/1f57a.png',
  'man_facepalming': '/emojis/1f926-2642.png',
  'man_factory_worker': '/emojis/1f468-1f3ed.png',
  'man_farmer': '/emojis/1f468-1f33e.png',
  'man_firefighter': '/emojis/1f468-1f692.png',
  'man_health_worker': '/emojis/1f468-2695.png',
  'man_in_tuxedo': '/emojis/1f935.png',
  'man_judge': '/emojis/1f468-2696.png',
  'man_juggling': '/emojis/1f939-2642.png',
  'man_mechanic': '/emojis/1f468-1f527.png',
  'man_office_worker': '/emojis/1f468-1f4bc.png',
  'man_pilot': '/emojis/1f468-2708.png',
  'man_playing_handball': '/emojis/1f93e-2642.png',
  'man_playing_water_polo': '/emojis/1f93d-2642.png',
  'man_scientist': '/emojis/1f468-1f52c.png',
  'man_shrugging': '/emojis/1f937-2642.png',
  'man_singer': '/emojis/1f468-1f3a4.png',
  'man_student': '/emojis/1f468-1f393.png',
  'man_teacher': '/emojis/1f468-1f3eb.png',
  'man_technologist': '/emojis/1f468-1f4bb.png',
  'man_with_gua_pi_mao': '/emojis/1f472.png',
  'man_with_turban': '/emojis/1f473.png',
  'mandarin': '/emojis/1f34a.png',
  'mans_shoe': '/emojis/1f45e.png',
  'mantelpiece_clock': '/emojis/1f570.png',
  'maple_leaf': '/emojis/1f341.png',
  'marshall_islands': '/emojis/1f1f2-1f1ed.png',
  'martial_arts_uniform': '/emojis/1f94b.png',
  'martinique': '/emojis/1f1f2-1f1f6.png',
  'mask': '/emojis/1f637.png',
  'massage': '/emojis/1f486.png',
  'massage_man': '/emojis/1f486-2642.png',
  'massage_woman': '/emojis/1f486.png',
  'mauritania': '/emojis/1f1f2-1f1f7.png',
  'mauritius': '/emojis/1f1f2-1f1fa.png',
  'mayotte': '/emojis/1f1fe-1f1f9.png',
  'meat_on_bone': '/emojis/1f356.png',
  'medal_military': '/emojis/1f396.png',
  'medal_sports': '/emojis/1f3c5.png',
  'mega': '/emojis/1f4e3.png',
  'melon': '/emojis/1f348.png',
  'memo': '/emojis/1f4dd.png',
  'men_wrestling': '/emojis/1f93c-2642.png',
  'menorah': '/emojis/1f54e.png',
  'mens': '/emojis/1f6b9.png',
  'metal': '/emojis/1f918.png',
  'metro': '/emojis/1f687.png',
  'mexico': '/emojis/1f1f2-1f1fd.png',
  'micronesia': '/emojis/1f1eb-1f1f2.png',
  'microphone': '/emojis/1f3a4.png',
  'microscope': '/emojis/1f52c.png',
  'middle_finger': '/emojis/1f595.png',
  'milk_glass': '/emojis/1f95b.png',
  'milky_way': '/emojis/1f30c.png',
  'minibus': '/emojis/1f690.png',
  'minidisc': '/emojis/1f4bd.png',
  'mobile_phone_off': '/emojis/1f4f4.png',
  'moldova': '/emojis/1f1f2-1f1e9.png',
  'monaco': '/emojis/1f1f2-1f1e8.png',
  'money_mouth_face': '/emojis/1f911.png',
  'money_with_wings': '/emojis/1f4b8.png',
  'moneybag': '/emojis/1f4b0.png',
  'mongolia': '/emojis/1f1f2-1f1f3.png',
  'monkey': '/emojis/1f412.png',
  'monkey_face': '/emojis/1f435.png',
  'monorail': '/emojis/1f69d.png',
  'montenegro': '/emojis/1f1f2-1f1ea.png',
  'montserrat': '/emojis/1f1f2-1f1f8.png',
  'moon': '/emojis/1f314.png',
  'morocco': '/emojis/1f1f2-1f1e6.png',
  'mortar_board': '/emojis/1f393.png',
  'mosque': '/emojis/1f54c.png',
  'motor_boat': '/emojis/1f6e5.png',
  'motor_scooter': '/emojis/1f6f5.png',
  'motorcycle': '/emojis/1f3cd.png',
  'motorway': '/emojis/1f6e3.png',
  'mount_fuji': '/emojis/1f5fb.png',
  'mountain': '/emojis/26f0.png',
  'mountain_bicyclist': '/emojis/1f6b5.png',
  'mountain_biking_man': '/emojis/1f6b5.png',
  'mountain_biking_woman': '/emojis/1f6b5-2640.png',
  'mountain_cableway': '/emojis/1f6a0.png',
  'mountain_railway': '/emojis/1f69e.png',
  'mountain_snow': '/emojis/1f3d4.png',
  'mouse': '/emojis/1f42d.png',
  'mouse2': '/emojis/1f401.png',
  'movie_camera': '/emojis/1f3a5.png',
  'moyai': '/emojis/1f5ff.png',
  'mozambique': '/emojis/1f1f2-1f1ff.png',
  'mrs_claus': '/emojis/1f936.png',
  'muscle': '/emojis/1f4aa.png',
  'mushroom': '/emojis/1f344.png',
  'musical_keyboard': '/emojis/1f3b9.png',
  'musical_note': '/emojis/1f3b5.png',
  'musical_score': '/emojis/1f3bc.png',
  'mute': '/emojis/1f507.png',
  'myanmar': '/emojis/1f1f2-1f1f2.png',
  'nail_care': '/emojis/1f485.png',
  'name_badge': '/emojis/1f4db.png',
  'namibia': '/emojis/1f1f3-1f1e6.png',
  'national_park': '/emojis/1f3de.png',
  'nauru': '/emojis/1f1f3-1f1f7.png',
  'nauseated_face': '/emojis/1f922.png',
  'neckbeard': '/emoji/neckbeard.png',
  'necktie': '/emojis/1f454.png',
  'negative_squared_cross_mark': '/emojis/274e.png',
  'nepal': '/emojis/1f1f3-1f1f5.png',
  'nerd_face': '/emojis/1f913.png',
  'netherlands': '/emojis/1f1f3-1f1f1.png',
  'neutral_face': '/emojis/1f610.png',
  'new': '/emojis/1f195.png',
  'new_caledonia': '/emojis/1f1f3-1f1e8.png',
  'new_moon': '/emojis/1f311.png',
  'new_moon_with_face': '/emojis/1f31a.png',
  'new_zealand': '/emojis/1f1f3-1f1ff.png',
  'newspaper': '/emojis/1f4f0.png',
  'newspaper_roll': '/emojis/1f5de.png',
  'next_track_button': '/emojis/23ed.png',
  'ng': '/emojis/1f196.png',
  'ng_man': '/emojis/1f645-2642.png',
  'ng_woman': '/emojis/1f645.png',
  'nicaragua': '/emojis/1f1f3-1f1ee.png',
  'niger': '/emojis/1f1f3-1f1ea.png',
  'nigeria': '/emojis/1f1f3-1f1ec.png',
  'night_with_stars': '/emojis/1f303.png',
  'nine': '/emojis/0039-20e3.png',
  'niue': '/emojis/1f1f3-1f1fa.png',
  'no_bell': '/emojis/1f515.png',
  'no_bicycles': '/emojis/1f6b3.png',
  'no_entry': '/emojis/26d4.png',
  'no_entry_sign': '/emojis/1f6ab.png',
  'no_good': '/emojis/1f645.png',
  'no_good_man': '/emojis/1f645-2642.png',
  'no_good_woman': '/emojis/1f645.png',
  'no_mobile_phones': '/emojis/1f4f5.png',
  'no_mouth': '/emojis/1f636.png',
  'no_pedestrians': '/emojis/1f6b7.png',
  'no_smoking': '/emojis/1f6ad.png',
  'non-potable_water': '/emojis/1f6b1.png',
  'norfolk_island': '/emojis/1f1f3-1f1eb.png',
  'north_korea': '/emojis/1f1f0-1f1f5.png',
  'northern_mariana_islands': '/emojis/1f1f2-1f1f5.png',
  'norway': '/emojis/1f1f3-1f1f4.png',
  'nose': '/emojis/1f443.png',
  'notebook': '/emojis/1f4d3.png',
  'notebook_with_decorative_cover': '/emojis/1f4d4.png',
  'notes': '/emojis/1f3b6.png',
  'nut_and_bolt': '/emojis/1f529.png',
  'o': '/emojis/2b55.png',
  'o2': '/emojis/1f17e.png',
  'ocean': '/emojis/1f30a.png',
  'octocat': '/emoji/octocat.png',
  'octopus': '/emojis/1f419.png',
  'oden': '/emojis/1f362.png',
  'office': '/emojis/1f3e2.png',
  'oil_drum': '/emojis/1f6e2.png',
  'ok': '/emojis/1f197.png',
  'ok_hand': '/emojis/1f44c.png',
  'ok_man': '/emojis/1f646-2642.png',
  'ok_woman': '/emojis/1f646.png',
  'old_key': '/emojis/1f5dd.png',
  'older_man': '/emojis/1f474.png',
  'older_woman': '/emojis/1f475.png',
  'om': '/emojis/1f549.png',
  'oman': '/emojis/1f1f4-1f1f2.png',
  'on': '/emojis/1f51b.png',
  'oncoming_automobile': '/emojis/1f698.png',
  'oncoming_bus': '/emojis/1f68d.png',
  'oncoming_police_car': '/emojis/1f694.png',
  'oncoming_taxi': '/emojis/1f696.png',
  'one': '/emojis/0031-20e3.png',
  'open_book': '/emojis/1f4d6.png',
  'open_file_folder': '/emojis/1f4c2.png',
  'open_hands': '/emojis/1f450.png',
  'open_mouth': '/emojis/1f62e.png',
  'open_umbrella': '/emojis/2602.png',
  'ophiuchus': '/emojis/26ce.png',
  'orange': '/emojis/1f34a.png',
  'orange_book': '/emojis/1f4d9.png',
  'orthodox_cross': '/emojis/2626.png',
  'outbox_tray': '/emojis/1f4e4.png',
  'owl': '/emojis/1f989.png',
  'ox': '/emojis/1f402.png',
  'package': '/emojis/1f4e6.png',
  'page_facing_up': '/emojis/1f4c4.png',
  'page_with_curl': '/emojis/1f4c3.png',
  'pager': '/emojis/1f4df.png',
  'paintbrush': '/emojis/1f58c.png',
  'pakistan': '/emojis/1f1f5-1f1f0.png',
  'palau': '/emojis/1f1f5-1f1fc.png',
  'palestinian_territories': '/emojis/1f1f5-1f1f8.png',
  'palm_tree': '/emojis/1f334.png',
  'panama': '/emojis/1f1f5-1f1e6.png',
  'pancakes': '/emojis/1f95e.png',
  'panda_face': '/emojis/1f43c.png',
  'paperclip': '/emojis/1f4ce.png',
  'paperclips': '/emojis/1f587.png',
  'papua_new_guinea': '/emojis/1f1f5-1f1ec.png',
  'paraguay': '/emojis/1f1f5-1f1fe.png',
  'parasol_on_ground': '/emojis/26f1.png',
  'parking': '/emojis/1f17f.png',
  'part_alternation_mark': '/emojis/303d.png',
  'partly_sunny': '/emojis/26c5.png',
  'passenger_ship': '/emojis/1f6f3.png',
  'passport_control': '/emojis/1f6c2.png',
  'pause_button': '/emojis/23f8.png',
  'paw_prints': '/emojis/1f43e.png',
  'peace_symbol': '/emojis/262e.png',
  'peach': '/emojis/1f351.png',
  'peanuts': '/emojis/1f95c.png',
  'pear': '/emojis/1f350.png',
  'pen': '/emojis/1f58a.png',
  'pencil': '/emojis/1f4dd.png',
  'pencil2': '/emojis/270f.png',
  'penguin': '/emojis/1f427.png',
  'pensive': '/emojis/1f614.png',
  'performing_arts': '/emojis/1f3ad.png',
  'persevere': '/emojis/1f623.png',
  'person_fencing': '/emojis/1f93a.png',
  'person_frowning': '/emojis/1f64d.png',
  'person_with_blond_hair': '/emojis/1f471.png',
  'person_with_pouting_face': '/emojis/1f64e.png',
  'peru': '/emojis/1f1f5-1f1ea.png',
  'philippines': '/emojis/1f1f5-1f1ed.png',
  'phone': '/emojis/260e.png',
  'pick': '/emojis/26cf.png',
  'pig': '/emojis/1f437.png',
  'pig2': '/emojis/1f416.png',
  'pig_nose': '/emojis/1f43d.png',
  'pill': '/emojis/1f48a.png',
  'pineapple': '/emojis/1f34d.png',
  'ping_pong': '/emojis/1f3d3.png',
  'pisces': '/emojis/2653.png',
  'pitcairn_islands': '/emojis/1f1f5-1f1f3.png',
  'pizza': '/emojis/1f355.png',
  'place_of_worship': '/emojis/1f6d0.png',
  'plate_with_cutlery': '/emojis/1f37d.png',
  'play_or_pause_button': '/emojis/23ef.png',
  'point_down': '/emojis/1f447.png',
  'point_left': '/emojis/1f448.png',
  'point_right': '/emojis/1f449.png',
  'point_up': '/emojis/261d.png',
  'point_up_2': '/emojis/1f446.png',
  'poland': '/emojis/1f1f5-1f1f1.png',
  'police_car': '/emojis/1f693.png',
  'policeman': '/emojis/1f46e.png',
  'policewoman': '/emojis/1f46e-2640.png',
  'poodle': '/emojis/1f429.png',
  'poop': '/emojis/1f4a9.png',
  'popcorn': '/emojis/1f37f.png',
  'portugal': '/emojis/1f1f5-1f1f9.png',
  'post_office': '/emojis/1f3e3.png',
  'postal_horn': '/emojis/1f4ef.png',
  'postbox': '/emojis/1f4ee.png',
  'potable_water': '/emojis/1f6b0.png',
  'potato': '/emojis/1f954.png',
  'pouch': '/emojis/1f45d.png',
  'poultry_leg': '/emojis/1f357.png',
  'pound': '/emojis/1f4b7.png',
  'pout': '/emojis/1f621.png',
  'pouting_cat': '/emojis/1f63e.png',
  'pouting_man': '/emojis/1f64e-2642.png',
  'pouting_woman': '/emojis/1f64e.png',
  'pray': '/emojis/1f64f.png',
  'prayer_beads': '/emojis/1f4ff.png',
  'pregnant_woman': '/emojis/1f930.png',
  'previous_track_button': '/emojis/23ee.png',
  'prince': '/emojis/1f934.png',
  'princess': '/emojis/1f478.png',
  'printer': '/emojis/1f5a8.png',
  'puerto_rico': '/emojis/1f1f5-1f1f7.png',
  'punch': '/emojis/1f44a.png',
  'purple_heart': '/emojis/1f49c.png',
  'purse': '/emojis/1f45b.png',
  'pushpin': '/emojis/1f4cc.png',
  'put_litter_in_its_place': '/emojis/1f6ae.png',
  'qatar': '/emojis/1f1f6-1f1e6.png',
  'question': '/emojis/2753.png',
  'rabbit': '/emojis/1f430.png',
  'rabbit2': '/emojis/1f407.png',
  'racehorse': '/emojis/1f40e.png',
  'racing_car': '/emojis/1f3ce.png',
  'radio': '/emojis/1f4fb.png',
  'radio_button': '/emojis/1f518.png',
  'radioactive': '/emojis/2622.png',
  'rage': '/emojis/1f621.png',
  'rage1': '/emoji/rage1.png',
  'rage2': '/emoji/rage2.png',
  'rage3': '/emoji/rage3.png',
  'rage4': '/emoji/rage4.png',
  'railway_car': '/emojis/1f683.png',
  'railway_track': '/emojis/1f6e4.png',
  'rainbow': '/emojis/1f308.png',
  'rainbow_flag': '/emojis/1f3f3-1f308.png',
  'raised_back_of_hand': '/emojis/1f91a.png',
  'raised_hand': '/emojis/270b.png',
  'raised_hand_with_fingers_splayed': '/emojis/1f590.png',
  'raised_hands': '/emojis/1f64c.png',
  'raising_hand': '/emojis/1f64b.png',
  'raising_hand_man': '/emojis/1f64b-2642.png',
  'raising_hand_woman': '/emojis/1f64b.png',
  'ram': '/emojis/1f40f.png',
  'ramen': '/emojis/1f35c.png',
  'rat': '/emojis/1f400.png',
  'record_button': '/emojis/23fa.png',
  'recycle': '/emojis/267b.png',
  'red_car': '/emojis/1f697.png',
  'red_circle': '/emojis/1f534.png',
  'registered': '/emojis/00ae.png',
  'relaxed': '/emojis/263a.png',
  'relieved': '/emojis/1f60c.png',
  'reminder_ribbon': '/emojis/1f397.png',
  'repeat': '/emojis/1f501.png',
  'repeat_one': '/emojis/1f502.png',
  'rescue_worker_helmet': '/emojis/26d1.png',
  'restroom': '/emojis/1f6bb.png',
  'reunion': '/emojis/1f1f7-1f1ea.png',
  'revolving_hearts': '/emojis/1f49e.png',
  'rewind': '/emojis/23ea.png',
  'rhinoceros': '/emojis/1f98f.png',
  'ribbon': '/emojis/1f380.png',
  'rice': '/emojis/1f35a.png',
  'rice_ball': '/emojis/1f359.png',
  'rice_cracker': '/emojis/1f358.png',
  'rice_scene': '/emojis/1f391.png',
  'right_anger_bubble': '/emojis/1f5ef.png',
  'ring': '/emojis/1f48d.png',
  'robot': '/emojis/1f916.png',
  'rocket': '/emojis/1f680.png',
  'rofl': '/emojis/1f923.png',
  'roll_eyes': '/emojis/1f644.png',
  'roller_coaster': '/emojis/1f3a2.png',
  'romania': '/emojis/1f1f7-1f1f4.png',
  'rooster': '/emojis/1f413.png',
  'rose': '/emojis/1f339.png',
  'rosette': '/emojis/1f3f5.png',
  'rotating_light': '/emojis/1f6a8.png',
  'round_pushpin': '/emojis/1f4cd.png',
  'rowboat': '/emojis/1f6a3.png',
  'rowing_man': '/emojis/1f6a3.png',
  'rowing_woman': '/emojis/1f6a3-2640.png',
  'ru': '/emojis/1f1f7-1f1fa.png',
  'rugby_football': '/emojis/1f3c9.png',
  'runner': '/emojis/1f3c3.png',
  'running': '/emojis/1f3c3.png',
  'running_man': '/emojis/1f3c3.png',
  'running_shirt_with_sash': '/emojis/1f3bd.png',
  'running_woman': '/emojis/1f3c3-2640.png',
  'rwanda': '/emojis/1f1f7-1f1fc.png',
  'sa': '/emojis/1f202-fe0f.png',
  'sagittarius': '/emojis/2650.png',
  'sailboat': '/emojis/26f5.png',
  'sake': '/emojis/1f376.png',
  'samoa': '/emojis/1f1fc-1f1f8.png',
  'san_marino': '/emojis/1f1f8-1f1f2.png',
  'sandal': '/emojis/1f461.png',
  'santa': '/emojis/1f385.png',
  'sao_tome_principe': '/emojis/1f1f8-1f1f9.png',
  'satellite': '/emojis/1f4e1.png',
  'satisfied': '/emojis/1f606.png',
  'saudi_arabia': '/emojis/1f1f8-1f1e6.png',
  'saxophone': '/emojis/1f3b7.png',
  'school': '/emojis/1f3eb.png',
  'school_satchel': '/emojis/1f392.png',
  'scissors': '/emojis/2702.png',
  'scorpion': '/emojis/1f982.png',
  'scorpius': '/emojis/264f.png',
  'scream': '/emojis/1f631.png',
  'scream_cat': '/emojis/1f640.png',
  'scroll': '/emojis/1f4dc.png',
  'seat': '/emojis/1f4ba.png',
  'secret': '/emojis/3299-fe0f.png',
  'see_no_evil': '/emojis/1f648.png',
  'seedling': '/emojis/1f331.png',
  'selfie': '/emojis/1f933.png',
  'senegal': '/emojis/1f1f8-1f1f3.png',
  'serbia': '/emojis/1f1f7-1f1f8.png',
  'seven': '/emojis/0037-20e3.png',
  'seychelles': '/emojis/1f1f8-1f1e8.png',
  'shallow_pan_of_food': '/emojis/1f958.png',
  'shamrock': '/emojis/2618.png',
  'shark': '/emojis/1f988.png',
  'shaved_ice': '/emojis/1f367.png',
  'sheep': '/emojis/1f411.png',
  'shell': '/emojis/1f41a.png',
  'shield': '/emojis/1f6e1.png',
  'shinto_shrine': '/emojis/26e9.png',
  'ship': '/emojis/1f6a2.png',
  'shipit': '/emoji/shipit.png',
  'shirt': '/emojis/1f455.png',
  'shit': '/emojis/1f4a9.png',
  'shoe': '/emojis/1f45e.png',
  'shopping': '/emojis/1f6cd.png',
  'shopping_cart': '/emojis/1f6d2.png',
  'shower': '/emojis/1f6bf.png',
  'shrimp': '/emojis/1f990.png',
  'sierra_leone': '/emojis/1f1f8-1f1f1.png',
  'signal_strength': '/emojis/1f4f6.png',
  'singapore': '/emojis/1f1f8-1f1ec.png',
  'sint_maarten': '/emojis/1f1f8-1f1fd.png',
  'six': '/emojis/0036-20e3.png',
  'six_pointed_star': '/emojis/1f52f.png',
  'ski': '/emojis/1f3bf.png',
  'skier': '/emojis/26f7.png',
  'skull': '/emojis/1f480.png',
  'skull_and_crossbones': '/emojis/2620.png',
  'sleeping': '/emojis/1f634.png',
  'sleeping_bed': '/emojis/1f6cc.png',
  'sleepy': '/emojis/1f62a.png',
  'slightly_frowning_face': '/emojis/1f641.png',
  'slightly_smiling_face': '/emojis/1f642.png',
  'slot_machine': '/emojis/1f3b0.png',
  'slovakia': '/emojis/1f1f8-1f1f0.png',
  'slovenia': '/emojis/1f1f8-1f1ee.png',
  'small_airplane': '/emojis/1f6e9-fe0f.png',
  'small_blue_diamond': '/emojis/1f539.png',
  'small_orange_diamond': '/emojis/1f538.png',
  'small_red_triangle': '/emojis/1f53a.png',
  'small_red_triangle_down': '/emojis/1f53b.png',
  'smile': '/emojis/1f604.png',
  'smile_cat': '/emojis/1f638.png',
  'smiley': '/emojis/1f603.png',
  'smiley_cat': '/emojis/1f63a.png',
  'smiling_imp': '/emojis/1f608.png',
  'smirk': '/emojis/1f60f.png',
  'smirk_cat': '/emojis/1f63c.png',
  'smoking': '/emojis/1f6ac.png',
  'snail': '/emojis/1f40c.png',
  'snake': '/emojis/1f40d.png',
  'sneezing_face': '/emojis/1f927.png',
  'snowboarder': '/emojis/1f3c2.png',
  'snowflake': '/emojis/2744.png',
  'snowman': '/emojis/26c4.png',
  'snowman_with_snow': '/emojis/2603.png',
  'sob': '/emojis/1f62d.png',
  'soccer': '/emojis/26bd.png',
  'solomon_islands': '/emojis/1f1f8-1f1e7.png',
  'somalia': '/emojis/1f1f8-1f1f4.png',
  'soon': '/emojis/1f51c.png',
  'sos': '/emojis/1f198.png',
  'sound': '/emojis/1f509.png',
  'south_africa': '/emojis/1f1ff-1f1e6.png',
  'south_georgia_south_sandwich_islands': '/emojis/1f1ec-1f1f8.png',
  'south_sudan': '/emojis/1f1f8-1f1f8.png',
  'space_invader': '/emojis/1f47e.png',
  'spades': '/emojis/2660.png',
  'spaghetti': '/emojis/1f35d.png',
  'sparkle': '/emojis/2747.png',
  'sparkler': '/emojis/1f387.png',
  'sparkles': '/emojis/2728.png',
  'sparkling_heart': '/emojis/1f496.png',
  'speak_no_evil': '/emojis/1f64a.png',
  'speaker': '/emojis/1f508.png',
  'speaking_head': '/emojis/1f5e3.png',
  'speech_balloon': '/emojis/1f4ac.png',
  'speedboat': '/emojis/1f6a4.png',
  'spider': '/emojis/1f577.png',
  'spider_web': '/emojis/1f578.png',
  'spiral_calendar': '/emojis/1f5d3.png',
  'spiral_notepad': '/emojis/1f5d2.png',
  'spoon': '/emojis/1f944.png',
  'squid': '/emojis/1f991.png',
  'squirrel': '/emoji/shipit.png',
  'sri_lanka': '/emojis/1f1f1-1f1f0.png',
  'st_barthelemy': '/emojis/1f1e7-1f1f1.png',
  'st_helena': '/emojis/1f1f8-1f1ed.png',
  'st_kitts_nevis': '/emojis/1f1f0-1f1f3.png',
  'st_lucia': '/emojis/1f1f1-1f1e8.png',
  'st_pierre_miquelon': '/emojis/1f1f5-1f1f2.png',
  'st_vincent_grenadines': '/emojis/1f1fb-1f1e8.png',
  'stadium': '/emojis/1f3df.png',
  'star': '/emojis/2b50.png',
  'star2': '/emojis/1f31f.png',
  'star_and_crescent': '/emojis/262a.png',
  'star_of_david': '/emojis/2721-fe0f.png',
  'stars': '/emojis/1f320.png',
  'station': '/emojis/1f689.png',
  'statue_of_liberty': '/emojis/1f5fd.png',
  'steam_locomotive': '/emojis/1f682.png',
  'stew': '/emojis/1f372.png',
  'stop_button': '/emojis/23f9.png',
  'stop_sign': '/emojis/1f6d1.png',
  'stopwatch': '/emojis/23f1.png',
  'straight_ruler': '/emojis/1f4cf.png',
  'strawberry': '/emojis/1f353.png',
  'stuck_out_tongue': '/emojis/1f61b.png',
  'stuck_out_tongue_closed_eyes': '/emojis/1f61d.png',
  'stuck_out_tongue_winking_eye': '/emojis/1f61c.png',
  'studio_microphone': '/emojis/1f399.png',
  'stuffed_flatbread': '/emojis/1f959.png',
  'sudan': '/emojis/1f1f8-1f1e9.png',
  'sun_behind_large_cloud': '/emojis/1f325.png',
  'sun_behind_rain_cloud': '/emojis/1f326.png',
  'sun_behind_small_cloud': '/emojis/1f324.png',
  'sun_with_face': '/emojis/1f31e.png',
  'sunflower': '/emojis/1f33b.png',
  'sunglasses': '/emojis/1f60e.png',
  'sunny': '/emojis/2600.png',
  'sunrise': '/emojis/1f305.png',
  'sunrise_over_mountains': '/emojis/1f304.png',
  'surfer': '/emojis/1f3c4.png',
  'surfing_man': '/emojis/1f3c4.png',
  'surfing_woman': '/emojis/1f3c4-2640.png',
  'suriname': '/emojis/1f1f8-1f1f7.png',
  'sushi': '/emojis/1f363.png',
  'suspect': '/emoji/suspect.png',
  'suspension_railway': '/emojis/1f69f.png',
  'swaziland': '/emojis/1f1f8-1f1ff.png',
  'sweat': '/emojis/1f613.png',
  'sweat_drops': '/emojis/1f4a6.png',
  'sweat_smile': '/emojis/1f605.png',
  'sweden': '/emojis/1f1f8-1f1ea.png',
  'sweet_potato': '/emojis/1f360.png',
  'swimmer': '/emojis/1f3ca.png',
  'swimming_man': '/emojis/1f3ca.png',
  'swimming_woman': '/emojis/1f3ca-2640.png',
  'switzerland': '/emojis/1f1e8-1f1ed.png',
  'symbols': '/emojis/1f523.png',
  'synagogue': '/emojis/1f54d.png',
  'syria': '/emojis/1f1f8-1f1fe.png',
  'syringe': '/emojis/1f489.png',
  'taco': '/emojis/1f32e.png',
  'tada': '/emojis/1f389.png',
  'taiwan': '/emojis/1f1f9-1f1fc.png',
  'tajikistan': '/emojis/1f1f9-1f1ef.png',
  'tanabata_tree': '/emojis/1f38b.png',
  'tangerine': '/emojis/1f34a.png',
  'tanzania': '/emojis/1f1f9-1f1ff.png',
  'taurus': '/emojis/2649.png',
  'taxi': '/emojis/1f695.png',
  'tea': '/emojis/1f375.png',
  'telephone': '/emojis/260e.png',
  'telephone_receiver': '/emojis/1f4de.png',
  'telescope': '/emojis/1f52d.png',
  'tennis': '/emojis/1f3be.png',
  'tent': '/emojis/26fa.png',
  'thailand': '/emojis/1f1f9-1f1ed.png',
  'thermometer': '/emojis/1f321.png',
  'thinking': '/emojis/1f914.png',
  'thought_balloon': '/emojis/1f4ad.png',
  'three': '/emojis/0033-20e3.png',
  'thumbsdown': '/emojis/1f44e.png',
  'thumbsup': '/emojis/1f44d.png',
  'ticket': '/emojis/1f3ab.png',
  'tickets': '/emojis/1f39f.png',
  'tiger': '/emojis/1f42f.png',
  'tiger2': '/emojis/1f405.png',
  'timer_clock': '/emojis/23f2.png',
  'timor_leste': '/emojis/1f1f9-1f1f1.png',
  'tipping_hand_man': '/emojis/1f481-2642.png',
  'tipping_hand_woman': '/emojis/1f481.png',
  'tired_face': '/emojis/1f62b.png',
  'tm': '/emojis/2122.png',
  'togo': '/emojis/1f1f9-1f1ec.png',
  'toilet': '/emojis/1f6bd.png',
  'tokelau': '/emojis/1f1f9-1f1f0.png',
  'tokyo_tower': '/emojis/1f5fc.png',
  'tomato': '/emojis/1f345.png',
  'tonga': '/emojis/1f1f9-1f1f4.png',
  'tongue': '/emojis/1f445.png',
  'top': '/emojis/1f51d.png',
  'tophat': '/emojis/1f3a9.png',
  'tornado': '/emojis/1f32a.png',
  'tr': '/emojis/1f1f9-1f1f7.png',
  'trackball': '/emojis/1f5b2.png',
  'tractor': '/emojis/1f69c.png',
  'traffic_light': '/emojis/1f6a5.png',
  'train': '/emojis/1f68b.png',
  'train2': '/emojis/1f686.png',
  'tram': '/emojis/1f68a.png',
  'triangular_flag_on_post': '/emojis/1f6a9.png',
  'triangular_ruler': '/emojis/1f4d0.png',
  'trident': '/emojis/1f531.png',
  'trinidad_tobago': '/emojis/1f1f9-1f1f9.png',
  'triumph': '/emojis/1f624.png',
  'trolleybus': '/emojis/1f68e.png',
  'trollface': '/emoji/trollface.png',
  'trophy': '/emojis/1f3c6.png',
  'tropical_drink': '/emojis/1f379.png',
  'tropical_fish': '/emojis/1f420.png',
  'truck': '/emojis/1f69a.png',
  'trumpet': '/emojis/1f3ba.png',
  'tshirt': '/emojis/1f455.png',
  'tulip': '/emojis/1f337.png',
  'tumbler_glass': '/emojis/1f943.png',
  'tunisia': '/emojis/1f1f9-1f1f3.png',
  'turkey': '/emojis/1f983.png',
  'turkmenistan': '/emojis/1f1f9-1f1f2.png',
  'turks_caicos_islands': '/emojis/1f1f9-1f1e8.png',
  'turtle': '/emojis/1f422.png',
  'tuvalu': '/emojis/1f1f9-1f1fb.png',
  'tv': '/emojis/1f4fa.png',
  'twisted_rightwards_arrows': '/emojis/1f500.png',
  'two': '/emojis/0032-20e3.png',
  'two_hearts': '/emojis/1f495.png',
  'two_men_holding_hands': '/emojis/1f46c.png',
  'two_women_holding_hands': '/emojis/1f46d.png',
  'u5272': '/emojis/1f239.png',
  'u5408': '/emojis/1f234.png',
  'u55b6': '/emojis/1f23a.png',
  'u6307': '/emojis/1f22f.png',
  'u6708': '/emojis/1f237.png',
  'u6709': '/emojis/1f236.png',
  'u6e80': '/emojis/1f235.png',
  'u7121': '/emojis/1f21a.png',
  'u7533': '/emojis/1f238.png',
  'u7981': '/emojis/1f232.png',
  'u7a7a': '/emojis/1f233.png',
  'uganda': '/emojis/1f1fa-1f1ec.png',
  'uk': '/emojis/1f1ec-1f1e7.png',
  'ukraine': '/emojis/1f1fa-1f1e6.png',
  'umbrella': '/emojis/2614.png',
  'unamused': '/emojis/1f612.png',
  'underage': '/emojis/1f51e.png',
  'unicorn': '/emojis/1f984.png',
  'united_arab_emirates': '/emojis/1f1e6-1f1ea.png',
  'unlock': '/emojis/1f513.png',
  'up': '/emojis/1f199.png',
  'upside_down_face': '/emojis/1f643.png',
  'uruguay': '/emojis/1f1fa-1f1fe.png',
  'us': '/emojis/1f1fa-1f1f8.png',
  'us_virgin_islands': '/emojis/1f1fb-1f1ee.png',
  'uzbekistan': '/emojis/1f1fa-1f1ff.png',
  'v': '/emojis/270c.png',
  'vanuatu': '/emojis/1f1fb-1f1fa.png',
  'vatican_city': '/emojis/1f1fb-1f1e6.png',
  'venezuela': '/emojis/1f1fb-1f1ea.png',
  'vertical_traffic_light': '/emojis/1f6a6.png',
  'vhs': '/emojis/1f4fc.png',
  'vibration_mode': '/emojis/1f4f3.png',
  'video_camera': '/emojis/1f4f9.png',
  'video_game': '/emojis/1f3ae.png',
  'vietnam': '/emojis/1f1fb-1f1f3.png',
  'violin': '/emojis/1f3bb.png',
  'virgo': '/emojis/264d.png',
  'volcano': '/emojis/1f30b.png',
  'volleyball': '/emojis/1f3d0.png',
  'vs': '/emojis/1f19a.png',
  'vulcan_salute': '/emojis/1f596.png',
  'walking': '/emojis/1f6b6.png',
  'walking_man': '/emojis/1f6b6.png',
  'walking_woman': '/emojis/1f6b6-2640.png',
  'wallis_futuna': '/emojis/1f1fc-1f1eb.png',
  'waning_crescent_moon': '/emojis/1f318.png',
  'waning_gibbous_moon': '/emojis/1f316.png',
  'warning': '/emojis/26a0.png',
  'wastebasket': '/emojis/1f5d1.png',
  'watch': '/emojis/231a.png',
  'water_buffalo': '/emojis/1f403.png',
  'watermelon': '/emojis/1f349.png',
  'wave': '/emojis/1f44b.png',
  'wavy_dash': '/emojis/3030.png',
  'waxing_crescent_moon': '/emojis/1f312.png',
  'waxing_gibbous_moon': '/emojis/1f314.png',
  'wc': '/emojis/1f6be.png',
  'weary': '/emojis/1f629.png',
  'wedding': '/emojis/1f492.png',
  'weight_lifting_man': '/emojis/1f3cb.png',
  'weight_lifting_woman': '/emojis/1f3cb-2640.png',
  'western_sahara': '/emojis/1f1ea-1f1ed.png',
  'whale': '/emojis/1f433.png',
  'whale2': '/emojis/1f40b.png',
  'wheel_of_dharma': '/emojis/2638.png',
  'wheelchair': '/emojis/267f.png',
  'white_check_mark': '/emojis/2705.png',
  'white_circle': '/emojis/26aa.png',
  'white_flag': '/emojis/1f3f3.png',
  'white_flower': '/emojis/1f4ae.png',
  'white_large_square': '/emojis/2b1c.png',
  'white_medium_small_square': '/emojis/25fd.png',
  'white_medium_square': '/emojis/25fb.png',
  'white_small_square': '/emojis/25ab.png',
  'white_square_button': '/emojis/1f533.png',
  'wilted_flower': '/emojis/1f940.png',
  'wind_chime': '/emojis/1f390.png',
  'wind_face': '/emojis/1f32c.png',
  'wine_glass': '/emojis/1f377.png',
  'wink': '/emojis/1f609.png',
  'wolf': '/emojis/1f43a.png',
  'woman': '/emojis/1f469.png',
  'woman_artist': '/emojis/1f469-1f3a8.png',
  'woman_astronaut': '/emojis/1f469-1f680.png',
  'woman_cartwheeling': '/emojis/1f938-2640.png',
  'woman_cook': '/emojis/1f469-1f373.png',
  'woman_facepalming': '/emojis/1f926-2640.png',
  'woman_factory_worker': '/emojis/1f469-1f3ed.png',
  'woman_farmer': '/emojis/1f469-1f33e.png',
  'woman_firefighter': '/emojis/1f469-1f692.png',
  'woman_health_worker': '/emojis/1f469-2695.png',
  'woman_judge': '/emojis/1f469-2696.png',
  'woman_juggling': '/emojis/1f939-2640.png',
  'woman_mechanic': '/emojis/1f469-1f527.png',
  'woman_office_worker': '/emojis/1f469-1f4bc.png',
  'woman_pilot': '/emojis/1f469-2708.png',
  'woman_playing_handball': '/emojis/1f93e-2640.png',
  'woman_playing_water_polo': '/emojis/1f93d-2640.png',
  'woman_scientist': '/emojis/1f469-1f52c.png',
  'woman_shrugging': '/emojis/1f937-2640.png',
  'woman_singer': '/emojis/1f469-1f3a4.png',
  'woman_student': '/emojis/1f469-1f393.png',
  'woman_teacher': '/emojis/1f469-1f3eb.png',
  'woman_technologist': '/emojis/1f469-1f4bb.png',
  'woman_with_turban': '/emojis/1f473-2640.png',
  'womans_clothes': '/emojis/1f45a.png',
  'womans_hat': '/emojis/1f452.png',
  'women_wrestling': '/emojis/1f93c-2640.png',
  'womens': '/emojis/1f6ba.png',
  'world_map': '/emojis/1f5fa.png',
  'worried': '/emojis/1f61f.png',
  'wrench': '/emojis/1f527.png',
  'writing_hand': '/emojis/270d.png',
  'x': '/emojis/274c.png',
  'yellow_heart': '/emojis/1f49b.png',
  'yemen': '/emojis/1f1fe-1f1ea.png',
  'yen': '/emojis/1f4b4.png',
  'yin_yang': '/emojis/262f.png',
  'yum': '/emojis/1f60b.png',
  'zambia': '/emojis/1f1ff-1f1f2.png',
  'zap': '/emojis/26a1.png',
  'zero': '/emojis/0030-20e3.png',
  'zimbabwe': '/emojis/1f1ff-1f1fc.png',
  'zipper_mouth_face': '/emojis/1f910.png',
  'zzz': '/emojis/1f4a4.png'
};

var _loop = function _loop(key) {
  emojiList.push({
    text: "".concat(key, ":"),
    render: function render(element) {
      element.innerHTML = "<img style=\"width:1.2em;height: 1.2em;\" src=\"".concat(emojis[key], "\" alt=\"").concat(key, "\" async></img> ").concat(key);
    }
  });
};

for (var key in emojis) {
  _loop(key);
}

var emojiCompleter = function emojiCompleter(cm) {
  codemirror__WEBPACK_IMPORTED_MODULE_0___default.a.showHint(cm, function () {
    var cur = cm.getCursor();
    var token = cm.getTokenAt(cur);
    var start = token.start;
    var end = cur.ch;
    var word = token.string.slice(0, end - start);
    var ch = cur.ch;
    var line = cur.line;
    var currentWord = token.string;

    while (ch-- > -1) {
      var t = cm.getTokenAt({
        ch: ch,
        line: line
      }).string;

      if (t === ':') {
        var filteredList = emojiList.filter(function (item) {
          return item.text.indexOf(currentWord) == 0;
        });

        if (filteredList.length >= 1) {
          return {
            list: filteredList,
            from: codemirror__WEBPACK_IMPORTED_MODULE_0___default.a.Pos(line, ch),
            to: codemirror__WEBPACK_IMPORTED_MODULE_0___default.a.Pos(line, end)
          };
        }
      } else if (/[^a-z]/.test(t)) {
        return false;
      }
    }
  }, {
    completeSingle: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (emojiCompleter);

/***/ }),

/***/ "./src/components/editor/index.js":
/*!****************************************!*\
  !*** ./src/components/editor/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Editor */ "./src/components/editor/src/Editor.vue");

/* harmony default export */ __webpack_exports__["default"] = (_src_Editor__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/editor/inline-attachment.js":
/*!****************************************************!*\
  !*** ./src/components/editor/inline-attachment.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* jslint newcap: true */

/* global XMLHttpRequest: false, FormData: false */

/*
 * Inline Text Attachment
 *
 * Author: Roy van Kaathoven
 * Contact: ik@royvankaathoven.nl
 */
(function (document, window) {
  'use strict';

  var inlineAttachment = function inlineAttachment(options, instance) {
    this.settings = inlineAttachment.util.merge(options, inlineAttachment.defaults);
    this.editor = instance;
    this.filenameTag = '{filename}';
    this.lastValue = null;
  };
  /**
   * Will holds the available editors
   *
   * @type {Object}
   */


  inlineAttachment.editors = {};
  /**
   * Utility functions
   */

  inlineAttachment.util = {
    /**
     * Simple function to merge the given objects
     *
     * @param {Object[]} object Multiple object parameters
     * @returns {Object}
     */
    merge: function merge() {
      var result = {};

      for (var i = arguments.length - 1; i >= 0; i--) {
        var obj = arguments[i];

        for (var k in obj) {
          if (obj.hasOwnProperty(k)) {
            result[k] = obj[k];
          }
        }
      }

      return result;
    },

    /**
     * Append a line of text at the bottom, ensuring there aren't unnecessary newlines
     *
     * @param {String} appended Current content
     * @param {String} previous Value which should be appended after the current content
     */
    appendInItsOwnLine: function appendInItsOwnLine(previous, appended) {
      return (previous + '\n\n[[D]]' + appended).replace(/(\n{2,})\[\[D\]\]/, '\n\n').replace(/^(\n*)/, '');
    },

    /**
     * Inserts the given value at the current cursor position of the textarea element
     *
     * @param  {HtmlElement} el
     * @param  {String} value Text which will be inserted at the cursor position
     */
    insertTextAtCursor: function insertTextAtCursor(el, text) {
      var scrollPos = el.scrollTop;
      var strPos = 0;
      var browser = false;
      var range;

      if (el.selectionStart || el.selectionStart === '0') {
        browser = 'ff';
      } else if (document.selection) {
        browser = 'ie';
      }

      if (browser === 'ie') {
        el.focus();
        range = document.selection.createRange();
        range.moveStart('character', -el.value.length);
        strPos = range.text.length;
      } else if (browser === 'ff') {
        strPos = el.selectionStart;
      }

      var front = el.value.substring(0, strPos);
      var back = el.value.substring(strPos, el.value.length);
      el.value = front + text + back;
      strPos = strPos + text.length;

      if (browser === 'ie') {
        el.focus();
        range = document.selection.createRange();
        range.moveStart('character', -el.value.length);
        range.moveStart('character', strPos);
        range.moveEnd('character', 0);
        range.select();
      } else if (browser === 'ff') {
        el.selectionStart = strPos;
        el.selectionEnd = strPos;
        el.focus();
      }

      el.scrollTop = scrollPos;
    }
    /**
     * Default configuration options
     *
     * @type {Object}
     */

  };
  inlineAttachment.defaults = {
    /**
     * URL where the file will be send
     */
    uploadUrl: 'upload_attachment.php',

    /**
     * Which method will be used to send the file to the upload URL
     */
    uploadMethod: 'POST',

    /**
     * Name in which the file will be placed
     */
    uploadFieldName: 'file',

    /**
     * Extension which will be used when a file extension could not
     * be detected
     */
    defaultExtension: 'png',

    /**
     * JSON field which refers to the uploaded file URL
     */
    jsonFieldName: 'filename',

    /**
     * Allowed MIME types
     */
    allowedTypes: ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'],

    /**
     * Text which will be inserted when dropping or pasting a file.
     * Acts as a placeholder which will be replaced when the file is done with uploading
     */
    progressText: '![Uploading file...]()',

    /**
     * When a file has successfully been uploaded the progressText
     * will be replaced by the urlText, the {filename} tag will be replaced
     * by the filename that has been returned by the server
     */
    urlText: '![file]({filename})',

    /**
     * Text which will be used when uploading has failed
     */
    errorText: 'Error uploading file',

    /**
     * Extra parameters which will be send when uploading a file
     */
    extraParams: {},

    /**
     * Extra headers which will be send when uploading a file
     */
    extraHeaders: {},

    /**
     * Before the file is send
     */
    beforeFileUpload: function beforeFileUpload() {
      return true;
    },

    /**
     * Triggers when a file is dropped or pasted
     */
    onFileReceived: function onFileReceived() {},

    /**
     * Custom upload handler
     *
     * @return {Boolean} when false is returned it will prevent default upload behavior
     */
    onFileUploadResponse: function onFileUploadResponse() {
      return true;
    },

    /**
     * Custom error handler. Runs after removing the placeholder text and before the alert().
     * Return false from this function to prevent the alert dialog.
     *
     * @return {Boolean} when false is returned it will prevent default error behavior
     */
    onFileUploadError: function onFileUploadError() {
      return true;
    },

    /**
     * When a file has succesfully been uploaded
     */
    onFileUploaded: function onFileUploaded() {}
    /**
     * Uploads the blob
     *
     * @param  {Blob} file blob data received from event.dataTransfer object
     * @return {XMLHttpRequest} request object which sends the file
     */

  };

  inlineAttachment.prototype.uploadFile = function (file) {
    var me = this;
    var formData = new FormData();
    var xhr = new XMLHttpRequest();
    var settings = this.settings;
    var extension = settings.defaultExtension || settings.defualtExtension;

    if (typeof settings.setupFormData === 'function') {
      settings.setupFormData(formData, file);
    } // Attach the file. If coming from clipboard, add a default filename (only works in Chrome for now)
    // http://stackoverflow.com/questions/6664967/how-to-give-a-blob-uploaded-as-formdata-a-file-name


    if (file.name) {
      var fileNameMatches = file.name.match(/\.(.+)$/);

      if (fileNameMatches) {
        extension = fileNameMatches[1];
      }
    }

    var remoteFilename = 'image-' + Date.now() + '.' + extension;

    if (typeof settings.remoteFilename === 'function') {
      remoteFilename = settings.remoteFilename(file);
    }

    formData.append(settings.uploadFieldName, file, remoteFilename); // Append the extra parameters to the formdata

    if (_typeof(settings.extraParams) === 'object') {
      for (var key in settings.extraParams) {
        if (settings.extraParams.hasOwnProperty(key)) {
          formData.append(key, settings.extraParams[key]);
        }
      }
    }

    xhr.open('POST', settings.uploadUrl); // Add any available extra headers

    if (_typeof(settings.extraHeaders) === 'object') {
      for (var header in settings.extraHeaders) {
        if (settings.extraHeaders.hasOwnProperty(header)) {
          xhr.setRequestHeader(header, settings.extraHeaders[header]);
        }
      }
    }

    xhr.onload = function () {
      // If HTTP status is OK or Created
      if (xhr.status === 200 || xhr.status === 201) {
        me.onFileUploadResponse(xhr);
      } else {
        me.onFileUploadError(xhr);
      }
    };

    if (settings.beforeFileUpload(xhr) !== false) {
      xhr.send(formData);
    }

    return xhr;
  };
  /**
   * Returns if the given file is allowed to handle
   *
   * @param {File} clipboard data file
   */


  inlineAttachment.prototype.isFileAllowed = function (file) {
    if (file.kind === 'string') {
      return false;
    }

    if (this.settings.allowedTypes.indexOf('*') === 0) {
      return true;
    } else {
      return this.settings.allowedTypes.indexOf(file.type) >= 0;
    }
  };
  /**
   * Handles upload response
   *
   * @param  {XMLHttpRequest} xhr
   * @return {Void}
   */


  inlineAttachment.prototype.onFileUploadResponse = function (xhr) {
    if (this.settings.onFileUploadResponse.call(this, xhr) !== false) {
      var result = JSON.parse(xhr.responseText);
      var filename = result[this.settings.jsonFieldName];

      if (result && filename) {
        var newValue;

        if (typeof this.settings.urlText === 'function') {
          newValue = this.settings.urlText.call(this, filename, result);
        } else {
          newValue = this.settings.urlText.replace(this.filenameTag, filename);
        }

        var text = this.editor.getValue().replace(this.lastValue, newValue);
        this.editor.setValue(text);
        this.settings.onFileUploaded.call(this, filename);
      }
    }
  };
  /**
   * Called when a file has failed to upload
   *
   * @param  {XMLHttpRequest} xhr
   * @return {Void}
   */


  inlineAttachment.prototype.onFileUploadError = function (xhr) {
    if (this.settings.onFileUploadError.call(this, xhr) !== false) {
      var text = this.editor.getValue().replace(this.lastValue, this.settings.errorText);
      this.editor.setValue(text);
    }
  };
  /**
   * Called when a file has been inserted, either by drop or paste
   *
   * @param  {File} file
   * @return {Void}
   */


  inlineAttachment.prototype.onFileInserted = function (file) {
    if (this.settings.onFileReceived.call(this, file) !== false) {
      this.lastValue = this.settings.progressText;
      this.editor.insertValue(this.lastValue);
    }
  };
  /**
   * Called when a paste event occured
   * @param  {Event} e
   * @return {Boolean} if the event was handled
   */


  inlineAttachment.prototype.onPaste = function (e) {
    var result = false;
    var clipboardData = e.clipboardData;
    var items;

    if (_typeof(clipboardData) === 'object') {
      items = clipboardData.items || clipboardData.files || [];

      for (var i = 0; i < items.length; i++) {
        var item = items[i];

        if (this.isFileAllowed(item)) {
          result = true;
          this.onFileInserted(item.getAsFile());
          this.uploadFile(item.getAsFile());
        }
      }
    }

    if (result) {
      e.preventDefault();
    }

    return result;
  };
  /**
   * Called when a drop event occures
   * @param  {Event} e
   * @return {Boolean} if the event was handled
   */


  inlineAttachment.prototype.onDrop = function (e) {
    var result = false;

    for (var i = 0; i < e.dataTransfer.files.length; i++) {
      var file = e.dataTransfer.files[i];

      if (this.isFileAllowed(file)) {
        result = true;
        this.onFileInserted(file);
        this.uploadFile(file);
      }
    }

    return result;
  };

  window.inlineAttachment = inlineAttachment;
})(document, window);

/***/ }),

/***/ "./src/components/editor/src/Editor.vue":
/*!**********************************************!*\
  !*** ./src/components/editor/src/Editor.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor_vue_vue_type_template_id_278995cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=278995cc& */ "./src/components/editor/src/Editor.vue?vue&type=template&id=278995cc&");
/* harmony import */ var _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&lang=js& */ "./src/components/editor/src/Editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Editor.vue?vue&type=style&index=0&lang=scss& */ "./src/components/editor/src/Editor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Editor_vue_vue_type_template_id_278995cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Editor_vue_vue_type_template_id_278995cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/editor/src/Editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/editor/src/Editor.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/editor/src/Editor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/editor/src/Editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/editor/src/Editor.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************!*\
  !*** ./src/components/editor/src/Editor.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_3_node_modules_sass_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/extract-text-webpack-plugin/dist/loader.js??ref--7-0!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-3!../../../../node_modules/sass-loader/lib/loader.js??ref--7-4!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/laravel-mix/node_modules/extract-text-webpack-plugin/dist/loader.js?!./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/editor/src/Editor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_laravel_mix_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_3_node_modules_sass_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_3_node_modules_sass_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_laravel_mix_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_3_node_modules_sass_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_laravel_mix_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_3_node_modules_sass_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_3_node_modules_sass_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/editor/src/Editor.vue?vue&type=template&id=278995cc&":
/*!*****************************************************************************!*\
  !*** ./src/components/editor/src/Editor.vue?vue&type=template&id=278995cc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_278995cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=template&id=278995cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/editor/src/Editor.vue?vue&type=template&id=278995cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_278995cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_278995cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/markdown-body.vue":
/*!******************************************!*\
  !*** ./src/components/markdown-body.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markdown_body_vue_vue_type_template_id_161dffe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown-body.vue?vue&type=template&id=161dffe0& */ "./src/components/markdown-body.vue?vue&type=template&id=161dffe0&");
/* harmony import */ var _markdown_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown-body.vue?vue&type=script&lang=js& */ "./src/components/markdown-body.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _markdown_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _markdown_body_vue_vue_type_template_id_161dffe0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _markdown_body_vue_vue_type_template_id_161dffe0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/markdown-body.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/markdown-body.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/markdown-body.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_markdown_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./markdown-body.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/markdown-body.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_markdown_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/markdown-body.vue?vue&type=template&id=161dffe0&":
/*!*************************************************************************!*\
  !*** ./src/components/markdown-body.vue?vue&type=template&id=161dffe0& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_markdown_body_vue_vue_type_template_id_161dffe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./markdown-body.vue?vue&type=template&id=161dffe0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/markdown-body.vue?vue&type=template&id=161dffe0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_markdown_body_vue_vue_type_template_id_161dffe0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_markdown_body_vue_vue_type_template_id_161dffe0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);