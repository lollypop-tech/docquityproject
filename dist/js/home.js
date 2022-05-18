(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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
window.addEventListener("load", function () {
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

$(document).ready(function () {
    $(".ui.dropdown.header-select-dropdown").dropdown();
    $(".ui.dropdown.header-select-dropdown-company").dropdown();
    $(".ui.selection.dropdown.help-dropdown").dropdown();
});

// MOUSE HOVER HOME PAGE BANNER SECTION
"use strict";

(function () {
    var hamburger = {
        navToggle: document.querySelector(".menu-icon"),
        nav: document.querySelector(".menu"),
        overlayDiv: document.querySelector(".hamb-overlay"),
        menuBox: document.getElementsByTagName("BODY")[0],
        doToggle: function doToggle(e) {
            e.preventDefault();
            this.navToggle.classList.toggle("show");
            this.nav.classList.toggle("active");
            this.menuBox.classList.toggle("body");
            this.overlayDiv.classList.toggle("show");
        }
    };

    hamburger.navToggle.addEventListener("click", function (e) {
        hamburger.doToggle(e);
    });
})();

$(function () {
    $('.ui.dropdown').dropdown();
});

},{}]},{},[1])//# sourceMappingURL=home.js.map
