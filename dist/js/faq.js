(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//category slider
var rightSlider = new Swiper('.category-Swiper', {
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

},{}]},{},[1])//# sourceMappingURL=faq.js.map
