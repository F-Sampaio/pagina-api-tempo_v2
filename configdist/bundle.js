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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ \"./src/js/search.js\");\n\nvar switchButton = document.getElementById('switchThermometricScale');\nvar searchBtn = document.getElementById('searchBtn');\nvar inputCityName = document.getElementById('cityName');\nvar isMetric = true;\nsearchBtn.addEventListener('click', searchWeather()); // switchButton.addEventListener('click', changethermoScaleFlag())\n\nfunction searchWeather() {\n  Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"requestCurrentWeather\"])(inputCityName.value);\n  Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"requestForecastWeather\"])(inputCityName.value);\n  Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"testFile\"])();\n} // function changethermoScaleFlag() {\n//     isMetric ? isMetric = false : isMetric = true;\n//     searchWeather();\n// }\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/*! exports provided: requestCurrentWeather, requestForecastWeather, testFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestCurrentWeather\", function() { return requestCurrentWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestForecastWeather\", function() { return requestForecastWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"testFile\", function() { return testFile; });\nvar forecastKey = '30ee37b2a362dbbccfa3877edb1561bf';\nvar currentKey = 'b3a40c8e9ed10a3850cb4e90c6a5305e';\nfunction requestCurrentWeather(cityName) {\n  var URL_CURRENT_WEATHER = \"http://api.openweathermap.org/data/2.5/weather?q=\".concat(cityName, \"&appid=\").concat(currentKey); // if(isMetric) { URL_CURRENT_WEATHER += `&units=metric`;}\n\n  fetch(URL_CURRENT_WEATHER, {\n    method: 'get'\n  }).then(function (response) {\n    response.json().then(function (result) {\n      console.log(result);\n    });\n  })[\"catch\"](function (error) {\n    console.error(error);\n  });\n}\nfunction requestForecastWeather(cityName) {\n  var URL_FORECAST_WEATHER = \"http://api.openweathermap.org/data/2.5/forecast?q=\".concat(cityName, \"&appid=\").concat(forecastKey); // if(isMetric) { URL_FORECAST_WEATHER += `&units=metric`;}\n\n  fetch(URL_FORECAST_WEATHER, {\n    method: 'get'\n  }).then(function (response) {\n    response.json().then(function (result) {\n      console.log(result);\n    });\n  })[\"catch\"](function (error) {\n    console.error(error);\n  });\n}\nvar testFile = function testFile() {\n  console.log('test');\n};\n\n//# sourceURL=webpack:///./src/js/search.js?");

/***/ })

/******/ });