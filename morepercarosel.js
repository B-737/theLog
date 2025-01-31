document.addEventListener("DOMContentLoaded", (event) => {
  let multipleCardCarousel = document.querySelector("#filmsoorten");

  if (window.matchMedia("(min-width: 768px)").matches) {
    let carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: true,
      wrap: false,
    });

    let carouselInner = document.querySelector(".carousel-inner");
    let carouselWidth = carouselInner.scrollWidth;
    let cardWidth = document.querySelector(".carousel-item").offsetWidth;
    let scrollPosition = 0;

    document
      .querySelector("#filmsoorten .carousel-control-next")
      .addEventListener("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          // Fixed minus sign
          scrollPosition += cardWidth;
          carouselInner.scrollTo({ left: scrollPosition, behavior: "smooth" });
        }
      });

    document
      .querySelector("#filmsoorten .carousel-control-prev")
      .addEventListener("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          carouselInner.scrollTo({ left: scrollPosition, behavior: "smooth" });
        }
      });
  } else {
    multipleCardCarousel.classList.add("slide");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var iframe = document.getElementById("youtube-video");
  iframe.src += "&autoplay=1";
});



