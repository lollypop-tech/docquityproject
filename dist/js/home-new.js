(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  // client say //

  var clientsay = new Swiper(".js-client-say", {
    // loop: true,
    slidesPerView: 2,
    breakpoints: {
      320: {
        slidesPerView: 1.5
        // spaceBetween: 25,
        // loop: true,
      },

      414: {
        slidesPerView: 1.5
        // spaceBetween: 25,
        // loop: true,
      },

      769: {
        slidesPerView: 2.5
        // loop: true,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });

  // our capabilities Mobile-slider

  (function () {
    "use strict";

    var breakpoint = window.matchMedia("(min-width:40.25em)");

    // keep track of swiper instances to destroy later
    var mySwiper = void 0;

    var breakpointChecker = function breakpointChecker() {
      // if larger viewport and multi-row layout needed
      if (breakpoint.matches === true) {
        // clean up old instances and inline styles when available
        if (mySwiper !== undefined) mySwiper.destroy(true, true);

        // or/and do nothing
        return;

        // else if a small viewport and single column layout needed
      } else if (breakpoint.matches === false) {
        // fire small viewport version of swiper
        return enableSwiper();
      }
    };

    var enableSwiper = function enableSwiper() {
      var _ref;

      mySwiper = new Swiper(".js-resp-capabilities", (_ref = {
        slidesPerView: "auto",
        centeredSlides: true
      }, _defineProperty(_ref, "slidesPerView", 1.5), _defineProperty(_ref, "spaceBetween", 25), _defineProperty(_ref, "loop", true), _defineProperty(_ref, "speed", 2000), _defineProperty(_ref, "autoplay", {
        delay: 1000
      }), _defineProperty(_ref, "pagination", ".swiper-pagination"), _defineProperty(_ref, "paginationClickable", true), _ref));
    };

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();
  })(); /* IIFE end */

  var swiper = new Swiper(".testimonial", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    },
    // mousewheel: true,
    keyboard: true
  });

  var Centermodeswiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    // spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
});

},{}]},{},[1])//# sourceMappingURL=home-new.js.map
