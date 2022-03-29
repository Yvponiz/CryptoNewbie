"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_searchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/searchBar */ \"./components/searchBar.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), handlerState = ref[0], setHandler = ref[1];\n    //const [pingState, setPing] = useState(\"Ping?\"); //[données du state | par défaut \"Ping?\", fonction utilisée pour mettre à jour valeur]\n    /* Facon de faire avant le Hook (useEffect + fetch)\r\n  const [listState, setList] = useState(\"List?\");\r\n  getPing().then((data) => {\r\n    console.log(data.data.gecko_says)\r\n    setPing(data.data.gecko_says)\r\n  })\r\n  getList().then((data) => {\r\n    console.log(data)\r\n  })*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch('/api/coinGecko') // Appelle la fonction exporté par défaut dans coinGecko, fonctionne même si en rouge\n        .then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            console.log(data);\n            setHandler(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Crypto Newbie | Accueil\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"section-list\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: handlerState.slice(0, 20).map(function(coin) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        coin.symbol,\n                                        \" \",\n                                        coin.name,\n                                        \" \",\n                                        coin.market_data.current_price.cad + '$',\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: coin.image.small,\n                                            width: \"30px\",\n                                            height: \"30px\",\n                                            alt: \"coin image\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 142\n                                        }, _this1),\n                                        \" \"\n                                    ]\n                                }, coin.id, true, {\n                                    fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 56\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMyQztBQUNmO0FBRW1CO0FBQ047OztBQUl6QyxHQUFLLENBQUNLLElBQUksR0FBYSxRQUFRLEdBQUYsQ0FBQzs7O0lBRTVCLEdBQUssQ0FBOEJMLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBdkNNLFlBQVksR0FBZ0JOLEdBQVksS0FBMUJPLFVBQVUsR0FBSVAsR0FBWTtJQUMvQyxFQUF3STtJQUVwSSxFQVFBO1FBR0ZRLEtBQUssQ0FBQyxDQUFnQixnQkFBRSxDQUFxRjtTQUMxR0MsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztZQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTtXQUN0QkYsSUFBSSxDQUFDLFFBQVEsQ0FBUEcsSUFBSSxFQUFLLENBQUM7O1lBRWZMLFVBQVUsQ0FBQ0ssSUFBSTtRQUNqQixDQUFDO0lBQ0wsQ0FBQyxFQUFFLGdEQUFFO0lBRUwsTUFBTSx1QkFDSFIsTUFBTTtRQUFDVyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7Ozs7O3dCQUduQkcsSUFBSSxFQUFDLENBQWE7d0JBQUNDLE9BQU8sRUFBQyxDQUFFOzs7Ozs7Z0dBQ2xDQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7OztrQ0FHckNDLENBQUk7Z0JBQUNSLFNBQVMsRUFBQyxDQUFNOzs7d0RBRWpCWixTQUFTOzs7Ozs7Ozs7OzBDQUVYcUIsQ0FBRzt3QkFBQ1QsU0FBUyxFQUFDLENBQWM7O3NDQUNyQlQ7OENBQXVDLE1BQU0sU0FBTGtCLENBQUc7Ozs7K0ZBQThCRyxHQUFJLENBQUNULElBQUk7d0NBQUMsQ0FBQzt3Q0FBQ1MsSUFBSSxDQUFDRSxHQUFBQSw2REFBQUEsQ0FBVyxDQUFDQzt3Q0FBc0IsQ0FBQztvSEFBQ0UsQ0FBRzs0Q0FBQ0MsR0FBRzs0Q0FBb0JHLEtBQUssRUFBQyxDQUFNOzRDQUFDQzs0Q0FBY0MsR0FBRyxFQUFDLENBQVk7Ozs7Ozt3Q0FBTyxDQUFDOzttQ0FBM0pYLElBQUksQ0FBQ1ksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RSxDQUFDO0dBM0NLbEMsSUFBSTtLQUFKQSxJQUFJO0FBNkNWLE1BQU0sU0FBU0EsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaEJhcidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVyU3RhdGUsIHNldEhhbmRsZXJdID0gdXNlU3RhdGUoW10pXHJcbiAgLy9jb25zdCBbcGluZ1N0YXRlLCBzZXRQaW5nXSA9IHVzZVN0YXRlKFwiUGluZz9cIik7IC8vW2Rvbm7DqWVzIGR1IHN0YXRlIHwgcGFyIGTDqWZhdXQgXCJQaW5nP1wiLCBmb25jdGlvbiB1dGlsaXPDqWUgcG91ciBtZXR0cmUgw6Agam91ciB2YWxldXJdXHJcblxyXG4gIC8qIEZhY29uIGRlIGZhaXJlIGF2YW50IGxlIEhvb2sgKHVzZUVmZmVjdCArIGZldGNoKVxyXG4gIGNvbnN0IFtsaXN0U3RhdGUsIHNldExpc3RdID0gdXNlU3RhdGUoXCJMaXN0P1wiKTtcclxuICBnZXRQaW5nKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhLmdlY2tvX3NheXMpXHJcbiAgICBzZXRQaW5nKGRhdGEuZGF0YS5nZWNrb19zYXlzKVxyXG4gIH0pXHJcbiAgZ2V0TGlzdCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfSkqL1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyAvLyBGZXRjaCBsZXMgZGF0YSBjb3TDqSBjbGllbnQsIGVtcMOqY2hlIGxlIGRhdGEgZCfDqnRyZSBjb25zdGFtZW50IGZldGNoXHJcbiAgICBmZXRjaCgnL2FwaS9jb2luR2Vja28nKSAvLyBBcHBlbGxlIGxhIGZvbmN0aW9uIGV4cG9ydMOpIHBhciBkw6lmYXV0IGRhbnMgY29pbkdlY2tvLCBmb25jdGlvbm5lIG3Dqm1lIHNpIGVuIHJvdWdlXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBzZXRIYW5kbGVyKGRhdGEpXHJcbiAgICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyeXB0byBOZXdiaWUgfCBBY2N1ZWlsPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTZWFyY2hCYXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbi1saXN0Jz5cclxuICAgICAgICAgIDxkaXY+e2hhbmRsZXJTdGF0ZS5zbGljZSgwLDIwKS5tYXAoKGNvaW4pID0+IDxkaXYga2V5PXtjb2luLmlkfT57Y29pbi5zeW1ib2x9IHtjb2luLm5hbWV9IHtjb2luLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UuY2FkKyckJ30gPGltZyBzcmM9e2NvaW4uaW1hZ2Uuc21hbGx9IHdpZHRoPVwiMzBweFwiIGhlaWdodD1cIjMwcHhcIiBhbHQ9J2NvaW4gaW1hZ2UnPjwvaW1nPiA8L2Rpdj4pfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIlNlYXJjaEJhciIsIkxheW91dCIsIkhvbWUiLCJoYW5kbGVyU3RhdGUiLCJzZXRIYW5kbGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJkaXYiLCJzbGljZSIsIm1hcCIsImNvaW4iLCJzeW1ib2wiLCJtYXJrZXRfZGF0YSIsImN1cnJlbnRfcHJpY2UiLCJjYWQiLCJpbWciLCJzcmMiLCJpbWFnZSIsInNtYWxsIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});