import { gsap } from "gsap";

export const animationHandler = (function() {
    
    
    function titleHover() {
        
        const navAnimation = gsap.timeline({
            repeat: -1,
            yoyo: true,
        });
        navAnimation
            .to("#title-container", {duration: 2.5, ease: "sine.inOut", rotation: 0.5})
            .to("#title-container", {duration: 2.5, ease: "sine.inOut", rotation: -0.8});
        
        return navAnimation
    }



    return {
        titleHover
    }
})();


