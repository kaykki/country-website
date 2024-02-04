// hamburger menu btn
const navBtn      = document.getElementById(`nav-btn`);
const navCloseBtn = document.getElementById(`nav-btn-close`);
const dropDowmImg = document.getElementById(`drop-down-image`);

const nav = document.getElementById(`navigation`);

navBtn.addEventListener(`click`, function(){
    nav.style.display = `block`;
    navBtn.style.display = `none`;
});

navCloseBtn.addEventListener(`click`, function(){
    nav.style.display = `none`;
    navBtn.style.display = `block`;
});