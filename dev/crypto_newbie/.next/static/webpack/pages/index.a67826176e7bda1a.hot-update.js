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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_searchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/searchBar */ \"./components/searchBar.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), handlerState = ref[0], setHandler = ref[1];\n    //const [pingState, setPing] = useState(\"Ping?\"); //[données du state | par défaut \"Ping?\", fonction utilisée pour mettre à jour valeur]\n    /* Facon de faire avant le Hook (useEffect + fetch)\r\n  const [listState, setList] = useState(\"List?\");\r\n  getPing().then((data) => {\r\n    console.log(data.data.gecko_says)\r\n    setPing(data.data.gecko_says)\r\n  })\r\n  getList().then((data) => {\r\n    console.log(data)\r\n  })*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch('/api/coinGecko') // Appelle la fonction exporté par défaut dans coinGecko, fonctionne même si en rouge\n        .then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            console.log(data);\n            setHandler(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Crypto Newbie | Accueil\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"section-list\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"titre-liste\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"#\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Nom\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Symbol\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Prix\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Market cap\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: handlerState.slice(0, 25).map(function(coin) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"coin\",\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: coin.image.small,\n                                                width: \"30px\",\n                                                height: \"30px\",\n                                                alt: \"coin image\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 93\n                                            }, _this1),\n                                            coin.symbol,\n                                            \" \",\n                                            coin.market_data.current_price.cad + '$',\n                                            \" \"\n                                        ]\n                                    }, coin.id, true, {\n                                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 56\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\travail\\\\Projet Synthese\\\\C61_Projet_synthese\\\\dev\\\\crypto_newbie\\\\pages\\\\index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMyQztBQUNmO0FBRW1CO0FBQ047OztBQUl6QyxHQUFLLENBQUNLLElBQUksR0FBYSxRQUFRLEdBQUYsQ0FBQzs7O0lBRTVCLEdBQUssQ0FBOEJMLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBdkNNLFlBQVksR0FBZ0JOLEdBQVksS0FBMUJPLFVBQVUsR0FBSVAsR0FBWTtJQUMvQyxFQUF3STtJQUVwSSxFQVFBO1FBR0ZRLEtBQUssQ0FBQyxDQUFnQixnQkFBRSxDQUFxRjtTQUMxR0MsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztZQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTtXQUN0QkYsSUFBSSxDQUFDLFFBQVEsQ0FBUEcsSUFBSSxFQUFLLENBQUM7O1lBRWZMLFVBQVUsQ0FBQ0ssSUFBSTtRQUNqQixDQUFDO0lBQ0wsQ0FBQyxFQUFFLGdEQUFFO0lBRUwsTUFBTSx1QkFDSFIsTUFBTTtRQUFDVyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7Ozs7O3dCQUduQkcsSUFBSSxFQUFDLENBQWE7d0JBQUNDLE9BQU8sRUFBQyxDQUFFOzs7Ozs7Z0dBQ2xDQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7OztrQ0FHckNDLENBQUk7Z0JBQUNSLFNBQVMsRUFBQyxDQUFNOzs7d0RBRWpCWixTQUFTOzs7Ozs7Ozs7OzBDQUVYcUIsQ0FBRzt3QkFBQ1QsU0FBUyxFQUFDLENBQWM7OztnQ0FDdEJBLFNBQVMsRUFBQyxDQUFhOzs7Ozs7Ozs7O2tEQUV2Qiw2REFBRzs7Ozs7OztrREFDSCw2REFBTTs7Ozs7OztrREFDTiw2REFBSTs7Ozs7OztrREFDSiw2REFBVTs7Ozs7Ozs7Ozs7O2tEQUVkUyxDQUFHOzBDQUFFbEI7O3dDQUE0Q1M7OzRDQUErQixDQUFDOzs7dUdBQTRCa0IsSUFBSyxFQUFDLENBQU07Z0RBQUNDLE1BQU0sRUFBQyxDQUFNO2dEQUFDQyxHQUFHLEVBQUMsQ0FBWTs7Ozs7OzRDQUFRUCxJQUFJLENBQUNRLE1BQU07NENBQUMsQ0FBQzs0Q0FBQ1IsSUFBSSxDQUFDUyxXQUFXLENBQUNDOzRDQUFzQixDQUFDOzt1Q0FBL0lWLElBQUksQ0FBQ1ksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekYsQ0FBQztHQWxES25DLElBQUk7S0FBSkEsSUFBSTtBQW9EVixNQUFNLFNBQVNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hCYXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuXHJcbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbaGFuZGxlclN0YXRlLCBzZXRIYW5kbGVyXSA9IHVzZVN0YXRlKFtdKVxyXG4gIC8vY29uc3QgW3BpbmdTdGF0ZSwgc2V0UGluZ10gPSB1c2VTdGF0ZShcIlBpbmc/XCIpOyAvL1tkb25uw6llcyBkdSBzdGF0ZSB8IHBhciBkw6lmYXV0IFwiUGluZz9cIiwgZm9uY3Rpb24gdXRpbGlzw6llIHBvdXIgbWV0dHJlIMOgIGpvdXIgdmFsZXVyXVxyXG5cclxuICAvKiBGYWNvbiBkZSBmYWlyZSBhdmFudCBsZSBIb29rICh1c2VFZmZlY3QgKyBmZXRjaClcclxuICBjb25zdCBbbGlzdFN0YXRlLCBzZXRMaXN0XSA9IHVzZVN0YXRlKFwiTGlzdD9cIik7XHJcbiAgZ2V0UGluZygpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YS5nZWNrb19zYXlzKVxyXG4gICAgc2V0UGluZyhkYXRhLmRhdGEuZ2Vja29fc2F5cylcclxuICB9KVxyXG4gIGdldExpc3QoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH0pKi9cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgLy8gRmV0Y2ggbGVzIGRhdGEgY290w6kgY2xpZW50LCBlbXDDqmNoZSBsZSBkYXRhIGQnw6p0cmUgY29uc3RhbWVudCBmZXRjaFxyXG4gICAgZmV0Y2goJy9hcGkvY29pbkdlY2tvJykgLy8gQXBwZWxsZSBsYSBmb25jdGlvbiBleHBvcnTDqSBwYXIgZMOpZmF1dCBkYW5zIGNvaW5HZWNrbywgZm9uY3Rpb25uZSBtw6ptZSBzaSBlbiByb3VnZVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgc2V0SGFuZGxlcihkYXRhKVxyXG4gICAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DcnlwdG8gTmV3YmllIHwgQWNjdWVpbDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9J21haW4nPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8U2VhcmNoQmFyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24tbGlzdCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0cmUtbGlzdGUnPlxyXG4gICAgICAgICAgICA8cD4jPC9wPlxyXG4gICAgICAgICAgICA8cD5Ob208L3A+XHJcbiAgICAgICAgICAgIDxwPlN5bWJvbDwvcD5cclxuICAgICAgICAgICAgPHA+UHJpeDwvcD5cclxuICAgICAgICAgICAgPHA+TWFya2V0IGNhcDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj57aGFuZGxlclN0YXRlLnNsaWNlKDAsMjUpLm1hcCgoY29pbikgPT4gPGRpdiBjbGFzc05hbWU9J2NvaW4nIGtleT17Y29pbi5pZH0+IDxpbWcgc3JjPXtjb2luLmltYWdlLnNtYWxsfSB3aWR0aD1cIjMwcHhcIiBoZWlnaHQ9XCIzMHB4XCIgYWx0PSdjb2luIGltYWdlJz48L2ltZz57Y29pbi5zeW1ib2x9IHtjb2luLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UuY2FkKyckJ30gPC9kaXY+KX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJTZWFyY2hCYXIiLCJMYXlvdXQiLCJIb21lIiwiaGFuZGxlclN0YXRlIiwic2V0SGFuZGxlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZGl2IiwicCIsInNsaWNlIiwibWFwIiwiY29pbiIsImltZyIsInNyYyIsImltYWdlIiwic21hbGwiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInN5bWJvbCIsIm1hcmtldF9kYXRhIiwiY3VycmVudF9wcmljZSIsImNhZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});