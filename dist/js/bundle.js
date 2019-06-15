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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/base */ \"./src/js/views/base.js\");\n/* harmony import */ var _models_pwa_install__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/pwa-install */ \"./src/js/models/pwa-install.js\");\n/* harmony import */ var _views_tagsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/tagsView */ \"./src/js/views/tagsView.js\");\n/* harmony import */ var _models_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/tags */ \"./src/js/models/tags.js\");\n/* harmony import */ var _views_resultView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/resultView */ \"./src/js/views/resultView.js\");\n\n\n\n\n\n\n\n\n\n\n//fetching data from firebase\nfetch(\"./data/food-additives.json\")\n.then(e => {\n    return e.json()\n}).then(fetchedData => {\n\n    //--filling tags controller\n    window.fetchedData = fetchedData;\n    Object(_views_tagsView__WEBPACK_IMPORTED_MODULE_2__[\"tagsView\"])(fetchedData.additives);\n\n    //--searching controller\n    //determine the selected tags and highlight it\n    Object(_views_tagsView__WEBPACK_IMPORTED_MODULE_2__[\"selectedTags\"])();\n\n\n\n\n    //show Selected foods that matches the tags\n    const showSelectedFoods = el => {\n        //clear the UI\n        _views_resultView__WEBPACK_IMPORTED_MODULE_4__[\"removeUI\"]()\n        \n        //make new UI\n        _views_resultView__WEBPACK_IMPORTED_MODULE_4__[\"makeNewUI\"]()\n\n        //render result UI\n        _views_resultView__WEBPACK_IMPORTED_MODULE_4__[\"renderResultUI\"](el,fetchedData.foodsURL,fetchedData.foods);\n        \n    }\n\n    //get data when pushing search button\n    _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].searchBtn.addEventListener('click',() =>{\n        //getting selected tags\n        const result = Object(_models_tags__WEBPACK_IMPORTED_MODULE_3__[\"collectSelectedTags\"])();\n        //--Matching selected tags and foods\n        let selectedOnes = [];\n        Object.keys(fetchedData.foods).forEach(el => {\n            let areSame = true;\n                for(var b=0;b<fetchedData.foods[el].length;b++){\n                    if(!result.includes(fetchedData.foods[el][b])){\n                        areSame = false;\n                        break;\n                    }\n                }  \n                if(areSame){\n                    selectedOnes.push(el);\n                }\n        })\n        window.elements = selectedOnes;\n        showSelectedFoods(selectedOnes);    \n    })\n\n})\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/pwa-install.js":
/*!**************************************!*\
  !*** ./src/js/models/pwa-install.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/base */ \"./src/js/views/base.js\");\n\nvar deferredPrompt;\n//check if there is no service worker install one\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker\n    .register('sw.js')\n    .then(function() {\n      console.log('Service worker registered!');\n    });\n}\n// prevent browser from triggering automatic save app and save that event in a var\nwindow.addEventListener('beforeinstallprompt', function(event) {\n  console.log('beforeinstallprompt fired');\n  event.preventDefault();\n  deferredPrompt = event;\n  //it shows our install button for devices except Apple's\n  if (deferredPrompt) {\n    _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].PWABtn.style.display = \"inline-block\";\n  }\n  return false;\n});\n// triggers the save app banner and console log the result\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].PWABtn.addEventListener(\"click\",() => {\n    if (deferredPrompt) {\n        \n        deferredPrompt.prompt();\n    \n        deferredPrompt.userChoice.then(function(choiceResult) {\n          console.log(choiceResult.outcome);\n    \n          if (choiceResult.outcome === 'dismissed') {\n            console.log('User cancelled installation');\n          } else {\n            console.log('User added to home screen');\n          }\n        });\n    \n        deferredPrompt = null;\n    }\n  })\n\n//detects whether the phone is apple and show the save app message\nif(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) &&\n!window.matchMedia('(display-mode: standalone)').matches){\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].iosAlert.style.display = \"block\";\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].mainContent.style.display = \"none\";\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].footer.style.display = \"none\";\n};\n// close button for app installing instruction for iphone\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].PWACloseAlertBtn.addEventListener(\"click\",() => {\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].iosAlert.style.display = \"none\";\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].mainContent.style.display = \"initial\";\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].footer.style.display = \"initial\";\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].mainContent.style.transition = \"1s\";\n}) \n//when application runs (not app on browser)\nif (window.matchMedia('(display-mode: standalone)').matches) {\n  \n  //by using this localstorage method we execute code once \n  var alerted = localStorage.getItem('alerted') || '';\n  if (alerted != 'yes') {\n   alert(\" در آینده نزدیک اطلاعات غذاهای بیشتر بصورت خودکار به برنامه اضافه خواهد شد.\");\n   localStorage.setItem('alerted','yes');\n  } \n}  \n\n//# sourceURL=webpack:///./src/js/models/pwa-install.js?");

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
/*! exports provided: elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\nconst elements = {\n    PWABtn: document.querySelector('.PWA-btn'),\n    iosAlert: document.querySelector('.ios-pwa-alert'),\n    mainContent: document.querySelector('.main__content'),\n    footer: document.querySelector('footer'),\n    PWACloseAlertBtn: document.querySelector('.PWA__ios-alert--close'),\n    searchBtn: document.querySelector('.search-btn'),\n    tagsSection: document.querySelector('.tags ul'),\n    firstSection: document.querySelector('.first-section'),\n    results: document.querySelector('.result-titles ul'),\n    resultsSection: document.querySelector('.results-section')\n}\n\n//# sourceURL=webpack:///./src/js/views/base.js?");

/***/ }),

