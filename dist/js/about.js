(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// $(document).ready(function () {
//   var mySwiper = new Swiper(".swiper-container--timeline", {
//     autoHeight: true,
//     // autoplay: {
//     //   delay: 5000,
//     //   disableOnInteraction: false
//     // },
//     // speed: 500,
//     direction: "horizontal",
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       type: "progressbar"
//     },
//     loop: false,
//     effect: "slide",
//     spaceBetween: 10,
//     on: {
//       init: function () {
//         $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
//         $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
//       },
//       slideChangeTransitionStart: function () {
//         $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
//         $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
//       }
//     }
//   });
//   $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
//     mySwiper.slideTo($(this).index());
//     $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
//     $(this).addClass("active");
//   });
// });


$(".step").click(function () {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".slider-pagination1").click(function () {
  $(".step01").addClass("active").prevAll().addClass("active");
  $(".step01").nextAll().removeClass("active");
});
$(".slider-pagination2").click(function () {
  $(".step02").addClass("active").prevAll().addClass("active");
  $(".step02").nextAll().removeClass("active");
});
$(".slider-pagination3").click(function () {
  $(".step03").addClass("active").prevAll().addClass("active");
  $(".step03").nextAll().removeClass("active");
});
$(".slider-pagination4").click(function () {
  $(".step04").addClass("active").prevAll().addClass("active");
  $(".step04").nextAll().removeClass("active");
});
$(".slider-pagination5").click(function () {
  $(".step05").addClass("active").prevAll().addClass("active");
  $(".step05").nextAll().removeClass("active");
});
$(".slider-pagination6").click(function () {
  $(".step06").addClass("active").prevAll().addClass("active");
  $(".step06").nextAll().removeClass("active");
});

$(".step01").click(function () {
  $("#line-progress").css("width", "3%");
  $(".slider-count1").addClass("active").siblings().removeClass("active");
  $(".slider-pagination1").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
  $("#line-progress").css("width", "18%");
  $(".slider-count2").addClass("active").siblings().removeClass("active");
  $(".slider-pagination2").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "38%");
  $(".slider-count3").addClass("active").siblings().removeClass("active");
  $(".slider-pagination3").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
  $("#line-progress").css("width", "57%");
  $(".slider-count4").addClass("active").siblings().removeClass("active");
  $(".slider-pagination4").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
  $("#line-progress").css("width", "77%");
  $(".slider-count5").addClass("active").siblings().removeClass("active");
  $(".slider-pagination5").addClass("active").siblings().removeClass("active");
});
$(".step06").click(function () {
  $("#line-progress").css("width", "100%");
  $(".slider-count6").addClass("active").siblings().removeClass("active");
  $(".slider-pagination6").addClass("active").siblings().removeClass("active");
});

//brand slider
// var rightSlider = new Swiper('.js-partners-icons', {
//   slidesPerView:3,
//   spaceBetween:10,
//   loop: true,
//   autoplay: {
//     delay:0,
//     disableOnInteraction: true,
//   },
//   speed: 5000,
//   breakpoints: {
//     500: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     700: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     }
//   }
// });


// var rightSlider = new Swiper('.js-partners-icons-reverse', {
//   slidesPerView:3,
//   spaceBetween:10,
//   loop: true,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: true,
//     reverseDirection: true,
//   },
//   speed: 5000,
//   breakpoints: {
//     500: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     700: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     }
//   }
// });

//pharma slider
// var rightSlider = new Swiper('.js-pharma-icons', {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   loop: true,
//   autoplay: {
//     delay:0,
//   },
//   speed: 3000,
//   breakpoints: {
//     500: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     700: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     }
//   }
// });


// var rightSlider = new Swiper('.js-pharma-icons-reverse', {
//   slidesPerView:3,
//   spaceBetween: 10,
//   loop: true,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: true,
//     //waitForTransition: false,
//     reverseDirection: true,
//   },
//   speed: 3000,
//   breakpoints: {
//     500: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     700: {
//       slidesPerView: 4.5,
//       spaceBetween:10
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     }
//   }
// });


// builder

var swiper = new Swiper('.builderSwiper', {
  direction: 'vertical',
  slidesPerView: 2,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    767: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    }
  }
});

