function ttvVisible() {
    var target = document.querySelector('[data-anchor="governor-appeal"]');
    // Все позиции элемента
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    };
    if (
        window.pageYOffset + document.querySelector('body > header').offsetHeight > targetPosition.top &&
        window.pageYOffset + document.querySelector('body > header').offsetHeight < targetPosition.bottom
    ) {
        return true;
    } else {
        return false;
    };
};

window.addEventListener('hashchange', function(){
    setTimeout(
        ()=>{
            checkClass();
        },
        900
    );
});

window.addEventListener('scroll', function() {
    if (!( document.documentElement.clientHeight > 736 && document.documentElement.clientWidth > 900) ) {
        setTimeout(
            ()=>{
                checkClass();
            },
            900
        );
    }
});

function checkClass() {
    if (ttvVisible()) {
        document.querySelector('body').classList.add('fp-viewing-governor-appeal');
        $('header').addClass('header-scroll');
    } else {
        document.querySelector('body').classList.remove('fp-viewing-governor-appeal');
        $('header').removeClass('header-scroll');
    }
}

$(document).ready(function () {
    var mySwiper1 = new Swiper('.main-screen .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 1,
        speed: 500,
        loop: true,
        effect: 'fade',
        autoHeight: true,
        autoplay: {
            delay: 8000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var mySwiper_2 = new Swiper('.slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        speed: 500,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 8000,
        },
        navigation: {
            nextEl: '.slide-btn--next',
            prevEl: '.slide-btn--prev',
        },

    });
});

$('.menu-open--js').click(function () {
    $(".popup-menu-mobile").fadeToggle(100);
});

$('.menu-mobile--close').click(function () {
    $('.popup-menu-mobile').fadeOut();
});
