webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Anton_source_repos_nextjs_course_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");
/* harmony import */ var _components_notification_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/notification/notification */ "./components/notification/notification.js");
/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/notification-context */ "./store/notification-context.js");



var _jsxFileName = "C:\\Users\\Anton\\source\\repos\\nextjs-course\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Anton_source_repos_nextjs_course_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_6__["NotificationContextProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
            name: "viewport",
            content: "initial-scale=1.0, width=device-width"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./store/notification-context.js":
/*!***************************************!*\
  !*** ./store/notification-context.js ***!
  \***************************************/
/*! exports provided: NotificationContextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationContextProvider", function() { return NotificationContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Anton\\source\\repos\\nextjs-course\\store\\notification-context.js",
    _s = $RefreshSig$();


var NotificationContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  notification: null,
  // {title, message, status}
  showNotification: function showNotification(notificationData) {},
  hideNotification: function hideNotification() {}
});
function NotificationContextProvider(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      activeNotification = _useState[0],
      setActiveNotification = _useState[1];

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  var context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NotificationContext.Provider, {
    value: context,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

_s(NotificationContextProvider, "wLVr1fxLAjQly1hSNjMlaG7QQ6Q=");

_c = NotificationContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (NotificationContext);

var _c;

$RefreshReg$(_c, "NotificationContextProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHQuanMiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJOb3RpZmljYXRpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIm5vdGlmaWNhdGlvbiIsInNob3dOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25EYXRhIiwiaGlkZU5vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbkNvbnRleHRQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJhY3RpdmVOb3RpZmljYXRpb24iLCJzZXRBY3RpdmVOb3RpZmljYXRpb24iLCJzaG93Tm90aWZpY2F0aW9uSGFuZGxlciIsImhpZGVOb3RpZmljYXRpb25IYW5kbGVyIiwiY29udGV4dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsdUZBQUQ7QUFBQSw2QkFDRSxxRUFBQyxpRUFBRDtBQUFBLGdDQUNFLHFFQUFDLGdEQUFEO0FBQUEsaUNBQ0U7QUFBTSxnQkFBSSxFQUFDLFVBQVg7QUFBc0IsbUJBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFZRDs7S0FiUUYsSztBQWVNQSxvRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUEsSUFBTUcsbUJBQW1CLGdCQUFHQywyREFBYSxDQUFDO0FBQ3RDQyxjQUFZLEVBQUUsSUFEd0I7QUFDbEI7QUFDcEJDLGtCQUFnQixFQUFFLDBCQUFVQyxnQkFBVixFQUE0QixDQUFHLENBRlg7QUFHdENDLGtCQUFnQixFQUFFLDRCQUFZLENBQUc7QUFISyxDQUFELENBQXpDO0FBTU8sU0FBU0MsMkJBQVQsQ0FBcUNDLEtBQXJDLEVBQTRDO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLEVBRGI7QUFBQSxNQUN4Q0Msa0JBRHdDO0FBQUEsTUFDcEJDLHFCQURvQjs7QUFHL0MsV0FBU0MsdUJBQVQsQ0FBaUNQLGdCQUFqQyxFQUFtRDtBQUMvQ00seUJBQXFCLENBQUNOLGdCQUFELENBQXJCO0FBQ0g7O0FBRUQsV0FBU1EsdUJBQVQsR0FBbUM7QUFDL0JGLHlCQUFxQixDQUFDLElBQUQsQ0FBckI7QUFDSDs7QUFFRCxNQUFNRyxPQUFPLEdBQUc7QUFDWlgsZ0JBQVksRUFBRU8sa0JBREY7QUFFWk4sb0JBQWdCLEVBQUVRLHVCQUZOO0FBR1pOLG9CQUFnQixFQUFFTztBQUhOLEdBQWhCO0FBTUEsc0JBQ0kscUVBQUMsbUJBQUQsQ0FBcUIsUUFBckI7QUFBOEIsU0FBSyxFQUFFQyxPQUFyQztBQUFBLGNBQ0tOLEtBQUssQ0FBQ087QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7R0F0QmVSLDJCOztLQUFBQSwyQjtBQXdCRE4sa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hOWVkZjFkMzY2NGY1NjEzNzUxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBDdXN0b21MYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24nO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5vdGlmaWNhdGlvbkNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICA8Q3VzdG9tTGF5b3V0PlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0N1c3RvbUxheW91dD5cclxuICAgICAgPC9Ob3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE5vdGlmaWNhdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICAgIG5vdGlmaWNhdGlvbjogbnVsbCwgLy8ge3RpdGxlLCBtZXNzYWdlLCBzdGF0dXN9XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uOiBmdW5jdGlvbiAobm90aWZpY2F0aW9uRGF0YSkgeyB9LFxyXG4gICAgaGlkZU5vdGlmaWNhdGlvbjogZnVuY3Rpb24gKCkgeyB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvbkNvbnRleHRQcm92aWRlcihwcm9wcykge1xyXG4gICAgY29uc3QgW2FjdGl2ZU5vdGlmaWNhdGlvbiwgc2V0QWN0aXZlTm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbkhhbmRsZXIobm90aWZpY2F0aW9uRGF0YSkge1xyXG4gICAgICAgIHNldEFjdGl2ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25EYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVOb3RpZmljYXRpb25IYW5kbGVyKCkge1xyXG4gICAgICAgIHNldEFjdGl2ZU5vdGlmaWNhdGlvbihudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250ZXh0ID0ge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbjogYWN0aXZlTm90aWZpY2F0aW9uLFxyXG4gICAgICAgIHNob3dOb3RpZmljYXRpb246IHNob3dOb3RpZmljYXRpb25IYW5kbGVyLFxyXG4gICAgICAgIGhpZGVOb3RpZmljYXRpb246IGhpZGVOb3RpZmljYXRpb25IYW5kbGVyXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Tm90aWZpY2F0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L05vdGlmaWNhdGlvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25Db250ZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=