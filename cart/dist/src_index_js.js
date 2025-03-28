"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcart"] = self["webpackChunkcart"] || []).push([["src_index_js"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet cartItems = [];\n\nfor (let i = 0; i < 5; i++) {\n    cartItems.push({\n        id: i,\n        name: faker__WEBPACK_IMPORTED_MODULE_0___default().commerce.productName(),\n        price: parseFloat(faker__WEBPACK_IMPORTED_MODULE_0___default().commerce.price()),\n        image: `https://picsum.photos/200?random=${i}`, // Use Picsum to generate random images\n    });\n}\n\nconst totalProducts = cartItems.length;\nconst totalCost = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);\nconst freeShippingThreshold = 50; // Example threshold for free shipping\nconst progress = Math.min((totalCost / freeShippingThreshold) * 100, 100).toFixed(2);\n\nconst cartText = cartItems\n    .map((item) => `<div class=\"carts-item\" key=${item.id}>\n        <img src=\"${item.image}\" alt=\"${item.name}\" />\n        ${item.name} - $${item.price}\n    </div>`)\n    .join('');\n\ndocument.querySelector('#carts').innerHTML = cartText;\n\ndocument.querySelector('#carts-summary').innerHTML = `\n    <div class=\"progress-bar\">\n        <div class=\"progress\" style=\"width: ${progress}%;\"></div>\n    </div>\n    <p>${progress >= 100 ? 'You qualify for free shipping!' : `Spend $${(freeShippingThreshold - totalCost).toFixed(2)} more for free shipping.`}</p>\n    <p>Subtotal (${totalProducts} products): <strong>$${totalCost}</strong></p>\n    <label><input type=\"checkbox\"> This order is a gift</label>\n    <button class=\"checkout-button\">Proceed to Checkout</button>\n`;\n\n\n//# sourceURL=webpack://cart/./src/index.js?");

/***/ })

}]);