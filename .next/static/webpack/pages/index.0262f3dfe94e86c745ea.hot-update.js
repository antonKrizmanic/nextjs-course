webpackHotUpdate_N_E("pages/index",{

/***/ "./components/input/newsletter-registration.js":
/*!*****************************************************!*\
  !*** ./components/input/newsletter-registration.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsletter-registration.module.css */ "./components/input/newsletter-registration.module.css");
/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/notification-context */ "./store/notification-context.js");


var _jsxFileName = "C:\\Users\\Anton\\source\\repos\\nextjs-course\\components\\input\\newsletter-registration.js",
    _s = $RefreshSig$();





function NewsletterRegistration() {
  _s();

  var notificationCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var emailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function registrationHandler(event) {
    event.preventDefault();
    var enteredEmail = emailInputRef.current.value;
    notificationCtx.showNotification({
      title: 'Signing useImperativeHandle...',
      message: 'Registering for newsletter.',
      status: 'pending'
    });
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail
      }),
      headers: {
        'Content-Type': 'applications/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      notificationCtx.showNotification({
        title: 'Success!',
        message: 'Successfully registered for newsletter!.',
        status: 'success'
      });
    })["catch"](function (error) {
      notificationCtx.showNotification({
        title: 'Error!',
        message: error.message || 'Something went wrong!',
        status: 'error'
      });
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.newsletter,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Sign up to stay updated!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: registrationHandler,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          placeholder: "Your email",
          "aria-label": "Your email",
          ref: emailInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

_s(NewsletterRegistration, "y/dA4DRcwFkzkEzaaDHxvV8DiBk=");

_c = NewsletterRegistration;
/* harmony default export */ __webpack_exports__["default"] = (NewsletterRegistration);

var _c;

$RefreshReg$(_c, "NewsletterRegistration");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJOZXdzbGV0dGVyUmVnaXN0cmF0aW9uIiwibm90aWZpY2F0aW9uQ3R4IiwidXNlQ29udGV4dCIsIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJlbWFpbElucHV0UmVmIiwidXNlUmVmIiwicmVnaXN0cmF0aW9uSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJzaG93Tm90aWZpY2F0aW9uIiwidGl0bGUiLCJtZXNzYWdlIiwic3RhdHVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJjbGFzc2VzIiwibmV3c2xldHRlciIsImNvbnRyb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLHNCQUFULEdBQWtDO0FBQUE7O0FBQ2hDLE1BQU1DLGVBQWUsR0FBR0Msd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FBbEM7QUFFQSxNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCOztBQUVBLFdBQVNDLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUNsQ0EsU0FBSyxDQUFDQyxjQUFOO0FBRUEsUUFBTUMsWUFBWSxHQUFHTCxhQUFhLENBQUNNLE9BQWQsQ0FBc0JDLEtBQTNDO0FBRUFWLG1CQUFlLENBQUNXLGdCQUFoQixDQUFpQztBQUMvQkMsV0FBSyxFQUFFLGdDQUR3QjtBQUUvQkMsYUFBTyxFQUFFLDZCQUZzQjtBQUcvQkMsWUFBTSxFQUFFO0FBSHVCLEtBQWpDO0FBTUFDLFNBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUN2QkMsWUFBTSxFQUFFLE1BRGU7QUFFdkJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUMsYUFBSyxFQUFFWjtBQUFULE9BQWYsQ0FGaUI7QUFHdkJhLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBSGMsS0FBcEIsQ0FBTCxDQU1HQyxJQU5ILENBTVEsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FOaEIsRUFPR0YsSUFQSCxDQU9RLFVBQUNHLElBQUQsRUFBVTtBQUNkekIscUJBQWUsQ0FBQ1csZ0JBQWhCLENBQWlDO0FBQy9CQyxhQUFLLEVBQUUsVUFEd0I7QUFFL0JDLGVBQU8sRUFBRSwwQ0FGc0I7QUFHL0JDLGNBQU0sRUFBRTtBQUh1QixPQUFqQztBQUtELEtBYkgsV0FjUyxVQUFBWSxLQUFLLEVBQUk7QUFDZDFCLHFCQUFlLENBQUNXLGdCQUFoQixDQUFpQztBQUMvQkMsYUFBSyxFQUFFLFFBRHdCO0FBRS9CQyxlQUFPLEVBQUVhLEtBQUssQ0FBQ2IsT0FBTixJQUFpQix1QkFGSztBQUcvQkMsY0FBTSxFQUFFO0FBSHVCLE9BQWpDO0FBS0QsS0FwQkg7QUFxQkQ7O0FBRUQsc0JBQ0U7QUFBUyxhQUFTLEVBQUVhLDBFQUFPLENBQUNDLFVBQTVCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQU0sY0FBUSxFQUFFdkIsbUJBQWhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFc0IsMEVBQU8sQ0FBQ0UsT0FBeEI7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsWUFBRSxFQUFDLE9BRkw7QUFHRSxxQkFBVyxFQUFDLFlBSGQ7QUFJRSx3QkFBVyxZQUpiO0FBS0UsYUFBRyxFQUFFMUI7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztHQXhEUUosc0I7O0tBQUFBLHNCO0FBMERNQSxxRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMjYyZjNkZmU5NGU4NmM3NDVlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VDb250ZXh0LCB1c2VJbXBlcmF0aXZlSGFuZGxlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5tb2R1bGUuY3NzJztcbmltcG9ydCBOb3RpZmljYXRpb25Db250ZXh0IGZyb20gJy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0JztcblxuZnVuY3Rpb24gTmV3c2xldHRlclJlZ2lzdHJhdGlvbigpIHtcbiAgY29uc3Qgbm90aWZpY2F0aW9uQ3R4ID0gdXNlQ29udGV4dChOb3RpZmljYXRpb25Db250ZXh0KTtcblxuICBjb25zdCBlbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgZnVuY3Rpb24gcmVnaXN0cmF0aW9uSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBlbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICB0aXRsZTogJ1NpZ25pbmcgdXNlSW1wZXJhdGl2ZUhhbmRsZS4uLicsXG4gICAgICBtZXNzYWdlOiAnUmVnaXN0ZXJpbmcgZm9yIG5ld3NsZXR0ZXIuJyxcbiAgICAgIHN0YXR1czogJ3BlbmRpbmcnXG4gICAgfSk7XG5cbiAgICBmZXRjaCgnL2FwaS9uZXdzbGV0dGVyJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOiBlbnRlcmVkRW1haWwgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb25zL2pzb24nLFxuICAgICAgfVxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyEnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBmb3IgbmV3c2xldHRlciEuJyxcbiAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJ1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgdGl0bGU6ICdFcnJvciEnLFxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3ZW50IHdyb25nIScsXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXdzbGV0dGVyfT5cbiAgICAgIDxoMj5TaWduIHVwIHRvIHN0YXkgdXBkYXRlZCE8L2gyPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3JlZ2lzdHJhdGlvbkhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1lvdXIgZW1haWwnXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSdZb3VyIGVtYWlsJ1xuICAgICAgICAgICAgcmVmPXtlbWFpbElucHV0UmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NsZXR0ZXJSZWdpc3RyYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9