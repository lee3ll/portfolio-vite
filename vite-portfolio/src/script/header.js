//스크롤 부드럽게
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

//헤더 숨기기
let prevScrollPos = window.pageYOffset;
const header = document.getElementById("header");

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  prevScrollPos = currentScrollPos;
};