// team swiper

var swiper = new Swiper(".teamSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // slidesPerGroup: 3,
  loop: true,
  autoplay: {
    delay: 5000
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

$(".option").hover(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});

// investor
var rightSlider = new Swiper('.investor-icons', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 0
  },
  speed: 3000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    500: {
      slidesPerView: 6,
      spaceBetween: 10
    },
    700: {
      slidesPerView: 6,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 10
    }
  }
});

$(function () {

  $('.vertical-tab-list').scroll(function () {
    $('#out').text('scrollLeft: ' + $(this).scrollLeft());
  });

  $('.timelineverticalswiper-button-next').click(function () {
    $('.vertical-tab-list').animate({
      scrollLeft: $('.vertical-tab-list').scrollLeft() + 500
    }, 300);

    return false;
  });
});

// $(".js-brand-tabs .nav-link").click(function(){
//   setTimeout(function(){
//     alert(1)
//     rightSlider1.update() 
//     rightSlider2.update() 
//     rightSlider3.update() 
//     rightSlider4.update()
//   },100)
// })


//brand slider

// var rightSlider = new Swiper('.js-partners-icons', {
//   slidesPerView:3,
//   spaceBetween:10,
//   loop: true,
//   observer: true,
//   observeParents: true,
//   autoplay: {
//     delay:0,
//     disableOnInteraction: true,
//   },
//   speed: 5000,
//   breakpoints: {
//     500: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     700: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     }
//   }
// });

// var rightSlider = new Swiper('.js-partners-icons-reverse', {
//   slidesPerView:3,
//   spaceBetween:10,
//   loop: true,
//   observer: true,
//   observeParents: true,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: true,
//     reverseDirection: true,
//   },
//   speed: 5000,
//   breakpoints: {
//     500: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     700: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     }
//   }
// });

// $("#nav-home-tab").click(function(){
//   var rightSlider = new Swiper('.js-partners-icons', {
//     slidesPerView:3,
//     spaceBetween:10,
//     loop: true,
//     observer: true,
//     observeParents: true,
//     autoplay: {
//       delay:0,
//       disableOnInteraction: true,
//     },
//     speed: 5000,
//     breakpoints: {
//       500: {
//         slidesPerView: 4.5,
//         spaceBetween: 10
//       },
//       700: {
//         slidesPerView: 4.5,
//         spaceBetween: 10
//       },
//       768: {
//         slidesPerView: 4.5,
//         spaceBetween: 10
//       }
//     }
//   });

//   var rightSlider = new Swiper('.js-partners-icons-reverse', {
//     slidesPerView:3,
//     spaceBetween:10,
//     loop: true,
//     observer: true,
//     observeParents: true,
//     autoplay: {
//       delay: 0,
//       disableOnInteraction: true,
//       reverseDirection: true,
//     },
//     speed: 5000,
//     breakpoints: {
//       500: {
//         slidesPerView: 4.5,
//         spaceBetween: 10
//       },
//       700: {
//         slidesPerView: 4.5,
//         spaceBetween: 10
//       },
//       768: {
//         slidesPerView: 4.5,
//         spaceBetween: 10
//       }
//     }
//   });
// });

// //pharma slider
// var rightSlider = new Swiper('.js-pharma-icons', {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   loop: true,
//   observer: true,
//   observeParents: true,
//   autoplay: {
//     delay:0,
//     disableOnInteraction: true,
//   },
//   speed: 5000,
//   breakpoints: {
//     500: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     700: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     }
//   }
// });

// var rightSlider = new Swiper('.js-pharma-icons-reverse', {
//   slidesPerView:3,
//   spaceBetween: 10,
//   loop: true,
//   observer: true,
//   observeParents: true,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: true,
//     //waitForTransition: false,
//     reverseDirection: true,
//   },
//   speed: 5000,
//   breakpoints: {
//     500: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     700: {
//       slidesPerView: 4.5,
//       spaceBetween:10
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     }
//   }
// });


