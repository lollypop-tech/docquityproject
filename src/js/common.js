// Website wide scripts
import "./components/onloadInteractions";
import "./components/menuInteractions";

/** Home-interactions **/
import commonAnimation from "./gsap/new-scoll-interaction";
const commonAnimations = new commonAnimation();

// import homeAnimation from "./gsap/home-interactions";
// const homeinteractions = new homeAnimation();

/** footer-animations **/

// import FooterAnim from "./gsap/footer.js";
// const footeranimate = new FooterAnim();

// $(document).ready(function() {

//     //parsely
//     $('#formEmail').parsley();
//     //nice select
//     $('select').niceSelect();
//     $('select').val(1).niceSelect('update');

//     $(".js-tab-slider .nav-link").click(function(e) {
//         e.preventDefault()
//         $(".js-tab-slider .nav-link").removeClass("active")
//         $(this).addClass("active")
//         let id = $(this).attr('href');
//         $(".c-tabs__content li").removeClass("active")
//         $(id).addClass("active")

//     })

//scroll to footer

//     $('.js-contact-link').click(function() {
//         $('html, body').animate({
//             scrollTop: $($(this).attr('href')).offset().top
//         }, 1000);
//         return false;
//     });

// });

// mental health

// $(document).ready(function() {
//     $('select').niceSelect();
//     $('select').val(1).niceSelect('update');

//     $(".js-health-tabs-slider .nav-link").click(function(e) {
//         e.preventDefault()
//         $(".js-health-tabs-slider .nav-link").removeClass("active")
//         $(this).addClass("active")
//         let id = $(this).attr('href');
//         $(".health-tabs-content__content li").removeClass("active")
//         $(id).addClass("active")

//     })
// });

// gallery

// $(document).ready(function() {
//     $('select').niceSelect();
//     $('select').val(1).niceSelect('update');

//     $(".js-gallery-tabs-slider .nav-link").click(function(e) {
//         e.preventDefault()
//         $(".js-gallery-tabs-slider .nav-link").removeClass("active")
//         $(this).addClass("active")
//         let id = $(this).attr('href');
//         $(".gallery-tabs-content__content li").removeClass("active")
//         $(id).addClass("active")

//     })
// });

$(document).ready(function () {
  $(".ui.dropdown.header-select-dropdown").dropdown();
  $(".ui.dropdown.header-select-dropdown-company").dropdown();
  $(".ui.selection.dropdown.help-dropdown").dropdown();
});
// MOUSE HOVER HOME PAGE BANNER SECTION
// var x, y;
// var px, py;
// px = py = 0;

// // Image of cursor
// var cursor = document.getElementById("cursorAction");
// var cursor1 = document.getElementById("cursorAction1");

// var mutex = false;
// window.addEventListener("mouseup", function (e) {
//   // gets the object on image cursor position
//   var tmp = document.elementFromPoint(x + px, y + py);
//   mutex = true;
//   tmp.click();
//   cursor.style.left = px + x + "px";
//   cursor.style.top = py + y + "px";
//   cursor1.style.left = px + x + "px";
//   cursor1.style.top = py + y + "px";
// });

// window.addEventListener("mousemove", function (e) {
//   // Gets the x,y position of the mouse cursor
//   x = e.clientX - 400;
//   y = e.clientY - 400;

//   // sets the image cursor to new relative position
//   cursor.style.left = px + x + "px";
//   cursor.style.top = py + y + "px";
//   cursor1.style.left = px + x + "px";
//   cursor1.style.top = py + y + "px";
// });

// MOUSE HOVER HOME PAGE BANNER SECTION
