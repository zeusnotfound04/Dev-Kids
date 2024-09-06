document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".header-content h1", { duration: 1, y: -50, opacity: 0, ease: "bounce.out" });
    gsap.from(".cartoon img", { duration: 1.5, x: 100, opacity: 0, ease: "power4.out", delay: 0.5 });
    gsap.from(".info-item", { duration: 1, y: 100, opacity: 0, stagger: 0.2, ease: "power3.out", delay: 0.5 });
    gsap.from(".form-content", { duration: 1, scale: 0.8, opacity: 0, ease: "elastic.out(1, 0.5)", delay: 0.5 });
    gsap.from(".footer-section", { duration: 1, y: 100, opacity: 0, ease: "power3.out", delay: 0.5 });
});
