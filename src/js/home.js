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
$(".option").hover(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });

  
