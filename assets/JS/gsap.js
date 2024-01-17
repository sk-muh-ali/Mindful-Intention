
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "..main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

loco();

gsap.from(".logo h1 , .nav__menu ul li",{
    y:-100,
    duration:0.8,
    delay: 1,
    opacity: 0,
    stagger:0.1
})
gsap.from(".home-img",{
    x:-100,
    duration:0.8,
    delay: 0.3,
    opacity: 0,
    scrollTrigger:{
        trigger:".home-img",
        scroller:".main",
        scrub:true
    }

});
gsap.from(".home-text h2",{
    y:-100,
    duration:0.8,
    delay: 0.5,
    opacity: 0,
    scrollTrigger:{
        trigger:".home-text h2",
        scroller:".main",
        scrub:true
    }
});
gsap.from(".home-text p",{
    x:100,
    duration:0.8,
    delay: 0.5,
    opacity: 0,
    scrollTrigger:{
        trigger:".home-text p",
        scroller:".main",
        scrub:true
    }
});
gsap.from(".home-text .h-b",{
    y:100,
    duration:0.8,
    delay: 0.2,
    opacity: 0,
    scrollTrigger:{
        trigger:".home-text .h-b",
        scroller:".main",
        scrub:true
    }
});
gsap.from(".aerobic h1",{
    y:-100,
    duration:0.8,
    delay: 1,
    opacity: 0,
    scrollTrigger:{
        trigger:".aerobic h1",
        scroller:".main",
        scrub:true
    }

});

gsap.from(".aer-text , aer-text ul li",{
    x:-100,
    duration:0.8,
    delay: 1,
    opacity: 0,
    scrollTrigger:{
        trigger:".aer-text , aer-text ul li",
        scroller:".main",
        scrub:true
    }
});
gsap.from(".aerobic .sb-img",{
    x:100,
    duration:0.8,
    delay: 1,
    opacity: 0,
    scrollTrigger:{
        trigger:".aerobic .sb-img",
        scroller:".main"
    }
});
gsap.from(".aero-btn",{
    y:100,
    duration:0.8,
    delay: 0.3,
    opacity: 0,
    scrollTrigger:{
        trigger:".aero-btn",
        scroller:".main"
    }
});
gsap.from(".poss .tital-headding",{
    y:100,
    duration:0.8,
    delay: 0.3,
    opacity: 0,
    scrollTrigger:{
        trigger:".poss .tital-headding",
        scroller:".main"
    }
});
gsap.from(".poss .pic-contect",{
    y:100,
    duration:0.8,
    delay: 0.3,
    opacity: 0,
    scrollTrigger:{
        trigger:".poss .pic-contect",
        scroller:".main"
    }
});
gsap.from(".poss .pic-seccontect",{
    y:-100,
    duration:0.8,
    delay: 0.3,
    opacity: 0,
    scrollTrigger:{
        trigger:".poss .pic-seccontect",
        scroller:".main"
    }
});
gsap.from(".wsm .tital-headding, .Introduction h2",{
    y:-100,
    duration:0.8,
    delay: 0.3,
    opacity: 0,
    scrollTrigger:{
        trigger:".wsm .tital-headding, .Introduction h2",
        scroller:".main"
    }
});
gsap.from(".wsm .sb-img",{
    x:100,
    duration:0.8,
    delay: 0.3,
    opacity: 0,
    scrollTrigger:{
        trigger:".wsm .sb-img",
        scroller:".main"
    }
});
gsap.from(".wsm ul li",{
    x:-100,
    duration:0.8,
    delay: 0.3,
    opacity: 0,
    scrollTrigger:{
        trigger:".wsm ul li",
        scroller:".main"
    }
});
gsap.from(".wsm .smtaital",{
    y:100,
    duration:0.8,
    delay: 0.3,
    opacity: 0,
    scrollTrigger:{
        trigger:".wsm .smtaital",
        scroller:".main"
    }
});
gsap.from(".footer ,.copy-rights ",{
    duration:1,
    delay: 0.3,
    opacity: 0,
    scrollTrigger:{
        trigger:".footer , .copy-rights",
        scroller:".main"
    }
});
gsap.from(".poses-text .p-hedding , .poses-text img , .p-text h1, .poses-text p",{
    scale: 0,
    duration:1,
    delay: 0.3,
    opacity: 0,
    stagger:0.5,
    scrollTrigger:{
        trigger:".poses-text .p-hedding , .poses-text img , .poses-text .p-text h1 , .poses-text p",
        scroller:".main"
    }
})
gsap.from(".how , .how .headding , .slider-container, .artist",{
    y:-100,
    duration:1,
    delay: 0.3,
    opacity: 0,
    stagger:0.5,
    scrollTrigger:{
        trigger:".how , .how .headding , .slider-container, .artist",
        scroller:".main"
    }
})
