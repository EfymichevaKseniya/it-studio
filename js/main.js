const   navList = document.querySelector('.nav__list'),
        mobileBtn = document.querySelector('.mobile__menu'),
        nav = document.querySelector('.nav'),
        navHeight = nav.offsetTop;

    mobileBtn.addEventListener('click', (e) => {
        e.preventDefault();

        navList.classList.toggle('show');
        mobileBtn.classList.toggle('close');
    });


function menuFixed() {
    window.addEventListener('scroll', (e) => {
        e.preventDefault();
    
        if (window.scrollY > 20) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });
}

menuFixed();



