// hamburger menu btn
const menuBtn = document.getElementById(`hamburger-menu-btn`);
const dropDowmImg = document.getElementById(`drop-down-image`);

const nav = document.getElementById(`navigation`);

let menuClosed = true;

menuBtn.addEventListener(`click`, function(){

    if(menuClosed) {
        nav.style.display = `block`;
        dropDowmImg.src = `icons/hamburger-close.svg`;
        menuClosed = false;
    } else {
        nav.style.display = `none`;
        dropDowmImg.src = `icons/hamburger-menu.svg`;
        menuClosed = true;
    }
    console.log(`hi`);
});