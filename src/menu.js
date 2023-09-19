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
