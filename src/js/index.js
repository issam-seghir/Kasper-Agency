const navToggle = document.querySelector(".nav__toggle");
const navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
	if (navWrapper.classList.contains("active")) {
		this.setAttribute("aria-expanded", "false");
		this.setAttribute("aria-label", "menu");
		navWrapper.classList.remove("active");
	} else {
		navWrapper.classList.add("active");
		this.setAttribute("aria-label", "close menu");
		this.setAttribute("aria-expanded", "true");
		searchForm.classList.remove("active");
	}
});

const searchToggle = document.querySelector(".search__toggle");
const searchForm = document.querySelector(".search__form");

searchToggle.addEventListener("click", showSearch);

function showSearch() {
	searchForm.classList.toggle("active");
	navToggle.setAttribute("aria-expanded", "false");
	navToggle.setAttribute("aria-label", "menu");
	navWrapper.classList.remove("active");
}

// portfolio gallery filter

const list = document.querySelectorAll(".list");
const itemBox = document.querySelectorAll(".itemBox");

for (const elementI of list) {
	elementI.addEventListener("click", function () {
		for (const elementJ of list) {
			elementJ.classList.remove("active");
		}
		this.classList.add("active");

		const dataFilter = this.dataset.filter;

		for (const elementK of itemBox) {
			elementK.classList.remove("active");
			elementK.classList.add("hide");

			if (elementK.dataset.item === dataFilter || dataFilter === "all") {
				elementK.classList.remove("hide");
				elementK.classList.add("active");
			}
		}
	});
}

// Animated Counter on Scroll-down(only)
const ANIMATION_DURATION = 3500;
let isAlreadyRun = false;

function startCounterAnimation(counter) {
	const endCounter = Number.parseInt(counter.textContent);
	let startCounter = 0;

	const step = () => {
		startCounter += (endCounter / ANIMATION_DURATION) * 16;

		if (startCounter < endCounter) {
			counter.textContent = Math.ceil(startCounter);
			requestAnimationFrame(step);
		} else {
			counter.textContent = endCounter;
		}
	};

	step();
}

function checkScrollPosition() {
	const aboutSection = document.querySelector(".about");

	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting && !isAlreadyRun) {
				const countUpElements = entry.target.querySelectorAll(".js-count-up");
				countUpElements.forEach((counter) => {
					startCounterAnimation(counter);
				});
				isAlreadyRun = true;
			}
		}
	});

	observer.observe(aboutSection);
}

window.addEventListener("scroll", () => {
	if (!isAlreadyRun) {
		checkScrollPosition();
	}
});


// subscribe animation

document.querySelector(".form__button").addEventListener("mousedown", (e) => {
	e.preventDefault();
	document.querySelector(".subscribe").classList.add("done");
});
