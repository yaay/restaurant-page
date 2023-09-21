const contact = (() => {
    const container = document.querySelector('#content');
    const contact = document.createElement('contact')

    contact.innerHTML = `
    <div class="contact-container">
    <h1 class="menu-hero">Contact us</h1>
    <div class="contact-items">
        <div class="info">
            <div class="contact-info">
                <span class="material-symbols-outlined">
                    location_on
                </span>
                <p>
                    39 Abbas El Akkad St.
                    <br>
                    Nasr City, Cairo
                </p>
            </div>
            <div class="contact-info">
                <span class="material-symbols-outlined">
                    call
                </span>
                <p>+202400000</p>
            </div>
            <div class="contact-info">
                <span class="material-symbols-outlined">
                    mail
                </span>
                <p>hello@gourmetgrub.com</p>
            </div>

        </div>

        <form class="form">
            <div class="title">Message us</div>
            <input type="text" placeholder="Your email" class="input">
            <textarea placeholder="Your message"></textarea>
             
            <button class="button-40">Submit</button>
        </form>
    </div>

</div>`
    //adding no-display class to menu
    contact.classList.add('not-active')
    container.appendChild(contact);
})();