document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('header');

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('fa-xmark');
            navbar.classList.toggle('active');
        };
    }

    window.onscroll = () => {
        const top = window.scrollY;
        sections.forEach((sec) => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => link.classList.remove('active'));
                const activeLink = document.querySelector(
                    `header nav a[href*=${id}]`
                );
                if (activeLink) activeLink.classList.add('active');
            }
        });
        if (header) {
            header.classList.toggle('sticky', top > 100);
        }
        if (menuIcon && navbar) {
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        }
    };
});
