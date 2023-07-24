// //01. 이질감 표현하기
// gsap.to(".script-title", {
//   yPercent: -80,
//   ease: "none",
//   duration: 0.5,
//   scrollTrigger: {
//     trigger: ".script-title",
//     start: "top bottom",
//     ene: "bottom top",
//     markers: true,
//     scrub: true,
//   },
// });

//02. 여러개 이질감 표현하기
gsap.utils.toArray(".info").forEach((item) => {
  gsap.to(item, {
    yPercent: -80,
    ease: "none",
    duration: 0.5,
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      end: "bottom top",
      markers: false,
      scrub: 0.5,
    },
  });
});

//나타나기
const section4Title = gsap.timeline();
section4Title
  .set(".script-title", { x: 400, opacity: 0 })
  .to(".script-title", { x: -70, opacity: 1 });

ScrollTrigger.create({
  animation: section4Title,
  trigger: "#section4",
  start: "-30% top",
  end: "20% top",
  scrub: true,
});
