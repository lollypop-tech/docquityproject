import gsap from "gsap";

class programAnimation {
    constructor() {
        const windowWidth = window.innerWidth;

        this.offset = 0;

        if (document.querySelector(".js-program-animations")) {
            this.init();
        }
    }

    init() {
        gsap.registerPlugin(ScrollTrigger);

        console.clear();

        var tfund = gsap.timeline({
            defaults: { duration: .6, ease: "power.inOut", opacity: 0 },
            scrollTrigger: {
                trigger: ".gsap-founder",
                start: "top 450px",
                // start: "top 80%",

                // markers: true,
            },
        });

        tfund
            .from(
                ".rec-bg-warp", {
                    opacity: 0,
                    scaleX: 0,
                    transformOrigin: "left",
                },
                "=1"
            )
            .from(
                ".gsap-founder-img", {
                    opacity: 0,
                    x: -15,
                },
                "-=.8"
            )
            .from(
                ".gsap-founder-item", {
                    opacity: 0,
                    delay: 0.3,
                    y: 15,
                    stagger: 0.3,
                },
                "-=.8"
            );
    }
}
export default programAnimation;