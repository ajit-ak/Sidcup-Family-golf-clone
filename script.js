var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener('mousemove', (dets) => {
    crsr.style.left = dets.x+30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 120 + "px"
    blur.style.top = dets.y - 120 + "px"
})

var anchor = document.querySelectorAll("#nav a")
anchor.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        crsr.style.scale = 2;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent"
    })
    e.addEventListener("mouseleave", () => {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #54c11e";
        crsr.style.backgroundColor = "#54c11e"
    })
})
var header2 = document.querySelectorAll("#page4 h2")
header2.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        crsr.style.scale = 2;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent"
    })
    e.addEventListener("mouseleave", () => {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #54c11e";
        crsr.style.backgroundColor = "#54c11e"
    })
})


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "88px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 1,

    }
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.4 , //move one by one
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        // markers: true,
        start:"top 65%",
        end:"top 60%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:0.5,
    stagger:0.1 , //move one by one
    scrollTrigger:{
        trigger:".card",
        scroller: "body",
        // markers: true,
        start:"top 65%",
        end:"top 60%",
        scrub:1
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:3

    }
})

  

