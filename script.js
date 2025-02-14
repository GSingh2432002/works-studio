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

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

var element = document.querySelectorAll(".element");
element.forEach(function(ele) {
    ele.addEventListener("mouseenter", function() {
        var bgImage = ele.getAttribute("data-img")
        console.log(bgImage);
        
    })
})
