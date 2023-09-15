// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".trigger_block img", {
//   x: 100,
//   opacity: 0,
//   duration: 5,
//   scrollTrigger: {
//     trigger: ".block",
//     toggleActions: "restart pause reverse none",
//     markers: true,
//   },
// });
// gsap.from(".trigger_block .content_wrap", {
//   x: -100,
//   opacity: 0,
//   duration: 5,
//   scrollTrigger: {
//     trigger: ".block",
//     toggleActions: "restart pause reverse none",
//     markers: true,
//   },
// });
// gsap.from(".reverse_block .content_wrap", {
//   x: 100,
//   opacity: 0,
//   duration: 5,
//   scrollTrigger: {
//     trigger: ".reverse_block",
//     toggleActions: "restart pause reverse none",
//     markers: true,
//   },
// });
// gsap.from(".reverse_block img", {
//   x: -100,
//   opacity: 0,
//   duration: 5,
//   scrollTrigger: {
//     trigger: ".reverse_block",
//     toggleActions: "restart pause reverse none",
//     markers: true,
//   },
// });

document.querySelectorAll(".block").forEach((section) => {
  const q = gsap.utils.selector(section);
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        toggleActions: "restart pause reverse none",
        scrub: 5,
        start: "top 50%",
        end: "top 100%",
        markers: true,
      },
      ease: Elastic.easeOut,
      duration: 3,
    })
    .from(q(".trigger_block img"), {
      x: 100,
      opacity: 0,
    })
    .from(q(".trigger_block .content_wrap"), {
      x: -100,
      opacity: 0,
    })
    .from(q(".reverse_block img"), {
      x: -100,
      opacity: 0,
    })
    .from(q(".reverse_block .content_wrap"), {
      x: 100,
      opacity: 0,
    });
});
