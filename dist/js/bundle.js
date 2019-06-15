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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {\n    \"use strict\";\n\n    if (global.setImmediate) {\n        return;\n    }\n\n    var nextHandle = 1; // Spec says greater than zero\n    var tasksByHandle = {};\n    var currentlyRunningATask = false;\n    var doc = global.document;\n    var registerImmediate;\n\n    function setImmediate(callback) {\n      // Callback can either be a function or a string\n      if (typeof callback !== \"function\") {\n        callback = new Function(\"\" + callback);\n      }\n      // Copy function arguments\n      var args = new Array(arguments.length - 1);\n      for (var i = 0; i < args.length; i++) {\n          args[i] = arguments[i + 1];\n      }\n      // Store and register the task\n      var task = { callback: callback, args: args };\n      tasksByHandle[nextHandle] = task;\n      registerImmediate(nextHandle);\n      return nextHandle++;\n    }\n\n    function clearImmediate(handle) {\n        delete tasksByHandle[handle];\n    }\n\n    function run(task) {\n        var callback = task.callback;\n        var args = task.args;\n        switch (args.length) {\n        case 0:\n            callback();\n            break;\n        case 1:\n            callback(args[0]);\n            break;\n        case 2:\n            callback(args[0], args[1]);\n            break;\n        case 3:\n            callback(args[0], args[1], args[2]);\n            break;\n        default:\n            callback.apply(undefined, args);\n            break;\n        }\n    }\n\n    function runIfPresent(handle) {\n        // From the spec: \"Wait until any invocations of this algorithm started before this one have completed.\"\n        // So if we're currently running a task, we'll need to delay this invocation.\n        if (currentlyRunningATask) {\n            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\n            // \"too much recursion\" error.\n            setTimeout(runIfPresent, 0, handle);\n        } else {\n            var task = tasksByHandle[handle];\n            if (task) {\n                currentlyRunningATask = true;\n                try {\n                    run(task);\n                } finally {\n                    clearImmediate(handle);\n                    currentlyRunningATask = false;\n                }\n            }\n        }\n    }\n\n    function installNextTickImplementation() {\n        registerImmediate = function(handle) {\n            process.nextTick(function () { runIfPresent(handle); });\n        };\n    }\n\n    function canUsePostMessage() {\n        // The test against `importScripts` prevents this implementation from being installed inside a web worker,\n        // where `global.postMessage` means something completely different and can't be used for this purpose.\n        if (global.postMessage && !global.importScripts) {\n            var postMessageIsAsynchronous = true;\n            var oldOnMessage = global.onmessage;\n            global.onmessage = function() {\n                postMessageIsAsynchronous = false;\n            };\n            global.postMessage(\"\", \"*\");\n            global.onmessage = oldOnMessage;\n            return postMessageIsAsynchronous;\n        }\n    }\n\n    function installPostMessageImplementation() {\n        // Installs an event handler on `global` for the `message` event: see\n        // * https://developer.mozilla.org/en/DOM/window.postMessage\n        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\n\n        var messagePrefix = \"setImmediate$\" + Math.random() + \"$\";\n        var onGlobalMessage = function(event) {\n            if (event.source === global &&\n                typeof event.data === \"string\" &&\n                event.data.indexOf(messagePrefix) === 0) {\n                runIfPresent(+event.data.slice(messagePrefix.length));\n            }\n        };\n\n        if (global.addEventListener) {\n            global.addEventListener(\"message\", onGlobalMessage, false);\n        } else {\n            global.attachEvent(\"onmessage\", onGlobalMessage);\n        }\n\n        registerImmediate = function(handle) {\n            global.postMessage(messagePrefix + handle, \"*\");\n        };\n    }\n\n    function installMessageChannelImplementation() {\n        var channel = new MessageChannel();\n        channel.port1.onmessage = function(event) {\n            var handle = event.data;\n            runIfPresent(handle);\n        };\n\n        registerImmediate = function(handle) {\n            channel.port2.postMessage(handle);\n        };\n    }\n\n    function installReadyStateChangeImplementation() {\n        var html = doc.documentElement;\n        registerImmediate = function(handle) {\n            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\n            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.\n            var script = doc.createElement(\"script\");\n            script.onreadystatechange = function () {\n                runIfPresent(handle);\n                script.onreadystatechange = null;\n                html.removeChild(script);\n                script = null;\n            };\n            html.appendChild(script);\n        };\n    }\n\n    function installSetTimeoutImplementation() {\n        registerImmediate = function(handle) {\n            setTimeout(runIfPresent, 0, handle);\n        };\n    }\n\n    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\n    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\n    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;\n\n    // Don't get fooled by e.g. browserify environments.\n    if ({}.toString.call(global.process) === \"[object process]\") {\n        // For Node.js before 0.9\n        installNextTickImplementation();\n\n    } else if (canUsePostMessage()) {\n        // For non-IE10 modern browsers\n        installPostMessageImplementation();\n\n    } else if (global.MessageChannel) {\n        // For web workers, where supported\n        installMessageChannelImplementation();\n\n    } else if (doc && \"onreadystatechange\" in doc.createElement(\"script\")) {\n        // For IE 6–8\n        installReadyStateChangeImplementation();\n\n    } else {\n        // For older browsers\n        installSetTimeoutImplementation();\n    }\n\n    attachTo.setImmediate = setImmediate;\n    attachTo.clearImmediate = clearImmediate;\n}(typeof self === \"undefined\" ? typeof global === \"undefined\" ? this : global : self));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/setimmediate/setImmediate.js?");

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== \"undefined\" && global) ||\n            (typeof self !== \"undefined\" && self) ||\n            window;\nvar apply = Function.prototype.apply;\n\n// DOM APIs, for completeness\n\nexports.setTimeout = function() {\n  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);\n};\nexports.setInterval = function() {\n  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);\n};\nexports.clearTimeout =\nexports.clearInterval = function(timeout) {\n  if (timeout) {\n    timeout.close();\n  }\n};\n\nfunction Timeout(id, clearFn) {\n  this._id = id;\n  this._clearFn = clearFn;\n}\nTimeout.prototype.unref = Timeout.prototype.ref = function() {};\nTimeout.prototype.close = function() {\n  this._clearFn.call(scope, this._id);\n};\n\n// Does not start the time, just sets up the members needed.\nexports.enroll = function(item, msecs) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = msecs;\n};\n\nexports.unenroll = function(item) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = -1;\n};\n\nexports._unrefActive = exports.active = function(item) {\n  clearTimeout(item._idleTimeoutId);\n\n  var msecs = item._idleTimeout;\n  if (msecs >= 0) {\n    item._idleTimeoutId = setTimeout(function onTimeout() {\n      if (item._onTimeout)\n        item._onTimeout();\n    }, msecs);\n  }\n};\n\n// setimmediate attaches itself to the global object\n__webpack_require__(/*! setimmediate */ \"./node_modules/setimmediate/setImmediate.js\");\n// On some exotic environments, it's not clear which object `setimmediate` was\n// able to install onto.  Search each possibility in the same order as the\n// `setimmediate` library.\nexports.setImmediate = (typeof self !== \"undefined\" && self.setImmediate) ||\n                       (typeof global !== \"undefined\" && global.setImmediate) ||\n                       (this && this.setImmediate);\nexports.clearImmediate = (typeof self !== \"undefined\" && self.clearImmediate) ||\n                         (typeof global !== \"undefined\" && global.clearImmediate) ||\n                         (this && this.clearImmediate);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/timers-browserify/main.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeUI\", function() { return removeUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeNewUI\", function() { return makeNewUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderResultUI\", function() { return renderResultUI; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! timers */ \"./node_modules/timers-browserify/main.js\");\n/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst removeUI = () => {\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].firstSection.innerHTML = \"\";\n}\nconst makeNewUI = () => {\n    Object(timers__WEBPACK_IMPORTED_MODULE_1__[\"setTimeout\"])(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].resultsSection.style.display = \"block\",0.5);\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].resultsSection.style.transform = 'translateX(0vw)';\n}\nconst renderResultUI = (el,url,foods) => {\n    let markup;\n    if(el.length === 0){\n        markup = \"<li>با این چیزایی که خونه داری باید تلفن را برداری زنگ بزنی رستوران</li>\";\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].results.insertAdjacentHTML('beforeend',markup);\n    }else{\n        el.forEach((element) => {\n            markup = `\n                <li><a href=${url[Object.keys(foods).indexOf(element)]}>${element.split(\"_\").join(\" \")}</a></li>\n            `\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].results.insertAdjacentHTML('beforeend',markup);\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/js/views/resultView.js?");

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