var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")



let lastScrollTop = 0;
const navbar = document.querySelector('.header');
let scrollTimeout;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down, hide navbar
        navbar.style.top = '-200px'; // Adjust according to your navbar height
    } else {
        // Scrolling up, show navbar briefly
        navbar.style.top = '0';

        // Clear any previous timeout
        clearTimeout(scrollTimeout);

        // Set a timeout to hide the navbar again after a brief moment
        scrollTimeout = setTimeout(() => {
            navbar.style.top = '-60px'; // Adjust according to your navbar height
        }, 2000); // Adjust time in milliseconds for how long you want it to stay visible
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Header Animation
    
    gsap.from('.header', { 
        duration: 1, 
        y: -100, 
        opacity: 0, 
        ease: 'bounce' 
    });

    // Parallax Effect for Featured Image with 3D Rotation
    gsap.to('.featured-image', {
        rotateY: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: '.parallax-container',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });



    gsap.to('.split-layout .text-content', {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.split-layout',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          
        }
    });

    gsap.from('.split-layout img', {
        scale: 0.9,
        opacity: 0.5,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.split-layout',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true
        }
    });

    gsap.to('.split-layout img', {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: '.split-layout',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
        }
    });

    // Diagonal Divider Sliding In
    gsap.from('.diagonal-divider', {
        x: '-100%',
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.full-width',
            start: 'top 90%',
            end: 'bottom 70%',
            scrub: true
        }
    });

    // Image Gallery Zoom-In Effect on Scroll
    gsap.to('.gallery-image', {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.image-gallery',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true
        }
    });

    // Footer Slide-In Animation
    gsap.from('.footer', { 
        duration: 1, 
        y: 100, 
        opacity: 0, 
        scrollTrigger: {
            trigger: '.footer',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true
        }
    });
});
