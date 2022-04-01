$(document).ready(function () {
  // client say //

  var clientsay = new Swiper(".js-client-say", {
    // loop: true,
    slidesPerView: 2,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        // spaceBetween: 25,
        // loop: true,
      },

      414: {
        slidesPerView: 1.5,
        // spaceBetween: 25,
        // loop: true,
      },

      769: {
        slidesPerView: 2.5,
        // loop: true,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // our capabilities Mobile-slider

  (function () {
    "use strict";
    const breakpoint = window.matchMedia("(min-width:40.25em)");

    // keep track of swiper instances to destroy later
    let mySwiper;

    const breakpointChecker = function () {
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
      mySwiper = new Swiper(".js-resp-capabilities", {
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerView: 1.5,
        spaceBetween: 25,
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 1000,
        },
        pagination: ".swiper-pagination",
        paginationClickable: true,
      });
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
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    // mousewheel: true,
    keyboard: true,
  });

  var Centermodeswiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    // spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
