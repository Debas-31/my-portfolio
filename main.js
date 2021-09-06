/* eslint-disable linebreak-style */
const hamburger = document.querySelector('.nav-mob');
const sideBar = document.querySelector('.hamburger-menu');
function openSideBar() {
  sideBar.classList.add('showSideBar');
}

hamburger.addEventListener('click', openSideBar);

function closeSideBar() {
  sideBar.classList.remove('showSideBar');
}

sideBar.addEventListener('click', closeSideBar);