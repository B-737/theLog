// let items = document.querySelectorAll('.carousel .carousel-item')

// 		items.forEach((el) => {
// 			const minPerSlide = 5
// 			let next = el.nextElementSibling
// 			for (var i=1; i<minPerSlide; i++) {
// 				if (!next) {
//             // wrap carousel by using first child
//             next = items[0]
//         }
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// })

// soort2
document.addEventListener('DOMContentLoaded', (event) => {
    let multipleCardCarousel = document.querySelector("#filmsoorten");

    if (window.matchMedia("(min-width: 768px)").matches) {
        let carousel = new bootstrap.Carousel(multipleCardCarousel, { interval: false, wrap: false });

        let carouselInner = document.querySelector(".carousel-inner");
        let carouselWidth = carouselInner.scrollWidth;
        let cardWidth = document.querySelector(".carousel-item").offsetWidth;
        let scrollPosition = 0;

        document.querySelector("#filmsoorten .carousel-control-next").addEventListener("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) { // Fixed minus sign
                scrollPosition += cardWidth;
                carouselInner.scrollTo({ left: scrollPosition, behavior: 'smooth' });
            }
        });

        document.querySelector("#filmsoorten .carousel-control-prev").addEventListener("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                carouselInner.scrollTo({ left: scrollPosition, behavior: 'smooth' });
            }
        });

    } else {
        multipleCardCarousel.classList.add("slide");
    }
});
