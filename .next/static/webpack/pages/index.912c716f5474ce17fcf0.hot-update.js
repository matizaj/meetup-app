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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\TRBC37\\Desktop\\React\\meetup\\pages\\index.js";



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

function HomePage(props) {
  // const [loadedMeetup, setLoadedMeetup]=useState([]);
  // useEffect(()=>{
  //     setLoadedMeetup(MEETUPS)
  // }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Next JS Meetup WebPage"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "NextJS Page for Meetups!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), ";"]
  }, void 0, true);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTUVFVFVQUyIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwY3Rpb24iLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLE9BQU8sR0FBQyxDQUNWO0FBQ0lDLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBQyw0RUFGVjtBQUdJQyxPQUFLLEVBQUMsVUFIVjtBQUlJQyxTQUFPLEVBQUMsSUFKWjtBQUtJQyxjQUFZLEVBQUU7QUFMbEIsQ0FEVSxFQVFWO0FBQ0lKLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBQyxtSEFGVjtBQUdJQyxPQUFLLEVBQUMsVUFIVjtBQUlJQyxTQUFPLEVBQUMsSUFKWjtBQUtJQyxjQUFZLEVBQUU7QUFMbEIsQ0FSVSxFQWVWO0FBQ0lKLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBQyw4R0FGVjtBQUdJQyxPQUFLLEVBQUMsVUFIVjtBQUlJQyxTQUFPLEVBQUMsSUFKWjtBQUtJQyxjQUFZLEVBQUU7QUFMbEIsQ0FmVSxDQUFkOztBQXdCQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUNJO0FBQUEsNEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBS0kscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUEsa0JBREo7QUFTSDs7S0FkUUYsUTtBQXFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTEyYzcxNmY1NDc0Y2UxN2ZjZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcbmltcG9ydCB7TW9uZ29DbGllbnR9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuXHJcbmNvbnN0IE1FRVRVUFM9W1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTEnLFxyXG4gICAgICAgIGltYWdlOidodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2YvZmEvV2lraV90cmFpbmluZ18wMjI2LmpwZycsXHJcbiAgICAgICAgdGl0bGU6J21lZXR1cC0xJyxcclxuICAgICAgICBhZGRyZXNzOidMQScsXHJcbiAgICAgICAgZGVzY3JpcGN0aW9uOiAndGhpcyBpcyBhIGZpcnN0IG1lZXR1cCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMicsXHJcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jMy9MYWR5X0xpYmVydHlfdW5kZXJfYV9ibHVlX3NreV8lMjhjcm9wcGVkJTI5XyUyOGNyb3BwZWQlMjkuanBnJyxcclxuICAgICAgICB0aXRsZTonbWVldHVwLTInLFxyXG4gICAgICAgIGFkZHJlc3M6J05ZJyxcclxuICAgICAgICBkZXNjcmlwY3Rpb246ICd0aGlzIGlzIGEgc2Vjb25kIG1lZXR1cCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMycsXHJcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xZS9TYW5fRnJhbmNpc2NvX2Zyb21fdGhlX01hcmluX0hlYWRsYW5kc19pbl9NYXJjaF8yMDE5LmpwZycsXHJcbiAgICAgICAgdGl0bGU6J21lZXR1cC0zJyxcclxuICAgICAgICBhZGRyZXNzOidTRicsXHJcbiAgICAgICAgZGVzY3JpcGN0aW9uOiAndGhpcyBpcyBhIHRoaXJkIG1lZXR1cCdcclxuICAgIH0sXHJcbl1cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKXtcclxuICAgIC8vIGNvbnN0IFtsb2FkZWRNZWV0dXAsIHNldExvYWRlZE1lZXR1cF09dXNlU3RhdGUoW10pO1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvLyAgICAgc2V0TG9hZGVkTWVldHVwKE1FRVRVUFMpXHJcbiAgICAvLyB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5OZXh0IEpTIE1lZXR1cCBXZWJQYWdlPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J05leHRKUyBQYWdlIGZvciBNZWV0dXBzIScvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30vPjtcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XHJcbiAgICAvLyBmZXRjaCBkYXRhIGZyb20gYXBpXHJcbiAgICBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gJ21vbmdvZGIrc3J2Oi8vbmV4dGpzLXVzZXI6SnVsa2EwMTghQGNsdXN0ZXIwLmk5dmF5Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JztcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoY29ubmVjdGlvblN0cmluZyk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcChtPT4oe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBtLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbS5pbWFnZSxcclxuICAgICAgICAgICAgICAgIGlkOiBtLl9pZC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTozNjAwXHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICBwcm9wczoge1xyXG4vLyAgICAgICAgICAgICAgICAgbWVldHVwczogTUVFVFVQU1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfTtcclxuLy8gfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=