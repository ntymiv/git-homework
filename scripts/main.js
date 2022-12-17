const menuBtn = document.querySelector('.menu-btn');
const list = document.querySelector('.menu-list');

let i = 0;

menuBtn.addEventListener("click", function () {
    if (i === 0) {
        menuBtn.style.backgroundImage = "url(img/close.png)";
        list.style.display = "block";
        i = 1;
    } else {
        menuBtn.style.backgroundImage = "url(img/hamburger-menu-icon.png)";
        list.style.display = "none";
        i = 0;
    };
})
