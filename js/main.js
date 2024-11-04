window.addEventListener("scroll", function () {
	const header = document.querySelector(".header-container");
	if (window.scrollY > 50) {
		// You can adjust the scroll distance
		header.classList.add("shrink");
	} else {
		header.classList.remove("shrink");
	}
});
