webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Next JS Meetup WebPage"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTUVFVFVQUyIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwY3Rpb24iLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCLG1CQUFPLENBQUMscUZBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXREO0FBQ0E7QUFFQTtBQUdBLElBQU1BLE9BQU8sR0FBQyxDQUNWO0FBQ0lDLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBQyw0RUFGVjtBQUdJQyxPQUFLLEVBQUMsVUFIVjtBQUlJQyxTQUFPLEVBQUMsSUFKWjtBQUtJQyxjQUFZLEVBQUU7QUFMbEIsQ0FEVSxFQVFWO0FBQ0lKLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBQyxtSEFGVjtBQUdJQyxPQUFLLEVBQUMsVUFIVjtBQUlJQyxTQUFPLEVBQUMsSUFKWjtBQUtJQyxjQUFZLEVBQUU7QUFMbEIsQ0FSVSxFQWVWO0FBQ0lKLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBQyw4R0FGVjtBQUdJQyxPQUFLLEVBQUMsVUFIVjtBQUlJQyxTQUFPLEVBQUMsSUFKWjtBQUtJQyxjQUFZLEVBQUU7QUFMbEIsQ0FmVSxDQUFkOztBQXdCQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUNJO0FBQUEsNEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUlJLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBLGtCQURKO0FBUUg7O0tBYlFGLFE7QUFvQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR2VBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJkNGVmYWQzYjMyYTBmZGY2OTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQge01vbmdvQ2xpZW50fSBmcm9tICdtb25nb2RiJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcblxyXG5jb25zdCBNRUVUVVBTPVtcclxuICAgIHtcclxuICAgICAgICBpZDogJ20xJyxcclxuICAgICAgICBpbWFnZTonaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9mL2ZhL1dpa2lfdHJhaW5pbmdfMDIyNi5qcGcnLFxyXG4gICAgICAgIHRpdGxlOidtZWV0dXAtMScsXHJcbiAgICAgICAgYWRkcmVzczonTEEnLFxyXG4gICAgICAgIGRlc2NyaXBjdGlvbjogJ3RoaXMgaXMgYSBmaXJzdCBtZWV0dXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTInLFxyXG4gICAgICAgIGltYWdlOidodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2MvYzMvTGFkeV9MaWJlcnR5X3VuZGVyX2FfYmx1ZV9za3lfJTI4Y3JvcHBlZCUyOV8lMjhjcm9wcGVkJTI5LmpwZycsXHJcbiAgICAgICAgdGl0bGU6J21lZXR1cC0yJyxcclxuICAgICAgICBhZGRyZXNzOidOWScsXHJcbiAgICAgICAgZGVzY3JpcGN0aW9uOiAndGhpcyBpcyBhIHNlY29uZCBtZWV0dXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTMnLFxyXG4gICAgICAgIGltYWdlOidodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzEvMWUvU2FuX0ZyYW5jaXNjb19mcm9tX3RoZV9NYXJpbl9IZWFkbGFuZHNfaW5fTWFyY2hfMjAxOS5qcGcnLFxyXG4gICAgICAgIHRpdGxlOidtZWV0dXAtMycsXHJcbiAgICAgICAgYWRkcmVzczonU0YnLFxyXG4gICAgICAgIGRlc2NyaXBjdGlvbjogJ3RoaXMgaXMgYSB0aGlyZCBtZWV0dXAnXHJcbiAgICB9LFxyXG5dXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcyl7XHJcbiAgICAvLyBjb25zdCBbbG9hZGVkTWVldHVwLCBzZXRMb2FkZWRNZWV0dXBdPXVzZVN0YXRlKFtdKTtcclxuICAgIC8vIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgLy8gICAgIHNldExvYWRlZE1lZXR1cChNRUVUVVBTKVxyXG4gICAgLy8gfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+TmV4dCBKUyBNZWV0dXAgV2ViUGFnZTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfS8+O1xyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAgIC8vIGZldGNoIGRhdGEgZnJvbSBhcGlcclxuICAgIGNvbnN0IGNvbm5lY3Rpb25TdHJpbmcgPSAnbW9uZ29kYitzcnY6Ly9uZXh0anMtdXNlcjpKdWxrYTAxOCFAY2x1c3RlcjAuaTl2YXkubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknO1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChjb25uZWN0aW9uU3RyaW5nKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKG09Pih7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbS50aXRsZSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG0uYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBtLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IG0uX2lkLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXZhbGlkYXRlOjM2MDBcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgICAgICAgICBtZWV0dXBzOiBNRUVUVVBTXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9O1xyXG4vLyB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==