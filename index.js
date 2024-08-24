document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle2 = document.querySelector('.menu-toggle2');
    const navbar = document.querySelector('.nav-bar');
     
    let flag=0; 
    menuToggle.addEventListener('click', () => {
        navMenu.classList.remove('-translate-y-full');
        navMenu.classList.add('translate-y-[18%]');
        
        menuToggle.classList.add('hidden');
        menuToggle2.classList.remove('hidden');
        flag=1;
    });

    menuToggle2.addEventListener('click', () => {
        navMenu.classList.remove('translate-y-[18%]');
        navMenu.classList.add('-translate-y-full');
        
        menuToggle.classList.remove('hidden');
        menuToggle2.classList.add('hidden');
        flag=0;
    });

    let scroll=0;
    console.log(window.innerWidth);
    if(window.innerWidth<768){
    window.addEventListener('scroll',()=>{
        let scrolltop = window.scrollY;
        document.getElementById('')
        if(scrolltop>scroll && flag==0){
            navbar.classList.add('-translate-y-full');
        }
        else{
            navbar.classList.remove('-translate-y-full');
        }
        if(scrolltop<=0){
            scroll=0;
        }
        else{
            scroll=scrolltop;
        }
    });}
});