// $("#nav-profile-tab").click(function(){
//   var rightSlider = new Swiper('.js-pharma-icons', {
//     slidesPerView: 3,
//     spaceBetween: 10,
//     loop: true,
//     observer: true,
//     observeParents: true,
//     autoplay: {
//       delay:0,
//       disableOnInteraction: true,
//     },
//     speed: 5000,
//     breakpoints: {
//       500: {
//         slidesPerView: 4.5,
//         spaceBetween: 10
//       },
//       700: {
//         slidesPerView: 4.5,
//         spaceBetween: 10
//       },
//       768: {
//         slidesPerView: 4.5,
//         spaceBetween: 10
//       }
//     }
//   });

//   var rightSlider = new Swiper('.js-pharma-icons-reverse', {
//     slidesPerView:3,
//     spaceBetween: 10,
//     loop: true,
//     observer: true,
//     observeParents: true,
//     autoplay: {
//       delay: 0,
//       disableOnInteraction: true,
//       //waitForTransition: false,
//       reverseDirection: true,
//     },
//     speed: 5000,
//     breakpoints: {
//       500: {
//         slidesPerView: 4.5,
//         spaceBetween: 10
//       },
//       700: {
//         slidesPerView: 4.5,
//         spaceBetween:10
//       },
//       768: {
//         slidesPerView: 4.5,
//         spaceBetween: 10
//       }
//     }
//   });
// });


$(document).ready(function () {
  // Owl Carousel
  var owl = $(".owl-top");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 1500,
    // autoplayHoverPause: true,
    // slideTransition: 'linear',
    autoHeight: false,
    autoHeightClass: 'owl-height',
    responsiveClass: true,
    responsive: {
      0: {
        items: 3
      },
      480: {
        items: 3
      },
      767: {
        items: 5
      }
    }
  });

  $('.owl-bottom').owlCarousel({
    loop: true,
    rtl: true,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 1500,
    // autoplayHoverPause: true,
    // slideTransition: 'linear',        
    autoHeight: false,
    autoHeightClass: 'owl-height',
    responsiveClass: true,
    responsive: {
      0: {
        items: 3
      },
      480: {
        items: 3
      },
      767: {
        items: 5
      }
    }
  });

  $('.owl-pharmatop').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    // slideTransition: 'linear',        
    autoHeight: false,
    autoHeightClass: 'owl-height',
    responsiveClass: true,
    responsive: {
      0: {
        items: 3
      },
      480: {
        items: 3
      },
      767: {
        items: 5
      }
    }
  });

  $('.owl-pharmabottom').owlCarousel({
    loop: true,
    rtl: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    // slideTransition: 'linear',     
    autoHeight: false,
    autoHeightClass: 'owl-height',
    responsiveClass: true,
    responsive: {
      0: {
        items: 3
      },
      480: {
        items: 3
      },
      767: {
        items: 5
      }
    }
  });
});

//brand slider
// var rightSlider = new Swiper('.js-partners-icons', {
//   slidesPerView:3,
//   spaceBetween:10,
//   loop: true,
//   autoplay: {
//     delay:0,
//     disableOnInteraction: true,
//   },
//   speed: 5000,
//   breakpoints: {
//     500: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     700: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     }
//   }
// });


// var rightSlider = new Swiper('.js-partners-icons-reverse', {
//   slidesPerView:3,
//   spaceBetween:10,
//   loop: true,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: true,
//     reverseDirection: true,
//   },
//   speed: 5000,
//   breakpoints: {
//     500: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     700: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     }
//   }
// });


// //pharma slider
// var rightSlider = new Swiper('.js-pharma-icons', {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   loop: true,
//   autoplay: {
//     delay:0,
//   },
//   speed: 3000,
//   breakpoints: {
//     500: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     700: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     }
//   }
// });


// var rightSlider = new Swiper('.js-pharma-icons-reverse', {
//   slidesPerView:3,
//   spaceBetween: 10,
//   loop: true,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: true,
//     //waitForTransition: false,
//     reverseDirection: true,
//   },
//   speed: 3000,
//   breakpoints: {
//     500: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     },
//     700: {
//       slidesPerView: 4.5,
//       spaceBetween:10
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 10
//     }
//   }
// });

},{}]},{},[1])//# sourceMappingURL=about.js.map
