import gsap from "gsap";
// import $ from "jquery";
// import { transform } from "babel-core";

class homeAnimation {
    constructor() {
        const windowWidth = window.innerWidth;

        this.offset = 0;

        if (document.querySelector(".js-footer-gsap")) {
            this.init();
        }
    }

    init() {
        gsap.registerPlugin(ScrollTrigger);

        var tl12 = gsap.timeline({
            defaults: { duration: 0.6, ease: "power.inOut", opacity: 0 },
            scrollTrigger: {
                trigger: ".gsap-footer-wrap",
                start: "top 450px",
                // end: "+500px",
                // markers: true,
            },
        });

        tl12
            .from(
                ".gsap-footer-logo", {
                    opacity: 0,
                    delay: 0.2,
                    y: 15,
                    stagger: 0.2,
                },
                "=.8"
            )
            .from(
                ".gsap-footer-list li", {
                    opacity: 0,
                    delay: 0.2,
                    y: 15,
                    stagger: 0.2,
                },
                "-=.6"
            )
            .from(
                ".gsap-footeritem", {
                    opacity: 0,
                    y: 15,
                },
                "-=.4"
            )
            .from(
                ".gsap-social-list li", {
                    opacity: 0,
                    delay: 0.2,
                    y: 15,
                    stagger: 0.3,
                },
                "-=.2"
            );
    }
}
export default homeAnimation;