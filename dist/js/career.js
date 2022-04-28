(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// var swiper = new Swiper('.diverseSwiper', {
//   direction: 'vertical',
//   slidesPerView:3,
//   slidesPerGroup: 1,
//   spaceBetween:20,
//   grabCursor: true,
//   loop: true,
//   // autoplay: {
//   //   delay: 2000,
//   //   disableOnInteraction: false,
//   // },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     767: {
//       slidesPerView:3,
//       slidesPerGroup: 1, 
//       spaceBetween:10,
//     },
//     768: {
//       slidesPerView:2,
//       slidesPerGroup: 1, 
//       spaceBetween:10,      
//     }
//   }  
// });


var swiper = new Swiper('.diverseSwiper', {
  direction: 'vertical',
  slidesPerView: 2,
  slidesPerGroup: 1,
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
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 0
    }
  }
});

var swiper = new Swiper(".individualSwiper", {
  slidesPerView: 2.5,
  spaceBetween: 15,
  // freeMode: true,
  loop: true,
  // loopFillGroupWithBlank: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    767: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 4
    }
  }
});

// support mobile

var swiper = new Swiper(".supportSwiper", {
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

// support card svg animation
// var circle = new Vivus('square1', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square2', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square3', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square4', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square5', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square6', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square7', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square8', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });


$('.hover-card').hover(function () {
  new Vivus('square10', { duration: 150 });
});
$('.hover-card').hover(function () {
  new Vivus('square11', { duration: 150 });
});
$('.hover-card').hover(function () {
  new Vivus('square12', { duration: 150 });
});
$('.hover-card').hover(function () {
  new Vivus('square13', { duration: 150 });
});
$('.hover-card').hover(function () {
  new Vivus('square14', { duration: 150 });
});
$('.hover-card').hover(function () {
  new Vivus('square15', { duration: 150 });
});
$('.hover-card').hover(function () {
  new Vivus('square16', { duration: 150 });
});
$('.hover-card').hover(function () {
  new Vivus('square17', { duration: 150 });
});

var SwiperTop = new Swiper('.swiper--top', {
  direction: 'vertical',
  spaceBetween: 0,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 1
  },
  loop: true,
  slidesPerView: 'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});

var SwiperBottom = new Swiper('.swiper--bottom', {
  direction: 'vertical',
  spaceBetween: 0,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 1,
    reverseDirection: true
  },
  loop: true,
  loopedSlides: 4,
  slidesPerView: 'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});
var SwiperThird = new Swiper('.swiper--third', {
  direction: 'vertical',
  spaceBetween: 0,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 1
  },
  loop: true,
  slidesPerView: 'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});

//https://github.com/OwlCarousel2/OwlCarousel2/issues/1471

},{}]},{},[1])//# sourceMappingURL=career.js.map
