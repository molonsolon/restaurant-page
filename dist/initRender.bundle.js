/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/initRender.js":
/*!***************************!*\
  !*** ./src/initRender.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initRender)\n/* harmony export */ });\n\nfunction initRender() {\n    const content = document.querySelector('#content');\n    const navbar = document.createElement('nav');\n    const title = document.createElement('h1');\n\n    const navContent = document.createElement('ul');\n    \n    const navHome = document.createElement('li');\n    navHome.setAttribute('id', 'nav-home');\n    navHome.classList.add('nav-item');\n    \n    const navMenu = document.createElement('li');\n    navMenu.setAttribute('id', 'nav-menu');\n    navMenu.classList.add('nav-item');\n\n    const navContact = document.createElement('li');\n    navContact.setAttribute('id', 'nav-contact');\n    navContact.classList.add('nav-item');\n\n    \n    \n    console.log('hello')\n    navMenu.textContent = 'Menu';\n    navHome.textContent = 'Home';\n    navContact.textContent = 'Contact';\n\n    title.textContent = `Giuseppe's`;\n    \n    \n\n    \n    content.appendChild(title);\n    content.appendChild(navbar);\n    navbar.appendChild(navContent);\n    navContent.appendChild(navHome);\n    navContent.appendChild(navMenu);\n    navContent.appendChild(navContact);\n    \n\n    return content\n    \n};\n\n//# sourceURL=webpack://restaurant-page/./src/initRender.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/initRender.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;