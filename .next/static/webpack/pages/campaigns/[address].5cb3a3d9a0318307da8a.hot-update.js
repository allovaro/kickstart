/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]",{

/***/ "./components/contributeForm.js":
/*!**************************************!*\
  !*** ./components/contributeForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_kirill_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kirill_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_kirill_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/kirill/kickstart/components/contributeForm.js\";\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_9___default().createElement);\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar ContributeForm = /*#__PURE__*/function (_Component) {\n  (0,_home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(ContributeForm, _Component);\n\n  var _super = _createSuper(ContributeForm);\n\n  function ContributeForm() {\n    var _this;\n\n    (0,_home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, ContributeForm);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    (0,_home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__.default)((0,_home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), \"state\", {\n      value: '',\n      loading: false,\n      errorMessage: ''\n    });\n\n    (0,_home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__.default)((0,_home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), \"onSubmit\", /*#__PURE__*/function () {\n      var _ref = (0,_home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kirill_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n        var campaign, accounts;\n        return _home_kirill_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                event.preventDefault();\n                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__.default)(_this.props.address);\n\n                _this.setState({\n                  loading: true,\n                  errorMessage: ''\n                });\n\n                _context.prev = 3;\n                _context.next = 6;\n                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.eth.getAccounts();\n\n              case 6:\n                accounts = _context.sent;\n                _context.next = 9;\n                return campaign.methods.contribute().send({\n                  from: accounts[0],\n                  value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.utils.toWei(_this.state.value, 'ether')\n                });\n\n              case 9:\n                next_router__WEBPACK_IMPORTED_MODULE_12___default().replace(\"/campaigns/\".concat(_this.props.address));\n                _context.next = 16;\n                break;\n\n              case 12:\n                _context.prev = 12;\n                _context.t0 = _context[\"catch\"](3);\n\n                _this.setState({\n                  errorMessage: _context.t0.message\n                });\n\n                console.log(_this.state.errorMessage);\n\n              case 16:\n                _this.setState({\n                  loading: true,\n                  value: ''\n                });\n\n              case 17:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[3, 12]]);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n\n    return _this;\n  }\n\n  (0,_home_kirill_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(ContributeForm, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Form, {\n        onSubmit: this.onSubmit,\n        error: !!this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 7\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Form.Field, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }\n      }, \"Amount to Contribute\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Input, {\n        value: this.state.value,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            value: event.target.value\n          });\n        },\n        label: \"ether\",\n        labelPosition: \"right\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Message, {\n        error: true,\n        header: \"Oops!\",\n        content: this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 9\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {\n        primary: true,\n        loading: this.state.loading,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }\n      }, \"Contribute!\"));\n    }\n  }]);\n\n  return ContributeForm;\n}(react__WEBPACK_IMPORTED_MODULE_9__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250cmlidXRlRm9ybS5qcz8yODQ1Il0sIm5hbWVzIjpbIkNvbnRyaWJ1dGVGb3JtIiwidmFsdWUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsIndlYjMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJzdGF0ZSIsIlJvdXRlciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJ0YXJnZXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsYzs7Ozs7Ozs7Ozs7Ozs7Ozt3UUFDSTtBQUNOQyxXQUFLLEVBQUUsRUFERDtBQUVOQyxhQUFPLEVBQUUsS0FGSDtBQUdOQyxrQkFBWSxFQUFFO0FBSFIsSzs7O2lRQU1HLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQSxxQkFBSyxDQUFDQyxjQUFOO0FBQ01DLHdCQUZHLEdBRVFDLDREQUFRLENBQUMsTUFBS0MsS0FBTCxDQUFXQyxPQUFaLENBRmhCOztBQUlULHNCQUFLQyxRQUFMLENBQWM7QUFBRVIseUJBQU8sRUFBRSxJQUFYO0FBQWlCQyw4QkFBWSxFQUFFO0FBQS9CLGlCQUFkOztBQUpTO0FBQUE7QUFBQSx1QkFPZ0JRLG9FQUFBLEVBUGhCOztBQUFBO0FBT0RDLHdCQVBDO0FBQUE7QUFBQSx1QkFRRE4sUUFBUSxDQUFDTyxPQUFULENBQWlCQyxVQUFqQixHQUE4QkMsSUFBOUIsQ0FBbUM7QUFDdkNDLHNCQUFJLEVBQUVKLFFBQVEsQ0FBQyxDQUFELENBRHlCO0FBRXZDWCx1QkFBSyxFQUFFVSxnRUFBQSxDQUFpQixNQUFLTSxLQUFMLENBQVdoQixLQUE1QixFQUFtQyxPQUFuQztBQUZnQyxpQkFBbkMsQ0FSQzs7QUFBQTtBQVlQaUIsMkVBQUEsc0JBQTZCLE1BQUtWLEtBQUwsQ0FBV0MsT0FBeEM7QUFaTztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFjUCxzQkFBS0MsUUFBTCxDQUFjO0FBQUVQLDhCQUFZLEVBQUUsWUFBSWdCO0FBQXBCLGlCQUFkOztBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0osS0FBTCxDQUFXZCxZQUF2Qjs7QUFmTztBQWlCVCxzQkFBS08sUUFBTCxDQUFjO0FBQUVSLHlCQUFPLEVBQUUsSUFBWDtBQUFpQkQsdUJBQUssRUFBRTtBQUF4QixpQkFBZDs7QUFqQlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7OzZCQW9CRjtBQUFBOztBQUNQLGFBQ0UsTUFBQyxvREFBRDtBQUFNLGdCQUFRLEVBQUUsS0FBS3FCLFFBQXJCO0FBQStCLGFBQUssRUFBRSxDQUFDLENBQUMsS0FBS0wsS0FBTCxDQUFXZCxZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFLE1BQUMscURBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS2MsS0FBTCxDQUFXaEIsS0FEcEI7QUFFRSxnQkFBUSxFQUFFLGtCQUFBRyxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDTSxRQUFMLENBQWM7QUFBRVQsaUJBQUssRUFBRUcsS0FBSyxDQUFDbUIsTUFBTixDQUFhdEI7QUFBdEIsV0FBZCxDQUFKO0FBQUEsU0FGakI7QUFHRSxhQUFLLEVBQUMsT0FIUjtBQUlFLHFCQUFhLEVBQUMsT0FKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREYsRUFVRSxNQUFDLHVEQUFEO0FBQVMsYUFBSyxNQUFkO0FBQWUsY0FBTSxFQUFDLE9BQXRCO0FBQThCLGVBQU8sRUFBRSxLQUFLZ0IsS0FBTCxDQUFXZCxZQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVkYsRUFXRSxNQUFDLHNEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQWdCLGVBQU8sRUFBRSxLQUFLYyxLQUFMLENBQVdmLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEYsQ0FERjtBQWlCRDs7OztFQTdDMEJzQiw0Qzs7QUFpRDdCLCtEQUFleEIsY0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29udHJpYnV0ZUZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jbGFzcyBDb250cmlidXRlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvck1lc3NhZ2U6ICcnXG4gIH07XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLnZhbHVlLCAnZXRoZXInKVxuICAgICAgfSk7XG4gICAgICBSb3V0ZXIucmVwbGFjZShgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgdmFsdWU6ICcnIH0pXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+QW1vdW50IHRvIENvbnRyaWJ1dGU8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnkgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfT5cbiAgICAgICAgICBDb250cmlidXRlIVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contributeForm.js\n");

/***/ })

});