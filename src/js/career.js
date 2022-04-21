var swiper = new Swiper('.diverseSwiper', {
  direction: 'vertical',
  slidesPerView:3,
  slidesPerGroup: 1,
  spaceBetween:20,
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
      slidesPerView:3,
      slidesPerGroup: 1, 
      spaceBetween:10,
    },
    768: {
      slidesPerView:2,
      slidesPerGroup: 1, 
      spaceBetween:10,      
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
// var circle = new Vivus('square1', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square2', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square3', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square4', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square5', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square6', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square7', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });

// var circle = new Vivus('square8', {
//   type: 'delayed', 
//   duration: 200,
//   animTimingFunction: Vivus.EASE_IN.EASE_OUT
// });


$('.hover-card').hover(function(){
  new Vivus('square10', {duration: 150 });
});
$('.hover-card').hover(function(){
  new Vivus('square11', {duration: 150 });
});
$('.hover-card').hover(function(){
  new Vivus('square12', {duration: 150 });
});
$('.hover-card').hover(function(){
  new Vivus('square13', {duration: 150 });
});
$('.hover-card').hover(function(){
  new Vivus('square14', {duration: 150 });
});
$('.hover-card').hover(function(){
  new Vivus('square15', {duration: 150 });
});
$('.hover-card').hover(function(){
  new Vivus('square16', {duration: 150 });
});
$('.hover-card').hover(function(){
  new Vivus('square17', {duration: 150 });
});
