import gsap from "gsap";

gsap.to(".box", {
    rotation: 360,
    borderRadius: "50%",
    scale: 1.25,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
})