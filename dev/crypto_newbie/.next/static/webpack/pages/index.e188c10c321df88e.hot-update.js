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

/***/ "./pages/api/coinGecko.ts":
/*!********************************!*\
  !*** ./pages/api/coinGecko.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPing\": function() { return /* binding */ getPing; },\n/* harmony export */   \"getList\": function() { return /* binding */ getList; },\n/* harmony export */   \"getCoins\": function() { return /* binding */ getCoins; },\n/* harmony export */   \"searchCrypto\": function() { return /* binding */ searchCrypto; },\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar CoinGecko = __webpack_require__(/*! coingecko-api */ \"./node_modules/coingecko-api/index.js\");\nvar CoinGeckoClient = new CoinGecko();\nfunction getPing() {\n    return _getPing.apply(this, arguments);\n}\nfunction _getPing() {\n    _getPing = _asyncToGenerator(C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return CoinGeckoClient.ping();\n                case 2:\n                    data = _ctx.sent;\n                    return _ctx.abrupt(\"return\", data.data.gecko_says);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getPing.apply(this, arguments);\n}\nfunction getList() {\n    return _getList.apply(this, arguments);\n}\nfunction _getList() {\n    _getList = _asyncToGenerator(C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return CoinGeckoClient.coins.list();\n                case 2:\n                    data = _ctx.sent;\n                    return _ctx.abrupt(\"return\", data.data //Temporaire, pour afficher seulement dogecoin\n                    );\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getList.apply(this, arguments);\n}\nfunction getCoins() {\n    return _getCoins.apply(this, arguments);\n}\nfunction _getCoins() {\n    _getCoins = _asyncToGenerator(C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return CoinGeckoClient.coins.all(CoinGecko.ORDER[\"GECKO_ASC\"]);\n                case 2:\n                    data = _ctx.sent;\n                    return _ctx.abrupt(\"return\", data.data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getCoins.apply(this, arguments);\n}\nfunction searchCrypto(crypto) {\n    return _searchCrypto.apply(this, arguments);\n}\nfunction _searchCrypto() {\n    _searchCrypto = _asyncToGenerator(C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(crypto) {\n        var data;\n        return C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return CoinGeckoClient.coin.search(crypto);\n                case 2:\n                    data = _ctx.sent;\n                    return _ctx.abrupt(\"return\", data.data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _searchCrypto.apply(this, arguments);\n}\nfunction handler(req, res) {\n    return _handler.apply(this, arguments);\n};\nfunction _handler() {\n    _handler = _asyncToGenerator(C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {\n        return C_travail_Projet_Synthese_C61_Projet_synthese_dev_crypto_newbie_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.t0 = res.status(200);\n                    _ctx.next = 3;\n                    return getCoins();\n                case 3:\n                    _ctx.t1 = _ctx.sent;\n                    _ctx.t0.json.call(_ctx.t0, _ctx.t1) // fonctionne même si en rouge, une fonction doit être async pour que await fonctionne\n                    ;\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _handler.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29pbkdlY2tvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxHQUFLLENBQUNBLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyw0REFBZTtBQUN6QyxHQUFLLENBQUNDLGVBQWUsR0FBRyxHQUFHLENBQUNGLFNBQVM7QUFFOUIsU0FBZUcsT0FBTztXQUFQQSxRQUFPOztTQUFQQSxRQUFPO0lBQVBBLFFBQU8sZ01BQXRCLFFBQVEsV0FBaUIsQ0FBQztZQUN6QkMsSUFBSTs7Ozs7MkJBQVNGLGVBQWUsQ0FBQ0csSUFBSTs7b0JBQWpDRCxJQUFJO2lEQUNEQSxJQUFJLENBQUNBLElBQUksQ0FBQ0UsVUFBVTs7Ozs7O0lBQy9CLENBQUM7V0FIcUJILFFBQU87O0FBTXRCLFNBQWVJLE9BQU87V0FBUEEsUUFBTzs7U0FBUEEsUUFBTztJQUFQQSxRQUFPLGdNQUF0QixRQUFRLFdBQWlCLENBQUM7WUFDekJILElBQUk7Ozs7OzJCQUFTRixlQUFlLENBQUNNLEtBQUssQ0FBQ0MsSUFBSTs7b0JBQXZDTCxJQUFJO2lEQUVEQSxJQUFJLENBQUNBLElBQUksQ0FBK0M7Ozs7Ozs7SUFDbkUsQ0FBQztXQUpxQkcsUUFBTzs7QUFNdEIsU0FBZUcsUUFBUTtXQUFSQSxTQUFROztTQUFSQSxTQUFRO0lBQVJBLFNBQVEsZ01BQXZCLFFBQVEsV0FBaUIsQ0FBQztZQUN6Qk4sSUFBSTs7Ozs7MkJBQVNGLGVBQWUsQ0FBQ00sS0FBSyxDQUFDRyxHQUFHLENBQUNYLFNBQVMsQ0FBQ1ksS0FBSyxDQUFDLENBQVc7O29CQUFsRVIsSUFBSTtpREFDREEsSUFBSSxDQUFDQSxJQUFJOzs7Ozs7SUFDcEIsQ0FBQztXQUhxQk0sU0FBUTs7QUFLdkIsU0FBZUcsWUFBWSxDQUFDQyxNQUFhO1dBQTFCRCxhQUFZOztTQUFaQSxhQUFZO0lBQVpBLGFBQVksZ01BQTNCLFFBQVEsU0FBb0JDLE1BQWEsRUFBQyxDQUFDO1lBQzFDVixJQUFJOzs7OzsyQkFBU0YsZUFBZSxDQUFDYSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsTUFBTTs7b0JBQS9DVixJQUFJO2lEQUNEQSxJQUFJLENBQUNBLElBQUk7Ozs7OztJQUNwQixDQUFDO1dBSHFCUyxhQUFZOztBQUtuQixTQUFlSSxPQUFPLENBQ2pDQyxHQUFtQixFQUNuQkMsR0FBNEI7V0FGRkYsUUFBTzs7U0FBUEEsUUFBTztJQUFQQSxRQUFPLGdNQUF0QixRQUFRLFNBQ25CQyxHQUFtQixFQUNuQkMsR0FBNEIsRUFDOUIsQ0FBQzs7Ozs4QkFDQ0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRzs7MkJBQWFWLFFBQVE7Ozs0QkFBbkJXLElBQUksdUJBQW1CLENBQXNGOzs7Ozs7O0lBQ2pJLENBQUM7V0FMNkJKLFFBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2NvaW5HZWNrby50cz82M2VkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuLi9hcGkvdXRpbHNcIjsgLy90b3V0IGNlIHF1aSBlc3QgZGFucyB1dGlsc1xyXG5cclxuXHJcbmNvbnN0IENvaW5HZWNrbyA9IHJlcXVpcmUoJ2NvaW5nZWNrby1hcGknKTtcclxuY29uc3QgQ29pbkdlY2tvQ2xpZW50ID0gbmV3IENvaW5HZWNrbygpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBpbmcoKSB7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IENvaW5HZWNrb0NsaWVudC5waW5nKCk7XHJcbiAgICByZXR1cm4gZGF0YS5kYXRhLmdlY2tvX3NheXNcclxufTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGlzdCgpIHtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgQ29pbkdlY2tvQ2xpZW50LmNvaW5zLmxpc3QoKTtcclxuICAgIC8vcmV0dXJuIFtkYXRhLmRhdGEuZmluZCggKGNvaW4pID0+IChjb2luLmlkID09PSBcImRvZ2Vjb2luXCIpKV0gLy9UZW1wb3JhaXJlLCBwb3VyIGFmZmljaGVyIHNldWxlbWVudCBkb2dlY29pblxyXG4gICAgcmV0dXJuIGRhdGEuZGF0YSAvL1RlbXBvcmFpcmUsIHBvdXIgYWZmaWNoZXIgc2V1bGVtZW50IGRvZ2Vjb2luXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2lucygpe1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBDb2luR2Vja29DbGllbnQuY29pbnMuYWxsKENvaW5HZWNrby5PUkRFUltcIkdFQ0tPX0FTQ1wiXSlcclxuICAgIHJldHVybiBkYXRhLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaENyeXB0byhjcnlwdG86U3RyaW5nKXtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgQ29pbkdlY2tvQ2xpZW50LmNvaW4uc2VhcmNoKGNyeXB0byk7XHJcbiAgICByZXR1cm4gZGF0YS5kYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8c3RyaW5nPlxyXG4pIHtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF3YWl0IGdldENvaW5zKCkpIC8vIGZvbmN0aW9ubmUgbcOqbWUgc2kgZW4gcm91Z2UsIHVuZSBmb25jdGlvbiBkb2l0IMOqdHJlIGFzeW5jIHBvdXIgcXVlIGF3YWl0IGZvbmN0aW9ubmVcclxufSJdLCJuYW1lcyI6WyJDb2luR2Vja28iLCJyZXF1aXJlIiwiQ29pbkdlY2tvQ2xpZW50IiwiZ2V0UGluZyIsImRhdGEiLCJwaW5nIiwiZ2Vja29fc2F5cyIsImdldExpc3QiLCJjb2lucyIsImxpc3QiLCJnZXRDb2lucyIsImFsbCIsIk9SREVSIiwic2VhcmNoQ3J5cHRvIiwiY3J5cHRvIiwiY29pbiIsInNlYXJjaCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/coinGecko.ts\n");

/***/ })

});