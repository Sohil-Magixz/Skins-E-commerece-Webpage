document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle2 = document.querySelector('.menu-toggle2');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.remove('-translate-y-full');
        navMenu.classList.add('translate-y-[18%]');
        
        menuToggle.classList.add('hidden');
        menuToggle2.classList.remove('hidden');
    });

    menuToggle2.addEventListener('click', () => {
        navMenu.classList.remove('translate-y-[18%]');
        navMenu.classList.add('-translate-y-full');
        
        menuToggle.classList.remove('hidden');
        menuToggle2.classList.add('hidden');
    });
});
