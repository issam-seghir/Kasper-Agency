// just use import plugin instead (postcss plugin)
import "../css/component.css";
import "../css/lenis.css";
import "../css/main.css";
import "../css/reset.css";
import "./index";

import Lenis from "@studio-freight/lenis";

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
