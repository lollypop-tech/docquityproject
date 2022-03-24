import gsap from "gsap";

class blogAnimation {
    constructor() {
        const windowWidth = window.innerWidth;

        this.offset = 0;

        if (document.querySelector(".js-blog-animations")) {
            this.init();
        }
    }

    init() {
        gsap.registerPlugin(ScrollTrigger);

        console.clear();

        var tblgban = gsap.timeline({
            defaults: { duration: 0.6, ease: "power.inOut", opacity: 0 },
            scrollTrigger: {
                trigger: ".gsap-blog",
                // start: "top 200px",
                // start: "top 450px",
                // end: "+500px",
                // markers: true,
            },
        });

        tblgban
            .from(
                ".gsap-blog-heading", {
                    opacity: 0,
                    y: 15,
                },
                "=1.2"
            )
            .from(
                ".gspa-video-banner", {
                    opacity: 0,
                    y: 15,
                },
                "="
            )
            .from(
                ".gspa-video-txt .gspa-txt-item", {
                    opacity: 0,
                    delay: 0.3,
                    y: 15,
                    stagger: 0.4,
                },
                "=1.2"
            );

        // Blog categories

        const tblgsearch = document.querySelectorAll(".gsap-blog-slider");
        tblgsearch.forEach((slider, i) => {
            let tl11 = gsap.timeline({
                defaults: { duration: 0.6, ease: "power1.inOut", opacity: 0 },
                scrollTrigger: {
                    trigger: slider,
                    start: "top 450px",
                    // end: "-600px",
                    // markers: true,
                    //   toggleActions: "play reset play reset",
                },
            });

            tl11
                .from(
                    slider.querySelectorAll(".gsap-blog-slider-h"), {
                        opacity: 0,
                    },
                    "=1"
                )
                .from(
                    slider.querySelectorAll(".gsap-blog-slider-ln"), {
                        opacity: 0,
                        scaleX: 0,
                        transformOrigin: "left",
                    },
                    "-=.6"
                )
                .from(
                    slider.querySelectorAll(".gsap-search .gsap-search-item"), {
                        opacity: 0,
                    },
                    "-=.4"
                )
                .from(
                    slider.querySelectorAll(".gsap-blog-sliderwr"), {
                        opacity: 0,
                    },
                    "-=.2"
                )
                .from(
                    slider.querySelectorAll(".gsap-blg-dwn"), {
                        y: 15,
                        opacity: 0,
                    },
                    "-=.2"
                );
        });
    }
}
export default blogAnimation;