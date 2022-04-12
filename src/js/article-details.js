// homeleadershipSwiper
var swiper = new Swiper(".similarSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
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
        slidesPerView:2,    
        slidesPerGroup:2    
      },
      768: {      
        slidesPerView:2,
        slidesPerGroup:2       
      }
    }  
  });




  jQuery(document).ready(function() {
    jQuery('.play').click(function(event){
       event.preventDefault();
      //var url = $(this).html(); //this will not work	
       $(".js-video").append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fx6o45GNX9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      $(this).hide();
      //$('video-poster').css('z-index','-1');
      
    });
  });