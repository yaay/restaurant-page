import { navbar } from './navbar';
import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'

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