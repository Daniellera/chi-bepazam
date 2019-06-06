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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/base */ \"./src/js/views/base.js\");\n/* harmony import */ var _models_pwa_install__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/pwa-install */ \"./src/js/models/pwa-install.js\");\n/* harmony import */ var _views_tagsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/tagsView */ \"./src/js/views/tagsView.js\");\n/* harmony import */ var _models_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/tags */ \"./src/js/models/tags.js\");\n/* harmony import */ var _views_resultView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/resultView */ \"./src/js/views/resultView.js\");\n\n\n//--Getting Tags\n\n//--Getting foods\n\n\n\n\n\n\n\n\n\n\n//--filling tags controller\nObject(_views_tagsView__WEBPACK_IMPORTED_MODULE_2__[\"tagsView\"])(_views_base__WEBPACK_IMPORTED_MODULE_0__[\"tags\"]);\n\n//--searching controller\n//determine the selected tags and highlight it\nObject(_views_tagsView__WEBPACK_IMPORTED_MODULE_2__[\"selectedTags\"])();\n\n\n\n\n//show Selected foods that matches the tags\nconst showSelectedFoods = el => {\n    //clear the UI\n    _views_resultView__WEBPACK_IMPORTED_MODULE_4__[\"removeUI\"]()\n    \n    //make new UI\n    _views_resultView__WEBPACK_IMPORTED_MODULE_4__[\"makeNewUI\"]()\n\n    //render result UI\n    _views_resultView__WEBPACK_IMPORTED_MODULE_4__[\"renderResultUI\"](el,_views_base__WEBPACK_IMPORTED_MODULE_0__[\"foodsURL\"]);\n    \n}\n\n//get data when pushing search button\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].searchBtn.addEventListener('click',() =>{\n    //getting selected tags\n    const result = Object(_models_tags__WEBPACK_IMPORTED_MODULE_3__[\"collectSelectedTags\"])();\n    //--Matching selected tags and foods\n    let selectedOnes = [];\n    Object.keys(_views_base__WEBPACK_IMPORTED_MODULE_0__[\"foods\"]).forEach(el => {\n        let areSame = true;\n            for(var b=0;b<_views_base__WEBPACK_IMPORTED_MODULE_0__[\"foods\"][el].length;b++){\n                if(!result.includes(_views_base__WEBPACK_IMPORTED_MODULE_0__[\"foods\"][el][b])){\n                    areSame = false;\n                    break;\n                }\n             }  \n            if(areSame){\n                selectedOnes.push(el);\n            }\n    })\n    window.elements = selectedOnes;\n    showSelectedFoods(selectedOnes);    \n})\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/pwa-install.js":
/*!**************************************!*\
  !*** ./src/js/models/pwa-install.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/base */ \"./src/js/views/base.js\");\n\nvar deferredPrompt;\n//check if there is no service worker install one\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker\n    .register('sw.js')\n    .then(function() {\n      console.log('Service worker registered!');\n    });\n}\n// prevent browser from triggering automatic save app and save that event in a var\nwindow.addEventListener('beforeinstallprompt', function(event) {\n  console.log('beforeinstallprompt fired');\n  event.preventDefault();\n  deferredPrompt = event;\n  //it shows our install button for devices except Apple's\n  if (deferredPrompt) {\n    _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].PWABtn.style.display = \"inline-block\";\n  }\n  return false;\n});\n// triggers the save app banner and console log the result\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].PWABtn.addEventListener(\"click\",() => {\n    if (deferredPrompt) {\n        \n        deferredPrompt.prompt();\n    \n        deferredPrompt.userChoice.then(function(choiceResult) {\n          console.log(choiceResult.outcome);\n    \n          if (choiceResult.outcome === 'dismissed') {\n            console.log('User cancelled installation');\n          } else {\n            console.log('User added to home screen');\n          }\n        });\n    \n        deferredPrompt = null;\n    }\n  })\n\n//detects whether the phone is apple and show the save app message\nif(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) &&\n!window.matchMedia('(display-mode: standalone)').matches){\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].iosAlert.style.display = \"block\";\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].mainContent.style.display = \"none\";\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].footer.style.display = \"none\";\n};\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].PWACloseAlertBtn.addEventListener(\"click\",() => {\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].iosAlert.style.display = \"none\";\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].mainContent.style.display = \"initial\";\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].footer.style.display = \"initial\";\n  _views_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].mainContent.style.transition = \"1s\";\n}) \n//when application runs (not app on browser)\nif (window.matchMedia('(display-mode: standalone)').matches) {\n  \n  //by using this localstorage method we execute code once \n  var alerted = localStorage.getItem('alerted') || '';\n  if (alerted != 'yes') {\n   alert(\" در آینده نزدیک اطلاعات غذاهای بیشتر بصورت خودکار به برنامه اضافه خواهد شد.\");\n   localStorage.setItem('alerted','yes');\n  }\n  \n}  \n\n//# sourceURL=webpack:///./src/js/models/pwa-install.js?");

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
/*! exports provided: elements, tags, foods, foodsURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tags\", function() { return tags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foods\", function() { return foods; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foodsURL\", function() { return foodsURL; });\nconst elements = {\n    PWABtn: document.querySelector('.PWA-btn'),\n    iosAlert: document.querySelector('.ios-pwa-alert'),\n    mainContent: document.querySelector('.main__content'),\n    footer: document.querySelector('footer'),\n    PWACloseAlertBtn: document.querySelector('.PWA__ios-alert--close'),\n    searchBtn: document.querySelector('.search-btn'),\n    tagsSection: document.querySelector('.tags ul'),\n    firstSection: document.querySelector('.first-section'),\n    results: document.querySelector('.result-titles ul'),\n    resultsSection: document.querySelector('.results-section')\n}\n\nconst tags = [\n   'رب گوجه',\n    'پیاز',\n    'سیر',\n    'سیب زمینی',\n    'ماست',\n    'مرغ',\n    'گوشت چرخکرده',\n    'پنیر پیتزا',\n    'تخم مرغ',\n    'بادمجان',\n    'ماکارونی',\n    'خیارشور',\n    'روغن',\n    'برنج',\n    'نان تست',\n    'نان باگت',\n    'کدوسبز',\n    'فلفل دلمه',\n    'تن ماهی',\n    'گوجه فرنگی',\n    'قارچ',\n    'نان',\n    'سس مایونز',\n    'کره'\n];\n\nconst foods = {\n    استانبولی: ['رب گوجه', 'برنج', 'پیاز', 'گوجه فرنگی'],\n    ماکارونی: ['رب گوجه', 'ماکارونی','گوشت چرخکرده', 'پیاز', 'گوجه فرنگی'],\n    کتلت: ['تخم مرغ', 'سیب زمینی','گوشت چرخکرده', 'پیاز'],\n    کباب_ترکی: ['قارچ', 'مرغ','فلفل دلمه', 'گوجه فرنگی', 'پیاز'],\n    پلو_تن‌ماهی: ['برنج', 'تن ماهی', 'پیاز', 'رب گوجه'],\n    خوراک: ['گوشت چرخکرده', 'سیب زمینی', 'گوجه فرنگی', 'رب گوجه', 'پیاز'],\n    ساندویچ_مرغ: ['مرغ', 'نان باگت'],\n    خوراک_تن‌ماهی: ['فلفل دلمه', 'تن ماهی', 'پیاز', 'گوجه فرنگی'],\n    کباب_کوبیده: ['مرغ', 'پیاز', 'کره'],\n    تست_تخم_مرغ: ['تخم مرغ', 'نان تست', 'کره'],\n    املت: ['گوجه فرنگی', 'تخم مرغ'],\n    خوراک_کدو: ['کدو سبز', 'پیاز', 'گوجه فرنگی', 'سیر'],\n    نیمرو_قارچ: ['تخم مرغ', 'قارچ'],\n    چیغرتما: ['مرغ', 'تخم مرغ', 'کره'],\n    تن‌ماهی_با_سیب‌زمینی: ['تن ماهی', 'سیب زمینی', 'رب گوجه'],\n    کوکو_برنج: ['برنج', 'تخم مرغ'],\n    میرزاقاسمی: ['بادمجان', 'سیر', 'گوجه فرنگی', 'تخم مرغ'],\n    نان_سیر: ['نان باگت', 'سیر', 'پنیر پیتزا', 'کره'],\n    املت_مخصوص: ['سیب زمینی', 'گوشت چرخکرده', 'قارچ', 'پیاز', 'تخم مرغ'],\n    چغوت_بریزو: ['گوشت چرخکرده', 'پیاز', 'سیب زمینی', 'رب گوجه']\n}\nconst foodsURL = [\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8706625-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%A8%D9%88%D9%84%DB%8C-%D8%B3%D8%A7%D8%AF%D9%87-%D9%88-%D8%B3%D8%B1%DB%8C%D8%B9%F0%9F%8D%9B',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8388987-%D9%85%D8%A7%DA%A9%D8%A7%D8%B1%D9%88%D9%86%DB%8C-%D9%81%D9%88%D8%B1%DB%8C-%F0%9F%8D%9D%F0%9F%8D%9D%F0%9F%8D%9D',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7908551-%DA%A9%D8%AA%D9%84%D8%AA-%D8%B3%D8%B1%DB%8C%D8%B9-%D9%88-%D8%A2%D8%B3%D8%A7%D9%86',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7806086-%D9%83%D8%A8%D8%A7%D8%A8-%D8%AA%D8%B1%D9%83%D9%89-%D9%81%D9%88%D8%B1%D9%8A-%F0%9F%98%8D',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7556924-%D9%BE%D9%84%D9%88-%D8%AA%D9%86-%D9%85%D8%A7%D9%87%DB%8C-%D8%B3%D8%A7%D8%AF%D9%87-%D9%88-%D8%B3%D8%B1%DB%8C%D8%B9-%F0%9F%90%9F%F0%9F%90%9F',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7430930-%D8%AE%D9%88%D8%B1%D8%A7%DA%A9-%D9%81%D9%88%D8%B1%DB%8C',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/6950310-%D8%B3%D8%A7%D9%86%D8%AF%D9%88%DB%8C%DA%86-%D9%85%D8%B1%D8%BA-%D9%81%D9%88%D8%B1%DB%8C',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/5192576-%D8%AE%D9%88%D8%B1%D8%A7%DA%A9-%D8%AA%D9%86-%D9%85%D8%A7%D9%87%DB%8C-%D9%86%D8%A7%D9%87%D8%A7%D8%B1-%DB%8C%D8%A7-%D8%B4%D8%A7%D9%85-%D9%81%D9%88%D8%B1%DB%8C%F0%9F%98%89',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8734408-%DA%A9%D8%A8%D8%A7%D8%A8-%DA%A9%D9%88%D8%A8%DB%8C%D8%AF%D9%87-%D9%85%D8%B1%D8%BA',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8744681-%D8%AA%D8%B3%D8%AA-%D8%AA%D8%AE%D9%85-%D9%85%D8%B1%D8%BA%DB%8C',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8728805-%D8%A7%D9%85%D9%84%D8%AA',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8688124-%D8%AE%D9%88%D8%B1%D8%A7%DA%A9-%DA%A9%D8%AF%D9%88-%D8%B3%D8%A8%D8%B2-%D8%B1%DA%98%DB%8C%D9%85%DB%8C',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8520719-%D9%86%DB%8C%D9%85%D8%B1%D9%88-%D9%82%D8%A7%D8%B1%DA%86',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8283553-%DA%86%DB%8C%D8%BA%D8%B1%D8%AA%D9%85%D8%A7',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7745616-%D8%AA%D9%86-%D9%85%D8%A7%D9%87%DB%8C-%D8%A8%D8%A7-%D8%B3%DB%8C%D8%A8-%D8%B2%D9%85%DB%8C%D9%86%DB%8C',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7654672-%DA%A9%D9%88%DA%A9%D9%88-%D8%A8%D8%B1%D9%86%D8%AC',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7653135-%D9%85%DB%8C%D8%B1%D8%B2%D8%A7-%D9%82%D8%A7%D8%B3%D9%85%DB%8C',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7610302-%D9%86%D8%A7%D9%86-%D8%B3%DB%8C%D8%B1-%D8%AE%D9%88%D8%B4%D9%85%D8%B2%D9%87',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7567167-%D8%A7%D9%85%D9%84%D8%AA-%D9%85%D8%AE%D8%B5%D9%88%D8%B5-%D8%AD%D9%88%D8%B1%D8%A7%DB%8C%DB%8C',\n    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/6439392-%DA%86%D8%BA%D9%88%D8%AA-%D8%A8%D8%B1%DB%8C%D8%B2%D9%88-%F0%9F%98%8A'\n]\n\n//# sourceURL=webpack:///./src/js/views/base.js?");

/***/ }),

/***/ "./src/js/views/resultView.js":
/*!************************************!*\
  !*** ./src/js/views/resultView.js ***!
  \************************************/
/*! exports provided: removeUI, makeNewUI, renderResultUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeUI\", function() { return removeUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeNewUI\", function() { return makeNewUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderResultUI\", function() { return renderResultUI; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\n\n\nconst removeUI = () => {\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].firstSection.innerHTML = \"\";\n}\nconst makeNewUI = () => {\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].resultsSection.style = ('display','block');\n}\nconst renderResultUI = (el,url) => {\n    let markup;\n    if(el.length === 0){\n        markup = \"<li>با این چیزایی که خونه داری باید تلفن را برداری زنگ بزنی رستوران</li>\";\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].results.insertAdjacentHTML('beforeend',markup);\n    }else{\n        el.forEach((element) => {\n            markup = `\n                <li><a href=${url[Object.keys(_base__WEBPACK_IMPORTED_MODULE_0__[\"foods\"]).indexOf(element)]}>${element.split(\"_\").join(\" \")}</a></li>\n            `\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].results.insertAdjacentHTML('beforeend',markup);\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/js/views/resultView.js?");

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