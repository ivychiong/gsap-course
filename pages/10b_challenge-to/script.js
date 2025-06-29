import gsap from "gsap";

gsap.to(".one", {
    y: -150,
    opacity: 1,
    duration: 1,
    scale: 1.1,
    ease: "elastic.out(1, 0.8)",
    onComplete: () => {
        gsap.to(".one", {
            delay: 1,
            y: 100,
            opacity: 0,
            scale: 0.8,
            ease: "power2.out",
            onComplete: () => {
                gsap.to('.two', {
                    y: -150,
                    opacity: 1,
                    duration: 1,
                    scale: 1.1,
                    ease: "elastic.out(1, 0.8)",
                    onComplete: () => {
                        gsap.to(".two", {
                            delay: 1,
                            y: 100,
                            opacity: 0,
                            scale: 0.8,
                            ease: "power2.out",
                        })
                    }
                })
            }
        })

        
    }
})