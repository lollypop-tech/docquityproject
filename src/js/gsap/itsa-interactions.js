import gsap from "gsap";

class homeAnimation {
    constructor() {
        const windowWidth = window.innerWidth;

        this.offset = 0;

        if (document.querySelector(".js-itsa-animations")) {
            this.init();
        }
    }

    init() {
        gsap.registerPlugin(ScrollTrigger);

        console.clear();

        // List item common interactions

        const titles = document.querySelectorAll(".titles");

        const captions = document.querySelectorAll(".captions");

        titles.forEach((title, i) => {
            let tl = gsap.timeline({
                defaults: { duration: .6, ease: "power1.inOut", opacity: 0 },
                scrollTrigger: {
                    trigger: title,
                    start: "top 450px",
                    // end: "-600px",
                    // markers: true,
                    //   toggleActions: "play reset play reset",
                },
            });

            tl.from(
                title.querySelectorAll(".gsap-list-item"), {
                    delay: 0.3,
                    opacity: 0,
                    y: 50,
                    stagger: 0.4,
                },
                "-=.5"
            ).from(
                title.querySelectorAll(".gsap-img"), {
                    opacity: 0,
                    x: 20,
                },
                "-=.8"
            );
        });

        captions.forEach((caption, i) => {
            let tl12 = gsap.timeline({
                defaults: { duration: .6, ease: "power1.inOut", opacity: 0 },
                scrollTrigger: {
                    trigger: caption,
                    // markers: true,
                },
            });

            tl12.from(
                caption.querySelectorAll(".gsap-captions-item"), {
                    delay: 1,
                    opacity: 0,
                    y: 50,
                    stagger: 0.4,
                },
                "=.5"
            );
        });
    }
}
export default homeAnimation;