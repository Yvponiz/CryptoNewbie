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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPing\": () => (/* binding */ getPing),\n/* harmony export */   \"getList\": () => (/* binding */ getList),\n/* harmony export */   \"getCoins\": () => (/* binding */ getCoins),\n/* harmony export */   \"searchCrypto\": () => (/* binding */ searchCrypto),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst CoinGecko = __webpack_require__(/*! coingecko-api */ \"coingecko-api\");\nconst CoinGeckoClient = new CoinGecko();\nasync function getPing() {\n    let data = await CoinGeckoClient.ping();\n    return data.data.gecko_says;\n}\nasync function getList() {\n    let data = await CoinGeckoClient.coins.list();\n    //return [data.data.find( (coin) => (coin.id === \"dogecoin\"))] //Temporaire, pour afficher seulement dogecoin\n    return data.data //Temporaire, pour afficher seulement dogecoin\n    ;\n}\nasync function getCoins() {\n    let data = await CoinGeckoClient.coins.all(CoinGecko.ORDER[\"GECKO_ASC\"]);\n    return data.data;\n}\nasync function searchCrypto(crypto) {\n    let data = await CoinGeckoClient.coins.fetch(crypto, {});\n    return data.data;\n}\nasync function handler(req, res) {\n    res.status(200).json(await getCoins()) // fonctionne même si en rouge, une fonction doit être async pour que await fonctionne\n    ;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29pbkdlY2tvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsS0FBSyxDQUFDQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsb0NBQWU7QUFDekMsS0FBSyxDQUFDQyxlQUFlLEdBQUcsR0FBRyxDQUFDRixTQUFTO0FBRTlCLGVBQWVHLE9BQU8sR0FBRyxDQUFDO0lBQzdCLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0YsZUFBZSxDQUFDRyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDQSxJQUFJLENBQUNFLFVBQVU7QUFDL0IsQ0FBQztBQUdNLGVBQWVDLE9BQU8sR0FBRyxDQUFDO0lBQzdCLEdBQUcsQ0FBQ0gsSUFBSSxHQUFHLEtBQUssQ0FBQ0YsZUFBZSxDQUFDTSxLQUFLLENBQUNDLElBQUk7SUFDM0MsRUFBNkc7SUFDN0csTUFBTSxDQUFDTCxJQUFJLENBQUNBLElBQUksQ0FBK0M7O0FBQ25FLENBQUM7QUFFTSxlQUFlTSxRQUFRLEdBQUUsQ0FBQztJQUM3QixHQUFHLENBQUNOLElBQUksR0FBRyxLQUFLLENBQUNGLGVBQWUsQ0FBQ00sS0FBSyxDQUFDRyxHQUFHLENBQUNYLFNBQVMsQ0FBQ1ksS0FBSyxDQUFDLENBQVc7SUFDdEUsTUFBTSxDQUFDUixJQUFJLENBQUNBLElBQUk7QUFDcEIsQ0FBQztBQUVNLGVBQWVTLFlBQVksQ0FBQ0MsTUFBTSxFQUFDLENBQUM7SUFDdkMsR0FBRyxDQUFDVixJQUFJLEdBQUcsS0FBSyxDQUFDRixlQUFlLENBQUNNLEtBQUssQ0FBQ08sS0FBSyxDQUFDRCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1YsSUFBSSxDQUFDQSxJQUFJO0FBQ3BCLENBQUM7QUFFYyxlQUFlWSxPQUFPLENBQ2pDQyxHQUFtQixFQUNuQkMsR0FBNEIsRUFDOUIsQ0FBQztJQUNDQSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxLQUFLLENBQUNWLFFBQVEsR0FBSSxDQUFzRjs7QUFDakksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NyeXB0b25ld2IvLi9wYWdlcy9hcGkvY29pbkdlY2tvLnRzPzYzZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4uL2FwaS91dGlsc1wiOyAvL3RvdXQgY2UgcXVpIGVzdCBkYW5zIHV0aWxzXHJcblxyXG5cclxuY29uc3QgQ29pbkdlY2tvID0gcmVxdWlyZSgnY29pbmdlY2tvLWFwaScpO1xyXG5jb25zdCBDb2luR2Vja29DbGllbnQgPSBuZXcgQ29pbkdlY2tvKCk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGluZygpIHtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgQ29pbkdlY2tvQ2xpZW50LnBpbmcoKTtcclxuICAgIHJldHVybiBkYXRhLmRhdGEuZ2Vja29fc2F5c1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMaXN0KCkge1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBDb2luR2Vja29DbGllbnQuY29pbnMubGlzdCgpO1xyXG4gICAgLy9yZXR1cm4gW2RhdGEuZGF0YS5maW5kKCAoY29pbikgPT4gKGNvaW4uaWQgPT09IFwiZG9nZWNvaW5cIikpXSAvL1RlbXBvcmFpcmUsIHBvdXIgYWZmaWNoZXIgc2V1bGVtZW50IGRvZ2Vjb2luXHJcbiAgICByZXR1cm4gZGF0YS5kYXRhIC8vVGVtcG9yYWlyZSwgcG91ciBhZmZpY2hlciBzZXVsZW1lbnQgZG9nZWNvaW5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvaW5zKCl7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IENvaW5HZWNrb0NsaWVudC5jb2lucy5hbGwoQ29pbkdlY2tvLk9SREVSW1wiR0VDS09fQVNDXCJdKVxyXG4gICAgcmV0dXJuIGRhdGEuZGF0YVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoQ3J5cHRvKGNyeXB0byl7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IENvaW5HZWNrb0NsaWVudC5jb2lucy5mZXRjaChjcnlwdG8sIHt9KTtcclxuICAgIHJldHVybiBkYXRhLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZTxzdHJpbmc+XHJcbikge1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgZ2V0Q29pbnMoKSkgLy8gZm9uY3Rpb25uZSBtw6ptZSBzaSBlbiByb3VnZSwgdW5lIGZvbmN0aW9uIGRvaXQgw6p0cmUgYXN5bmMgcG91ciBxdWUgYXdhaXQgZm9uY3Rpb25uZVxyXG59Il0sIm5hbWVzIjpbIkNvaW5HZWNrbyIsInJlcXVpcmUiLCJDb2luR2Vja29DbGllbnQiLCJnZXRQaW5nIiwiZGF0YSIsInBpbmciLCJnZWNrb19zYXlzIiwiZ2V0TGlzdCIsImNvaW5zIiwibGlzdCIsImdldENvaW5zIiwiYWxsIiwiT1JERVIiLCJzZWFyY2hDcnlwdG8iLCJjcnlwdG8iLCJmZXRjaCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/coinGecko.ts\n");

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