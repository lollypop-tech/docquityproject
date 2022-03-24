// document.addEventListener("DOMContentLoaded", () => {
//   const menuBtn = document.querySelector(".menu-icon");

//   // MENU
//   const activateMenu = (e) => {
//     const self = e.currentTarget;
//     const menu = document.querySelector(".menu");
//     const overlayDiv = document.querySelector(".hamb-overlaymenu");

//     if (menu.classList.contains("active")) {
//       self.classList.remove("active");
//       menu.classList.remove("active");
//       this.overlayDiv.classList.toggle("show");
//     } else {
//       self.classList.add("active");
//       menu.classList.add("active");
//     }
//   };

//   menuBtn.addEventListener("click", activateMenu);

//   // DROPDOWN
//   // const activateDropdown = (e) => {
//   //   const body = document.querySelector("body");

//   //   if (body.width < 992) {
//   //     const self = e.currentTarget;
//   //     if (self.parentElement.classList.contains("active")) {
//   //       self.parentElement.classList.remove("active");
//   //     } else {
//   //       self.parentElement.classList.add("active");
//   //     }
//   //   }
//   // };

//   // dropdownBtn.addEventListener("click", activateDropdown);
// });

"use strict";

(function () {
    var hamburger = {
        navToggle: document.querySelector(".menu-icon"),
        navTogg: document.querySelector(".white-logo"),
        nav: document.querySelector(".menu"),
        overlayDiv: document.querySelector(".hamb-overlay"),
        menuBox: document.getElementsByTagName("BODY")[0],
        doToggle: function doToggle(e) {
            e.preventDefault();
            this.navToggle.classList.toggle("active");
            this.navTogg.classList.toggle("active");
            this.nav.classList.toggle("active");
            this.menuBox.classList.toggle("body");
            this.overlayDiv.classList.toggle("show");
        },
    };

    hamburger.navToggle.addEventListener("click", function (e) {
        hamburger.doToggle(e);
    });
})();