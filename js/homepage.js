// JavaScript for menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const body = document.getElementById('body');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    body.classList.toggle('menu-open');
});
