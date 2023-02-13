webpackHotUpdate_N_E("pages/about",{

/***/ "./componentes/Layout.js":
/*!*******************************!*\
  !*** ./componentes/Layout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./componentes/Navbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\Users\\Dell\\Desktop\\proyectos\\Portafolio\\componentes\\Layout.js",
    _this = undefined,
    _s = $RefreshSig$();







var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      _ref$footer = _ref.footer,
      footer = _ref$footer === void 0 ? true : _ref$footer;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var handleRouteChange = function handleRouteChange(url) {
      console.log(url);
      nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", function () {
      return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
    });
    return function () {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "container py-4",
      children: [" ", children, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this), " ", footer && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "bg text-light text-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container  p-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "social-media card-body ml-1  pl-1 text-info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "https://www.facebook.com/Innovationtechsa/",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "facebook fab fa-facebook-square  ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: " "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, _this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, _this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "https://www.instagram.com/hectord788/",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "instagram fab fa-instagram-square ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: " "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, _this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 24
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "https://twitter.com/HectordeHoyos4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "twitter fab fa-twitter-square ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: " "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, _this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, _this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 24
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "https://www.youtube.com/channel/UCi5OK7qKDvhMUAQwBXnciKw",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "youtube fab fa-youtube-square ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: " "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, _this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, _this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 24
          }, _this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: " & copy; Hector de Hoyos Portafolio "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 23
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [" 2020 - ", new Date().getFullYear(), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 64
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: " All Rights Reserverd. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 63
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }, _this), " "]
  }, void 0, true);
};

_s(Layout, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50ZXMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiZm9vdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiTlByb2dyZXNzIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSx5QkFBcEJDLE1BQW9CO0FBQUEsTUFBcEJBLE1BQW9CLDRCQUFYLElBQVc7QUFDNUMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEdBQUQsRUFBUztBQUMvQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQUcsc0RBQVMsQ0FBQ0MsS0FBVjtBQUNILEtBSEQ7O0FBS0FSLFVBQU0sQ0FBQ1MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ1AsaUJBQXJDO0FBRUFILFVBQU0sQ0FBQ1MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QztBQUFBLGFBQU1ILGdEQUFTLENBQUNJLElBQVYsRUFBTjtBQUFBLEtBQXhDO0FBRUEsV0FBTyxZQUFNO0FBQ1RYLFlBQU0sQ0FBQ1MsTUFBUCxDQUFjRyxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ1QsaUJBQXRDO0FBQ0gsS0FGRDtBQUdILEdBYlEsRUFhTixFQWJNLENBQVQ7QUFlQSxzQkFBUztBQUFBLDRCQUVMLHFFQUNBLCtDQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSyxlQUlMO0FBQ0ssZUFBUyxFQUFHLGdCQURqQjtBQUFBLHNCQUNzQ0wsUUFEdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkssT0FNREMsTUFBTSxpQkFBTTtBQUNELGVBQVMsRUFBRywyQkFEWDtBQUFBLDhCQUVSO0FBQ0ksaUJBQVMsRUFBRyxnQkFEaEI7QUFBQSxnQ0FFQTtBQUNJLG1CQUFTLEVBQUcsNkNBRGhCO0FBQUEsa0NBRUEscUVBQ0EsZ0RBREE7QUFDSyxnQkFBSSxFQUFHLDRDQURaO0FBQUEsb0NBRUE7QUFDRSx1QkFBUyxFQUFHLG1DQURkO0FBQUEsc0NBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQSxvQkFTTyxxRUFDUCxnREFETztBQUNGLGdCQUFJLEVBQUcsdUNBREw7QUFBQSxvQ0FFUDtBQUNFLHVCQUFTLEVBQUcsb0NBRGQ7QUFBQSxzQ0FFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRQLG9CQWdCTyxxRUFDUCxnREFETztBQUNGLGdCQUFJLEVBQUcsb0NBREw7QUFBQSxvQ0FFUDtBQUNFLHVCQUFTLEVBQUcsZ0NBRGQ7QUFBQSxzQ0FFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCUCxvQkF1Qk8scUVBQ1AsZ0RBRE87QUFDRixnQkFBSSxFQUFHLDBEQURMO0FBQUEsb0NBRVA7QUFDRSx1QkFBUyxFQUFHLGdDQURkO0FBQUEsc0NBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZBLG9CQWlDTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQ04sb0JBa0MrQztBQUFBLGlDQUNsQyxJQUFJYyxJQUFKLEdBQVdDLFdBQVgsRUFEa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxDL0Msb0JBbUM4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQzlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5YO0FBQUEsa0JBQVQ7QUFtREgsQ0FyRUQ7O0dBQU1qQixNO1VBQ2FJLHFEOzs7S0FEYkosTTtBQXVFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuMDY3NjI0NTU3MjMwYzFmZmZhZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBmb290ZXIgPSB0cnVlIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKCA8XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxcclxuICAgICAgICBOYXZiYXIgLyA+XHJcbiAgICAgICAgPFxyXG4gICAgICAgIG1haW4gY2xhc3NOYW1lID0gXCJjb250YWluZXIgcHktNFwiID4geyBjaGlsZHJlbiB9IDwgL21haW4+IHtcclxuICAgICAgICAgICAgZm9vdGVyICYmICggPFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyIGNsYXNzTmFtZSA9IFwiYmcgdGV4dC1saWdodCB0ZXh0LWNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgIDxcclxuICAgICAgICAgICAgICAgIGRpdiBjbGFzc05hbWUgPSBcImNvbnRhaW5lciAgcC0xXCIgPlxyXG4gICAgICAgICAgICAgICAgPFxyXG4gICAgICAgICAgICAgICAgZGl2IGNsYXNzTmFtZSA9IFwic29jaWFsLW1lZGlhIGNhcmQtYm9keSBtbC0xICBwbC0xIHRleHQtaW5mb1wiID5cclxuICAgICAgICAgICAgICAgIDxcclxuICAgICAgICAgICAgICAgIExpbmsgaHJlZiA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0lubm92YXRpb250ZWNoc2EvXCIgPlxyXG4gICAgICAgICAgICAgICAgPFxyXG4gICAgICAgICAgICAgICAgaSBjbGFzc05hbWUgPSBcImZhY2Vib29rIGZhYiBmYS1mYWNlYm9vay1zcXVhcmUgIFwiID5cclxuICAgICAgICAgICAgICAgIDxcclxuICAgICAgICAgICAgICAgIGEgPiA8IC9hPiA8XHJcbiAgICAgICAgICAgICAgICAvaT4gPFxyXG4gICAgICAgICAgICAgICAgL0xpbms+IDxcclxuICAgICAgICAgICAgICAgIExpbmsgaHJlZiA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9oZWN0b3JkNzg4L1wiID5cclxuICAgICAgICAgICAgICAgIDxcclxuICAgICAgICAgICAgICAgIGkgY2xhc3NOYW1lID0gXCJpbnN0YWdyYW0gZmFiIGZhLWluc3RhZ3JhbS1zcXVhcmUgXCIgPlxyXG4gICAgICAgICAgICAgICAgPFxyXG4gICAgICAgICAgICAgICAgYSA+IDwgL2E+IDxcclxuICAgICAgICAgICAgICAgIC9pPiA8XHJcbiAgICAgICAgICAgICAgICAvTGluaz4gPFxyXG4gICAgICAgICAgICAgICAgTGluayBocmVmID0gXCJodHRwczovL3R3aXR0ZXIuY29tL0hlY3RvcmRlSG95b3M0XCIgPlxyXG4gICAgICAgICAgICAgICAgPFxyXG4gICAgICAgICAgICAgICAgaSBjbGFzc05hbWUgPSBcInR3aXR0ZXIgZmFiIGZhLXR3aXR0ZXItc3F1YXJlIFwiID5cclxuICAgICAgICAgICAgICAgIDxcclxuICAgICAgICAgICAgICAgIGEgPiA8IC9hPiA8XHJcbiAgICAgICAgICAgICAgICAvaT4gPFxyXG4gICAgICAgICAgICAgICAgL0xpbms+IDxcclxuICAgICAgICAgICAgICAgIExpbmsgaHJlZiA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ2k1T0s3cUtEdmhNVUFRd0JYbmNpS3dcIiA+XHJcbiAgICAgICAgICAgICAgICA8XHJcbiAgICAgICAgICAgICAgICBpIGNsYXNzTmFtZSA9IFwieW91dHViZSBmYWIgZmEteW91dHViZS1zcXVhcmUgXCIgPlxyXG4gICAgICAgICAgICAgICAgPFxyXG4gICAgICAgICAgICAgICAgYSA+IDwgL2E+IDxcclxuICAgICAgICAgICAgICAgIC9pPiA8XHJcbiAgICAgICAgICAgICAgICAvTGluaz4gPFxyXG4gICAgICAgICAgICAgICAgL2Rpdj4gPFxyXG4gICAgICAgICAgICAgICAgaDEgPiAmIGNvcHk7IEhlY3RvciBkZSBIb3lvcyBQb3J0YWZvbGlvIDwgL2gxPiA8XHJcbiAgICAgICAgICAgICAgICBwID4gMjAyMCAtIHsgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIH0gPCAvcD4gPFxyXG4gICAgICAgICAgICAgICAgcCA+IEFsbCBSaWdodHMgUmVzZXJ2ZXJkLiA8IC9wPiA8XHJcbiAgICAgICAgICAgICAgICAvZGl2PiA8XHJcbiAgICAgICAgICAgICAgICAvZm9vdGVyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSA8XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==