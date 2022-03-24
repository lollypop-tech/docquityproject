import gsap from "gsap";

class homeAnimation {
    constructor() {
        const windowWidth = window.innerWidth;

        this.offset = 0;

        if (document.querySelector(".js-tab-animations")) {
            this.init();
        }
    }

    init() {
        gsap.registerPlugin(ScrollTrigger);

        console.clear();

        // List item common interactions

        const tabsections = document.querySelectorAll(".gsap-tabs-wrap");

        tabsections.forEach((tabsection, i) => {
            let tltb = gsap.timeline({
                defaults: { duration: 1.2, ease: "power1.inOut", opacity: 0 },

                scrollTrigger: {
                    trigger: tabsection,
                    //   start: "top 450px",
                    end: "300px",
                    // markers: true,
                    //   toggleActions: "play reset play reset",
                },
            });

            tltb
                .from(
                    tabsection.querySelectorAll(".gsap-bg-blue"), {
                        dealy: 0.8,
                        scaleX: 0,
                        transformOrigin: "left",
                        opacity: 0,
                    },
                    "=.2"
                )
                .from(
                    tabsection.querySelectorAll(".gsap-panel-left"), {
                        opacity: 0,
                        x: -20,
                    },
                    "-=.2"
                );
        });
    }
}
export default homeAnimation;