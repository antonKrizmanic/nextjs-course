webpackHotUpdate_N_E("pages/_app",{

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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (activeNotification && (activeNotification.status === 'success' || activeNotification.status === 'error')) {
      var timer = setTimeout(function () {
        setActiveNotification(null);
      }, 3000);
      return function () {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

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
    lineNumber: 41,
    columnNumber: 9
  }, this);
}

_s(NotificationContextProvider, "Wi3E3Psx/3AX/beWJcnxb8rsCKk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHQuanMiXSwibmFtZXMiOlsiTm90aWZpY2F0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJub3RpZmljYXRpb24iLCJzaG93Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uRGF0YSIsImhpZGVOb3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiYWN0aXZlTm90aWZpY2F0aW9uIiwic2V0QWN0aXZlTm90aWZpY2F0aW9uIiwidXNlRWZmZWN0Iiwic3RhdHVzIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2hvd05vdGlmaWNhdGlvbkhhbmRsZXIiLCJoaWRlTm90aWZpY2F0aW9uSGFuZGxlciIsImNvbnRleHQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxtQkFBbUIsZ0JBQUdDLDJEQUFhLENBQUM7QUFDdENDLGNBQVksRUFBRSxJQUR3QjtBQUNsQjtBQUNwQkMsa0JBQWdCLEVBQUUsMEJBQVVDLGdCQUFWLEVBQTRCLENBQUcsQ0FGWDtBQUd0Q0Msa0JBQWdCLEVBQUUsNEJBQVksQ0FBRztBQUhLLENBQUQsQ0FBekM7QUFNTyxTQUFTQywyQkFBVCxDQUFxQ0MsS0FBckMsRUFBNEM7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsRUFEYjtBQUFBLE1BQ3hDQyxrQkFEd0M7QUFBQSxNQUNwQkMscUJBRG9COztBQUcvQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUYsa0JBQWtCLEtBQ2pCQSxrQkFBa0IsQ0FBQ0csTUFBbkIsS0FBOEIsU0FBOUIsSUFDR0gsa0JBQWtCLENBQUNHLE1BQW5CLEtBQThCLE9BRmhCLENBQXRCLEVBRWdEO0FBQzVDLFVBQU1DLEtBQUssR0FBR0MsVUFBVSxDQUFDLFlBQU07QUFDM0JKLDZCQUFxQixDQUFDLElBQUQsQ0FBckI7QUFDSCxPQUZ1QixFQUVyQixJQUZxQixDQUF4QjtBQUlBLGFBQU8sWUFBTTtBQUNUSyxvQkFBWSxDQUFDRixLQUFELENBQVo7QUFDSCxPQUZEO0FBR0g7QUFDSixHQVpRLEVBWU4sQ0FBQ0osa0JBQUQsQ0FaTSxDQUFUOztBQWNBLFdBQVNPLHVCQUFULENBQWlDWixnQkFBakMsRUFBbUQ7QUFDL0NNLHlCQUFxQixDQUFDTixnQkFBRCxDQUFyQjtBQUNIOztBQUVELFdBQVNhLHVCQUFULEdBQW1DO0FBQy9CUCx5QkFBcUIsQ0FBQyxJQUFELENBQXJCO0FBQ0g7O0FBRUQsTUFBTVEsT0FBTyxHQUFHO0FBQ1poQixnQkFBWSxFQUFFTyxrQkFERjtBQUVaTixvQkFBZ0IsRUFBRWEsdUJBRk47QUFHWlgsb0JBQWdCLEVBQUVZO0FBSE4sR0FBaEI7QUFNQSxzQkFDSSxxRUFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixTQUFLLEVBQUVDLE9BQXJDO0FBQUEsY0FDS1gsS0FBSyxDQUFDWTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztHQXBDZWIsMkI7O0tBQUFBLDJCO0FBc0NETixrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmViYzQ4MTBjYjBkNmE2MzA3MzhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTm90aWZpY2F0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gICAgbm90aWZpY2F0aW9uOiBudWxsLCAvLyB7dGl0bGUsIG1lc3NhZ2UsIHN0YXR1c31cclxuICAgIHNob3dOb3RpZmljYXRpb246IGZ1bmN0aW9uIChub3RpZmljYXRpb25EYXRhKSB7IH0sXHJcbiAgICBoaWRlTm90aWZpY2F0aW9uOiBmdW5jdGlvbiAoKSB7IH1cclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTm90aWZpY2F0aW9uQ29udGV4dFByb3ZpZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBbYWN0aXZlTm90aWZpY2F0aW9uLCBzZXRBY3RpdmVOb3RpZmljYXRpb25dID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmVOb3RpZmljYXRpb24gJiZcclxuICAgICAgICAgICAgKGFjdGl2ZU5vdGlmaWNhdGlvbi5zdGF0dXMgPT09ICdzdWNjZXNzJyB8fFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlTm90aWZpY2F0aW9uLnN0YXR1cyA9PT0gJ2Vycm9yJykpIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEFjdGl2ZU5vdGlmaWNhdGlvbihudWxsKVxyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FjdGl2ZU5vdGlmaWNhdGlvbl0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb25IYW5kbGVyKG5vdGlmaWNhdGlvbkRhdGEpIHtcclxuICAgICAgICBzZXRBY3RpdmVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uRGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlTm90aWZpY2F0aW9uSGFuZGxlcigpIHtcclxuICAgICAgICBzZXRBY3RpdmVOb3RpZmljYXRpb24obnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IHtcclxuICAgICAgICBub3RpZmljYXRpb246IGFjdGl2ZU5vdGlmaWNhdGlvbixcclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uOiBzaG93Tm90aWZpY2F0aW9uSGFuZGxlcixcclxuICAgICAgICBoaWRlTm90aWZpY2F0aW9uOiBoaWRlTm90aWZpY2F0aW9uSGFuZGxlclxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5vdGlmaWNhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9Ob3RpZmljYXRpb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uQ29udGV4dDsiXSwic291cmNlUm9vdCI6IiJ9