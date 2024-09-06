const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
VanillaTilt.init(document.querySelectorAll(".boxsh"), {
    max: 10,
    speed: 50
  });
  
  VanillaTilt.init(document.querySelectorAll(".boxsh"), {
    max: 10,
    speed: 50
  });
  
  VanillaTilt.init(document.querySelectorAll(".your-element"));

requestAnimationFrame(raf)


var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-1",
    start:"50% 50%",
    end:"250% 50%",
    scrub:true,
    // markers:true,
    pin:true,
}})

tl.to(".rotate-div",{
    rotate: -15,
    scale: 0.8,
},'a')
tl.to("#row-div-2",{
    marginTop: "5%"
},'a')
tl.to("#row-div-3",{
    marginTop: "-2%"
},'a')
tl.to("#row-div-4",{
    marginTop: "-8%"
},'a')
tl.to("#row-div-5",{
    marginTop: "-10%"
},'a')
tl.to(".overlay-div h1 ",{
    opacity: "1",
    delay: 0.2,
},'a')
tl.from(".btnDiv ",{
    opacity: "0",
    delay: 0.2,
},'a')
tl.to(".overlay-div",{
    backgroundColor: "#000000b4",
},'a')
tl.to(".scrolling",{
    width: "100%",
},'a')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start:"0% 70%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})

tl2.to(".rounded-div-wrapper",{
    height:0,
    marginTop: 0
})


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".content-2",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl3.to(".content-2 .text-area-hover h1",{
    width:"100%",
})
tl3.to(".content-2 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})


let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-4",
        start:"50% 50%",
        end: "200% 50%",
        pin: true,
        //markers: true,
        scrub: 1,
    },  
});
tl4.to(".c-one", {
    marginTop: "-25%",
    opacity: "1",
}, 'sct-1')
.to(".c-two", {
    opacity: "1",
}, 'sct-2')
.to(".c-one", {
    marginTop: "-100%",
    opacity: "0",
}, 'sct-2+=0.8') // delay to ensure c-one fades out completely
.to(".c-three", {
    opacity: "1",
}, 'sct-3')
.to(".c-two", {
    opacity: "0",
}, 'sct-3+=0.8') // delay to ensure c-two fades out completely
.to(".c-one", {
    marginTop: "-180%",
}, 'sct-3+=0.8') // delay to ensure previous animations complete
.to(".c-one", {
    marginTop: "-250%",
}, 'sct-4')
.to(".c-three", {
    opacity: "0",
}, 'sct-4+=1') // delay to ensure c-three fades out completely
.to(".cir-part-4", {
    marginLeft: "100%",
    rotate: 360
}, 'sct-4+=0.8'); // delay to ensure previous animations complete


let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-5",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl5.to(".part-5 .text-area-hover h1",{
    width:"100%",
})
tl5.to(".part-5 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})


let tl6 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-6",
        start:"0% 70%",
        end: "15% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl6.to(".rounded-div-wrapper-6",{
    height:"0%",
    marginTop: 0,
})

let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-7",
        start:"50% 50%",
        end: "300% 50%",
        pin:true,
        // markers: true,
        scrub: 1,
    },  
});
tl7.to("#demo",{
    bottom:"7%",
})
tl7.to(".our-work-txt-div",{
    height:"60vh",
}, 'height')
tl7.to(".our-work-txt",{
    height:"60vh",
}, 'height')
tl7.to("#our",{
    left:"0%",
}, 'height')
tl7.to("#work",{
    right:"0%",
}, 'height')
tl7.to(".scroll-img",{
    marginTop:"-600%",
})
