gsap.registerPlugin(ScrollTrigger);

//top sec logo
gsap.fromTo(
  ".logo",
  {
    opacity: 0,
    x: -150,
  },
  {
    x: 0,
    ease: "power2.out",
    opacity: 1,
    duration: 2,
  }
);

//right image logo
gsap.fromTo(
  ".bg-img",
  {
    opacity: 0,
    x: 150,
  },
  {
    x: 0,
    ease: "power2.out",
    opacity: 1,
    duration: 1,
  }
);

//right image logo mobile
gsap.fromTo(
  ".mobile-bg",
  {
    opacity: 0,
    x: 25,
  },
  {
    x: 0,
    ease: "power2.out",
    opacity: 1,
    duration: 1,
  }
);

//role animation
gsap.fromTo(
  ".role",
  {
    opacity: 0,
    y: -150,
  },
  {
    y: 0,
    ease: "power2.out",
    delay: 0.5,
    opacity: 1,
    duration: 0.75,
  }
);
//role animation
gsap.fromTo(
  ".intro",
  {
    opacity: 0,
    y: 150,
  },
  {
    ease: "elastic.out(1,0.9)",
    y: 0,
    ease: "power2.out",
    opacity: 1,
    delay: 0.75,
    duration: 1,
  }
);

//scroll triggers
gsap.set(".pass-img", {
  opacity: 0,
  x: -200,
});
gsap.to(".pass-img", {
  scrollTrigger: {
    trigger: ".pass-img",
    start: "top 70%",
    end: "top 20%",
    scrub: 3,
    // markers: true,
  },
  opacity: 1,
  x: 0,
  duration: 4,
});

//project 1 animations
gsap.set(".project-1", {
  opacity: 0,
  x: -150,
});
gsap.to(".project-1", {
  scrollTrigger: {
    trigger: ".project-1",
    start: "top 85%",
    end: "top 45%",
    scrub: 2,
    // markers: true,
  },
  opacity: 1,
  x: 0,
});

//project 2 animations
gsap.set(".project-2", {
  opacity: 0,
  x: 150,
});
gsap.to(".project-2", {
  scrollTrigger: {
    trigger: ".project-2",
    start: "top 85%",
    end: "top 45%",
    scrub: 2,
    // markers: true,
  },
  opacity: 1,
  x: 0,
});

//works
gsap.set(".work-list", {
  opacity: 0,
  y: 150,
});
gsap.to(".work-list", {
  scrollTrigger: {
    trigger: ".work-list",
    start: "top 75%",
    end: "top 40%",
    scrub: 2,
    // markers: true,
  },
  opacity: 1,
  y: 0,
});

//contact left animations
gsap.set(".contact-left", {
  opacity: 0,
  x: -150,
});
gsap.to(".contact-left", {
  scrollTrigger: {
    trigger: ".contact-left",
    start: "top 85%",
    end: "top 45%",
    scrub: 2,
    // markers: true,
  },
  opacity: 1,
  x: 0,
});

//contact right animations
gsap.set(".contact-right", {
  opacity: 0,
  x: 150,
});
gsap.to(".contact-right", {
  scrollTrigger: {
    trigger: ".contact-right",
    start: "top 85%",
    end: "top 45%",
    scrub: 2,
    // markers: true,
  },
  opacity: 1,
  x: 0,
});

//license 1 animations
gsap.set(".license-1", {
  opacity: 0,
  x: -150,
});
gsap.to(".license-1", {
  scrollTrigger: {
    trigger: ".license-1",
    start: "top 85%",
    end: "top 45%",
    scrub: 2,
    // markers: true,
  },
  opacity: 1,
  x: 0,
});

//license 2 animations
gsap.set(".license-2", {
  opacity: 0,
  x: 150,
});
gsap.to(".license-2", {
  scrollTrigger: {
    trigger: ".license-2",
    start: "top 85%",
    end: "top 45%",
    scrub: 2,
    // markers: true,
  },
  opacity: 1,
  x: 0,
});
