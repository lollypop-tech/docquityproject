//section 07

var swiper = new Swiper('.section07swiper', {
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


//  Section 10

var swiper = new Swiper(".section100swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


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