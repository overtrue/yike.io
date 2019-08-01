(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/auth/register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/auth/register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var $icons_GooglePlus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $icons/GooglePlus */ "./node_modules/vue-material-design-icons/GooglePlus.vue");
/* harmony import */ var $icons_Facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! $icons/Facebook */ "./node_modules/vue-material-design-icons/Facebook.vue");
/* harmony import */ var $icons_Qqchat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! $icons/Qqchat */ "./node_modules/vue-material-design-icons/Qqchat.vue");
/* harmony import */ var $icons_GithubCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! $icons/GithubCircle */ "./node_modules/vue-material-design-icons/GithubCircle.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'register',
  components: {
    GooglePlus: $icons_GooglePlus__WEBPACK_IMPORTED_MODULE_2__["default"],
    FacebookIcon: $icons_Facebook__WEBPACK_IMPORTED_MODULE_3__["default"],
    QqIcon: $icons_Qqchat__WEBPACK_IMPORTED_MODULE_4__["default"],
    GithubIcon: $icons_GithubCircle__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      username: '',
      email: '',
      password: '',
      ticket: null,
      randstr: null,
      error: true,
      regex: {
        email: /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-.]+.(com|io|cc|co|li|it|sh|cn|net|org|jp|tw|me|info|us|in|la|pro|im|so|at|my|ren|red|top|ltd|fun|vip)$/,
        username: /^[a-zA-Z]+[a-zA-Z0-9_-]+$/
      }
    };
  },
  watch: {
    username: function username() {
      this.$refs['usernameInput'].classList.remove('is-invalid');
    },
    email: function email() {
      this.$refs['emailInput'].classList.remove('is-invalid');
    }
  },
  computed: {
    formReady: function formReady() {
      return !this.error && this.email.match(this.regex.email) && this.username.match(this.regex.username) && this.username.length >= 5 && this.username.length <= 12 && this.password.length >= 6 && this.password.length <= 32;
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['attemptRegister']), {
    validateUsername: function validateUsername() {
      var _this = this;

      this.error = false;

      if (!this.username.match(this.regex.username) || this.username.length < 5) {
        this.error = true;
        this.$refs['usernameInput'].classList.add('is-invalid');
        return this.$message.error('请输入 5 ~ 12 位正确格式用户名');
      }

      this.$http.post('user/exists', {
        username: this.username
      }).then(function (response) {
        if (!response.success) {
          _this.error = true;

          _this.$refs['usernameInput'].classList.add('is-invalid');

          return _this.$message.error('用户名已经存在！');
        }
      });
    },
    validateEmail: function validateEmail() {
      var _this2 = this;

      this.error = false;

      if (!this.email.match(this.regex.email)) {
        this.error = true;
        this.$refs['emailInput'].classList.add('is-invalid');
        return this.$message.error('请输入正确的邮箱地址');
      }

      this.$http.post('user/exists', {
        email: this.email
      }).then(function (response) {
        if (!response.success) {
          _this2.error = true;

          _this2.$refs['emailInput'].classList.add('is-invalid');

          return _this2.$message.error('邮箱已经存在！');
        }
      });
    },
    showCaptcha: function showCaptcha() {
      var _this3 = this;

      var captcha = new window.TencentCaptcha("2013342827", function (res) {
        if (res.ret === 0) {
          _this3.ticket = res.ticket;
          _this3.randstr = res.randstr;

          _this3.submit();
        } else {
          return _this3.$message.error('请先完成验证！');
        }
      });
      captcha.show();
    },
    submit: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.ticket) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", this.$message.error('请先完成验证！'));

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return this.attemptRegister(this.$data);

              case 5:
                this.$message.warning('注册成功，请先验证你邮箱地址！');
                this.$router.push({
                  name: 'home'
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);

                if (_context.t0.status !== 422) {
                  this.$message.error('注册失败！');
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/auth/register.vue?vue&type=template&id=4cc200ce&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/auth/register.vue?vue&type=template&id=4cc200ce& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row pt-3" }, [
    _c("div", { staticClass: "offset-sm-4 col-sm-4" }, [
      _c("div", { staticClass: "box" }, [
        _c("h4", { staticClass: "text-center font-weight-normal mt-2" }, [
          _vm._v("用户注册")
        ]),
        _vm._v(" "),
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.showCaptcha($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("邮箱地址")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.email,
                    expression: "email"
                  }
                ],
                ref: "emailInput",
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  placeholder: "example@yike.io",
                  required: ""
                },
                domProps: { value: _vm.email },
                on: {
                  blur: _vm.validateEmail,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("用户名")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.username,
                    expression: "username"
                  }
                ],
                ref: "usernameInput",
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  placeholder: "5 ~ 12 位字母或数字",
                  required: ""
                },
                domProps: { value: _vm.username },
                on: {
                  blur: _vm.validateUsername,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.username = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("密码")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password"
                  }
                ],
                ref: "passwordInput",
                staticClass: "form-control",
                attrs: {
                  type: "password",
                  placeholder: "6 ~ 32 位安全密码",
                  required: ""
                },
                domProps: { value: _vm.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "my-2 btn btn-primary w-100",
                attrs: { type: "submit", disabled: !_vm.formReady }
              },
              [_vm._v("注册")]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offset-sm-3 col-sm-6 text-center mt-2" }, [
      _c(
        "p",
        [
          _vm._v("\n      已有账号？\n      "),
          _c(
            "router-link",
            { staticClass: "text-blue", attrs: { to: { name: "auth.login" } } },
            [_vm._v("快速登录")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/modules/auth/register.vue":
/*!***************************************!*\
  !*** ./src/modules/auth/register.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_4cc200ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=4cc200ce& */ "./src/modules/auth/register.vue?vue&type=template&id=4cc200ce&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./src/modules/auth/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_4cc200ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_4cc200ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/auth/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/modules/auth/register.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/modules/auth/register.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/auth/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/modules/auth/register.vue?vue&type=template&id=4cc200ce&":
/*!**********************************************************************!*\
  !*** ./src/modules/auth/register.vue?vue&type=template&id=4cc200ce& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_4cc200ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=4cc200ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/auth/register.vue?vue&type=template&id=4cc200ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_4cc200ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_4cc200ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);