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

    // contact.innerHTML = `
    // <div class="contact-container">
     
    // </div>`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQ1hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhKQUE4SixjQUFjLHVCQUF1QjtBQUNuTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4SkFBOEosY0FBYyx1QkFBdUI7QUFDbk07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7O0FDM0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQzdFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7OztVQ2JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNMO0FBQ0E7QUFDTTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3QgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250YWN0JylcclxuXHJcbiAgICAvLyBjb250YWN0LmlubmVySFRNTCA9IGBcclxuICAgIC8vIDxkaXYgY2xhc3M9XCJjb250YWN0LWNvbnRhaW5lclwiPlxyXG4gICAgIFxyXG4gICAgLy8gPC9kaXY+YFxyXG4gICAgLy9hZGRpbmcgbm8tZGlzcGxheSBjbGFzcyB0byBtZW51XHJcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG59KSgpOyIsImNvbnN0IGhvbWUgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdob21lJylcclxuXHJcbiAgICBob21lLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJob21lLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImhlcm9cIj5cclxuICAgICAgICA8cD5EaXNjb3ZlciBEZWxpIEJsaXNzOiBXaGVyZSBGbGF2b3IgTWVldHMgRnJlc2huZXNzIGF0IEdvdXJtZXRHcnViITwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLTQwXCIgcm9sZT1cImJ1dHRvblwiPk9yZGVyIE5vdyE8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9jYXRpb25cIj5cclxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImZpLXBhZGRpbmdcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwMG1tXCIgaGVpZ2h0PVwiMTAwMG1tXCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBzdHlsZT1cIndpZHRoOjEuMzNlbTsgaGVpZ2h0OjEuMzNlbTt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPjxwYXRoIGlkPVwicGF0aFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiIE0gNTAwIDg4QyA1NjQgODggNjI4IDEwOCA2ODAgMTQ0QyA3OTQgMjIyIDg0MyAzNzkgNzk0IDUwN0MgNzQ0IDYxMiA2OTMgNzE2IDY0MyA4MjFDIDYxNyA4NzAgNjAxIDkzMCA1NDggOTU3QyA0OTQgOTg4IDQyNiA5NTYgMzk4IDkwNEMgMzQwIDc4OCAyODUgNjcwIDIyOCA1NTNDIDE4NyA0ODAgMTc2IDM5MCAyMDEgMzA5QyAyMzcgMTgyIDM2MiA4OCA0OTQgODhDIDQ5NiA4OCA0OTggODggNTAwIDg4QyA1MDAgODggNTAwIDg4IDUwMCA4OE0gMzg3IDQwMEMgMzg3IDQ2MiA0MzggNTEyIDUwMCA1MTJDIDU2MiA1MTIgNjEzIDQ2MiA2MTMgNDAwQyA2MTMgMzM4IDU2MiAyODcgNTAwIDI4N0MgNDM4IDI4NyAzODcgMzM4IDM4NyA0MDBDIDM4NyA0MDAgMzg3IDQwMCAzODcgNDAwXCIgdHJhbnNmb3JtPVwiXCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDM5IEFiYmFzIEVsIEFra2FkIFN0LlxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgTmFzciBDaXR5LCBDYWlybzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid29ya2luZy1ob3Vyc1wiPlxyXG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZmktcGFkZGluZ1wiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAwbW1cIiBoZWlnaHQ9XCIxMDAwbW1cIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHN0eWxlPVwid2lkdGg6MS4zM2VtOyBoZWlnaHQ6MS4zM2VtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PHBhdGggaWQ9XCJwYXRoXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNIDUwMCAwQyAyMjQgMCAwIDIyNCAwIDUwMEMgMCA3NzYgMjI0IDEwMDAgNTAwIDEwMDBDIDc3NiAxMDAwIDEwMDAgNzc2IDEwMDAgNTAwQyAxMDAwIDIyNCA3NzYgMCA1MDAgMEMgNTAwIDAgNTAwIDAgNTAwIDAgTSA1NTAgMjUwQyA1NTAgMjUwIDU1MCA0NDUgNTUwIDQ0NUMgNTY1IDQ1OCA1NzUgNDc4IDU3NSA1MDBDIDU3NSA1NDEgNTQxIDU3NSA1MDAgNTc1QyA0OTkgNTc1IDQ5NyA1NzUgNDk2IDU3NUMgNDk2IDU3NSAyODUgNzg1IDI4NSA3ODVDIDI2NiA4MDUgMjM0IDgwNiAyMTQgNzg2QyAxOTQgNzY2IDE5NSA3MzQgMjE1IDcxNUMgMjE1IDcxNSA0MjUgNTA0IDQyNSA1MDRDIDQyNSA1MDMgNDI1IDUwMSA0MjUgNTAwQyA0MjUgNDc4IDQzNSA0NTggNDUwIDQ0NUMgNDUwIDQ0NSA0NTAgMjUwIDQ1MCAyNTBDIDQ1MCAyMjIgNDcyIDIwMCA0OTkgMTk5QyA1MjcgMTk5IDU1MCAyMjIgNTUwIDI1MEMgNTUwIDI1MCA1NTAgMjUwIDU1MCAyNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAwMCwwKSBzY2FsZSgtMSwxKSBcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgIDxwPiBcclxuICAgICAgICAgICAgICAgIE1vbi1UaHVyczogOGFtLThwbVxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgRnJpLVN1bjogOGFtLTExcG08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbn0pKCk7IiwiY29uc3QgbWVudSA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21lbnUnKVxyXG5cclxuICAgIG1lbnUuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY29udGFpbmVyXCI+XHJcbiAgICA8cCBjbGFzcz1cIm1lbnUtaGVyb1wiPk1lbnU8L3A+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtc1wiPlxyXG4gICAgICAgIDxoMT5TYW5kd2ljaGVzPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2FuZHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2l0ZW1zL2dyaWxsLWNoaWNrZW4uanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj5HcmlsbGVkIENoaWNrZW4gU2FuZHdpY2hcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj5FR1AgMTI1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5nXCI+UGFuaW5pIEJyb3duICwgR3JpbGxlZCBDaGlja2VuICwgTWF5byAsIExldHR1Y2UgLCBQaWNrbGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaXRlbXMvZ3JpbGwtY2hpY2tlbi5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPkdyaWxsZWQgQ2hpY2tlbiBTYW5kd2ljaFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPkVHUCAxMjU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmdcIj5QYW5pbmkgQnJvd24gLCBHcmlsbGVkIENoaWNrZW4gLCBNYXlvICwgTGV0dHVjZSAsIFBpY2tsZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pdGVtcy9ncmlsbC1jaGlja2VuLmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+R3JpbGxlZCBDaGlja2VuIFNhbmR3aWNoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+RUdQIDEyNTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZ1wiPlBhbmluaSBCcm93biAsIEdyaWxsZWQgQ2hpY2tlbiAsIE1heW8gLCBMZXR0dWNlICwgUGlja2xlczwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2l0ZW1zL2dyaWxsLWNoaWNrZW4uanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj5HcmlsbGVkIENoaWNrZW4gU2FuZHdpY2hcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj5FR1AgMTI1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5nXCI+UGFuaW5pIEJyb3duICwgR3JpbGxlZCBDaGlja2VuICwgTWF5byAsIExldHR1Y2UgLCBQaWNrbGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaXRlbXMvZ3JpbGwtY2hpY2tlbi5qcGdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPkdyaWxsZWQgQ2hpY2tlbiBTYW5kd2ljaFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPkVHUCAxMjU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmdcIj5QYW5pbmkgQnJvd24gLCBHcmlsbGVkIENoaWNrZW4gLCBNYXlvICwgTGV0dHVjZSAsIFBpY2tsZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pdGVtcy9ncmlsbC1jaGlja2VuLmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+R3JpbGxlZCBDaGlja2VuIFNhbmR3aWNoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+RUdQIDEyNTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZ1wiPlBhbmluaSBCcm93biAsIEdyaWxsZWQgQ2hpY2tlbiAsIE1heW8gLCBMZXR0dWNlICwgUGlja2xlczwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG4gICAgLy9hZGRpbmcgbm8tZGlzcGxheSBjbGFzcyB0byBtZW51XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xyXG59KSgpO1xyXG4iLCJjb25zdCBuYXZiYXIgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY29uYXRpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IGBcclxuICAgIDxuYXY+XHJcbiAgICA8YSBocmVmPVwiXCI+R291cm1ldEdydWI8L2E+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgIDxhIHRhYi10YXJnZXQ9J2hvbWUnPkhvbWU8L2E+XHJcbiAgICAgICAgPGEgdGFiLXRhcmdldD0nbWVudSc+TWVudTwvYT5cclxuICAgICAgICA8YSB0YWItdGFyZ2V0PSdjb250YWN0Jz5Db250YWN0PC9hPlxyXG4gICAgPC9kaXY+XHJcbjwvbmF2PmA7XHJcbiAgICBjb25hdGluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSAnLi9uYXZiYXInO1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi9ob21lJ1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9tZW51J1xyXG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSAnLi9jb250YWN0J1xyXG5cclxuY29uc29sZS5sb2coJ25hdmJhcicpO1xyXG5cclxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbdGFiLXRhcmdldF1cIilcclxuLy8gY29uc29sZS5sb2codGFicylcclxuXHJcbnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0YWIuZ2V0QXR0cmlidXRlKFwidGFiLXRhcmdldFwiKVxyXG4gICAgICAgIC8vIHNlbGVjdCB0YXJnZXQgdGFnIGFuZCBjaGFuZ2UgcmVtb3ZlIG5vLWRpc3BsYXkgY2xhc3NcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdob21lJykuY2xhc3NMaXN0LmFkZCgnbm90LWFjdGl2ZScpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWVudScpLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NvbnRhY3QnKS5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJylcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkuY2xhc3NMaXN0LnJlbW92ZSgnbm90LWFjdGl2ZScpXHJcbiAgICB9KVxyXG59KVxyXG5cclxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi00MCcpXHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21lbnUnKS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtYWN0aXZlJylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hvbWUnKS5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJylcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=