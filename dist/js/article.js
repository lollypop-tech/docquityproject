(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  // var $swiper = $(".articleswiper");
  // var $bottomSlide = null;     
  // var $bottomSlideContent = null;   
  var mySwiper = new Swiper(".articleswiper", {
    spaceBetween: 5,
    slidesPerView: 1,
    centeredSlides: true,
    // roundLengths: true,
    loop: true,
    // loopAdditionalSlides: 30,
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
        slidesPerView: 3
      },
      768: {
        slidesPerView: 3
      }
    }
  });
});

// pagination
var items = $("#nav-home .recent-row .article-list .article-list__item");
var numItems = items.length;
var perPage = 6;

items.slice(perPage).hide();

$('#pagination-container').pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "Prev",
  nextText: "Next",
  onPageClick: function onPageClick(pageNumber) {
    var showFrom = perPage * (pageNumber - 1);
    var showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  }
});

var $el = $(".filter-icon");
var $ee = $(".filter-box");
$el.click(function () {
  // e.stopPropagation();
  $(".filter-box").toggleClass('active');
});
$(document).on('click', function () {
  if ($(e.target) != $el && $ee.hasClass('active')) {
    $ee.removeClass('active');
    // console.log("yes");
  }
});

},{}]},{},[1])//# sourceMappingURL=article.js.map
