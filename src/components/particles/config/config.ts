import { MoveDirection, OutMode } from "@tsparticles/engine";

export const particleConfig2 = {
    fullScreen: {
        enable: true,
        zIndex: 900,
    },
    // background: {
    //     color: {
    //         value: "#FAFBFB",
    //         // value: "#FAFBFB",
    //         // value: "#23174f",
    //     },
    // },
    fpsLimit: 120,
    interactivity: {
        events: {
            // onClick: {
            //     enable: true,
            //     mode: "push",
            // },
            onHover: {
                enable: true,
                mode: "repulse",
                // mode: "grab",
            },
        },
        modes: {
            push: {
                quantity: 2,
            },
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            grab: {
                distance: 200,
                link_linked: {
                    Opacity: 0.1,
                },
            },
        },
    },
    particles: {
        color: {
            // value: "#FAFBFB",
            value: "#363636",
        },
        links: {
            // color: "#FAFBFB",
            color: "#363636",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
        },
        move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
                default: OutMode.out,
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 80,
        },
        opacity: {
            value: 0.1,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};
