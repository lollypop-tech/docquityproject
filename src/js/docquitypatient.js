  var swiper = new Swiper(".section080swiper", {
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

  // Tab section

  $(function(){

    $('.nav-tabs').scroll(function(){
        $('#out').text('scrollLeft: '+$(this).scrollLeft());
      });
  
    $('.patientverticalswiper-button-next').click(function () {
      $('.nav-tabs').animate({
        scrollLeft: $('.nav-tabs').scrollLeft() + 250
      }, 300);
      
      return false;
    });
  
  });