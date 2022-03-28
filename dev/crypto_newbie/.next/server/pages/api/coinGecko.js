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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPing\": () => (/* binding */ getPing),\n/* harmony export */   \"getList\": () => (/* binding */ getList),\n/* harmony export */   \"getCoins\": () => (/* binding */ getCoins),\n/* harmony export */   \"searchCrypto\": () => (/* binding */ searchCrypto),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst CoinGecko = __webpack_require__(/*! coingecko-api */ \"coingecko-api\");\nconst CoinGeckoClient = new CoinGecko();\nasync function getPing() {\n    let data = await CoinGeckoClient.ping();\n    return data.data.gecko_says;\n}\nasync function getList() {\n    let data = await CoinGeckoClient.coins.list();\n    //return [data.data.find( (coin) => (coin.id === \"dogecoin\"))] //Temporaire, pour afficher seulement dogecoin\n    return data.data //Temporaire, pour afficher seulement dogecoin\n    ;\n}\nasync function getCoins() {\n    let data = await CoinGeckoClient.coins.all(CoinGecko.ORDER[\"GECKO_ASC\"]);\n    return data.data;\n}\nasync function searchCrypto(crypto) {\n    let data = await CoinGeckoClient.search(crypto);\n    return data.data;\n}\nasync function handler(req, res) {\n    res.status(200).json(await getCoins()) // fonctionne même si en rouge, une fonction doit être async pour que await fonctionne\n    ;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29pbkdlY2tvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsS0FBSyxDQUFDQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsb0NBQWU7QUFDekMsS0FBSyxDQUFDQyxlQUFlLEdBQUcsR0FBRyxDQUFDRixTQUFTO0FBRTlCLGVBQWVHLE9BQU8sR0FBRyxDQUFDO0lBQzdCLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0YsZUFBZSxDQUFDRyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDQSxJQUFJLENBQUNFLFVBQVU7QUFDL0IsQ0FBQztBQUdNLGVBQWVDLE9BQU8sR0FBRyxDQUFDO0lBQzdCLEdBQUcsQ0FBQ0gsSUFBSSxHQUFHLEtBQUssQ0FBQ0YsZUFBZSxDQUFDTSxLQUFLLENBQUNDLElBQUk7SUFDM0MsRUFBNkc7SUFDN0csTUFBTSxDQUFDTCxJQUFJLENBQUNBLElBQUksQ0FBK0M7O0FBQ25FLENBQUM7QUFFTSxlQUFlTSxRQUFRLEdBQUUsQ0FBQztJQUM3QixHQUFHLENBQUNOLElBQUksR0FBRyxLQUFLLENBQUNGLGVBQWUsQ0FBQ00sS0FBSyxDQUFDRyxHQUFHLENBQUNYLFNBQVMsQ0FBQ1ksS0FBSyxDQUFDLENBQVc7SUFDdEUsTUFBTSxDQUFDUixJQUFJLENBQUNBLElBQUk7QUFDcEIsQ0FBQztBQUVNLGVBQWVTLFlBQVksQ0FBQ0MsTUFBYSxFQUFDLENBQUM7SUFDOUMsR0FBRyxDQUFDVixJQUFJLEdBQUcsS0FBSyxDQUFDRixlQUFlLENBQUNhLE1BQU0sQ0FBQ0QsTUFBTTtJQUM5QyxNQUFNLENBQUNWLElBQUksQ0FBQ0EsSUFBSTtBQUNwQixDQUFDO0FBRWMsZUFBZVksT0FBTyxDQUNqQ0MsR0FBbUIsRUFDbkJDLEdBQTRCLEVBQzlCLENBQUM7SUFDQ0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsS0FBSyxDQUFDVixRQUFRLEdBQUksQ0FBc0Y7O0FBQ2pJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlwdG9uZXdiLy4vcGFnZXMvYXBpL2NvaW5HZWNrby50cz82M2VkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuLi9hcGkvdXRpbHNcIjsgLy90b3V0IGNlIHF1aSBlc3QgZGFucyB1dGlsc1xyXG5cclxuXHJcbmNvbnN0IENvaW5HZWNrbyA9IHJlcXVpcmUoJ2NvaW5nZWNrby1hcGknKTtcclxuY29uc3QgQ29pbkdlY2tvQ2xpZW50ID0gbmV3IENvaW5HZWNrbygpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBpbmcoKSB7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IENvaW5HZWNrb0NsaWVudC5waW5nKCk7XHJcbiAgICByZXR1cm4gZGF0YS5kYXRhLmdlY2tvX3NheXNcclxufTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGlzdCgpIHtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgQ29pbkdlY2tvQ2xpZW50LmNvaW5zLmxpc3QoKTtcclxuICAgIC8vcmV0dXJuIFtkYXRhLmRhdGEuZmluZCggKGNvaW4pID0+IChjb2luLmlkID09PSBcImRvZ2Vjb2luXCIpKV0gLy9UZW1wb3JhaXJlLCBwb3VyIGFmZmljaGVyIHNldWxlbWVudCBkb2dlY29pblxyXG4gICAgcmV0dXJuIGRhdGEuZGF0YSAvL1RlbXBvcmFpcmUsIHBvdXIgYWZmaWNoZXIgc2V1bGVtZW50IGRvZ2Vjb2luXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2lucygpe1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBDb2luR2Vja29DbGllbnQuY29pbnMuYWxsKENvaW5HZWNrby5PUkRFUltcIkdFQ0tPX0FTQ1wiXSlcclxuICAgIHJldHVybiBkYXRhLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaENyeXB0byhjcnlwdG86U3RyaW5nKXtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgQ29pbkdlY2tvQ2xpZW50LnNlYXJjaChjcnlwdG8pO1xyXG4gICAgcmV0dXJuIGRhdGEuZGF0YVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlPHN0cmluZz5cclxuKSB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhd2FpdCBnZXRDb2lucygpKSAvLyBmb25jdGlvbm5lIG3Dqm1lIHNpIGVuIHJvdWdlLCB1bmUgZm9uY3Rpb24gZG9pdCDDqnRyZSBhc3luYyBwb3VyIHF1ZSBhd2FpdCBmb25jdGlvbm5lXHJcbn0iXSwibmFtZXMiOlsiQ29pbkdlY2tvIiwicmVxdWlyZSIsIkNvaW5HZWNrb0NsaWVudCIsImdldFBpbmciLCJkYXRhIiwicGluZyIsImdlY2tvX3NheXMiLCJnZXRMaXN0IiwiY29pbnMiLCJsaXN0IiwiZ2V0Q29pbnMiLCJhbGwiLCJPUkRFUiIsInNlYXJjaENyeXB0byIsImNyeXB0byIsInNlYXJjaCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/coinGecko.ts\n");

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