(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var swiper = new Swiper(".sticky-tab-list", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next"
    //   prevEl: ".swiper-button-prev",
  }
});

// TAb swipper

var rightBtn = document.querySelector('.privacyverticalswiper-button-next');

rightBtn.addEventListener("click", function (event) {
  var conent = document.querySelector('.vertical-tab-list');
  conent.scrollLeft += 200;
  event.preventDefault();
});

},{}]},{},[1])//# sourceMappingURL=privacy.js.map
