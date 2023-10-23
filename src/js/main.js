// just use import plugin instead (postcss plugin)
import "../css/component.css";
import "../css/lenis.css";
import "../css/main.css";
import "../css/reset.css";
import "./index";

import Splide from "@splidejs/splide";
import { Grid } from "@splidejs/splide-extension-grid";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import Typed from "typed.js";

// ? ------------  setup  Lenis smooth scrolling ------------

// initialize lenis smooth scrolling
const lenis = new Lenis({
	lerp: 0.07, // animation smoothness (between 0 & 1)
	wheelMultiplier: 0.7, // scrolling speed for mouse wheel
	touchMultiplier: 0.7, // scrolling speed for touch events
	smoothWheel: true, // smooth scrolling for while events
	smoothTouch: true, // smooth scrolling for touche events
	orientation: "vertical", // orientation of the scrolling (vertical/horizontal)
	gestureOrientation: "vertical", // orientation of the gestures (vertical/horizontal)
	normalizeWheel: false, // Normalize wheel inputs
	infinite: false, // infinite scroll
	autoResize: true,
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ? ------------  setup  AOS library ------------
// aos.js library
// eslint-disable-next-line no-undef
AOS.init({
	duration: 1200,
	once: true,
});

// ? ------------  setup  splideJs library ------------

// eslint-disable-next-line no-undef
const splide = new Splide("#landing-carousel", {
	type: "loop",
	speed: 800,
	rewind: true,
	rewindSpeed: 1200,
	perPage: 1,
	start: 1,
	autoplay: true,
	Keyboard: true,
	// paginationKeyboard: true,
	pauseOnHover: false,
	// Converts the image src to the css background-image URL
	// Note : This requires height option
	cover: true,
	height: "100vh",
});
splide.mount();
// eslint-disable-next-line no-undef
const splide2 = new Splide("#cards-carousel", {
	type: "loop",
	speed: 800,
	rewind: true,
	start: 1,
	arrows: false,
	autoplay: true,
	Keyboard: true,
	perPage: 1,
	classes: {
		arrow: "splide__arrow cards-carousel-arrow",
		page: "splide__pagination__page cards-carousel-pagination",
	},
	grid: {
		rows: 2,
		cols: 1,
		gap: {
			row: "1rem",
		},
	},
	// paginationKeyboard: true,
	pauseOnHover: false,
	breakpoints: {
		640: {
			grid: {
				rows: 1,
				cols: 1,
			},
		},
	},
});
// mount grid extension
splide2.mount({ Grid });


// ? ------------  setup  typedJs library ------------
const typed = new Typed(".move", {
	strings: ["Responsive Design ", "SEO Optimization", "Secure Hosting", "E-Commerce Functionality", "Affordable Pricing"],
	typeSpeed: 30,
	backSpeed: 25,
	backDelay: 1400,
	loop: true,
});

// ? ------------  smooth scrolling (Lenis) in anchor links (nav links) ------------
document.querySelectorAll("nav ul a").forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		// gsap.ticker.fps(15);
		lenis.scrollTo(`${e.target.getAttribute("href")}`, {
			lerp: 0.09,
			onComplete: () => {
				// Resume GSAP animations after scrolling is complete
				// gsap.ticker.fps(60);
			},
		});
		// const targetSection = document.querySelector(`${e.target.getAttribute("href")}`);
		// targetSection.scrollIntoView({ behavior: "smooth" });
	});
});
