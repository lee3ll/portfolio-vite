// const panel2 = document.querySelector("#section2");

// ScrollTrigger.create({
//   trigger: panel2,
//   start: "bottom bottom",
//   end: "+=100%",
//   pin: true,
//   scrub: true,
//   pinSpacing: false,
// });

// bg
gsap.utils.toArray("#main section").forEach((item) => {
  let color = item.getAttribute("data-bgcolor");

  ScrollTrigger.create({
    trigger: item,
    start: "top 70%",
    end: "bottom bottom",
    markers: false,
    onEnter: function () {
      gsap.to("body", {
        backgroundColor: color,
        duration: 1.4,
      });
    },
    onEnterBack: function () {
      gsap.to("body", {
        backgroundColor: color,
        duration: 1.4,
      });
    },
  });
});

ScrollTrigger.create({
  trigger: "#section3",
  start: "top 60%",
  end: "bottom 90%",
  markers: false,
  onEnter: function () {
    document.querySelector("#section3").classList.add("active");
  },
  onLeave: function () {
    document.querySelector("#section3").classList.remove("active");
  },
  onEnterBack: function () {
    document.querySelector("#section3").classList.add("active");
  },
  onLeaveBack: function () {
    document.querySelector("#section3").classList.remove("active");
  },
});
