(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// //section 07

// var swiper = new Swiper('.section07swiper', {
//     direction: 'horizontal',
//     slidesPerView: 1,
//     spaceBetween: 25,
//     grabCursor: true,
//     loop: true,
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     }, 
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       767: {
//         direction: 'vertical',
//         slidesPerView:2,        
//       },
//       768: {
//         direction: 'vertical',
//         slidesPerView:2,        
//       }
//     }  
//   });


// //  Section 10

// var swiper = new Swiper(".section100swiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


//   var swiper = new Swiper(".sticky-tab-list", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,

//     navigation: {
//       nextEl: ".swiper-button-next"
//     //   prevEl: ".swiper-button-prev",
//     },
//   });


// // TAb swipper

// const rightBtn = document.querySelector('.privacyverticalswiper-button-next');

// rightBtn.addEventListener("click", function(event) {
//   const conent = document.querySelector('.vertical-tab-list');
//   conent.scrollLeft += 200;
//   event.preventDefault();
// });


// //  Section 10

// var swiper = new Swiper(".section100swiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


// var swiper = new Swiper(".sticky-tab-list", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,

//   navigation: {
//     nextEl: ".swiper-button-next"
//   //   prevEl: ".swiper-button-prev",
//   },
// });


// $(function(){

// $('.nav-tabs').scroll(function(){
//     $('#out').text('scrollLeft: '+$(this).scrollLeft());
//   });

// $('.clinicverticalswiper-button-next').click(function () {
//   $('.nav-tabs').animate({
//     scrollLeft: $('.nav-tabs').scrollLeft() + 250
//   }, 300);

//   return false;
// });

// });


//section 07

var swiper = new Swiper('.section07swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 25,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    767: {
      direction: 'vertical',
      slidesPerView: 2
    },
    768: {
      direction: 'vertical',
      slidesPerView: 2
    }
  }
});

//  Section 10

var swiper = new Swiper(".section100swiper", {
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

var swiper = new Swiper(".sticky-tab-list", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next"
    //   prevEl: ".swiper-button-prev",
  }
});

$(function () {

  $('.nav-tabs').scroll(function () {
    $('#out').text('scrollLeft: ' + $(this).scrollLeft());
  });

  $('.clinicverticalswiper-button-next').click(function () {
    $('.nav-tabs').animate({
      scrollLeft: $('.nav-tabs').scrollLeft() + 250
    }, 300);

    return false;
  });
});

},{}]},{},[1])//# sourceMappingURL=docquityclinic.js.map
