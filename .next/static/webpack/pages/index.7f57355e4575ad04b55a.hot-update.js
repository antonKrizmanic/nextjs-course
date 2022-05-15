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
      return console.log(data);
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.newsletter,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Sign up to stay updated!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJOZXdzbGV0dGVyUmVnaXN0cmF0aW9uIiwibm90aWZpY2F0aW9uQ3R4IiwidXNlQ29udGV4dCIsIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJlbWFpbElucHV0UmVmIiwidXNlUmVmIiwicmVnaXN0cmF0aW9uSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsIm5ld3NsZXR0ZXIiLCJjb250cm9sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxzQkFBVCxHQUFrQztBQUFBOztBQUVoQyxNQUFNQyxlQUFlLEdBQUdDLHdEQUFVLENBQUNDLG1FQUFELENBQWxDO0FBRUEsTUFBTUMsYUFBYSxHQUFHQyxvREFBTSxFQUE1Qjs7QUFDQSxXQUFTQyxtQkFBVCxDQUE2QkMsS0FBN0IsRUFBb0M7QUFDbENBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQU1DLFlBQVksR0FBR0wsYUFBYSxDQUFDTSxPQUFkLENBQXNCQyxLQUEzQztBQUVBQyxTQUFLLENBQUMsaUJBQUQsRUFBb0I7QUFDdkJDLFlBQU0sRUFBRSxNQURlO0FBRXZCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVDLGFBQUssRUFBRVI7QUFBVCxPQUFmLENBRmlCO0FBR3ZCUyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUhjLEtBQXBCLENBQUwsQ0FNR0MsSUFOSCxDQU1RLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBTmhCLEVBT0dGLElBUEgsQ0FPUSxVQUFDRyxJQUFEO0FBQUEsYUFBVUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosQ0FBVjtBQUFBLEtBUFI7QUFRRDs7QUFFRCxzQkFDRTtBQUFTLGFBQVMsRUFBRUcsMEVBQU8sQ0FBQ0MsVUFBNUI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxjQUFRLEVBQUVwQixtQkFBaEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVtQiwwRUFBTyxDQUFDRSxPQUF4QjtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxZQUFFLEVBQUMsT0FGTDtBQUdFLHFCQUFXLEVBQUMsWUFIZDtBQUlFLHdCQUFXLFlBSmI7QUFLRSxhQUFHLEVBQUV2QjtBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBckNRSixzQjs7S0FBQUEsc0I7QUF1Q01BLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdmNTczNTVlNDU3NWFkMDRiNTVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLm1vZHVsZS5jc3MnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRleHQgZnJvbSAnLi4vLi4vc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHQnO1xuXG5mdW5jdGlvbiBOZXdzbGV0dGVyUmVnaXN0cmF0aW9uKCkge1xuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbkN0eCA9IHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgZW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBmdW5jdGlvbiByZWdpc3RyYXRpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGZldGNoKCcvYXBpL25ld3NsZXR0ZXInLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGVudGVyZWRFbWFpbCB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbnMvanNvbicsXG4gICAgICB9XG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubmV3c2xldHRlcn0+XG4gICAgICA8aDI+U2lnbiB1cCB0byBzdGF5IHVwZGF0ZWQhPC9oMj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtyZWdpc3RyYXRpb25IYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgIGlkPSdlbWFpbCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdZb3VyIGVtYWlsJ1xuICAgICAgICAgICAgYXJpYS1sYWJlbD0nWW91ciBlbWFpbCdcbiAgICAgICAgICAgIHJlZj17ZW1haWxJbnB1dFJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzbGV0dGVyUmVnaXN0cmF0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==