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

/***/ "./src/js/parts/accordeon.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordeon.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function accordeon() {

  let accordion = document.querySelector("#accordion"),
      titleAccordion = document.querySelectorAll(".accordion-heading"),
      accordionContent = document.querySelectorAll(".accordion-block");


  for (let i = 0; i < titleAccordion.length; i++) {
    titleAccordion[i].addEventListener("click", () =>{
      for (let item = 0; item < accordionContent.length; item++) {
        accordionContent[item].classList.remove("ui-accordion-content-on");
        titleAccordion[item].classList.remove("ui-accordion-header-active");
        accordionContent[i].classList.add("animated", "fadeInDown");
      }
      accordionContent[i].classList.toggle("ui-accordion-content-on");
      titleAccordion[i].classList.toggle("ui-accordion-header-active");
    })
  }
}

module.exports = accordeon;


/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {

	let calc = document.querySelector(".calc"),
      size = document.querySelector("#size"),
      material = document.querySelector("#material"),
      additOptions = document.querySelector("#options"),
      promocode = document.querySelector(".promocode"),
      calcPrice = document.querySelector(".calc-price");

  let calculate = () => {

    if (size.options.selectedIndex > 0 && material.options.selectedIndex > 0) {

      let total = +size.options[size.selectedIndex].value + +material.options[material.selectedIndex].value;

      if (additOptions.options.selectedIndex > 0) {
        total += +additOptions.options[additOptions.selectedIndex].value;
      }
      if (promocode.value === "IWANTPOPART") {
        total -= (total *(30 / 100));
      }
      calcPrice.innerHTML = total + "Рублей";
    } else {
      calcPrice.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
    }

  };

  document.addEventListener("change", event => {
    let target = event.target;
    if (target.tagName == "SELECT" || target.tagName == "INPUT") {
      calculate();  
    }
  });

}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/filterItems.js":
/*!*************************************!*\
  !*** ./src/js/parts/filterItems.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function filterItems() {

  let portfolioNo = document.querySelector(".portfolio-no"),
      portfolioBlock = document.querySelectorAll(".portfolio-block"),
      portfolioMenu = document.querySelector(".portfolio-menu"),
      portfolioMenuLi = document.querySelectorAll(".portfolio-menu > li");

  portfolioMenu.addEventListener("click", event => {

    let target = event.target,
        noContent = true,
        classActive = target.getAttribute("class");

    portfolioMenuLi.forEach((item) => {
      item.classList.remove("active");
    });

    target.classList.add("active");

    if (target && target.tagName == "LI") {

      for (let i = 0; i < portfolioBlock.length; i++) {

        if (portfolioBlock[i].classList.contains(classActive)) {
          portfolioBlock[i].style.display = "block";
          noContent = false;
        } else {
          portfolioBlock[i].style.display = "none";
        }
      }
      if (noContent === false) {
        portfolioNo.style.display = "none";
      }
      if (noContent === true) {
        portfolioNo.style.display = "block";
      }
    }

  });

}

module.exports = filterItems;


/***/ }),

/***/ "./src/js/parts/forms.js":
/*!*******************************!*\
  !*** ./src/js/parts/forms.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {

  let message = {
      loading: "Загрузка...",
      success: "Спасибо! Мы скоро с вами свяжемся!",
      failure: "Что-то пошло не так..."
  };

  let statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  let formSend = (element) => {

    element.appendChild(statusMessage);
    let contentFormPopup = element.querySelector(".content-form-popup");

    let request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    let formData = new FormData(element);

    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });

    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener("readystatechange", () => {

      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {

        if (element.classList.contains("popup-form")) {
          contentFormPopup.style.display = "none";
          statusMessage.innerHTML = message.success;
          setInterval( () => { 
            contentFormPopup.style.display = "block";
            element.removeChild(statusMessage);
          },5000);
        } else {
          statusMessage.innerHTML = message.success;
        }

      } else {

        if (element.classList.contains("popup-form")) {
          contentFormPopup.style.display = "none";
          statusMessage.innerHTML = message.failure;
          setInterval( () => { 
            contentFormPopup.style.display = "block";
            element.removeChild(statusMessage);
          },5000);
        } else {
          statusMessage.innerHTML = message.failure;
        }

      }
    });

    for (let i = 0; i < element.length; i++) {
      element[i].value = "";
    }
  };

  document.addEventListener("input", event => {
    if (event.target.getAttribute("name") === "phone") {
      event.target.value = "+" + event.target.value.replace(/[^0-9]/g, "").slice(0, 11);
      if (event.target.value.length == 1) {
        event.target.value = "";
      }
    }
  });

  document.addEventListener("submit", (event) => {
    event.preventDefault();
    formSend(event.target);
  });

}

module.exports = forms;

/***/ }),

/***/ "./src/js/parts/modals.js":
/*!********************************!*\
  !*** ./src/js/parts/modals.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modals() {

  let popupConsultation = document.querySelector(".popup-consultation"),
      popupDesign = document.querySelector(".popup-design"),
      popupGift = document.querySelector(".popup-gift"),
      popupDialog = document.querySelectorAll(".popup-dialog");

  let popupActive = (element, displayPopup, overflowPopup) => {
    element.style.display = displayPopup;
    document.body.style.overflow = overflowPopup;
  };

  document.addEventListener("click", event => {
    let target = event.target;

    if (target.classList.contains("button-design")) {
      popupActive(popupDesign, "block", "hidden");
    }
    if (target.classList.contains("popup-close") || target.classList.contains("popup-consultation")) {
      popupActive(popupDesign, "none", "");
    }

    if (target.classList.contains("button-consultation")) {
      popupActive(popupConsultation, "block", "hidden");
    }
    if (target.classList.contains("popup-close") || target.classList.contains("popup-consultation")) {
      popupActive(popupConsultation, "none", "");
    }

    if (target.classList.contains("fixed-gift")) {
      popupActive(popupGift, "block", "hidden");
    }
    if (target.classList.contains("popup-close") || target.classList.contains("popup-gift")) {
      popupActive(popupGift, "none", "");
    }
  });
  
}

module.exports = modals;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {

  let slideIndex = 1,
  slides = document.querySelectorAll(".feedback-slider-item"),
  prev = document.querySelector(".main-prev-btn"),
  next = document.querySelector(".main-next-btn");

let showSliders = (n) => {

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  slides.forEach((item) => {
    item.style.display = "none"
  });

  slides[slideIndex - 1].style.display = "block";
}

let plusSlides = (n) => {
  showSliders(slideIndex += n);
}

let currentSlides = (n) => {
  showSliders(slideIndex = n);
}

prev.addEventListener("click", () => {
  plusSlides(-1);
});

next.addEventListener("click", () => {
  plusSlides(1);
});

setInterval( () => { 
  plusSlides(1);
},5000);

}

module.exports = slider;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let modals = __webpack_require__(/*! ./parts/modals.js */ "./src/js/parts/modals.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
      filterItems = __webpack_require__(/*! ./parts/filterItems.js */ "./src/js/parts/filterItems.js"),
      forms = __webpack_require__(/*! ./parts/forms.js */ "./src/js/parts/forms.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
      accordeon = __webpack_require__(/*! ./parts/accordeon.js */ "./src/js/parts/accordeon.js");

    modals();
    calc();
    filterItems();
    forms();
    slider();
    accordeon();

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map