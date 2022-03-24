$(document).ready(function () {
  var mySwiper = new Swiper(".swiper", {
    autoHeight: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    // speed: 500,
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

//Brand Slider

$(document).ready(function(){
  $('.brand-logos').slick({
      slidesToShow: 6,
      slidesToScroll: -1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
  $('.brand-logos1').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 3
        }
    }]
});
});

var rightSlider = new Swiper(".js-partners-icons-right", {
  slidesPerView: 6,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  speed: 3000,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    834: {
      slidesPerView: 3,
    },
  },
});




// story
var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if (!items[i].classList.contains("in-view")) {
        items[i].classList.add("in-view");
      }
    } else if (items[i].classList.contains("in-view")) {
      items[i].classList.remove("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

// counter
// number count for stats, using jQuery animate

$(".counting").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 3000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});

// $(".option").click(function(){
//   $(".option").removeClass("active");
//   $(this).addClass("active");
// });
$(".option").hover(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});

// $(document).on("click", '[data-toggle="lightbox"]', function (event) {
//   event.preventDefault();
//   $(this).ekkoLightbox();
// });

const scroll = document.querySelector(".scroll");
var isDown = false;
var scrollX;
var scrollLeft;

// Mouse Up Function
scroll.addEventListener("mouseup", () => {
  isDown = false;
  scroll.classList.remove("active");
});

// Mouse Leave Function
scroll.addEventListener("mouseleave", () => {
  isDown = false;
  scroll.classList.remove("active");
});

// Mouse Down Function
scroll.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDown = true;
  scroll.classList.add("active");
  scrollX = e.pageX - scroll.offsetLeft;
  scrollLeft = scroll.scrollLeft;
});

// Mouse Move Function
scroll.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  var element = e.pageX - scroll.offsetLeft;
  var scrolling = (element - scrollX) * 2;
  scroll.scrollLeft = scrollLeft - scrolling;
});

