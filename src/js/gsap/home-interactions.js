import gsap from "gsap";

class homeAnimation {
    constructor() {
        const windowWidth = window.innerWidth;

        this.offset = 0;

        if (document.querySelector(".js-home-animations")) {
            this.init();
        }
    }

    init() {
        console.clear();

        // gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
        gsap.registerPlugin(ScrollTrigger);
        // svg






        const lineTL = gsap.timeline({
            defaults: {
                duration: 0.05,
                autoAlpha: 1,
                scale: 2,
                transformOrigin: 'center',
                ease: "elastic(2.5, 1)"
            }
        })


        const tl = gsap.timeline({ defaults: { duration: 1 }, paused: true })

        // .from(".theLine", { drawSVG: 0 }, 0)

        .add(lineTL, 0);

        const ST = ScrollTrigger.create({
            trigger: "#svg",
            scrub: true,
            start: "top center",
            end: "bottom center",
            onUpdate: ({ progress }) => {
                tl.progress() < progress ? tl.progress(progress) : null
            }
        });

        //

        var tfund = gsap.timeline({
            defaults: { duration: 1, ease: "power.inOut", opacity: 0 },
            scrollTrigger: {
                trigger: ".gsap-founder",
                // start: " 100px",
                start: "top 450px",
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


        //line animation



        var thm = gsap.timeline({
            defaults: { duration: 0.9, ease: "power.inOut", opacity: 0 },
            scrollTrigger: {
                trigger: ".rec-our-number-wrap",
                // start: "top 100px",
                start: "top 450px",
                // markers: true,
            },
        });

        thm
            .from(".gsap-number-list li", {
                opacity: 0,
                delay: 0.3,
                y: 15,
                stagger: 0.3,
            })
            .from(
                ".gsap-strightline", {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: "top",
                },
                "-=.2"
            );




    }
}
export default homeAnimation;