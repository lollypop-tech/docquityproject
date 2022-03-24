(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

jQuery(document).ready(function ($) {
  var $slider = $(".logo-service-slider-panel");
  $slider.slick({
    slidesToShow: 2.3,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: $(".nav-prev01"),
    nextArrow: $(".nav-next01"),
    // adaptiveHeight: true,
    // centerMode: true,
    // focusOnSelect: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.3
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 1.7
      }
    }, {
      breakpoint: 320,
      settings: {
        slidesToShow: 1.1
      }
    }]
  });
});

},{}]},{},[1])//# sourceMappingURL=slider.js.map
