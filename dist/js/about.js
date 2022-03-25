(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      init: function init() {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function slideChangeTransitionStart() {
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

$(document).ready(function () {
  var _$$slick;

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
    }, {
      breakpoint: 375,
      settings: {
        slidesToShow: 3
      }
    }]
  });
  $('.brand-logos1').slick((_$$slick = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false
  }, _defineProperty(_$$slick, "slidesToScroll", 1), _defineProperty(_$$slick, "responsive", [{
    breakpoint: 768,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 520,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 375,
    settings: {
      slidesToShow: 3
    }
  }]), _$$slick));
});

//Investor Slider
var rightSlider = new Swiper(".js-partners-icons-right", {
  slidesPerView: 6,
  spaceBetween: 40,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 1000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  speed: 2000,
  breakpoints: {
    500: {
      slidesPerView: 2
    },
    700: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    834: {
      slidesPerView: 3
    }
  }
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

  var breakpointChecker = function breakpointChecker() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (manufactureTabslider !== undefined) manufactureTabslider.destroy(true, true);
      // or/and do nothing
      return;
      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return manufactureslider();
    }
  };

  var manufactureslider = function manufactureslider() {
    manufactureTabslider = new Swiper(".js-resources-cards", {
      loop: false,
      slidesPerView: 1.2,
      // spaceBetween: 20,
      // a11y: true,
      keyboardControl: true,
      grabCursor: true,

      breakpoints: {
        360: {
          slidesPerView: 1.3
        }
      }
    });
  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
  // kickstart
  breakpointChecker();
})();

},{}]},{},[1])//# sourceMappingURL=about.js.map
