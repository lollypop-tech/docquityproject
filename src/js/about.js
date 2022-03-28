//Brand Slider 1 & 2
var swiper = new Swiper(".brandSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  reverseDirection: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
        767: {
          slidesPerView:3,
          spaceBetween: 20,        
        },
        768: {
          slidesPerView:4,        
        }
      } 
});

var swiper = new Swiper(".brandSwiper1", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  reverseDirection: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
        767: {
          slidesPerView:3,
          spaceBetween: 20,         
        },
        768: {
          slidesPerView:4,        
        }
      } 
});
//Brand Slider End


//Timeline Slider
$(document).ready(function () {
  var mySwiper = new Swiper(".swiper", {
    autoHeight: true,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
      }
    }
  });
  $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    mySwiper.slideTo($(this).index());
    $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    $(this).addClass("active");
  });
});


//Team Slider
var swiper = new Swiper(".teamSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // slidesPerGroup: 3,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});

//Investor Slider
var rightSlider = new Swiper(".js-partners-icons-right", {
  slidesPerView: 6,
  spaceBetween: 40,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 2000,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 6,
    },
    834: {
      slidesPerView: 6,
    },
  },
});

// $(document).ready(function() {
//   $(".horizontal-tabs-steps .nav-link").click(function() {
//     $(this).parent().prevAll().children('.horizontal-tabs-steps .nav-link').addClass('checked-steps');

//     $(this).parent().nextAll().children('.horizontal-tabs-steps .nav-link').removeClass('checked-steps');

//     $(this).removeClass('checked-steps');
//     $(this).parent().removeClass('complete-step');
//     $(this).parent().nextAll().removeClass('complete-step');

//     $(".horizontal-tabs-steps .nav-link.checked-steps").parent().addClass('complete-step');
//   });
// });