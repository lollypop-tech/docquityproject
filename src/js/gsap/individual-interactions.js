import gsap from "gsap";

class individualAnimation {
    constructor() {
        const windowWidth = window.innerWidth;

        this.offset = 0;

        if (document.querySelector(".js-individual-animations")) {
            this.init();
        }
    }

    init() {
        gsap.registerPlugin(ScrollTrigger);

        console.clear();

        var tindv = gsap.timeline({
            defaults: { duration: 0.8, ease: "power.inOut", opacity: 0 },
            scrollTrigger: {
                trigger: ".gsap-indvi-banner",
                // start: "top 200px",
                start: "bottom 400px",
                // markers: true,
            },
        });

        tindv
            .from(
                ".gsap-indvi-brecrumb", {
                    opacity: 0,
                },
                "=1"
            )
            .from(
                ".gsap-indvi-head", {
                    opacity: 0,
                    y: 15,
                },
                "-=.6"
            )
            .from(
                ".gsap-indvi .gsap-indvi-item", {
                    opacity: 0,
                    delay: 0.3,
                    y: 15,
                    stagger: 0.3,
                },
                "-=.8"
            )
            .from(
                ".gsap-invi-list .gsap-invi-item", {
                    opacity: 0,
                    delay: 0.1,
                    stagger: 0.3,
                },
                "-=.4"
            );

        // FAQ

        var tfaq = gsap.timeline({
            defaults: { duration: 0.6, ease: "power.inOut", opacity: 0 },
            scrollTrigger: {
                trigger: ".gsap-faq",
                // start: "top 200px",
                start: "bottom 100px",
                // markers: true,
            },
        });

        tfaq
            .from(
                ".gsap-faq-head", {
                    opacity: 0,
                    y: 15,
                },
                "=1"
            )
            .from(
                ".gsap-faq-head-wrap", {
                    opacity: 0,
                    y: 15,
                },
                "-=.6"
            );
    }
}
export default individualAnimation;