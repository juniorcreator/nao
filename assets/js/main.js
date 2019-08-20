window.currentAnchor = 'default';
function ttvVisible(target) {
    // Все позиции элемента
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    };
    if (
        window.pageYOffset + document.querySelector('body > header').offsetHeight > targetPosition.top &&
        window.pageYOffset + document.querySelector('body > header').offsetHeight < targetPosition.bottom
    ) {
        window.currentAnchor = target.getAttribute('data-anchor');
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
    window.currentAnchor = 'default';
    $('header').attr('data-current-anchor', window.currentAnchor);
    if (
        ttvVisible(document.querySelector('[data-anchor="governor-appeal"]')) ||
        ttvVisible(document.querySelector('[data-anchor="governor-invest"]')) ||
        ttvVisible(document.querySelector('[data-anchor="governor-history"]')) ||
        ttvVisible(document.querySelector('[data-anchor="governor-links"]'))
    ) {
      addAdditionalHeaderClass();
    } else {
        removeAdditionalHeaderClass();
    }
}

function addAdditionalHeaderClass() {
  $('header').attr('data-current-anchor', window.currentAnchor);
  document.querySelector('body').classList.add('fp-viewing-governor-appeal');
  $('header').addClass('header-scroll');
}

function removeAdditionalHeaderClass() {
  document.querySelector('body').classList.remove('fp-viewing-governor-appeal');
  $('header').removeClass('header-scroll');
}

$(document).ready(function () {

  // macy();

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
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 8000,
        },
        navigation: {
            nextEl: '.slide-btn--next',
            prevEl: '.slide-btn--prev',
        },

    });

  var info = new Swiper('.slider-info', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
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

function initalCheckHeaderClass(){
    switch (window.location.hash){
        case '#governor-appeal':
        case '#governor-invest':
        case '#governor-history':
        case '#governor-links':
            addAdditionalHeaderClass();
    }
}
initalCheckHeaderClass();
