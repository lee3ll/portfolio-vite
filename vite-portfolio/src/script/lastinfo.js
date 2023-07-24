// document.querySelector(".hovered").addEventListener("mousemove", (e) => {
//     // 마우스 좌표 값
//     let mousePageX = e.pageX;
//     let mousePageY = e.screenY;
//     // 전체 화면 가로 값
//     let centerPageX = window.innerWidth / 2 - mousePageX;
//     let centerPageY = document.querySelector("#photo").offsetHeight / 2 - mousePageY;
//     console.log(mousePageY)
//     // 이미지 이동 및 회전하기
//     const imgMove = document.querySelector(".hovered");
//     imgMove.style.transform =
//         "translate(" +
//         -centerPageX / 15 +
//         "px, " +
//         -centerPageY / 15 +
//         "px) rotateZ(" +
//         -centerPageX / 100 +
//         "deg)";
//     });
//     // document.querySelector(".photo_box1").addEventListener("hover", function() {
//     //     document.querySelector(".photo_box1").classList.add("hovered");
//     //   });


// const hoveredElements = document.querySelectorAll(".hovered");
// hoveredElements.forEach(function (element) {
//   element.addEventListener("mousemove", (e) => {
//     // 마우스 좌표 값
//     let mousePageX = e.pageX;
//     let mousePageY = e.screenY;
//     // 전체 화면 가로 값
//     let centerPageX = window.innerWidth / 2 - mousePageX;
//     let centerPageY =
//       document.querySelector("#photo").offsetHeight / 2 - mousePageY;
//     // 이미지 이동 및 회전하기
//     const imgMove = element;
//     imgMove.style.transform =
//       "translate(" +
//       -centerPageX / 15 +
//       "px, " +
//       -centerPageY / 15 +
//       "px) rotateZ(" +
//       -centerPageX / 100 +
//       "deg)";
//   });

//   element.addEventListener("mouseout", () => {
//     // 원래 위치로 돌아가기 (애니메이션 효과를 주기 위해 transition 사용)
//     element.style.transition = "transform 0.5s ease";
//     element.style.transform = "";
//     // 0.5초 후에 transition 속성 제거
//     setTimeout(() => {
//       element.style.transition = "";
//     }, 500);
//   });
// });

const photo1 = document.querySelector(".photo_box1");
const photo2 = document.querySelector(".photo_box2");
const photo3 = document.querySelector(".photo_box3");

// photo1에 대해 script가 잘 작동하는지 확인
// photo1.addEventListener("click", () => {
//   alert("check");
// });

photo1.addEventListener("mousemove", (e) => {
  let mousePageX = e.pageX - photo1.offsetLeft;
  let mousePageY = e.pageY - photo1.offsetTop;

  let centerPhotoX = photo1.clientWidth / 2 - mousePageX;
  let centerPhotoY = photo1.clientHeight / 2 - mousePageY;

  // // 마우스 좌표값 확인
  // console.log(mousePageX, mousePageY)

  // console.log(centerPhotoX, centerPhotoY)

  gsap.to(photo1, {
    duration: 0.4,
    x: -centerPhotoX / 15,
    y: -centerPhotoY / 15,
    rotation: -centerPhotoX / 60,
  });
});

photo2.addEventListener("mousemove", (e) => {
  let mousePageX = e.pageX - photo2.offsetLeft;
  let mousePageY = e.pageY - photo2.offsetTop;

  let centerPhotoX = photo2.clientWidth / 2 - mousePageX;
  let centerPhotoY = photo2.clientHeight / 2 - mousePageY;

  gsap.to(photo2, {
    duration: 0.4,
    x: -centerPhotoX / 15,
    y: -centerPhotoY / 15,
    rotation: -centerPhotoX / 60,
  });
});

photo3.addEventListener("mousemove", (e) => {
  let mousePageX = e.pageX - photo3.offsetLeft;
  let mousePageY = e.pageY - photo3.offsetTop;

  let centerPhotoX = photo3.clientWidth / 2 - mousePageX;
  let centerPhotoY = photo3.clientHeight / 2 - mousePageY;

  gsap.to(photo3, {
    duration: 0.4,
    x: -centerPhotoX / 15,
    y: -centerPhotoY / 15,
    rotation: -centerPhotoX / 60,
  });
});

document.querySelectorAll(".hovered").forEach(el => {
  el.addEventListener("mouseover", () => {
    el.style.zIndex = "1000";
  });
  el.addEventListener("mouseout", () => {
    gsap.to(el, {
      x: 0,
      y: 0,
      rotation: 0,
    })
    el.style.zIndex = "100";
  })
})