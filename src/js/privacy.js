var swiper = new Swiper(".sticky-tab-list", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next"
    //   prevEl: ".swiper-button-prev",
    },
  });



// TAb swipper

const rightBtn = document.querySelector('.privacyverticalswiper-button-next');

rightBtn.addEventListener("click", function(event) {
  const conent = document.querySelector('.vertical-tab-list');
  conent.scrollLeft += 200;
  event.preventDefault();
});