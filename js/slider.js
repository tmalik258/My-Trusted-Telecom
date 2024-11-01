document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelector('.dots');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentSlide = 0;
    let slideInterval; // Declare interval variable in wider scope
    
    // Calculate the slide width including margin
    let slideWidth = 100; // 90% of container width

	if (window.innerWidth < 1200) {
		slideWidth = 90;
	}

    // Initial position
    goToSlide(1);

    // Create dots
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetInterval(); // Reset interval when dot is clicked
        });
        dots.appendChild(dot);
    }

    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(n) {
        currentSlide = n;
		let x = 13.3;
		if (window.innerWidth > 1200) {
			switch (currentSlide) {
				case 0:
					x = 4.5;
					break;
				case 2:
					x = 22.1;
					break;
			
				default:
					break;
			}
		}
		else {
			x = 0;
		}

        const offset = slideWidth * currentSlide + x;
        slides.style.transform = `translateX(-${offset}%)`;
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        goToSlide(currentSlide);
    }

    // Function to reset interval
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    // Initial interval set
    resetInterval();
});