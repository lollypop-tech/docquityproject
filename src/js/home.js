// import "./components/swiper";
// import './components/youtubeModalInteractions';

// naskLoader - not required
// window.onload = function () {
//   document.querySelector(".naskLoader").style.display = "none";
//   eleHeader = document.getElementById(idOfHeader);
//   document.addEventListener("scroll", onScroll, false);
// };

// import homeAnimation from "../js/gsap/home-interactions";
// const homeAnimations = new homeAnimation();

// body loaded
window.addEventListener("load", function() {
    document.querySelector("body").classList.add("loaded");
});

// explore
// $(function() {
// var screensize = document.documentElement.clientWidth;
// if (screensize  > 767) {
//   $('#option2').addClass('active');
// }
  
// });

$(".option").hover(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });
  

//   jQuery(document).ready(function($) {

//       var screenWidth = document.body.clientWidth;
//       if (screenWidth > 768) {
//         $(".option").removeClass("active");
        
//       } else if (screenWidth = 767) {
//         $(".option").hover(function () {
//             $(".option").removeClass("active");
//             $(this).addClass("active");
//           });
//       };
//   });
