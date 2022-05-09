// var swiper = new Swiper('.diverseSwiper', {
//   direction: 'horizontal',
//   slidesPerView:1,
//   slidesPerGroup: 1,
//   spaceBetween:0,
//   grabCursor: true,
//   loop: true,
//   // autoplay: {
//   //   delay: 2000,
//   //   disableOnInteraction: false,
//   // },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     767: {     
//       direction: 'vertical',
//       slidesPerView:2,
//       slidesPerGroup: 1, 
//       spaceBetween:0,
//     },
//     768: {     
//       direction: 'vertical',
//       slidesPerView:2,
//       slidesPerGroup: 1, 
//       spaceBetween:0,      
//     }
//   }  
// });


var swiper = new Swiper('.diverseSwiper', {
  direction: 'horizontal',
  slidesPerView:1,
  slidesPerGroup: 1,
  spaceBetween:35,
  grabCursor: true,
  loop: true,
  autoHeight:true,  
  // mousewheel: true,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {     
      direction: 'vertical',
      slidesPerView:2,
      slidesPerGroup: 1, 
      spaceBetween:0,
      autoHeight: false,  
      // mousewheel: false,
    },
    768: {     
      direction: 'vertical',
      slidesPerView:2,
      slidesPerGroup: 1, 
      spaceBetween:0,      
      autoHeight: false,
      // mousewheel: false,  
    }
  }  
});



// diverse-card
$(document).ready(function () {
  $(".diverse-card").click(function () {
    $(".diverse-card").not(this).removeClass("active").addClass("inactive");
    $(this).addClass("active").removeClass("inactive");
  });
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

// var swiper = new Swiper(".supportSwiper", { 
//   spaceBetween: 30,
//   slidesPerView: 1,
//   slidesPerGroup: 1,
//   loop: true,
//   // autoplay: {
//   //   delay: 5000,
//   // },
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
  
// });


var swiper = new Swiper(".supportSwiper", { 
  spaceBetween: 30,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  autoHeight:true,    
  // setWrapperSize:true,
  // autoplay: {
  //   delay:5000,
  // },
  // loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});



// support card
$(document).ready(function () {
  $(".support-card").click(function () {
    $(".support-card").not(this).removeClass("active").addClass("inactive");
    $(this).addClass("active").removeClass("inactive");
  });
});


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


let SwiperTop = new Swiper('.swiper--top', {
  direction:'vertical',
  spaceBetween: 0,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});

let SwiperBottom = new Swiper('.swiper--bottom', {
  direction:'vertical',
  spaceBetween: 0,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 1,
    reverseDirection: true
  },
  loop: true,
  loopedSlides: 4,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});
let SwiperThird = new Swiper('.swiper--third', {
  direction:'vertical',
  spaceBetween: 0,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});

var $el = $(".dfilter-icon");
var $ee = $(".department-filter");
$el.click(function(){
  // e.stopPropagation();
  $(".department-filter").toggleClass('active');
});
$(document).on('click',function(){
  if(($(e.target) != $el) && ($ee.hasClass('active'))){
  $ee.removeClass('active');
  // console.log("yes");
}
});


$(function(){
  document.getElementById('pre-button').classList.add('display-button')
  $('.nav-tabs').scroll(function(){
    var $width = $('.nav-tabs').outerWidth()
    var $scrollWidth = $('.nav-tabs')[0].scrollWidth; 
    var $scrollLeft = $('.nav-tabs').scrollLeft();

    if ($scrollWidth - $width === $scrollLeft){
        // alert('right end');
        document.getElementById('nxt-button').classList.add('display-button')
    }
    else{
      document.getElementById('nxt-button').classList.remove('display-button')

    }
    if ($scrollLeft===0){
      document.getElementById('pre-button').classList.add('display-button')
    }
    else{
      document.getElementById('pre-button').classList.remove('display-button')

    }  
      $('#out').text('scrollLeft: '+$(this).scrollLeft());
    });


  $('.careerverticalswiper-button-next').click(function () {
    if(window.innerWidth >769)
    {
      $('.nav-tabs').animate({
        scrollLeft: $('.nav-tabs').scrollLeft() + 500
      }, 300);
    }
    else{
      $('.nav-tabs').animate({
        scrollLeft: $('.nav-tabs').scrollLeft() + 250
      }, 300);
    }
    
    return false;
  });

  $(".careerverticalswiper-button-pre").click(function () {

  
    if (window.innerWidth > 769) {
      $(".nav-tabs").animate(
        {
          scrollLeft: $(".nav-tabs").scrollLeft() - 500,
        },
        300
      );
    } 
    else {
      $(".nav-tabs").animate(
        {
          scrollLeft: $(".nav-tabs").scrollLeft() - 250,
        },
        300
      );
    }

    return false;
  });
  var nodes = Array.prototype.slice.call(
    document.getElementById("nav-tab").children
  );

  console.log(nodes.length);
  if (nodes.length <= 3) {
    $(".careerverticalswiper-button-next").addClass("hidden");
    $(".careerverticalswiper-button-pre").addClass("hidden");
  } else {
    $(".careerverticalswiper-button-next").removeClass("hidden");
    $(".careerverticalswiper-button-pre").removeClass("hidden");
  }

});


function isVisible($el) {
  let docViewTop = $(window).scrollLeft();
  let docViewBottom = docViewTop + $(window).innerWidth();
  let elTop = $el.offset().left;
  let elBottom = elTop + $el.innerWidth();
  return((elBottom <= docViewBottom) && (elTop >= docViewTop));
}
$(function() {
  console.log("#Second box  visible=" + isVisible($("#nav-department6-tab")));
  $(window).scroll(function() {
    console.log("Second box visible=" + isVisible($("#nav-department6-tab")));
    });
});