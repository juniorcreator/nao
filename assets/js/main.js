var mySwiper1 = new Swiper('.index-page .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 40,
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    effect: 'fade',

//    autoplay: {
//        delay: 5000,
//    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

$('.js-open-menu').click(function () {
    $(".js-menu").fadeToggle(100);
    document.body.style.overflowY = "hidden";
});

$('.js-close-menu').click(function () {
    $('.js-menu').fadeOut();
    document.body.style.overflowY = "scroll";
});



$(".js__scroll-btn").click(function () {
    $('html, body').animate({
        scrollTop: $(".case").offset().top
    }, 1000);
});
