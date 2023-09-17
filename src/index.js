import { navbar } from './navbar';
import { home } from './home'
import { menu } from './menu'
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