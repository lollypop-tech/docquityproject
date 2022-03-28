//Timeline
$(document).ready(function () {
  var mySwiper = new Swiper(".swiper", {
    autoHeight: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    // speed: 500,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
      }
    }
  });
  $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    mySwiper.slideTo($(this).index());
    $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    $(this).addClass("active");
  });
});

//Brand Slider

$(document).ready(function(){
  $('.brand-logos').slick({
      slidesToShow: 6,
      slidesToScroll: -1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      },
      {
        breakpoint: 375,
        settings: {
            slidesToShow: 3
        }
    }]
  });
  $('.brand-logos1').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 3
        }
    },
    {
      breakpoint: 375,
      settings: {
          slidesToShow: 3
      }
  }]
});
});


//Investor Slider
var rightSlider = new Swiper(".js-partners-icons-right", {
  slidesPerView: 6,
  spaceBetween: 40,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 2000,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    834: {
      slidesPerView: 3,
    },
  },
});

// var swiperVerticle = new Swiper('.mySwiper-tab', {
//   direction: 'vertical',
//   slidesPerView: 4,
//   spaceBetween: 0,
//   // mousewheel: true,
// grabCursor: true,
//   // loop: true,
//   // autoplay: {
//   //   delay: 500,
//   //   disableOnInteraction: false,
//   // },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });


// var swiper = new Swiper('.mySwiper-tab', {
//   direction: 'vertical',
//   speed: 800,
//   mousewheelControl: true,
//   watchSlidesProgress: true,
  
  
// });


(function () {
  "use strict";
  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  var breakpoint = window.matchMedia("(min-width:31.25em)");
  // keep track of swiper instances to destroy later
  var mySwiper;
  var manufactureTabslider = mySwiper;

  var breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (manufactureTabslider !== undefined)
        manufactureTabslider.destroy(true, true);
      // or/and do nothing
      return;
      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return manufactureslider();
    }
  };

  var manufactureslider = function () {
    manufactureTabslider = new Swiper(".js-resources-cards", {
      loop: false,
      slidesPerView: 1.2,
      // spaceBetween: 20,
      // a11y: true,
      keyboardControl: true,
      grabCursor: true,

      breakpoints: {
        360: {
          slidesPerView: 1.3,
        },
      },
    });
  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
  // kickstart
  breakpointChecker();
})();


