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

var swiper = new Swiper(".section10swiper", {
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