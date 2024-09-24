let search = document.querySelector('.search-box');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

// Toggle search box
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
};

// Toggle navbar
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
};

// Remove active classes on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
};

// Add shadow to header on scroll
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});