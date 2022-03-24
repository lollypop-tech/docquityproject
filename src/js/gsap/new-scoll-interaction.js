import gsap from "gsap";
// import $ from "jquery";
// import { transform } from "babel-core";

class commonAnimation {
    constructor() {
        const windowWidth = window.innerWidth;

        this.offset = 0;

        if (document.querySelector(".js-common-animations")) {
            this.init();
        }
    }

    init() {
        gsap.registerPlugin(ScrollTrigger);

        $(window).on("load", function() {
            gsap.to($(".page-loader"), 0.5, {
                ease: "power1.out",
                autoAlpha: 0,

                onComplete: function() {
                    gsap.from(
                        $("header .header-brand-logo"),
                        1, {
                            ease: "power1.InOut",
                            autoAlpha: 0,
                            delay: 0.2,
                            y: 15,
                        },
                        "=.2"
                    );

                    gsap.from($(".mb-header-nav > li"), 1, {
                        ease: "power.InOut",
                        delay: 0.2,
                        autoAlpha: 0,
                        y: 15,
                        stagger: 0.2,

                        onComplete: function() {
                            gsap.fromTo(
                                ".n-gsap-text",
                                0.8, {
                                    y: 40,
                                    opacity: 0,
                                    ease: "power1.InOut",
                                    stagger: 0.3,
                                }, {
                                    y: 0,
                                    opacity: 1,
                                }
                            );
                            gsap.fromTo(
                                ".n-gsap-image",
                                0.8, {
                                    opacity: 0,
                                }, {
                                    opacity: 1,
                                    delay: 0.6,
                                },
                                "-=0.1"
                            );
                        },
                    });
                },
            });
        });

        // // Scroll of trigger sections

        // var tl = gsap.timeline({
        //     defaults: { duration: .6, ease: "power.inOut", opacity: 0 },
        //     scrollTrigger: {
        //         trigger: ".rec-banner",
        //         // start: "top 200px",
        //         // start: "top 100px",
        //         // end: "+500px",
        //         // markers: true,
        //     },
        // });

        // tl.from(
        //         ".gsap-stag .gsap-stag-item", {
        //             opacity: 0,
        //             delay: 0.3,
        //             y: 15,
        //             stagger: 0.2,
        //         },
        //         "="
        //     )
        //     .from(
        //         ".gsap-client-sec li", {
        //             // delay: 0.3,
        //             opacity: 0,
        //             y: 20,
        //             stagger: 0.4,
        //         },
        //         "="
        //     )
        //     .from(
        //         ".gsap-sin-img", {
        //             opacity: 0,
        //         },
        //         "-=1.3"
        //     )
        //     .from(
        //         ".rec-wave", {
        //             // scaleY: 0,
        //             transformOrigin: "center",
        //             opacity: 0,
        //         },
        //         "-=.3"
        //     );






        // Common interactions

        // const titles = document.querySelectorAll(".gsap-section-trig");

        // titles.forEach((title, i) => {
        //     let tl11 = gsap.timeline({
        //         defaults: { duration: 0.6, ease: "power1.inOut", opacity: 0 },
        //         scrollTrigger: {
        //             trigger: title,
        //             start: "top 450px",
        //             // end: "-600px",
        //             // markers: true,
        //             // toggleActions: "play reset play reset",
        //         },
        //     });

        //     tl11
        //         .from(
        //             title.querySelectorAll(".gsap-heading"), {
        //                 opacity: 0,
        //                 y: 20,
        //             },
        //             "-=.8"
        //         )
        //         .from(
        //             title.querySelectorAll(".gsap-list-item li"), {
        //                 delay: 0.3,
        //                 opacity: 0,
        //                 stagger: 0.4,
        //             },
        //             "-=.6"
        //         )
        //         .from(
        //             title.querySelectorAll(".gsap-btn-wrap"), {
        //                 delay: 0.3,
        //                 opacity: 0,
        //             },
        //             "-=.2"
        //         )


        // });

        // // Slider interactions
        // const captions = document.querySelectorAll(".gsap-slider-trig");
        // captions.forEach((caption, i) => {
        //     let t22 = gsap.timeline({
        //         defaults: { duration: 0.6, ease: "power1.inOut", opacity: 0 },
        //         scrollTrigger: {
        //             trigger: caption,
        //             start: "top bottom",
        //             // scrub: true,
        //             // markers: true,
        //         },
        //     });

        //     t22
        //         .from(
        //             caption.querySelectorAll(".gsap-slider-list .gsap-slider-item"), {
        //                 delay: 0.3,
        //                 opacity: 0,
        //                 y: 20,
        //                 stagger: 0.4,
        //             },
        //             "=.5"
        //         )
        //         .from(
        //             caption.querySelectorAll(".gsap-slider-wrap"), {
        //                 delay: 0.3,
        //                 opacity: 0,
        //             },
        //             "-=1"
        //         );
        // });

        // join our team

        // var thr = gsap.timeline({
        //     defaults: { duration: 0.6, ease: "power.Out", opacity: 0 },
        //     scrollTrigger: {
        //         trigger: ".gsap-hero-panel",
        //         // start: "top 80%",
        //         start: "top 450px",
        //         // end: "+500px",
        //         // markers: true,
        //     },
        // });

        // thr
        //     .from(
        //         " .rec-gsap-bg-pri", {
        //             opacity: 0,
        //             scaleY: 0,
        //             transformOrigin: "bottom",
        //         },
        //         "=.8"
        //     )
        //     .from(
        //         ".gsap-hero-item", {
        //             opacity: 0,
        //             delay: 0.3,
        //             y: 20,
        //             stagger: 0.4,
        //         },
        //         "-=.4"
        //     )
        //     .from(
        //         ".gsap-blog-sliderwr", {
        //             opacity: 0,
        //         },
        //         "-=.2"
        //     );
    }
}
export default commonAnimation;