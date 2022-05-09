// Mobile Menu
const menuBar = document.getElementById('menu_bar');
const closeBtn = document.getElementById('close_btn');
const hamburgerBtn = document.getElementById('hamburger');
const closeBar = document.getElementById('close_bar');
const lists = document.getElementById('menu_list');
const hiddenScrol = document.getElementById('hideOverflow');
const blurEffect = document.querySelectorAll('.toblur');
let isDisplay = true;

menuBar.addEventListener('click', ()=> {
    menuBar.style.display = 'none';
})