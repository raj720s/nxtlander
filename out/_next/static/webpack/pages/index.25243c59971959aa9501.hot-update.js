webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/text-feature.js":
/*!****************************************!*\
  !*** ./src/components/text-feature.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "D:\\desktop\\next\\folio\\nextjs_landing_page\\src\\components\\text-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function TextFeature(_ref) {
  var subTitle = _ref.subTitle,
      title = _ref.title,
      description = _ref.description,
      btnName = _ref.btnName,
      _ref$btnURL = _ref.btnURL,
      btnURL = _ref$btnURL === void 0 ? '#' : _ref$btnURL;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, subTitle), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, title)), description && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    className: "description",
    sx: styles.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, description), btnName && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: btnURL,
    variant: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    "aria-label": btnName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, btnName)));
}
_c = TextFeature;
var styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0]
    }
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: 'primary',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ['1.5px', null, '2px']
    },
    title: {
      fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5
    }
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px'
  }
};

var _c;

$RefreshReg$(_c, "TextFeature");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlLmpzIl0sIm5hbWVzIjpbIlRleHRGZWF0dXJlIiwic3ViVGl0bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnRuTmFtZSIsImJ0blVSTCIsInN0eWxlcyIsImNhcmQiLCJ3cmFwcGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFNocmluayIsImEiLCJtIiwid2lkdGgiLCJtdCIsImZvbnRTaXplIiwiY29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsIm1iIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQU1aO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDO0FBQUEsTUFKREMsS0FJQyxRQUpEQSxLQUlDO0FBQUEsTUFIREMsV0FHQyxRQUhEQSxXQUdDO0FBQUEsTUFGREMsT0FFQyxRQUZEQSxPQUVDO0FBQUEseUJBRERDLE1BQ0M7QUFBQSxNQUREQSxNQUNDLDRCQURRLEdBQ1I7QUFDRCxTQUNNLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRixxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUQsTUFBTSxDQUFDRSxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUMsR0FBVDtBQUFhLE1BQUUsRUFBRUYsTUFBTSxDQUFDRSxPQUFQLENBQWVQLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsUUFESCxDQURGLEVBSUUscURBQUMsZ0RBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixNQUFFLEVBQUVLLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlTixLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEtBREgsQ0FKRixDQURFLEVBVURDLFdBQVcsSUFDVixxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBQyxHQUFUO0FBQWEsYUFBUyxFQUFDLGFBQXZCO0FBQXFDLE1BQUUsRUFBRUcsTUFBTSxDQUFDSCxXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLFdBREgsQ0FYQSxFQWdCREMsT0FBTyxJQUNOLHFEQUFDLDZDQUFEO0FBQU0sUUFBSSxFQUFFQyxNQUFaO0FBQW9CLFdBQU8sRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsK0NBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsa0JBQVlELE9BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsT0FESCxDQURGLENBakJBLENBRE47QUEwQkQ7S0FqQ3VCSixXO0FBbUN4QixJQUFNTSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pFLFdBQU8sRUFBRSxNQURMO0FBRUpDLGNBQVUsRUFBRSxZQUZSO0FBR0pDLGlCQUFhLEVBQUUsUUFIWDtBQUlKQyxjQUFVLEVBQUUsQ0FKUjtBQUtKQyxLQUFDLEVBQUU7QUFDREMsT0FBQyxFQUFFLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsQ0FBdkI7QUFERjtBQUxDLEdBRE87QUFVYk4sU0FBTyxFQUFFO0FBQ1BPLFNBQUssRUFBRSxNQURBO0FBRVBOLFdBQU8sRUFBRSxNQUZGO0FBR1BFLGlCQUFhLEVBQUUsUUFIUjtBQUlQSyxNQUFFLEVBQUUsQ0FBQyxDQUpFO0FBS1BmLFlBQVEsRUFBRTtBQUNSZ0IsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBREY7QUFFUkMsV0FBSyxFQUFFLFNBRkM7QUFHUkMsbUJBQWEsRUFBRSxXQUhQO0FBSVJDLGdCQUFVLEVBQUUsS0FKSjtBQUtSQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUxJO0FBTVJDLGdCQUFVLEVBQUUsR0FOSjtBQU9SQyxtQkFBYSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsS0FBaEI7QUFQUCxLQUxIO0FBY1ByQixTQUFLLEVBQUU7QUFDTGUsY0FBUSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxNQUFmLEVBQXVCLE1BQXZCLEVBQStCLE1BQS9CLEVBQXVDLE1BQXZDLEVBQStDLElBQS9DLEVBQXFELE1BQXJELENBREw7QUFFTEMsV0FBSyxFQUFFLG1CQUZGO0FBR0xJLGdCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsR0FBeEIsQ0FIUDtBQUlMRixnQkFBVSxFQUFFLEtBSlA7QUFLTEcsbUJBQWEsRUFBRSxPQUxWO0FBTUxGLFFBQUUsRUFBRTtBQU5DO0FBZEEsR0FWSTtBQWlDYmxCLGFBQVcsRUFBRTtBQUNYYyxZQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsQ0FBVCxFQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsTUFBOUIsRUFBc0MsSUFBdEMsRUFBNEMsQ0FBNUMsQ0FEQztBQUVYRyxjQUFVLEVBQUUsR0FGRDtBQUdYRSxjQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsSUFBdEIsRUFBNEIsS0FBNUIsQ0FIRDtBQUlYSixTQUFLLEVBQUUsZ0JBSkk7QUFLWEcsTUFBRSxFQUFFO0FBTE87QUFqQ0EsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNTI0M2M1OTk3MTk1OWFhOTUwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uLCBMaW5rIH0gZnJvbSAndGhlbWUtdWknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RmVhdHVyZSh7XG4gIHN1YlRpdGxlLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGJ0bk5hbWUsXG4gIGJ0blVSTCA9ICcjJyxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxuICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PlxuICAgICAgICAgIHtzdWJUaXRsZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgIDwvQm94PlxuXG4gICAgICB7ZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICA8VGV4dCBhcz1cInBcIiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKX1cblxuICAgICAge2J0bk5hbWUgJiYgKFxuICAgICAgICA8TGluayBocmVmPXtidG5VUkx9IHZhcmlhbnQ9XCJkZWZhdWx0XCI+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9e2J0bk5hbWV9PlxuICAgICAgICAgICAge2J0bk5hbWV9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG4gICAgICA8L0JveD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIGE6IHtcbiAgICAgIG06IFsnMCBhdXRvJywgbnVsbCwgbnVsbCwgMF0sXG4gICAgfSxcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG10OiAtMSxcbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IFswLCBudWxsLCAxXSxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgICAgbWI6IFsyLCAzXSxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IFsnMjRweCcsIG51bGwsICcyOHB4JywgJzMwcHgnLCAnMzZweCcsICc0MnB4JywgbnVsbCwgJzQ4cHgnXSxcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgbnVsbCwgMS4yXSxcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNXB4JyxcbiAgICAgIG1iOiA1LFxuICAgIH0sXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgZm9udFNpemU6IFsnMTVweCcsIDIsIG51bGwsIG51bGwsIG51bGwsICcxN3B4JywgbnVsbCwgM10sXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAyLCBudWxsLCAnMi4yJ10sXG4gICAgY29sb3I6ICd0ZXh0X3NlY29uZGFyeScsXG4gICAgbWI6ICczMHB4JyxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9