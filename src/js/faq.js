
//category slider
var rightSlider = new Swiper('.category-Swiper', {
    slidesPerView:1,
    spaceBetween:25,
    loop: true,
    // autoplay: {
    //   delay:0,
    //   disableOnInteraction: true,
    // },
    speed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
    breakpoints: {
      500: {
        slidesPerView: 3,
        spaceBetween:25
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      768: {
        slidesPerView: 3,
        spaceBetween:25
      }
    }
  });
  

  var $boxes1 = $(".faq-category-list__item"),
$productLinks1 = $(".category-card").click(function () {      
$boxes1.removeClass("active").filter("#useBox" + this.id).addClass("active");
});

$(document).ready(function () {
$(".category-card").click(function () {
$(".category-card").not(this).removeClass("active").addClass("inactive");
$(this).addClass("active").removeClass("inactive");
});
});