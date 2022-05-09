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

//home page mobile slider

$(document).ready(function () {
  var mySwipermobile = new Swiper(".testswiper", {
    effect: 'coverflow',    
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    // grabCursor: true,
    slideToClickedSlide: true,
    // autoplay: {
    //   delay:0,
    //   disableOnInteraction: true,
    // },
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    coverflowEffect: {
      rotate: 0,
      stretch:-90,
      depth:150,
      modifier:1,
      slideShadows: false,
    },
    breakpoints: {
      767: {
        slidesPerView: 7
      },
      768: {
        slidesPerView: 7
      }
    }
  });
});


// why use docquity
var swiper = new Swiper(".whyusedocquitySwiper", {
  direction: "horizontal",
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween:15,
  grabCursor: true,
  loop: true, 
  autoHeight:true,
  // mousewheel: false,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
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
      slidesPerView: 3,
      spaceBetween: 0,  
      autoHeight: false,
      // mousewheel: true,     
    },
    768: {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 0,
      autoHeight: false,
      // mousewheel: true,  
    },
  },
});

// why use docquity hover
var $boxes1 = $(".whyusedocquity-right-img"),
    $productLinks1 = $(".whyusedocquity-card").click(function () {      
  $boxes1.removeClass("active").filter("#useBox" + this.id).addClass("active");
});

$(document).ready(function () {
  $(".whyusedocquity-card").click(function () {
    $(".whyusedocquity-card").not(this).removeClass("active").addClass("inactive");
    $(this).addClass("active").removeClass("inactive");
  });
});

let SwiperTop= new Swiper('.wall--top1', {
  direction:'vertical',
  spaceBetween: 0,
  centeredSlides: true,
  speed: 2900,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,  
    // pauseOnMouseEnter: true 
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true

});

$('.wall--top1').on('mouseenter', function(e){
  console.log('stop autoplay');
  SwiperTop.autoplay.stop();
})
$('.wall--top1').on('mouseleave', function(e){
  console.log('start autoplay');
  SwiperTop.autoplay.start();
})

let SwiperBottom = new Swiper('.wall--top2', {
  direction:'vertical',
  spaceBetween: 0,
  centeredSlides: true,
  speed: 2900,
  autoplay: {
    delay: 0,
    reverseDirection: true,
  },
  loop: true,
  // loopedSlides: 4,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});
$('.wall--top2').on('mouseenter', function(e){
  console.log('stop autoplay');
  SwiperBottom.autoplay.stop();
})
$('.wall--top2').on('mouseleave', function(e){
  console.log('start autoplay');
  SwiperBottom.autoplay.start();
})
let SwiperThird = new Swiper('.wall--top3', {
  direction:'vertical',
  spaceBetween: 0,
  centeredSlides: true,
  speed: 2900,
  autoplay: {
    delay: 0,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});
$('.wall--top3').on('mouseenter', function(e){
  console.log('stop autoplay');
  SwiperThird.autoplay.stop();
})
$('.wall--top3').on('mouseleave', function(e){
  console.log('start autoplay');
  SwiperThird.autoplay.start();
})