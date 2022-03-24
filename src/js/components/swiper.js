window.addEventListener("load", () => {
  // console.log('js loaded..')
  const endoSwiper = document.querySelectorAll(".endo-container").length;

  if (endoSwiper) {
    // console.log("load swiper1")
    const endo = tns({
      container: ".endo-slider",
      items: 1,
      slideBy: "page",
      autoplay: true,
      controls: true,
      navigation: false,
      loop: false,
      touch: true,
      arrowKeys: true,
      mouseDrag: true,
      controlsContainer: document.querySelector(".endo-nav-container"),
    });
  }

  const arthoSwiper = document.querySelectorAll(".artho-container").length;

  if (arthoSwiper) {
    // console.log("load swiper2");
    const artho = tns({
      container: ".endo-slider.artho",
      items: 1,
      slideBy: "page",
      autoplay: true,
      controls: true,
      navigation: false,
      loop: false,
      touch: true,
      arrowKeys: true,
      mouseDrag: true,
      controlsContainer: document.querySelector(".endo-nav-container.artho"),
    });
  }
});
