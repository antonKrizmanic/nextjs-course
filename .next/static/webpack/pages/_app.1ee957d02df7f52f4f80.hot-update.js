webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/notification/notification.js":
/*!*************************************************!*\
  !*** ./components/notification/notification.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.module.css */ "./components/notification/notification.module.css");
/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/notification-context */ "./store/notification-context.js");


var _jsxFileName = "C:\\Users\\Anton\\source\\repos\\nextjs-course\\components\\notification\\notification.js",
    _s = $RefreshSig$();





function Notification(props) {
  _s();

  var notificationCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var title = props.title,
      message = props.message,
      status = props.status;
  var statusClasses = '';

  if (status === 'success') {
    statusClasses = _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.success;
  }

  if (status === 'error') {
    statusClasses = _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error;
  }

  if (status === 'pending') {
    statusClasses = _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.pending;
  }

  var activeClasses = "".concat(_notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notification, " ").concat(statusClasses);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: activeClasses,
    onClick: notificationCtx.hideNotification,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

_s(Notification, "RnyxbsESVyWxahxmZw1sLWtWlsc=");

_c = Notification;
/* harmony default export */ __webpack_exports__["default"] = (Notification);

var _c;

$RefreshReg$(_c, "Notification");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_notification_notification__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: "Test",
          message: "Test message",
          status: "error"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
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

var _jsxFileName = "C:\\Users\\Anton\\source\\repos\\nextjs-course\\store\\notification-context.js";

var NotificationContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  notification: null,
  // {title, message, status}
  showNotification: function showNotification() {},
  hideNotification: function hideNotification() {}
});
function NotificationContextProvider(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NotificationContext.Provider, {
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dC5qcyJdLCJuYW1lcyI6WyJOb3RpZmljYXRpb24iLCJwcm9wcyIsIm5vdGlmaWNhdGlvbkN0eCIsInVzZUNvbnRleHQiLCJOb3RpZmljYXRpb25Db250ZXh0IiwidGl0bGUiLCJtZXNzYWdlIiwic3RhdHVzIiwic3RhdHVzQ2xhc3NlcyIsImNsYXNzZXMiLCJzdWNjZXNzIiwiZXJyb3IiLCJwZW5kaW5nIiwiYWN0aXZlQ2xhc3NlcyIsIm5vdGlmaWNhdGlvbiIsImhpZGVOb3RpZmljYXRpb24iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNyZWF0ZUNvbnRleHQiLCJzaG93Tm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9uQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQ3pCLE1BQU1DLGVBQWUsR0FBR0Msd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FBbEM7QUFEeUIsTUFHakJDLEtBSGlCLEdBR1VKLEtBSFYsQ0FHakJJLEtBSGlCO0FBQUEsTUFHVkMsT0FIVSxHQUdVTCxLQUhWLENBR1ZLLE9BSFU7QUFBQSxNQUdEQyxNQUhDLEdBR1VOLEtBSFYsQ0FHRE0sTUFIQztBQUt6QixNQUFJQyxhQUFhLEdBQUcsRUFBcEI7O0FBRUEsTUFBSUQsTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDdEJDLGlCQUFhLEdBQUdDLCtEQUFPLENBQUNDLE9BQXhCO0FBQ0g7O0FBRUQsTUFBSUgsTUFBTSxLQUFLLE9BQWYsRUFBd0I7QUFDcEJDLGlCQUFhLEdBQUdDLCtEQUFPLENBQUNFLEtBQXhCO0FBQ0g7O0FBRUQsTUFBSUosTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDdEJDLGlCQUFhLEdBQUdDLCtEQUFPLENBQUNHLE9BQXhCO0FBQ0g7O0FBRUQsTUFBTUMsYUFBYSxhQUFNSiwrREFBTyxDQUFDSyxZQUFkLGNBQThCTixhQUE5QixDQUFuQjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFSyxhQUFoQjtBQUErQixXQUFPLEVBQUVYLGVBQWUsQ0FBQ2EsZ0JBQXhEO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS1Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLGdCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztHQTNCUU4sWTs7S0FBQUEsWTtBQTZCTUEsMkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNnQixLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN2QyxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLHVGQUFEO0FBQUEsNkJBQ0UscUVBQUMsaUVBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxnREFBRDtBQUFBLGlDQUNFO0FBQU0sZ0JBQUksRUFBQyxVQUFYO0FBQXNCLG1CQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFLRSxxRUFBQyw2RUFBRDtBQUFjLGVBQUssRUFBQyxNQUFwQjtBQUEyQixpQkFBTyxFQUFDLGNBQW5DO0FBQWtELGdCQUFNLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFhRDs7S0FkUUYsSztBQWdCTUEsb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBLElBQU1aLG1CQUFtQixnQkFBR2UsMkRBQWEsQ0FBQztBQUN0Q0wsY0FBWSxFQUFFLElBRHdCO0FBQ2xCO0FBQ3BCTSxrQkFBZ0IsRUFBRSw0QkFBWSxDQUFHLENBRks7QUFHdENMLGtCQUFnQixFQUFFLDRCQUFZLENBQUc7QUFISyxDQUFELENBQXpDO0FBTU8sU0FBU00sMkJBQVQsQ0FBcUNwQixLQUFyQyxFQUE0QztBQUMvQyxzQkFDSSxxRUFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUFBLGNBQStCQSxLQUFLLENBQUNxQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFHSDtLQUplRCwyQjtBQU1EakIsa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xZWU5NTdkMDJkZjdmNTJmNGY4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vbm90aWZpY2F0aW9uLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uQ29udGV4dCBmcm9tICcuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBOb3RpZmljYXRpb24ocHJvcHMpIHtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkN0eCA9IHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgeyB0aXRsZSwgbWVzc2FnZSwgc3RhdHVzIH0gPSBwcm9wcztcclxuXHJcbiAgICBsZXQgc3RhdHVzQ2xhc3NlcyA9ICcnO1xyXG5cclxuICAgIGlmIChzdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLnN1Y2Nlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLmVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xyXG4gICAgICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLnBlbmRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZlQ2xhc3NlcyA9IGAke2NsYXNzZXMubm90aWZpY2F0aW9ufSAke3N0YXR1c0NsYXNzZXN9YDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthY3RpdmVDbGFzc2VzfSBvbkNsaWNrPXtub3RpZmljYXRpb25DdHguaGlkZU5vdGlmaWNhdGlvbn0+XHJcbiAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgQ3VzdG9tTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHQnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOb3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgPEN1c3RvbUxheW91dD5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICA8Tm90aWZpY2F0aW9uIHRpdGxlPVwiVGVzdFwiIG1lc3NhZ2U9XCJUZXN0IG1lc3NhZ2VcIiBzdGF0dXM9XCJlcnJvclwiIC8+XHJcbiAgICAgICAgPC9DdXN0b21MYXlvdXQ+XHJcbiAgICAgIDwvTm90aWZpY2F0aW9uQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE5vdGlmaWNhdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICAgIG5vdGlmaWNhdGlvbjogbnVsbCwgLy8ge3RpdGxlLCBtZXNzYWdlLCBzdGF0dXN9XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICBoaWRlTm90aWZpY2F0aW9uOiBmdW5jdGlvbiAoKSB7IH1cclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTm90aWZpY2F0aW9uQ29udGV4dFByb3ZpZGVyKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOb3RpZmljYXRpb25Db250ZXh0LlByb3ZpZGVyPntwcm9wcy5jaGlsZHJlbn08L05vdGlmaWNhdGlvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25Db250ZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=