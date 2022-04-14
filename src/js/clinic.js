// homeleadershipSwiper
var swiper = new Swiper(".clinicSwiper", {
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