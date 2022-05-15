webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-header */ "./components/layout/main-header.js");
/* harmony import */ var _notification_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification/notification */ "./components/notification/notification.js");


var _jsxFileName = "C:\\Users\\Anton\\source\\repos\\nextjs-course\\components\\layout\\layout.js";



function CustomLayout(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_main_header__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_notification_notification__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Test",
      message: "Test message",
      status: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = CustomLayout;
/* harmony default export */ __webpack_exports__["default"] = (CustomLayout);

var _c;

$RefreshReg$(_c, "CustomLayout");

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
/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/notification-context */ "./store/notification-context.js");


var _jsxFileName = "C:\\Users\\Anton\\source\\repos\\nextjs-course\\components\\notification\\notification.js",
    _s = $RefreshSig$();





function Notification(props) {
  _s();

  var notificationCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
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

/***/ "./components/notification/notification.module.css":
/*!*********************************************************!*\
  !*** ./components/notification/notification.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./notification.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/notification/notification.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./notification.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/notification/notification.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./notification.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/notification/notification.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/notification/notification.module.css":
/*!*********************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/notification/notification.module.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".notification_notification__cXnTS {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    height: 5rem;\r\n    width: 100%;\r\n    background-color: #1b1b1b;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-justify-content: space-between;\r\n            justify-content: space-between;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    color: white;\r\n    padding: 0.5rem 10%;\r\n    box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .notification_notification__cXnTS h2 {\r\n    margin: 0;\r\n    font-size: 1.25rem;\r\n    color: white;\r\n  }\r\n  \r\n  .notification_pending__2WIdY {\r\n    background-color: #177cbe;\r\n  }\r\n  \r\n  .notification_success__3JmtW {\r\n    background-color: #10be58;\r\n  }\r\n  \r\n  .notification_error__2npod {\r\n    background-color: #e65035;\r\n  }", "",{"version":3,"sources":["webpack://components/notification/notification.module.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,SAAS;IACT,OAAO;IACP,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,qBAAa;IAAb,aAAa;IACb,sCAA8B;YAA9B,8BAA8B;IAC9B,2BAAmB;YAAnB,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,yCAAyC;EAC3C;;EAEA;IACE,SAAS;IACT,kBAAkB;IAClB,YAAY;EACd;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B","sourcesContent":[".notification {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    height: 5rem;\r\n    width: 100%;\r\n    background-color: #1b1b1b;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    color: white;\r\n    padding: 0.5rem 10%;\r\n    box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .notification h2 {\r\n    margin: 0;\r\n    font-size: 1.25rem;\r\n    color: white;\r\n  }\r\n  \r\n  .pending {\r\n    background-color: #177cbe;\r\n  }\r\n  \r\n  .success {\r\n    background-color: #10be58;\r\n  }\r\n  \r\n  .error {\r\n    background-color: #e65035;\r\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"notification": "notification_notification__cXnTS",
	"pending": "notification_pending__2WIdY",
	"success": "notification_success__3JmtW",
	"error": "notification_error__2npod"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzPzhhMjkiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIkN1c3RvbUxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25DdHgiLCJ1c2VDb250ZXh0IiwiTm90aWZpY2F0aW9uQ29udGV4dCIsInRpdGxlIiwibWVzc2FnZSIsInN0YXR1cyIsInN0YXR1c0NsYXNzZXMiLCJjbGFzc2VzIiwic3VjY2VzcyIsImVycm9yIiwicGVuZGluZyIsImFjdGl2ZUNsYXNzZXMiLCJub3RpZmljYXRpb24iLCJoaWRlTm90aWZpY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBT0EsS0FBSyxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLGtFQUFEO0FBQWMsV0FBSyxFQUFDLE1BQXBCO0FBQTJCLGFBQU8sRUFBQyxjQUFuQztBQUFrRCxZQUFNLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUEsa0JBREY7QUFPRDs7S0FSUUYsWTtBQVVNQSwyRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUF3QixrQkFBa0IsZ0JBQWdCLHFCQUFxQixvQkFBb0Isa0NBQWtDLHNCQUFzQix1Q0FBdUMsNEJBQTRCLHFCQUFxQiw0QkFBNEIsa0RBQWtELE9BQU8sOEJBQThCLGtCQUFrQiwyQkFBMkIscUJBQXFCLE9BQU8sc0JBQXNCLGtDQUFrQyxPQUFPLHNCQUFzQixrQ0FBa0MsT0FBTyxvQkFBb0Isa0NBQWtDLE9BQU8sbUJBQW1CO0FBQ3A4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGY5YmExNWVmYjY0MDUyYWM4MjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluSGVhZGVyIGZyb20gJy4vbWFpbi1oZWFkZXInO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4uL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24nO1xyXG5cclxuZnVuY3Rpb24gQ3VzdG9tTGF5b3V0KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNYWluSGVhZGVyIC8+XHJcbiAgICAgIDxtYWluPntwcm9wcy5jaGlsZHJlbn08L21haW4+XHJcbiAgICAgIDxOb3RpZmljYXRpb24gdGl0bGU9XCJUZXN0XCIgbWVzc2FnZT1cIlRlc3QgbWVzc2FnZVwiIHN0YXR1cz1cImVycm9yXCIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUxheW91dDtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vbm90aWZpY2F0aW9uLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uQ29udGV4dCBmcm9tICcuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBOb3RpZmljYXRpb24ocHJvcHMpIHtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkN0eCA9IHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgeyB0aXRsZSwgbWVzc2FnZSwgc3RhdHVzIH0gPSBwcm9wcztcclxuXHJcbiAgICBsZXQgc3RhdHVzQ2xhc3NlcyA9ICcnO1xyXG5cclxuICAgIGlmIChzdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLnN1Y2Nlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLmVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xyXG4gICAgICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLnBlbmRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZlQ2xhc3NlcyA9IGAke2NsYXNzZXMubm90aWZpY2F0aW9ufSAke3N0YXR1c0NsYXNzZXN9YDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthY3RpdmVDbGFzc2VzfSBvbkNsaWNrPXtub3RpZmljYXRpb25DdHguaGlkZU5vdGlmaWNhdGlvbn0+XHJcbiAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vbm90aWZpY2F0aW9uLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcclxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxyXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxyXG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcclxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxyXG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXHJcbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcclxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcclxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9ub3RpZmljYXRpb24ubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ub3RpZmljYXRpb25fbm90aWZpY2F0aW9uX19jWG5UUyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFiO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDEwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ub3RpZmljYXRpb25fbm90aWZpY2F0aW9uX19jWG5UUyBoMiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ub3RpZmljYXRpb25fcGVuZGluZ19fMldJZFkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc3Y2JlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubm90aWZpY2F0aW9uX3N1Y2Nlc3NfXzNKbXRXIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwYmU1ODtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm5vdGlmaWNhdGlvbl9lcnJvcl9fMm5wb2Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY1MDM1O1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFhO0lBQWIsYUFBYTtJQUNiLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ub3RpZmljYXRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIxYjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxMCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubm90aWZpY2F0aW9uIGgyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBlbmRpbmcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc3Y2JlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc3VjY2VzcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMGJlNTg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lcnJvciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjUwMzU7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibm90aWZpY2F0aW9uXCI6IFwibm90aWZpY2F0aW9uX25vdGlmaWNhdGlvbl9fY1huVFNcIixcblx0XCJwZW5kaW5nXCI6IFwibm90aWZpY2F0aW9uX3BlbmRpbmdfXzJXSWRZXCIsXG5cdFwic3VjY2Vzc1wiOiBcIm5vdGlmaWNhdGlvbl9zdWNjZXNzX18zSm10V1wiLFxuXHRcImVycm9yXCI6IFwibm90aWZpY2F0aW9uX2Vycm9yX18ybnBvZFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=