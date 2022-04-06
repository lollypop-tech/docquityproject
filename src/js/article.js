$(document).ready(function() {    
    // var $swiper = $(".articleswiper");
    // var $bottomSlide = null;     
    // var $bottomSlideContent = null;   
    var mySwiper = new Swiper(".articleswiper", {
      spaceBetween: 5,
      slidesPerView: 1,
      centeredSlides: true,
      // roundLengths: true,
      loop: true,
      // loopAdditionalSlides: 30,
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
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        767: {      
          slidesPerView:3 
        },
        768: {      
          slidesPerView:3      
        }
      }  
    });
  });


// pagination
var items = $("#nav-home .recent-row .article-list .article-list__item");
    var numItems = items.length;
    var perPage = 6;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "Prev",
        nextText: "Next",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });

 

    var $el = $(".filter-icon");
    var $ee = $(".filter-box");
    $el.click(function(){
      // e.stopPropagation();
      $(".filter-box").toggleClass('active');
    });
    $(document).on('click',function(){
      if(($(e.target) != $el) && ($ee.hasClass('active'))){
      $ee.removeClass('active');
      // console.log("yes");
    }
    });