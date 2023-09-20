gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);
const blocks = document.querySelectorAll(".block");
blocks.forEach((block, index) => {
  const Reverse_contentWrap = block.querySelector(
    ".reverse_block .content_wrap"
  );
  const Reverse_blockImg = block.querySelector(".reverse_block img");
  const contentWrap = block.querySelector(".trigger_block .content_wrap");
  const blockImg = block.querySelector(".trigger_block img");
  gsap.from(contentWrap, {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: contentWrap,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
    delay: index * 0.5,
  });
  gsap.from(blockImg, {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: {
      trigger: blockImg,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
    delay: index * 0.5,
  });
  gsap.from(Reverse_contentWrap, {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: {
      trigger: Reverse_contentWrap,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
    delay: index * 0.5,
  });
  gsap.from(Reverse_blockImg, {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: Reverse_blockImg,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
    delay: index * 0.5,
  });
});

const circle = document.querySelector(".scroller");
gsap.to(circle, {
  y: 180,
  ease: "none",
  scrollTrigger: {
    trigger: ".index-contents",
    start: "top 80%",
    end: "bottom bottom",
    scrub: 1,
    markers: true,
  },
});
