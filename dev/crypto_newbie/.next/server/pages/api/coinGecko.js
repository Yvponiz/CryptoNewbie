"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/coinGecko";
exports.ids = ["pages/api/coinGecko"];
exports.modules = {

/***/ "coingecko-api":
/*!********************************!*\
  !*** external "coingecko-api" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("coingecko-api");

/***/ }),

/***/ "(api)/./pages/api/coinGecko.ts":
/*!********************************!*\
  !*** ./pages/api/coinGecko.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPing\": () => (/* binding */ getPing),\n/* harmony export */   \"getList\": () => (/* binding */ getList),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst CoinGecko = __webpack_require__(/*! coingecko-api */ \"coingecko-api\");\nconst CoinGeckoClient = new CoinGecko();\nasync function getPing() {\n    let data = await CoinGeckoClient.ping();\n    return data.data.gecko_says;\n}\nasync function getList() {\n    let data = await CoinGeckoClient.coins.list();\n    return [\n        data.data.find((coin)=>coin.id === \"dogecoin\"\n        )\n    ] //Temporaire, pour afficher seulement dogecoin\n    ;\n}\nasync function handler(req, res) {\n    res.status(200).json(await getList()) // fonctionne même si en rouge, une fonction doit être async pour que await fonctionne\n    ;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29pbkdlY2tvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLEtBQUssQ0FBQ0EsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLG9DQUFlO0FBQ3pDLEtBQUssQ0FBQ0MsZUFBZSxHQUFHLEdBQUcsQ0FBQ0YsU0FBUztBQUU5QixlQUFlRyxPQUFPLEdBQUcsQ0FBQztJQUM3QixHQUFHLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNGLGVBQWUsQ0FBQ0csSUFBSTtJQUNyQyxNQUFNLENBQUNELElBQUksQ0FBQ0EsSUFBSSxDQUFDRSxVQUFVO0FBQy9CLENBQUM7QUFHTSxlQUFlQyxPQUFPLEdBQUcsQ0FBQztJQUM3QixHQUFHLENBQUNILElBQUksR0FBRyxLQUFLLENBQUNGLGVBQWUsQ0FBQ00sS0FBSyxDQUFDQyxJQUFJO0lBQzNDLE1BQU0sQ0FBQyxDQUFDTDtRQUFBQSxJQUFJLENBQUNBLElBQUksQ0FBQ00sSUFBSSxFQUFHQyxJQUFJLEdBQU1BLElBQUksQ0FBQ0MsRUFBRSxLQUFLLENBQVU7O0lBQUUsQ0FBQyxDQUErQzs7QUFDL0csQ0FBQztBQUVjLGVBQWVDLE9BQU8sQ0FDakNDLEdBQW1CLEVBQ25CQyxHQUE0QixFQUM5QixDQUFDO0lBQ0NBLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLEtBQUssQ0FBQ1YsT0FBTyxHQUFJLENBQXNGOztBQUNoSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J5cHRvbmV3Yi8uL3BhZ2VzL2FwaS9jb2luR2Vja28udHM/NjNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi4vYXBpL3V0aWxzXCI7IC8vdG91dCBjZSBxdWkgZXN0IGRhbnMgdXRpbHNcclxuXHJcblxyXG5jb25zdCBDb2luR2Vja28gPSByZXF1aXJlKCdjb2luZ2Vja28tYXBpJyk7XHJcbmNvbnN0IENvaW5HZWNrb0NsaWVudCA9IG5ldyBDb2luR2Vja28oKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQaW5nKCkge1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBDb2luR2Vja29DbGllbnQucGluZygpO1xyXG4gICAgcmV0dXJuIGRhdGEuZGF0YS5nZWNrb19zYXlzXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExpc3QoKSB7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IENvaW5HZWNrb0NsaWVudC5jb2lucy5saXN0KCk7XHJcbiAgICByZXR1cm4gW2RhdGEuZGF0YS5maW5kKCAoY29pbikgPT4gKGNvaW4uaWQgPT09IFwiZG9nZWNvaW5cIikpXSAvL1RlbXBvcmFpcmUsIHBvdXIgYWZmaWNoZXIgc2V1bGVtZW50IGRvZ2Vjb2luXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8c3RyaW5nPlxyXG4pIHtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF3YWl0IGdldExpc3QoKSkgLy8gZm9uY3Rpb25uZSBtw6ptZSBzaSBlbiByb3VnZSwgdW5lIGZvbmN0aW9uIGRvaXQgw6p0cmUgYXN5bmMgcG91ciBxdWUgYXdhaXQgZm9uY3Rpb25uZVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb2luR2Vja28iLCJyZXF1aXJlIiwiQ29pbkdlY2tvQ2xpZW50IiwiZ2V0UGluZyIsImRhdGEiLCJwaW5nIiwiZ2Vja29fc2F5cyIsImdldExpc3QiLCJjb2lucyIsImxpc3QiLCJmaW5kIiwiY29pbiIsImlkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/coinGecko.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/coinGecko.ts"));
module.exports = __webpack_exports__;

})();