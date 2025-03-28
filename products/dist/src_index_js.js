"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproducts"] = self["webpackChunkproducts"] || []).push([["src_index_js"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet products = [];\n\nfor (let i = 0; i < 10; i++) {\n    products.push({\n        id: i,\n        name: faker__WEBPACK_IMPORTED_MODULE_0___default().commerce.productName(),\n        price: faker__WEBPACK_IMPORTED_MODULE_0___default().commerce.price(),\n        image: `https://picsum.photos/200?random=${i}`, // Use Picsum to generate random images\n    });\n}\n\n// Render products in the DOM\nconst productList = document.querySelector('#product-list');\nproducts.forEach(product => {\n    const productDiv = document.createElement('div');\n    productDiv.className = 'product';\n    productDiv.innerHTML = `\n        <h3>${product.name}</h3>\n        <p>Price: $${product.price}</p>\n        <img src=\"${product.image}\" alt=\"${product.name}\" />\n    `;\n    productList.appendChild(productDiv);\n});\n\n\n//# sourceURL=webpack://products/./src/index.js?");

/***/ })

}]);