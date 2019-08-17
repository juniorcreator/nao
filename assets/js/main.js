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

function macy() {
  var macy = Macy({
    container: '#macy_container',
    waitForImages: false,
    margin: 3,
    trueOrder: true,
    columns: 4,
    breakAt: {
      1200: 5,
      940: 3,
      520: 2,
      400: 1
    }
  });
}

// var elem = document.querySelector('.grid');
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item',
//   horizontalOrder: true,
//   fitWidth: true
// });

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
});

$('.menu-open--js').click(function () {
    $(".popup-menu-mobile").fadeToggle(100);
});

$('.menu-mobile--close').click(function () {
    $('.popup-menu-mobile').fadeOut();
});
