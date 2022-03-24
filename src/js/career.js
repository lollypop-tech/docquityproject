var swiper = new Swiper('.diverseSwiper', {
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 0,
  // mousewheel: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



var swiper = new Swiper(".individualSwiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  // freeMode: true,
  loop: true,
  // loopFillGroupWithBlank: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
