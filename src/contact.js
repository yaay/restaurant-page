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