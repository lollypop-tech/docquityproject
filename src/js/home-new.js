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




// why use docquity

var swiper = new Swiper('.whyusedocquitySwiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 2,
  spaceBetween: 25,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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


// why use docquity hover
var $boxes1 = $(".whyusedocquity-right-img"),
    $productLinks1 = $(".whyusedocquity-card").click(function () {
  $boxes1.removeClass("active").filter("#useBox" + this.id).addClass("active");
});

$(document).ready(function () {
  $(".whyusedocquity-card").onclick(function () {
    $(".whyusedocquity-card").not(this).removeClass("active").addClass("inactive");
    $(this).addClass("active").removeClass("inactive");
  });
});




// investor
var rightSlider = new Swiper('.investor-icons', {
  slidesPerView:3,
  spaceBetween: 10,
  loop: true,
  // autoplay: {
  //   delay:0,
  // },
  speed: 3000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 6,
      spaceBetween:10
    },
    700: {
      slidesPerView: 6,
      spaceBetween:10
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 10
    }
  }
});





// why docquity offers

var $boxes = $(".dq-mobile-credit"),
    $productLinks = $(".thumbnail-credit").mouseover(function () {
  $boxes.removeClass("active").filter("#offerBox" + this.id).addClass("active");
});

$(document).ready(function () {
  $(".thumbnail-credit").hover(function () {
    $(".thumbnail-credit").not(this).removeClass("active").addClass("inactive");
    $(this).addClass("active").removeClass("inactive");
  });
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

