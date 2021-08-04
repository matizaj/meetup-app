webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");



var _jsxFileName = "C:\\Users\\TRBC37\\Desktop\\React\\meetup\\pages\\index.js",
    _s = $RefreshSig$();



var MEETUPS = [{
  id: 'm1',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Wiki_training_0226.jpg',
  title: 'meetup-1',
  address: 'LA',
  descripction: 'this is a first meetup'
}, {
  id: 'm2',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Lady_Liberty_under_a_blue_sky_%28cropped%29_%28cropped%29.jpg',
  title: 'meetup-2',
  address: 'NY',
  descripction: 'this is a second meetup'
}, {
  id: 'm3',
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg',
  title: 'meetup-3',
  address: 'SF',
  descripction: 'this is a third meetup'
}];

function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      loadedMeetup = _useState[0],
      setLoadedMeetup = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoadedMeetup(MEETUPS);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: loadedMeetup
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), ";"]
  }, void 0, true);
}

_s(HomePage, "ISDhEYM0vVZGafksFlWVbGXtrpI=");

_c = HomePage;
// export async function getServerSideProps(){
//     return {
//             props: {
//                 meetups: MEETUPS
//             }
//         };
// }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTUVFVFVQUyIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwY3Rpb24iLCJIb21lUGFnZSIsInVzZVN0YXRlIiwibG9hZGVkTWVldHVwIiwic2V0TG9hZGVkTWVldHVwIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQSxJQUFNQSxPQUFPLEdBQUMsQ0FDVjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUMsNEVBRlY7QUFHSUMsT0FBSyxFQUFDLFVBSFY7QUFJSUMsU0FBTyxFQUFDLElBSlo7QUFLSUMsY0FBWSxFQUFFO0FBTGxCLENBRFUsRUFRVjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUMsbUhBRlY7QUFHSUMsT0FBSyxFQUFDLFVBSFY7QUFJSUMsU0FBTyxFQUFDLElBSlo7QUFLSUMsY0FBWSxFQUFFO0FBTGxCLENBUlUsRUFlVjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUMsOEdBRlY7QUFHSUMsT0FBSyxFQUFDLFVBSFY7QUFJSUMsU0FBTyxFQUFDLElBSlo7QUFLSUMsY0FBWSxFQUFFO0FBTGxCLENBZlUsQ0FBZDs7QUF3QkEsU0FBU0MsUUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQyxFQUFELENBRC9CO0FBQUEsTUFDUkMsWUFEUTtBQUFBLE1BQ01DLGVBRE47O0FBRWZDLHlEQUFTLENBQUMsWUFBSTtBQUNWRCxtQkFBZSxDQUFDVCxPQUFELENBQWY7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0Esc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRVE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBQUEsa0JBREo7QUFLSDs7R0FWUUYsUTs7S0FBQUEsUTtBQWlDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGQ3YmQwMTIyNTY2NTVlOWRhNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcbmltcG9ydCB7TW9uZ29DbGllbnR9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuXHJcbmNvbnN0IE1FRVRVUFM9W1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTEnLFxyXG4gICAgICAgIGltYWdlOidodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2YvZmEvV2lraV90cmFpbmluZ18wMjI2LmpwZycsXHJcbiAgICAgICAgdGl0bGU6J21lZXR1cC0xJyxcclxuICAgICAgICBhZGRyZXNzOidMQScsXHJcbiAgICAgICAgZGVzY3JpcGN0aW9uOiAndGhpcyBpcyBhIGZpcnN0IG1lZXR1cCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMicsXHJcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jMy9MYWR5X0xpYmVydHlfdW5kZXJfYV9ibHVlX3NreV8lMjhjcm9wcGVkJTI5XyUyOGNyb3BwZWQlMjkuanBnJyxcclxuICAgICAgICB0aXRsZTonbWVldHVwLTInLFxyXG4gICAgICAgIGFkZHJlc3M6J05ZJyxcclxuICAgICAgICBkZXNjcmlwY3Rpb246ICd0aGlzIGlzIGEgc2Vjb25kIG1lZXR1cCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMycsXHJcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xZS9TYW5fRnJhbmNpc2NvX2Zyb21fdGhlX01hcmluX0hlYWRsYW5kc19pbl9NYXJjaF8yMDE5LmpwZycsXHJcbiAgICAgICAgdGl0bGU6J21lZXR1cC0zJyxcclxuICAgICAgICBhZGRyZXNzOidTRicsXHJcbiAgICAgICAgZGVzY3JpcGN0aW9uOiAndGhpcyBpcyBhIHRoaXJkIG1lZXR1cCdcclxuICAgIH0sXHJcbl1cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCl7XHJcbiAgICBjb25zdCBbbG9hZGVkTWVldHVwLCBzZXRMb2FkZWRNZWV0dXBdPXVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldExvYWRlZE1lZXR1cChNRUVUVVBTKVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWRNZWV0dXB9Lz47XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4gICAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFwaVxyXG4gICAgY29uc3QgY29ubmVjdGlvblN0cmluZyA9ICdtb25nb2RiK3NydjovL25leHRqcy11c2VyOkp1bGthMDE4IUBjbHVzdGVyMC5pOXZheS5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSc7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcpO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbWVldHVwczogbWVldHVwcy5tYXAobT0+KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogbS5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG0uaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBpZDogbS5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6MTBcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgICAgICAgICBtZWV0dXBzOiBNRUVUVVBTXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9O1xyXG4vLyB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==