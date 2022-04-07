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

    // const enableSwiper = function () {
    //     mySwiper = new Swiper(".js-resp-capabilities", {
    //         loop: true,
    //         slidesPerView: 1.5,
    //         // a11y: true,
    //         keyboardControl: true,
    //         grabCursor: true,
    //         autoplay: {
    //             delay:1000,
    //             disableOnInteraction: false,
    //         },

    //         // pagination
    //         pagination: ".swiper-pagination",
    //         paginationClickable: true,
    //     });
    // };

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

  // $(".sidebar li").click(function (e) {
  //     // $(".sidebar li").removeClass("active");
  //     alert("working");
  //     $(this).addClass("active");
  // });

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

// builder

// why use docquity

var swiper = new Swiper(".whyusedocquitySwiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 25,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {
      direction: "vertical",
      slidesPerView: 2,
    },
    768: {
      direction: "vertical",
      slidesPerView: 2,
    },
  },
});

// why docquity offers

$('.thumbnail-credit').hover(function () {
  $('.dq-mobile-credit').show();
  $('.dq-mobile-webiner').hide();
  $('.dq-mobile-clinical').hide();
  $('.dq-mobile-doctalks').hide();
  $('.dq-mobile-channels').hide();
  $('.dq-mobile-private').hide();
});
$('.thumbnail-webinar').hover(function () {
  $('.dq-mobile-credit').hide();
  $('.dq-mobile-webiner').show();
  $('.dq-mobile-clinical').hide();
  $('.dq-mobile-doctalks').hide();
  $('.dq-mobile-channels').hide();
  $('.dq-mobile-private').hide();
});
$('.thumbnail-clinical').hover(function () {
  $('.dq-mobile-credit').hide();
  $('.dq-mobile-webiner').hide();
  $('.dq-mobile-clinical').show();
  $('.dq-mobile-doctalks').hide();
  $('.dq-mobile-channels').hide();
  $('.dq-mobile-private').hide();
});
$('.thumbnail-doctalks').hover(function () {
  $('.dq-mobile-credit').hide();
  $('.dq-mobile-webiner').hide();
  $('.dq-mobile-clinical').hide();
  $('.dq-mobile-doctalks').show();
  $('.dq-mobile-channels').hide();
  $('.dq-mobile-private').hide();
});
$('.thumbnail-channel').hover(function () {
  $('.dq-mobile-credit').hide();
  $('.dq-mobile-webiner').hide();
  $('.dq-mobile-clinical').hide();
  $('.dq-mobile-doctalks').hide();
  $('.dq-mobile-channels').show();
  $('.dq-mobile-private').hide();
});
$('.thumbnail-private').hover(function () {
  $('.dq-mobile-credit').hide();
  $('.dq-mobile-webiner').hide();
  $('.dq-mobile-clinical').hide();
  $('.dq-mobile-doctalks').hide();
  $('.dq-mobile-channels').hide();
  $('.dq-mobile-private').show();
});

// mobile slider
var swiper = new Swiper('.offerSwiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 25,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }, 
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {
      direction: 'vertical',
      slidesPerView:2,        
    },
    768: {
      direction: 'vertical',
      slidesPerView:2,        
    }
  }  
});


// why docquity mobile
var swiper = new Swiper('.docquitywhySwiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 25,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }, 
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {
      direction: 'vertical',
      slidesPerView:2,        
    },
    768: {
      direction: 'vertical',
      slidesPerView:2,        
    }
  }  
});

// homeleadershipSwiper
var swiper = new Swiper(".homeleadershipSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {      
      slidesPerView:3,    
      slidesPerGroup:3    
    },
    768: {      
      slidesPerView:3,
      slidesPerGroup:3       
    }
  }  
});