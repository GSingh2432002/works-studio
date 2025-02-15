function loader() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });

  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.6,
      duration: 0.7,
      ease: "expo.out",
    },
    "same"
  );

  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "same"
  );

  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loader();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var element = document.querySelectorAll(".element");
var page2 = document.querySelector("#page2");
element.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    var bgImage = ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgImage})`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function setRandomHeights() {
    const images = document.querySelectorAll(".image-div img");
    images.forEach((img) => {
      const randomHeight = Math.random() * (50 - 35) + 3;
      img.style.height = `${randomHeight}vw`;
    });
  }
  setRandomHeights();
});
