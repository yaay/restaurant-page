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