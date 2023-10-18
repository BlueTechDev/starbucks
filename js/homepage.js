// Get references to the elements
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const navLinks = menu.querySelectorAll('a');

// Function to hide the menu
function hideMenu() {
    menu.style.display = 'none';
}

// Add a click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', hideMenu);
});

// Add a click event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

const scrollToTopBtn = document.getElementById("back-to-top");

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

scrollToTopBtn.addEventListener("click", scrollToTop);

