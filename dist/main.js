/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
     <h1>Home</h1>
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



console.log('navbar');

const conatiner = document.querySelector('#content');

const tabs = document.querySelectorAll("[tab-target]")
// console.log(tabs)

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = tab.getAttribute("tab-target")
        // conatiner.appendChild(home);
})
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4SkFBOEosY0FBYyx1QkFBdUI7QUFDbk07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEpBQThKLGNBQWMsdUJBQXVCO0FBQ25NO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQzNCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQ1hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O1VDYkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNMO0FBQ0E7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaG9tZSA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hvbWUnKVxyXG5cclxuICAgIGhvbWUuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImhvbWUtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVyb1wiPlxyXG4gICAgICAgIDxwPkRpc2NvdmVyIERlbGkgQmxpc3M6IFdoZXJlIEZsYXZvciBNZWV0cyBGcmVzaG5lc3MgYXQgR291cm1ldEdydWIhPC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tNDBcIiByb2xlPVwiYnV0dG9uXCI+T3JkZXIgTm93ITwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvblwiPlxyXG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZmktcGFkZGluZ1wiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAwbW1cIiBoZWlnaHQ9XCIxMDAwbW1cIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHN0eWxlPVwid2lkdGg6MS4zM2VtOyBoZWlnaHQ6MS4zM2VtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PHBhdGggaWQ9XCJwYXRoXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCIgTSA1MDAgODhDIDU2NCA4OCA2MjggMTA4IDY4MCAxNDRDIDc5NCAyMjIgODQzIDM3OSA3OTQgNTA3QyA3NDQgNjEyIDY5MyA3MTYgNjQzIDgyMUMgNjE3IDg3MCA2MDEgOTMwIDU0OCA5NTdDIDQ5NCA5ODggNDI2IDk1NiAzOTggOTA0QyAzNDAgNzg4IDI4NSA2NzAgMjI4IDU1M0MgMTg3IDQ4MCAxNzYgMzkwIDIwMSAzMDlDIDIzNyAxODIgMzYyIDg4IDQ5NCA4OEMgNDk2IDg4IDQ5OCA4OCA1MDAgODhDIDUwMCA4OCA1MDAgODggNTAwIDg4TSAzODcgNDAwQyAzODcgNDYyIDQzOCA1MTIgNTAwIDUxMkMgNTYyIDUxMiA2MTMgNDYyIDYxMyA0MDBDIDYxMyAzMzggNTYyIDI4NyA1MDAgMjg3QyA0MzggMjg3IDM4NyAzMzggMzg3IDQwMEMgMzg3IDQwMCAzODcgNDAwIDM4NyA0MDBcIiB0cmFuc2Zvcm09XCJcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgMzkgQWJiYXMgRWwgQWtrYWQgU3QuXHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICBOYXNyIENpdHksIENhaXJvPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3b3JraW5nLWhvdXJzXCI+XHJcbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJmaS1wYWRkaW5nXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMDBtbVwiIGhlaWdodD1cIjEwMDBtbVwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgc3R5bGU9XCJ3aWR0aDoxLjMzZW07IGhlaWdodDoxLjMzZW07dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48cGF0aCBpZD1cInBhdGhcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0gNTAwIDBDIDIyNCAwIDAgMjI0IDAgNTAwQyAwIDc3NiAyMjQgMTAwMCA1MDAgMTAwMEMgNzc2IDEwMDAgMTAwMCA3NzYgMTAwMCA1MDBDIDEwMDAgMjI0IDc3NiAwIDUwMCAwQyA1MDAgMCA1MDAgMCA1MDAgMCBNIDU1MCAyNTBDIDU1MCAyNTAgNTUwIDQ0NSA1NTAgNDQ1QyA1NjUgNDU4IDU3NSA0NzggNTc1IDUwMEMgNTc1IDU0MSA1NDEgNTc1IDUwMCA1NzVDIDQ5OSA1NzUgNDk3IDU3NSA0OTYgNTc1QyA0OTYgNTc1IDI4NSA3ODUgMjg1IDc4NUMgMjY2IDgwNSAyMzQgODA2IDIxNCA3ODZDIDE5NCA3NjYgMTk1IDczNCAyMTUgNzE1QyAyMTUgNzE1IDQyNSA1MDQgNDI1IDUwNEMgNDI1IDUwMyA0MjUgNTAxIDQyNSA1MDBDIDQyNSA0NzggNDM1IDQ1OCA0NTAgNDQ1QyA0NTAgNDQ1IDQ1MCAyNTAgNDUwIDI1MEMgNDUwIDIyMiA0NzIgMjAwIDQ5OSAxOTlDIDUyNyAxOTkgNTUwIDIyMiA1NTAgMjUwQyA1NTAgMjUwIDU1MCAyNTAgNTUwIDI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDAwLDApIHNjYWxlKC0xLDEpIFwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgPHA+IFxyXG4gICAgICAgICAgICAgICAgTW9uLVRodXJzOiA4YW0tOHBtXHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICBGcmktU3VuOiA4YW0tMTFwbTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmBcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lKTtcclxufSkoKTsiLCJjb25zdCBtZW51ID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWVudScpXHJcblxyXG4gICAgbWVudS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cclxuICAgICA8aDE+SG9tZTwvaDE+XHJcbiAgICA8L2Rpdj5gXHJcbiAgICAvL2FkZGluZyBuby1kaXNwbGF5IGNsYXNzIHRvIG1lbnVcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbm90LWFjdGl2ZScpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XHJcbn0pKCk7IiwiY29uc3QgbmF2YmFyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbmF0aW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXHJcbiAgICA8bmF2PlxyXG4gICAgPGEgaHJlZj1cIlwiPkdvdXJtZXRHcnViPC9hPlxyXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICA8YSB0YWItdGFyZ2V0PSdob21lJz5Ib21lPC9hPlxyXG4gICAgICAgIDxhIHRhYi10YXJnZXQ9J21lbnUnPk1lbnU8L2E+XHJcbiAgICAgICAgPGEgdGFiLXRhcmdldD0nY29udGFjdCc+Q29udGFjdDwvYT5cclxuICAgIDwvZGl2PlxyXG48L25hdj5gO1xyXG4gICAgY29uYXRpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gJy4vbmF2YmFyJztcclxuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vaG9tZSdcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vbWVudSdcclxuY29uc29sZS5sb2coJ25hdmJhcicpO1xyXG5cclxuY29uc3QgY29uYXRpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3RhYi10YXJnZXRdXCIpXHJcbi8vIGNvbnNvbGUubG9nKHRhYnMpXHJcblxyXG50YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGFiLmdldEF0dHJpYnV0ZShcInRhYi10YXJnZXRcIilcclxuICAgICAgICAvLyBjb25hdGluZXIuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbn0pXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9