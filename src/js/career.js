var swiper = new Swiper('.diverseSwiper', {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween:40,
  grabCursor: true,
  loop: true,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView:4,        
    },
    768: {
      slidesPerView:4,        
    }
  }  
});



var swiper = new Swiper(".individualSwiper", {
  slidesPerView: 2.5,
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
  breakpoints: {
    767: {
      slidesPerView:4,        
    },
    768: {
      slidesPerView:4,        
    }
  }  
});



// support mobile

var swiper = new Swiper(".supportSwiper", {
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

// support card svg animation
var circle = new Vivus('square1', {
  type: 'delayed', 
  duration: 200,
  animTimingFunction: Vivus.EASE_IN.EASE_OUT
});

var circle = new Vivus('square2', {
  type: 'delayed', 
  duration: 200,
  animTimingFunction: Vivus.EASE_IN.EASE_OUT
});

var circle = new Vivus('square3', {
  type: 'delayed', 
  duration: 200,
  animTimingFunction: Vivus.EASE_IN.EASE_OUT
});

var circle = new Vivus('square4', {
  type: 'delayed', 
  duration: 200,
  animTimingFunction: Vivus.EASE_IN.EASE_OUT
});

var circle = new Vivus('square5', {
  type: 'delayed', 
  duration: 200,
  animTimingFunction: Vivus.EASE_IN.EASE_OUT
});

var circle = new Vivus('square6', {
  type: 'delayed', 
  duration: 200,
  animTimingFunction: Vivus.EASE_IN.EASE_OUT
});

var circle = new Vivus('square7', {
  type: 'delayed', 
  duration: 200,
  animTimingFunction: Vivus.EASE_IN.EASE_OUT
});

var circle = new Vivus('square8', {
  type: 'delayed', 
  duration: 200,
  animTimingFunction: Vivus.EASE_IN.EASE_OUT
});

var circle = new Vivus('square9', {
  type: 'delayed', 
  duration: 200,
  animTimingFunction: Vivus.EASE_IN.EASE_OUT
});