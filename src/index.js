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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import \"./styles/styles.scss\";\n\n//Start of Carousel Js\nconst carouselSlide = document.querySelector(\".carousel-slide\");\nconst carouselImages = document.querySelectorAll(\".carousel-slide img\");\n\n//Buttons\nconst prevBtn = document.querySelector(\"#prevBtn\");\nconst nextBtn = document.querySelector(\"#nextBtn\");\n\n//Image Counter\nlet counter = 1;\nconst size = carouselImages[0].clientWidth;\n\ncarouselSlide.style.transform = \"translateX(\" + -size * counter + \"px)\";\n\n//Button Listeners\nnextBtn.addEventListener(\"click\", () => {\n  if (counter >= carouselImages.length - 1) return;\n  carouselSlide.style.transition = \"transform 0.4s ease-in-out\";\n  counter++;\n  carouselSlide.style.transform = \"translateX(\" + -size * counter + \"px)\";\n});\n\nprevBtn.addEventListener(\"click\", () => {\n  if (counter <= 0) return;\n  carouselSlide.style.transition = \"transform 0.4s ease-in-out\";\n  counter--;\n  carouselSlide.style.transform = \"translateX(\" + -size * counter + \"px)\";\n});\n\ncarouselSlide.addEventListener(\"transitionend\", () => {\n  console.log(carouselImages[counter]);\n\n  if (carouselImages[counter].id === \"lastClone\") {\n    carouselSlide.style.transition = \"none\";\n    counter = carouselImages.length - 2;\n    console.log(counter);\n    carouselSlide.style.transform = \"translateX(\" + -size * counter + \"px)\";\n  }\n  if (carouselImages[counter].id === \"firstClone\") {\n    carouselSlide.style.transition = \"none\";\n    counter = carouselImages.length - counter;\n    console.log(counter);\n    carouselSlide.style.transform = \"translateX(\" + -size * counter + \"px)\";\n  }\n});\n// End of Carousel JS\n// const clickButton = document.getElementById(\"alt-click\");\n// const video = document.getElementById(\"video\");\n// const controlButton = document.getElementById(\"control-button\");\n// const myLocation = document.getElementById(\"coords\");\n\n// function newPage() {\n//   window.open(\n//     \"https://github.com/igmrrf\",\n//     \"_blank\",\n//     \"width=800, height=600, scrollbar=no\"\n//   );\n// }\n\n// function confirmation(e) {\n//   var c = confirm(\"Are you sure you're okay with logging out?\");\n//   if (c) {\n//     let word = \"Hello World\";\n//     var escaped = escape(word);\n//     //escape converts a string to linkable statement like search requests in google\n//     alert(escaped);\n//   } else {\n//     alert(\"We are happy you decided to spend more time with us\");\n//   }\n// }\n\n// controlButton.addEventListener(\"click\", (e) => {\n//   if (controlButton.innerHTML === \"Play\") {\n//     video.play();\n//     controlButton.innerHTML = \"Pause\";\n//   } else {\n//     video.pause();\n//     controlButton.innerHTML = \"Play\";\n//   }\n// });\n\n// function getMyLocation() {\n//   if (navigator.geolocation) {\n//     navigator.geolocation.getCurrentPosition(showPosition);\n//   } else {\n//     myLocation.innerHTML = \"Geolocation is not supported by this browser\";\n//   }\n// }\n\n// function showPosition(position) {\n//   console.log(position);\n//   console.log(position.coords.latitude);\n//   console.log(position.coords.longitude);\n//   myLocation.innerHTML =\n//     \"Latitude: \" +\n//     position.coords.latitude +\n//     \"<br/>Longitude: \" +\n//     position.coords.longitude;\n// }\n\n// function counting() {\n//   if (typeof Storage !== \"undefined\") {\n//     if (sessionStorage.counting) {\n//       sessionStorage.counting = Number(sessionStorage.counting) + 1;\n//     } else {\n//       sessionStorage.counting = 1;\n//     }\n//     document.getElementById(\"number\").innerHTML = sessionStorage.counting;\n//     if (sessionStorage.counting > 1) {\n//       document.getElementById(\"number\").innerHTML +=\n//         \" <p> Refresh Your Page</p>\";\n//     }\n//   } else {\n//     document.getElementById(\"number\").innerHTML =\n//       \"Sorry, your browser does not \" + \"support web Storage....\";\n//   }\n// }\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });