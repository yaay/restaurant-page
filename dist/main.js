/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ (() => {

const contact = (() => {
    const container = document.querySelector('#content');
    const contact = document.createElement('contact')

    contact.innerHTML = `
    <div class="menu-container">
     <h1>Contact</h1>
    </div>`
    //adding no-display class to menu
    contact.classList.add('not-active')
    container.appendChild(contact);
})();

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ (() => {

const home = (() => {
    const container = document.querySelector('#content');
    const home = document.createElement('home')

    home.innerHTML = `
    <div class="home-container">
    <div class="hero">
        <p>Discover Deli Bliss: Where Flavor Meets Freshness at GourmetGrub!</p>
        <button class="button-40" role="button">Order Now!</button>
    </div>
    <div class="contact">
        <div class="location">
            <svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 500 88C 564 88 628 108 680 144C 794 222 843 379 794 507C 744 612 693 716 643 821C 617 870 601 930 548 957C 494 988 426 956 398 904C 340 788 285 670 228 553C 187 480 176 390 201 309C 237 182 362 88 494 88C 496 88 498 88 500 88C 500 88 500 88 500 88M 387 400C 387 462 438 512 500 512C 562 512 613 462 613 400C 613 338 562 287 500 287C 438 287 387 338 387 400C 387 400 387 400 387 400" transform=""></path></svg>
            <p>
                39 Abbas El Akkad St.
                <br>
                Nasr City, Cairo</p>
        </div>
        <div class="working-hours">
            <svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 550 250C 550 250 550 445 550 445C 565 458 575 478 575 500C 575 541 541 575 500 575C 499 575 497 575 496 575C 496 575 285 785 285 785C 266 805 234 806 214 786C 194 766 195 734 215 715C 215 715 425 504 425 504C 425 503 425 501 425 500C 425 478 435 458 450 445C 450 445 450 250 450 250C 450 222 472 200 499 199C 527 199 550 222 550 250C 550 250 550 250 550 250" transform="translate(1000,0) scale(-1,1) "></path></svg>
            <p> 
                Mon-Thurs: 8am-8pm
                <br>
                Fri-Sun: 8am-11pm</p>
        </div>
    </div>`
    container.appendChild(home);
})();

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (() => {

const menu = (() => {
    const container = document.querySelector('#content');
    const menu = document.createElement('menu')

    menu.innerHTML = `
    <div class="menu-container">
    <p class="menu-hero">Menu</p>
    <div class="menu-items">
        <h1>Sandwiches</h1>
        <div class="sands">
            <div class="item">
                <img src="../src/items/grill-chicken.jpg" alt="">
                <div class="info">
                    <p class="title">Grilled Chicken Sandwich

                    </p>
                    <span class="price">EGP 125</span>
                    <p class="ing">Panini Brown , Grilled Chicken , Mayo , Lettuce , Pickles</p>
                </div>
            </div>
            <div class="item">
                <img src="../src/items/grill-chicken.jpg" alt="">
                <div class="info">
                    <p class="title">Grilled Chicken Sandwich

                    </p>
                    <span class="price">EGP 125</span>
                    <p class="ing">Panini Brown , Grilled Chicken , Mayo , Lettuce , Pickles</p>
                </div>
            </div>
            <div class="item">
                <img src="../src/items/grill-chicken.jpg" alt="">
                <div class="info">
                    <p class="title">Grilled Chicken Sandwich

                    </p>
                    <span class="price">EGP 125</span>
                    <p class="ing">Panini Brown , Grilled Chicken , Mayo , Lettuce , Pickles</p>
                </div>
            </div>
            <div class="item">
                <img src="../src/items/grill-chicken.jpg" alt="">
                <div class="info">
                    <p class="title">Grilled Chicken Sandwich

                    </p>
                    <span class="price">EGP 125</span>
                    <p class="ing">Panini Brown , Grilled Chicken , Mayo , Lettuce , Pickles</p>
                </div>
            </div>
            <div class="item">
                <img src="../src/items/grill-chicken.jpg" alt="">
                <div class="info">
                    <p class="title">Grilled Chicken Sandwich

                    </p>
                    <span class="price">EGP 125</span>
                    <p class="ing">Panini Brown , Grilled Chicken , Mayo , Lettuce , Pickles</p>
                </div>
            </div>
            <div class="item">
                <img src="../src/items/grill-chicken.jpg" alt="">
                <div class="info">
                    <p class="title">Grilled Chicken Sandwich

                    </p>
                    <span class="price">EGP 125</span>
                    <p class="ing">Panini Brown , Grilled Chicken , Mayo , Lettuce , Pickles</p>
                </div>
            </div>

        </div>
    </div>
</div>`
    //adding no-display class to menu
    menu.classList.add('not-active')
    container.appendChild(menu);
})();


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ (() => {

const navbar = (() => {
    const conatiner = document.querySelector('#content');
    const header = document.createElement('header');
    header.innerHTML = `
    <nav>
    <a href="">GourmetGrub</a>
    <div class="buttons">
        <a tab-target='home'>Home</a>
        <a tab-target='menu'>Menu</a>
        <a tab-target='contact'>Contact</a>
    </div>
</nav>`;
    conatiner.appendChild(header);
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact__WEBPACK_IMPORTED_MODULE_3__);





console.log('navbar');

const tabs = document.querySelectorAll("[tab-target]")
// console.log(tabs)

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = tab.getAttribute("tab-target")
        // select target tag and change remove no-display class
        document.querySelector('home').classList.add('not-active')
        document.querySelector('menu').classList.add('not-active')
        document.querySelector('contact').classList.add('not-active')
        document.querySelector(target).classList.remove('not-active')
    })
})

const button = document.querySelector('.button-40')
button.addEventListener('click', () => {
    document.querySelector('menu').classList.remove('not-active')
    document.querySelector('home').classList.add('not-active')
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQ1hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhKQUE4SixjQUFjLHVCQUF1QjtBQUNuTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4SkFBOEosY0FBYyx1QkFBdUI7QUFDbk07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7O0FDM0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQzdFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7OztVQ2JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNMO0FBQ0E7QUFDTTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3QgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250YWN0JylcclxuXHJcbiAgICBjb250YWN0LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxyXG4gICAgIDxoMT5Db250YWN0PC9oMT5cclxuICAgIDwvZGl2PmBcclxuICAgIC8vYWRkaW5nIG5vLWRpc3BsYXkgY2xhc3MgdG8gbWVudVxyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJylcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KTtcclxufSkoKTsiLCJjb25zdCBob21lID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaG9tZScpXHJcblxyXG4gICAgaG9tZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaG9tZS1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJoZXJvXCI+XHJcbiAgICAgICAgPHA+RGlzY292ZXIgRGVsaSBCbGlzczogV2hlcmUgRmxhdm9yIE1lZXRzIEZyZXNobmVzcyBhdCBHb3VybWV0R3J1YiE8L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi00MFwiIHJvbGU9XCJidXR0b25cIj5PcmRlciBOb3chPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJmaS1wYWRkaW5nXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMDBtbVwiIGhlaWdodD1cIjEwMDBtbVwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgc3R5bGU9XCJ3aWR0aDoxLjMzZW07IGhlaWdodDoxLjMzZW07dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48cGF0aCBpZD1cInBhdGhcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIiBNIDUwMCA4OEMgNTY0IDg4IDYyOCAxMDggNjgwIDE0NEMgNzk0IDIyMiA4NDMgMzc5IDc5NCA1MDdDIDc0NCA2MTIgNjkzIDcxNiA2NDMgODIxQyA2MTcgODcwIDYwMSA5MzAgNTQ4IDk1N0MgNDk0IDk4OCA0MjYgOTU2IDM5OCA5MDRDIDM0MCA3ODggMjg1IDY3MCAyMjggNTUzQyAxODcgNDgwIDE3NiAzOTAgMjAxIDMwOUMgMjM3IDE4MiAzNjIgODggNDk0IDg4QyA0OTYgODggNDk4IDg4IDUwMCA4OEMgNTAwIDg4IDUwMCA4OCA1MDAgODhNIDM4NyA0MDBDIDM4NyA0NjIgNDM4IDUxMiA1MDAgNTEyQyA1NjIgNTEyIDYxMyA0NjIgNjEzIDQwMEMgNjEzIDMzOCA1NjIgMjg3IDUwMCAyODdDIDQzOCAyODcgMzg3IDMzOCAzODcgNDAwQyAzODcgNDAwIDM4NyA0MDAgMzg3IDQwMFwiIHRyYW5zZm9ybT1cIlwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAzOSBBYmJhcyBFbCBBa2thZCBTdC5cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgIE5hc3IgQ2l0eSwgQ2Fpcm88L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtpbmctaG91cnNcIj5cclxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImZpLXBhZGRpbmdcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwMG1tXCIgaGVpZ2h0PVwiMTAwMG1tXCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBzdHlsZT1cIndpZHRoOjEuMzNlbTsgaGVpZ2h0OjEuMzNlbTt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPjxwYXRoIGlkPVwicGF0aFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTSA1MDAgMEMgMjI0IDAgMCAyMjQgMCA1MDBDIDAgNzc2IDIyNCAxMDAwIDUwMCAxMDAwQyA3NzYgMTAwMCAxMDAwIDc3NiAxMDAwIDUwMEMgMTAwMCAyMjQgNzc2IDAgNTAwIDBDIDUwMCAwIDUwMCAwIDUwMCAwIE0gNTUwIDI1MEMgNTUwIDI1MCA1NTAgNDQ1IDU1MCA0NDVDIDU2NSA0NTggNTc1IDQ3OCA1NzUgNTAwQyA1NzUgNTQxIDU0MSA1NzUgNTAwIDU3NUMgNDk5IDU3NSA0OTcgNTc1IDQ5NiA1NzVDIDQ5NiA1NzUgMjg1IDc4NSAyODUgNzg1QyAyNjYgODA1IDIzNCA4MDYgMjE0IDc4NkMgMTk0IDc2NiAxOTUgNzM0IDIxNSA3MTVDIDIxNSA3MTUgNDI1IDUwNCA0MjUgNTA0QyA0MjUgNTAzIDQyNSA1MDEgNDI1IDUwMEMgNDI1IDQ3OCA0MzUgNDU4IDQ1MCA0NDVDIDQ1MCA0NDUgNDUwIDI1MCA0NTAgMjUwQyA0NTAgMjIyIDQ3MiAyMDAgNDk5IDE5OUMgNTI3IDE5OSA1NTAgMjIyIDU1MCAyNTBDIDU1MCAyNTAgNTUwIDI1MCA1NTAgMjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwMDAsMCkgc2NhbGUoLTEsMSkgXCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICA8cD4gXHJcbiAgICAgICAgICAgICAgICBNb24tVGh1cnM6IDhhbS04cG1cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgIEZyaS1TdW46IDhhbS0xMXBtPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YFxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWUpO1xyXG59KSgpOyIsImNvbnN0IG1lbnUgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZW51JylcclxuXHJcbiAgICBtZW51LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxyXG4gICAgPHAgY2xhc3M9XCJtZW51LWhlcm9cIj5NZW51PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbXNcIj5cclxuICAgICAgICA8aDE+U2FuZHdpY2hlczwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNhbmRzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pdGVtcy9ncmlsbC1jaGlja2VuLmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+R3JpbGxlZCBDaGlja2VuIFNhbmR3aWNoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+RUdQIDEyNTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZ1wiPlBhbmluaSBCcm93biAsIEdyaWxsZWQgQ2hpY2tlbiAsIE1heW8gLCBMZXR0dWNlICwgUGlja2xlczwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2l0ZW1zL2dyaWxsLWNoaWNrZW4uanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj5HcmlsbGVkIENoaWNrZW4gU2FuZHdpY2hcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj5FR1AgMTI1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5nXCI+UGFuaW5pIEJyb3duICwgR3JpbGxlZCBDaGlja2VuICwgTWF5byAsIExldHR1Y2UgLCBQaWNrbGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaXRlbXMvZ3JpbGwtY2hpY2tlbi5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPkdyaWxsZWQgQ2hpY2tlbiBTYW5kd2ljaFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPkVHUCAxMjU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmdcIj5QYW5pbmkgQnJvd24gLCBHcmlsbGVkIENoaWNrZW4gLCBNYXlvICwgTGV0dHVjZSAsIFBpY2tsZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pdGVtcy9ncmlsbC1jaGlja2VuLmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+R3JpbGxlZCBDaGlja2VuIFNhbmR3aWNoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+RUdQIDEyNTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZ1wiPlBhbmluaSBCcm93biAsIEdyaWxsZWQgQ2hpY2tlbiAsIE1heW8gLCBMZXR0dWNlICwgUGlja2xlczwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2l0ZW1zL2dyaWxsLWNoaWNrZW4uanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj5HcmlsbGVkIENoaWNrZW4gU2FuZHdpY2hcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj5FR1AgMTI1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5nXCI+UGFuaW5pIEJyb3duICwgR3JpbGxlZCBDaGlja2VuICwgTWF5byAsIExldHR1Y2UgLCBQaWNrbGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaXRlbXMvZ3JpbGwtY2hpY2tlbi5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPkdyaWxsZWQgQ2hpY2tlbiBTYW5kd2ljaFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPkVHUCAxMjU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmdcIj5QYW5pbmkgQnJvd24gLCBHcmlsbGVkIENoaWNrZW4gLCBNYXlvICwgTGV0dHVjZSAsIFBpY2tsZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmBcclxuICAgIC8vYWRkaW5nIG5vLWRpc3BsYXkgY2xhc3MgdG8gbWVudVxyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJylcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcclxufSkoKTtcclxuIiwiY29uc3QgbmF2YmFyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbmF0aW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXHJcbiAgICA8bmF2PlxyXG4gICAgPGEgaHJlZj1cIlwiPkdvdXJtZXRHcnViPC9hPlxyXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICA8YSB0YWItdGFyZ2V0PSdob21lJz5Ib21lPC9hPlxyXG4gICAgICAgIDxhIHRhYi10YXJnZXQ9J21lbnUnPk1lbnU8L2E+XHJcbiAgICAgICAgPGEgdGFiLXRhcmdldD0nY29udGFjdCc+Q29udGFjdDwvYT5cclxuICAgIDwvZGl2PlxyXG48L25hdj5gO1xyXG4gICAgY29uYXRpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gJy4vbmF2YmFyJztcclxuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vaG9tZSdcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vbWVudSdcclxuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gJy4vY29udGFjdCdcclxuXHJcbmNvbnNvbGUubG9nKCduYXZiYXInKTtcclxuXHJcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3RhYi10YXJnZXRdXCIpXHJcbi8vIGNvbnNvbGUubG9nKHRhYnMpXHJcblxyXG50YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGFiLmdldEF0dHJpYnV0ZShcInRhYi10YXJnZXRcIilcclxuICAgICAgICAvLyBzZWxlY3QgdGFyZ2V0IHRhZyBhbmQgY2hhbmdlIHJlbW92ZSBuby1kaXNwbGF5IGNsYXNzXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaG9tZScpLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21lbnUnKS5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJylcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjb250YWN0JykuY2xhc3NMaXN0LmFkZCgnbm90LWFjdGl2ZScpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC1hY3RpdmUnKVxyXG4gICAgfSlcclxufSlcclxuXHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tNDAnKVxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnbm90LWFjdGl2ZScpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdob21lJykuY2xhc3NMaXN0LmFkZCgnbm90LWFjdGl2ZScpXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9