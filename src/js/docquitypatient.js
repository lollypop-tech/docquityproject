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


  const slider = document.querySelector('.nav-tabs');
  let isDown = false;
  let startX;
  let scrollLeft;
  
  slider.addEventListener('mousedown', function(e) {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  
  slider.addEventListener('mouseleave', function(e) {
    isDown = false;
  });
  
  slider.addEventListener('mouseup', function(e) {
    isDown = false;
  });
  
  slider.addEventListener('mousemove', function(e) {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
    
  });