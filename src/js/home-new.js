$(document).ready(function () {


    // number increment

    var a = 0;
    $(window).scroll(function () {
        var p = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > p) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {

                    duration: 4000,
                    easing: 'swing',
                    step: function step() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function complete() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
            });
            a = 1;
        }
    });

    // client say //

    var clientsay = new Swiper('.js-client-say', {
        // loop: true,
        slidesPerView: 2,
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                // spaceBetween: 25,
                // loop: true,
            },

            414: {
                slidesPerView: 1.5,
                // spaceBetween: 25,
                // loop: true,
            },

            769: {
                slidesPerView: 2.5,
                // loop: true,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        }

    });

    // our capabilities Mobile-slider

    (function () {
        "use strict";
        const breakpoint = window.matchMedia("(min-width:40.25em)");

        // keep track of swiper instances to destroy later
        let mySwiper;

        const breakpointChecker = function () {
            // if larger viewport and multi-row layout needed
            if (breakpoint.matches === true) {
                // clean up old instances and inline styles when available
                if (mySwiper !== undefined) mySwiper.destroy(true, true);

                // or/and do nothing
                return;

                // else if a small viewport and single column layout needed
            } else if (breakpoint.matches === false) {
                // fire small viewport version of swiper
                return enableSwiper();
            }
        };

        // const enableSwiper = function () {
        //     mySwiper = new Swiper(".js-resp-capabilities", {
        //         loop: true,
        //         slidesPerView: 1.5,
        //         // a11y: true,
        //         keyboardControl: true,
        //         grabCursor: true,
        //         autoplay: {
        //             delay:1000,
        //             disableOnInteraction: false,
        //         },

        //         // pagination
        //         pagination: ".swiper-pagination",
        //         paginationClickable: true,
        //     });
        // };

        var enableSwiper = function enableSwiper() {
            mySwiper = new Swiper(".js-resp-capabilities", {                
                slidesPerView: "auto",
                centeredSlides: true,
                slidesPerView: 1.5,
                spaceBetween: 25,
                loop: true,
                speed: 2000,        
                autoplay: {
                    delay: 1000,                   
                },
                pagination: ".swiper-pagination",
                paginationClickable: true,
            });
        };

        // keep an eye on viewport size changes
        breakpoint.addListener(breakpointChecker);

        // kickstart
        breakpointChecker();
    })(); /* IIFE end */


    // $(".sidebar li").click(function (e) {
    //     // $(".sidebar li").removeClass("active");
    //     alert("working");
    //     $(this).addClass("active");
    // });

    var swiper = new Swiper(".testimonial", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        // mousewheel: true,
        keyboard: true,
      });



})


