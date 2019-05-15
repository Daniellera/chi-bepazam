/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/base */ \"./src/js/views/base.js\");\n/* harmony import */ var _views_tagsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/tagsView */ \"./src/js/views/tagsView.js\");\n/* harmony import */ var _models_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/tags */ \"./src/js/models/tags.js\");\n/* harmony import */ var _views_resultView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/resultView */ \"./src/js/views/resultView.js\");\n\n//--Getting Tags\n\n//--Getting foods\n\n\n\n\n\n\n\n//--filling tags controller\nObject(_views_tagsView__WEBPACK_IMPORTED_MODULE_1__[\"tagsView\"])(_views_base__WEBPACK_IMPORTED_MODULE_0__[\"tags\"]);\n\n//--searching controller\n//determine the selected tags and highlight it\nObject(_views_tagsView__WEBPACK_IMPORTED_MODULE_1__[\"selectedTags\"])();\n\n\n\n\n//show Selected foods that matches the tags\nconst showSelectedFoods = el => {\n    //clear the UI\n    _views_resultView__WEBPACK_IMPORTED_MODULE_3__[\"removeUI\"]()\n    \n    //make new UI\n    _views_resultView__WEBPACK_IMPORTED_MODULE_3__[\"makeNewUI\"]()\n\n    //render result UI\n    _views_resultView__WEBPACK_IMPORTED_MODULE_3__[\"renderResultUI\"](el);\n    \n}\n\n//get data when pushing search button\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].searchBtn.addEventListener('click',() =>{\n    //getting selected tags\n    const result = Object(_models_tags__WEBPACK_IMPORTED_MODULE_2__[\"collectSelectedTags\"])();\n    //--Matching selected tags and foods\n    let selectedOnes = [];\n    Object.keys(_views_base__WEBPACK_IMPORTED_MODULE_0__[\"foods\"]).forEach(el => {\n        let areSame = true;\n            for(var b=0;b<_views_base__WEBPACK_IMPORTED_MODULE_0__[\"foods\"][el].length;b++){\n                if(!result.includes(_views_base__WEBPACK_IMPORTED_MODULE_0__[\"foods\"][el][b])){\n                    areSame = false;\n                    break;\n                }\n             }  \n            if(areSame){\n                selectedOnes.push(el);\n            }\n    })\n    console.log(selectedOnes)\n    showSelectedFoods(selectedOnes);    \n})\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/tags.js":
/*!*******************************!*\
  !*** ./src/js/models/tags.js ***!
  \*******************************/
/*! exports provided: collectSelectedTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collectSelectedTags\", function() { return collectSelectedTags; });\nconst collectSelectedTags = () => {\n    const collectedData = [];\n    document.querySelectorAll('.tags ul li[data-selected=true]').forEach(el => {\n        collectedData.push(el.textContent);\n    });\n    return collectedData;\n}\n\n//# sourceURL=webpack:///./src/js/models/tags.js?");

/***/ }),

/***/ "./src/js/views/base.js":
/*!******************************!*\
  !*** ./src/js/views/base.js ***!
  \******************************/
/*! exports provided: elements, tags, foods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tags\", function() { return tags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foods\", function() { return foods; });\nconst elements = {\n    searchBtn: document.querySelector('.search-btn'),\n    tagsSection: document.querySelector('.tags ul'),\n    firstSection: document.querySelector('.first-section'),\n    results: document.querySelector('.result-titles ul'),\n    resultsSection: document.querySelector('.results-section')\n}\n\nconst tags = [\n   'رب گوجه',\n    'پیاز',\n    'سیر',\n    'سیب زمینی',\n    'ماست',\n    'مرغ',\n    'گوشت قرمز',\n    'پنیر پیتزا',\n    'جعفری',\n];\n\nconst foods = {\n    قورمه: ['رب گوجه', 'جعفری', 'گوشت قرمز'],\n    پیتزا: ['پنیر پیتزا','سیر', 'مرغ'],\n    ماست: ['ماست']\n}\n\n//# sourceURL=webpack:///./src/js/views/base.js?");

/***/ }),

/***/ "./src/js/views/resultView.js":
/*!************************************!*\
  !*** ./src/js/views/resultView.js ***!
  \************************************/
/*! exports provided: removeUI, makeNewUI, renderResultUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeUI\", function() { return removeUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeNewUI\", function() { return makeNewUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderResultUI\", function() { return renderResultUI; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\n\nconst removeUI = () => {\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].firstSection.innerHTML = \"\";\n}\nconst makeNewUI = () => {\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].resultsSection.style = ('display','block');\n}\nconst renderResultUI = (el) => {\n    if(el.length === 0){\n        const markup = \"<li>با این چیزایی که خونه داری باید تلفن را برداری زنگ بزنی رستوران</li>\";\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].results.insertAdjacentHTML('beforeend',markup);\n    }else{\n        el.forEach(element => {\n            const markup = `\n                <li>${element}</li>\n            `\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].results.insertAdjacentHTML('beforeend',markup);\n        });\n    }\n\n}\n\n//# sourceURL=webpack:///./src/js/views/resultView.js?");

/***/ }),

/***/ "./src/js/views/tagsView.js":
/*!**********************************!*\
  !*** ./src/js/views/tagsView.js ***!
  \**********************************/
/*! exports provided: tagsView, selectedTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tagsView\", function() { return tagsView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectedTags\", function() { return selectedTags; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\nconst tagsView = (array) => {\n    array.forEach(element => {\n        const markup = `\n        <li>${element}</li>\n        `\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].tagsSection.insertAdjacentHTML('beforeend',markup);\n    });\n}\nconst selectedTags = () => {\n    document.querySelectorAll('.tags ul li').forEach(el => {\n        el.addEventListener('click', \n            e => {\n                e.target.classList.toggle('tag-selected');  \n                if(e.target.classList == 'tag-selected'){\n                    e.target.dataset.selected = true;\n                }else{\n                    e.target.dataset.selected = false;\n                }\n            })    \n    });\n};\n\n//# sourceURL=webpack:///./src/js/views/tagsView.js?");

/***/ })

/******/ });