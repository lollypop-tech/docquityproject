
//category slider
var rightSlider = new Swiper('.category-Swiper', {
    slidesPerView:3,
    spaceBetween:10,
    loop: true,
    autoplay: {
      delay:0,
      disableOnInteraction: true,
    },
    speed: 5000,
    breakpoints: {
      500: {
        slidesPerView: 4.5,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 4.5,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 10
      }
    }
  });
  