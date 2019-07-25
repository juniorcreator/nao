$(document).ready(function () {
    var mySwiper1 = new Swiper('.main-screen .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 1,
        speed: 500,
        loop: true,
        effect: 'fade',

        autoplay: {
            delay: 8000,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});

//$(document).ready(function () {
//        if ($('.governor-appeal').hasClass('.active')) {
//            $('.header').addClass('header-scroll');
//        }
//});

$('.menu-open--js').click(function () {
    $(".popup-menu-mobile").fadeToggle(100);
});

$('.menu-mobile--close').click(function () {
    $('.popup-menu-mobile').fadeOut();
});