/***/ "./src/js/views/resultView.js":
/*!************************************!*\
  !*** ./src/js/views/resultView.js ***!
  \************************************/
/*! exports provided: removeUI, makeNewUI, renderResultUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeUI\", function() { return removeUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeNewUI\", function() { return makeNewUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderResultUI\", function() { return renderResultUI; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\n\nconst removeUI = () => {\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].firstSection.innerHTML = \"\";\n}\nconst makeNewUI = () => {\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].resultsSection.style = ('display','block');\n}\nconst renderResultUI = (el,url,foods) => {\n    let markup;\n    if(el.length === 0){\n        markup = \"<li>با این چیزایی که خونه داری باید تلفن را برداری زنگ بزنی رستوران</li>\";\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].results.insertAdjacentHTML('beforeend',markup);\n    }else{\n        el.forEach((element) => {\n            markup = `\n                <li><a href=${url[Object.keys(foods).indexOf(element)]}>${element.split(\"_\").join(\" \")}</a></li>\n            `\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].results.insertAdjacentHTML('beforeend',markup);\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/js/views/resultView.js?");

/***/ }),

/***/ "./src/js/views/tagsView.js":
/*!**********************************!*\
  !*** ./src/js/views/tagsView.js ***!
  \**********************************/
/*! exports provided: tagsView, selectedTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tagsView\", function() { return tagsView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectedTags\", function() { return selectedTags; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\n\nconst tagsView = (array) => {\n    array.forEach(element => {\n        const markup = `\n        <li>${element}</li>\n        `\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].tagsSection.insertAdjacentHTML('beforeend',markup);\n    });\n}\nconst selectedTags = () => {\n    document.querySelectorAll('.tags ul li').forEach(el => {\n        el.addEventListener('click', \n            e => {\n                e.target.classList.toggle('tag-selected');  \n                if(e.target.classList == 'tag-selected'){\n                    e.target.dataset.selected = true;\n                }else{\n                    e.target.dataset.selected = false;\n                }\n            })    \n    });\n};\n\n//# sourceURL=webpack:///./src/js/views/tagsView.js?");

/***/ })

/******/ });