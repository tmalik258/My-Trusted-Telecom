const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slider = document.querySelector(".testimonial-slider");

prevBtn.addEventListener("click", () => {
	slider.scrollBy({
		left: -slider.offsetWidth,
		behavior: "smooth",
	});
});

nextBtn.addEventListener("click", () => {
	slider.scrollBy({
		left: slider.offsetWidth,
		behavior: "smooth",
	});
});