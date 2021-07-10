webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\desktop\\next\\folio\\nextjs_landing_page\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




function Footer() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Grid, {
    sx: styles.widgets,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].widgets.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      key: "footer-widget--key".concat(item.id),
      sx: styles.widgets.widgetItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: item.iconSrc,
      alt: item.altText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.widgets.infoWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Heading, {
      as: "h3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      as: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, item.description)));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.footerBottomArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.menus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].menuItem.map(function (_ref, i) {
    var path = _ref.path,
        label = _ref.label;
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      path: path,
      key: i,
      label: label,
      sx: styles.footer.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    });
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Copyright by ", new Date().getFullYear(), " RedQ, Inc"))));
}
_c = Footer;
var styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column'
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary'
      }
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%'
    }
  }
};

var _c;

$RefreshReg$(_c, "Footer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJ3aWRnZXRzIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpZCIsIndpZGdldEl0ZW0iLCJpY29uU3JjIiwiYWx0VGV4dCIsImluZm9XcmFwcGVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZvb3RlckJvdHRvbUFyZWEiLCJGb290ZXJMb2dvIiwibWVudXMiLCJtZW51SXRlbSIsImkiLCJwYXRoIiwibGFiZWwiLCJsaW5rIiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJkaXNwbGF5IiwicHQiLCJwYiIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJtdCIsIm1iIiwibmF2IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0ZXh0RGVjb3JhdGlvbiIsImxpbmVIZWlnaHQiLCJweCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLFNBQ0U7QUFBUSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxJQUFEO0FBQU0sTUFBRSxFQUFFRCxNQUFNLENBQUNFLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0Msb0RBQUksQ0FBQ0QsT0FBTCxDQUFhRSxHQUFiLENBQWlC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QUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURDO0FBRUxDLFFBQUUsRUFBRSxDQUZDO0FBR0xDLFNBQUcsRUFBRTtBQUNIUCxlQUFPLEVBQUUsTUFETjtBQUVIUSxrQkFBVSxFQUFFLFFBRlQ7QUFHSEMsc0JBQWMsRUFBRSxRQUhiO0FBSUhDLGdCQUFRLEVBQUU7QUFKUDtBQUhBLEtBVkQ7QUFxQk5oQixRQUFJLEVBQUU7QUFDSmlCLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBRE47QUFFSkMsV0FBSyxFQUFFLE1BRkg7QUFHSkMsZ0JBQVUsRUFBRSxLQUhSO0FBSUpQLFFBQUUsRUFBRSxDQUpBO0FBS0pRLFlBQU0sRUFBRSxTQUxKO0FBTUpDLGdCQUFVLEVBQUUsV0FOUjtBQU9KZixhQUFPLEVBQUUsT0FQTDtBQVFKZ0Isb0JBQWMsRUFBRSxNQVJaO0FBU0pDLGdCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLEdBQVosQ0FUUjtBQVVKQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FWQTtBQVdKLGdCQUFVO0FBQ1JOLGFBQUssRUFBRTtBQURDO0FBWE4sS0FyQkE7QUFvQ05qQixhQUFTLEVBQUU7QUFDVGdCLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBREQ7QUFFVFEsV0FBSyxFQUFFO0FBRkU7QUFwQ0w7QUFESyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1N2RlYmRlMWU4ODA5N2MwMTA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEltYWdlLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL2Zvb3Rlci5kYXRhJztcbmltcG9ydCBGb290ZXJMb2dvIGZyb20gJ2Fzc2V0cy9sb2dvLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIHN4PXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMud2lkZ2V0c30+XG4gICAgICAgICAge2RhdGEud2lkZ2V0cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtgZm9vdGVyLXdpZGdldC0ta2V5JHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgIHN4PXtzdHlsZXMud2lkZ2V0cy53aWRnZXRJdGVtfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmljb25TcmN9IGFsdD17aXRlbS5hbHRUZXh0fSAvPlxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud2lkZ2V0cy5pbmZvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPntpdGVtLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIj57aXRlbS5kZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgey8qIEVuZCBvZiBmb290ZXIgd2lkZ2V0cyBhcmVhICovfVxuXG4gICAgICAgIFxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLmZvb3RlckJvdHRvbUFyZWF9PlxuICAgICAgICAgIDxMaW5rIHBhdGg9XCIvXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtGb290ZXJMb2dvfSBhbHQ9XCJMb2dvXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5tZW51c30+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICB7ZGF0YS5tZW51SXRlbS5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb290ZXIubGlua31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZm9vdGVyLmNvcHlyaWdodH0+XG4gICAgICAgICAgICBDb3B5cmlnaHQgYnkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gUmVkUSwgSW5jXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvb3Rlcjoge1xuICAgIGZvb3RlckJvdHRvbUFyZWE6IHtcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJUb3BDb2xvcjogJ2JvcmRlcl9jb2xvcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBwdDogWzcsIG51bGwsIDhdLFxuICAgICAgcGI6IFsnNDBweCcsIG51bGwsICcxMDBweCddLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgbWVudXM6IHtcbiAgICAgIG10OiBbMywgNF0sXG4gICAgICBtYjogMixcbiAgICAgIG5hdjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBsaW5rOiB7XG4gICAgICBmb250U2l6ZTogWzEsICcxNXB4J10sXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgZm9udFdlaWdodDogJzQwMCcsXG4gICAgICBtYjogMixcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjM1cycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXG4gICAgICBweDogWzIsIG51bGwsIDRdLFxuICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb3B5cmlnaHQ6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9