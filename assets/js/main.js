var ttvVisible = function () {
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

window.addEventListener('hashchange', checkClass);

function checkClass() {
    if (!ttvVisible()) {
        document.querySelector('body').classList.add('fp-viewing-governor-appeal');
        $('header').toggleClass('header-scroll');
    } else {
        document.querySelector('body').classList.remove('fp-viewing-governor-appeal');
         $('header').toggleClass('header-scroll');
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
    })
});

$('.menu-open--js').click(function () {
    $(".popup-menu-mobile").fadeToggle(100);
});

$('.menu-mobile--close').click(function () {
    $('.popup-menu-mobile').fadeOut();
});
