function showElement(element, style_display, duration, iterations) {
  duration = typeof duration !== "undefined" ? duration : 200;
  iterations = typeof iterations !== "undefined" ? iterations : 1;
  style_display = typeof style_display !== "undefined" ? style_display : "block";

	element.style.display = style_display;
	element.animate([{opacity: 0}, {opacity: 1}], {duration: duration, iterations: iterations});
};

function hideElement(element, style_display, duration, iterations) {
  duration = typeof duration !== "undefined" ? duration : 200;
  iterations = typeof iterations !== "undefined" ? iterations : 1;
  style_display = typeof style_display !== "undefined" ? style_display : "none";

	element.animate([{opacity: 1}, {opacity: 0}], {duration: duration, iterations: iterations}).finished.then(function() {
		element.style.display = style_display;
		element.opacity = "1";
	});
};

function crossFade(element1, element2) {
	element1.animate([{opacity: 1}, {opacity: 0}], {duration: 1000, iterations: 1}).finished.then(function() {
		element1.style.display = "none";
	});
	element2.style.display = "initial";
	element2.animate([{opacity: 0}, {opacity: 1}], {duration: 1000, iterations: 1});
};
