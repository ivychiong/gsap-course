import gsap from 'gsap'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const button = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        button.classList.add('show');

        if(!isFloating){
            gsap.to(button, {
                y: -10,
                duration:1,
                repeat: -1,
                yoyo: true,
                ease: "sine.in"
            })

            isFloating = true;
        }
    } else {
        button.classList.remove("show")
    }
})

button.addEventListener("mouseenter", () => {
    gsap.to(button, { scale: 1.1, duration: 0.2 })
})

button.addEventListener("mouseleave", () => {
    gsap.to(button, { scale: 1, duration: 0.2 })
})


button.addEventListener("click", () => {
    gsap.to(window, { duration: 2, scrollTo: 0, ease: "power2.out" });
})