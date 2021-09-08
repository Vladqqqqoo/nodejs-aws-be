/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/getProductById/handler.ts":
/*!*************************************************!*\
  !*** ./src/functions/getProductById/handler.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductById\": () => (/* binding */ getProductById),\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var _libs_products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @libs/products.json */ \"./src/libs/products.json\");\n\r\n\r\n\r\n\r\nconst getProductById = async (event) => {\r\n    const { productId } = event.pathParameters;\r\n    if (!productId) {\r\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)(400, {\r\n            message: 'Please, provide correct product id'\r\n        });\r\n    }\r\n    const product = _libs_products_json__WEBPACK_IMPORTED_MODULE_3__.find((product) => product.id === productId);\r\n    if (!product) {\r\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)(404, { message: 'Product not found' });\r\n    }\r\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)(200, {\r\n        ...product\r\n    });\r\n};\r\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(getProductById);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldFByb2R1Y3RCeUlkL2hhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wLWluZm8tc2VydmljZS8uL3NyYy9mdW5jdGlvbnMvZ2V0UHJvZHVjdEJ5SWQvaGFuZGxlci50cz9iZTQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vbGFtYmRhIHNvdXJjZSBjb2RlXG5cbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxuLy8gaW1wb3J0IHR5cGUgeyBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50IH0gZnJvbSAnQGxpYnMvYXBpR2F0ZXdheSc7XG4vLyBpbXBvcnQgc2NoZW1hIGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gJ0BsaWJzL2FwaUdhdGV3YXknO1xuaW1wb3J0IHsgbWlkZHlmeSB9IGZyb20gJ0BsaWJzL2xhbWJkYSc7XG5pbXBvcnQgbW9ja2VkUHJvZHVjdExpc3QgZnJvbSAnQGxpYnMvcHJvZHVjdHMuanNvbic7XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRQcm9kdWN0QnlJZDogVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDx0eXBlb2Ygc2NoZW1hPiA9XG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEJ5SWQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzO1xuXG4gIGlmICghcHJvZHVjdElkKSB7XG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSg0MDAsIHtcbiAgICAgIG1lc3NhZ2U6ICdQbGVhc2UsIHByb3ZpZGUgY29ycmVjdCBwcm9kdWN0IGlkJ1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcHJvZHVjdCA9IG1vY2tlZFByb2R1Y3RMaXN0LmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IHByb2R1Y3RJZCk7XG5cbiAgaWYgKCFwcm9kdWN0KSB7XG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSg0MDQsIHsgbWVzc2FnZTogJ1Byb2R1Y3Qgbm90IGZvdW5kJyB9KTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2UoMjAwLCB7XG4gICAgLi4ucHJvZHVjdFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWluID0gbWlkZHlmeShnZXRQcm9kdWN0QnlJZCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/getProductById/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (code, response) => {\r\n    return {\r\n        statusCode: code,\r\n        body: JSON.stringify(response),\r\n        headers: {\r\n            'Access-Control-Allow-Origin': '*',\r\n            'Access-Control-Allow-Credentials': true\r\n        }\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFpQkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wLWluZm8tc2VydmljZS8uL3NyYy9saWJzL2FwaUdhdGV3YXkudHM/NjI1MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0FQSSBHYXRld2F5IHNwZWNpZmljIGhlbHBlcnNcblxuaW1wb3J0IHR5cGUge1xuICBBUElHYXRld2F5UHJveHlFdmVudCxcbiAgQVBJR2F0ZXdheVByb3h5UmVzdWx0LFxuICBIYW5kbGVyXG59IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBGcm9tU2NoZW1hIH0gZnJvbSAnanNvbi1zY2hlbWEtdG8tdHMnO1xuXG50eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgJ2JvZHknPiAmIHtcbiAgYm9keTogRnJvbVNjaGVtYTxTPjtcbn07XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxcbiAgVmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4sXG4gIEFQSUdhdGV3YXlQcm94eVJlc3VsdFxuPjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEpTT05SZXNwb25zZSA9IChcbiAgY29kZTogbnVtYmVyLFxuICByZXNwb25zZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBBcnJheTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiBjb2RlLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJzogdHJ1ZVxuICAgIH1cbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst middyfy = (handler) => {\r\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcC1pbmZvLXNlcnZpY2UvLi9zcmMvbGlicy9sYW1iZGEudHM/NmIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0xhbWJkYSBtaWRkbGV3YXJlXG5cbmltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSc7XG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tICdAbWlkZHkvaHR0cC1qc29uLWJvZHktcGFyc2VyJztcblxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcikgPT4ge1xuICByZXR1cm4gbWlkZHkoaGFuZGxlcikudXNlKG1pZGR5SnNvbkJvZHlQYXJzZXIoKSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "./src/libs/products.json":
/*!********************************!*\
  !*** ./src/libs/products.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"1","title":"love66","description":"The best bed linens ever","color":"peach","fabric":"satin","price":180,"count":1},{"id":"2","title":"love66","description":"The best bed linens ever","color":"blue","fabric":"satin","price":180,"count":1},{"id":"3","title":"love66","description":"The best bed linens ever","color":"black","fabric":"satin","price":180,"count":1},{"id":"4","title":"love66","description":"The best bed linens ever","color":"red","fabric":"satin","price":180,"count":1},{"id":"5","title":"love66","description":"The best bed linens ever","color":"dark blue","fabric":"satin","price":180,"count":1},{"id":"6","title":"love66","description":"The best bed linens ever","color":"white","fabric":"satin","price":180,"count":1},{"id":"7","title":"love66","description":"The best bed linens ever","color":"green","fabric":"satin","price":180,"count":1},{"id":"8","title":"love66","description":"The best bed linens ever","color":"apple green","fabric":"satin","price":180,"count":1},{"id":"9","title":"love66","description":"The best bed linens ever","color":"orange","fabric":"satin","price":180,"count":1},{"id":"10","title":"love66","description":"The best bed linens ever","color":"pink","fabric":"satin","price":180,"count":4}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/getProductById/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;