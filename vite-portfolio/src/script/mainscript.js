// 페이지 고정
const section1 = document.querySelector("#main");

function fixPage() {
  // main 높이 100vh 설정
  section1.style.height = "100vh";
  // 17000시간 후에 높이 고정 해제
  setTimeout(function () {
    section1.style.height = "";
  }, 17000);
}
// 페이지 로드 후 fixPage 함수 호출
window.onload = fixPage;

gsap.set("#header", { top: -100 });
gsap.set("#canvas", { autoAlpha: 0 });
gsap.set("#section1", { autoAlpha: 0 });
gsap.set(".title .p1", { autoAlpha: 0, y: 50 });
gsap.set(".title .p2", { autoAlpha: 0, y: 50 });
gsap.set(".title .p3", { autoAlpha: 0, y: 50 });
gsap.set(".story .t1", { autoAlpha: 0, y: 50 });
gsap.set(".story .t2", { autoAlpha: 0, y: 50 });
gsap.set(".story .t3", { autoAlpha: 0, y: 50 });

setTimeout(() => {
  let tl = gsap.timeline();
  tl.to("#section1", { autoAlpha: 1, duration: 2 });
  tl.to(".story .t1", { autoAlpha: 1, duration: 1, y: 0, ease: "sine.out" });
  tl.to(".story .t1", {
    autoAlpha: 0,
    duration: 1,
    y: -50,
    ease: "sine.out",
    delay: 1.3,
  });
  tl.to(".story .t2", { autoAlpha: 1, duration: 1, y: 0, ease: "sine.out" });
  tl.to(".story .t2", {
    autoAlpha: 0,
    duration: 1,
    y: -50,
    ease: "sine.out",
    delay: 1.3,
  });
  tl.to(".story .t3", { autoAlpha: 1, duration: 1, y: 0, ease: "sine.out" });
  tl.to(".story .t3", {
    autoAlpha: 0,
    duration: 1,
    y: -50,
    ease: "sine.out",
    delay: 1.3,
  });
  // tl.to(".story .t4", {autoAlpha: 1, duration: 1, y:0, ease: "sine.out"})
  // tl.to(".story .t4", {autoAlpha: 0, duration: 1, y:-50, ease: "sine.out", delay: 1.5})

  tl.to("#canvas", { autoAlpha: 1, duration: 1 });
  tl.to(".title .p1", { autoAlpha: 1, y: 0, duration: 0.6 });
  tl.to(".title .p2", { autoAlpha: 1, y: 0, duration: 0.6 });
  tl.to(".title .p3", { autoAlpha: 1, y: 0, duration: 0.6 });
  tl.to("#header", { top: 0, duration: 0.4 });
}, 2000);

const panel = document.querySelector("#section1");

ScrollTrigger.create({
  trigger: panel,
  start: "bottom bottom",
  pin: true,
  pinSpacing: false,
});

//스킵버튼
document.querySelector(".skip").addEventListener("click", (e) => {
  section1.style.height = "";
  e.preventDefault();
  document
    .querySelector(document.querySelector(".skip").getAttribute("href"))
    .scrollIntoView({
      behavior: "smooth",
    });
});
