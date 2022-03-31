(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// $(document).ready(function () {
//   var mySwiper = new Swiper(".swiper-container--timeline", {
//     autoHeight: true,
//     // autoplay: {
//     //   delay: 5000,
//     //   disableOnInteraction: false
//     // },
//     // speed: 500,
//     direction: "horizontal",
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       type: "progressbar"
//     },
//     loop: false,
//     effect: "slide",
//     spaceBetween: 10,
//     on: {
//       init: function () {
//         $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
//         $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
//       },
//       slideChangeTransitionStart: function () {
//         $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
//         $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
//       }
//     }
//   });
//   $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
//     mySwiper.slideTo($(this).index());
//     $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
//     $(this).addClass("active");
//   });
// });


$(".step").click(function () {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
  $("#line-progress").css("width", "3%");
  $(".first").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
  $("#line-progress").css("width", "25%");
  $(".second").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "50%");
  $(".third").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
  $("#line-progress").css("width", "75%");
  $(".fourth").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
  $("#line-progress").css("width", "100%");
  $(".fifth").addClass("active").siblings().removeClass("active");
});

//brand slider
var rightSlider = new Swiper('.js-partners-icons', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true
  },
  speed: 5000,
  breakpoints: {
    500: {
      slidesPerView: 4.5,
      spaceBetween: 10
    },
    700: {
      slidesPerView: 4.5,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 10
    }
  }
});

var rightSlider = new Swiper('.js-partners-icons-reverse', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    reverseDirection: true
  },
  speed: 5000,
  breakpoints: {
    500: {
      slidesPerView: 4.5,
      spaceBetween: 10
    },
    700: {
      slidesPerView: 4.5,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 10
    }
  }
});

//pharma slider
var rightSlider = new Swiper('.js-pharma-icons', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 0
  },
  speed: 3000,
  breakpoints: {
    500: {
      slidesPerView: 4.5,
      spaceBetween: 10
    },
    700: {
      slidesPerView: 4.5,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 10
    }
  }
});

var rightSlider = new Swiper('.js-pharma-icons-reverse', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    //waitForTransition: false,
    reverseDirection: true
  },
  speed: 3000,
  breakpoints: {
    500: {
      slidesPerView: 4.5,
      spaceBetween: 10
    },
    700: {
      slidesPerView: 4.5,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 10
    }
  }
});

// builder

var swiper = new Swiper('.builderSwiper', {
  direction: 'vertical',
  slidesPerView: 2,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    767: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    }
  }
});

// team swiper

var swiper = new Swiper(".teamSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // slidesPerGroup: 3,
  loop: true,
  autoplay: {
    delay: 5000
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

$(".option").hover(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});

// investor
var rightSlider = new Swiper('.investor-icons', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 0
  },
  speed: 3000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    500: {
      slidesPerView: 6,
      spaceBetween: 10
    },
    700: {
      slidesPerView: 6,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 10
    }
  }
});

},{}]},{},[1])//# sourceMappingURL=about.js.map
