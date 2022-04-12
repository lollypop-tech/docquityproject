(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

//  Section 06

var swiper = new Swiper(".section06swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

//Section 05

var swiper = new Swiper(".section05Swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  speed: 800,
  grabCursor: true,
  loop: true,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // }, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  }
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  loop: true,
  loopedSlides: 10,
  centeredSlides: true,
  spaceBetween: 0,
  speed: 800,
  slideToClickedSlide: true,
  slidesPerView: 8,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});

var galleryTop = new Swiper('.gallery-top', {
  loop: true,
  loopedSlides: 10,
  spaceBetween: 10,
  speed: 800,
  navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-white',
    prevEl: '.swiper-button-white1'
  }
  // USING THE THUMBS COMPONENT
  // thumbs: {
  //   swiper: galleryThumbs
  // }
});

// ALTERNATIVE SOLUTION to get the active thumb centered, it doesn't work on Safari if sliding backwards
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

},{}]},{},[1])//# sourceMappingURL=productcpd.js.map
