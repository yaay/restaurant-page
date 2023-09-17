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