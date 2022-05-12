//  Section 06

var swiper = new Swiper(".section06swiper", {
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

//Section 05

var swiper = new Swiper(".section05Swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  speed: 800,
  grabCursor: true,
  loop: true,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // }, 
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
      slidesPerView:1,    
      slidesPerGroup:1    
    },
    768: {      
      slidesPerView:3,
      slidesPerGroup:3       
    }
  }  
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  loop: true,
  loopedSlides: 10,
  centeredSlides: true,
  spaceBetween: 0,
  speed: 800,
  slideToClickedSlide: true,
  slidesPerView: 8,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    // 767: {      
    //   slidesPerView:1,    
    //   slidesPerGroup:1    
    // },
    992: {      
      slidesPerView:5,
      // slidesPerGroup:3       
    },
    1200: {      
      slidesPerView:7,
      // slidesPerGroup:3       
    },
    1400: {      
      slidesPerView:8,
      // slidesPerGroup:3       
    }
  }  
});

var galleryTop = new Swiper('.gallery-top', {
  loop: true,
  loopedSlides: 10,
  spaceBetween: 10,
  speed: 800,
  navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-white',
    prevEl: '.swiper-button-white1',
  },
  // USING THE THUMBS COMPONENT
  // thumbs: {
  //   swiper: galleryThumbs
  // }
});

// ALTERNATIVE SOLUTION to get the active thumb centered, it doesn't work on Safari if sliding backwards
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;