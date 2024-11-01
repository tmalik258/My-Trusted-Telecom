const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slider = document.querySelector(".testimonial-slider");

const cardWidth = slider.querySelector(".testimonial-card").offsetWidth + 2 * 16; // card width + 2rem gap
let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    currentIndex++;
    slider.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
    });
});

prevBtn.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0); // Prevents index from going below 0
    slider.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
    });
});
