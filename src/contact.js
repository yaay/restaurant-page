const contact = (() => {
    const container = document.querySelector('#content');
    const contact = document.createElement('contact')

    contact.innerHTML = `
    <div class="contact-container">
     
    </div>`
    //adding no-display class to menu
    contact.classList.add('not-active')
    container.appendChild(contact);
})();