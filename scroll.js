var sections = Array.from(document.getElementById("wrapper").getElementsByTagName("section"));
var current_section = 0;

var scrolling = false;

var previous_page_button_shown = false;
var next_page_button_shown = true;

sections[0].scrollIntoView();


function previousSection() {
	if (scrolling) {
		return;
	};

	scrolling = true;
	current_section--;

	var scrollTimeout;
	window.addEventListener("scroll", function() {
		clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(function() {
			scrolling = false;
			initiatePage();
		}, 200);
	});

	if (parameters["animations"]) {
		sections[current_section].scrollIntoView({behavior: "smooth"});
	} else {
		sections[current_section].scrollIntoView();
	};

	preinitiatePage();

	if (current_section == 0) {
		return setTimeout(function() {
			hideElement(document.getElementById("previous-page"));
			previous_page_button_shown = false;
		}, 100);
	};

	if (next_page_button_shown) {
		return;
	};

	setTimeout(function() {
		showElement(document.getElementById("next-page"));
		next_page_button_shown = true;
	}, 100);

};


function nextSection() {
	if (scrolling) {
		return;
	};

	scrolling = true;
	current_section++;

	var scrollTimeout;
	window.addEventListener("scroll", function() {
		clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(function() {
			scrolling = false;
			initiatePage();
		}, 200);
	});

	if (parameters["animations"]) {
		sections[current_section].scrollIntoView({behavior: "smooth"});
	} else {
		sections[current_section].scrollIntoView();
	};

	preinitiatePage();

	if (current_section == sections.length - 1) {
		return setTimeout(function() {
			hideElement(document.getElementById("next-page"));
			next_page_button_shown = false;
		}, 100);
	};

	if (previous_page_button_shown) {
		return;
	};

	setTimeout(function() {
		showElement(document.getElementById("previous-page"));
		previous_page_button_shown = true;
	}, 100);

};


document.getElementById("previous-page").addEventListener("click", previousSection);
document.getElementById("next-page").addEventListener("click", function() {
	if (this.classList.contains("uninitiated")) {
		this.classList.remove("uninitiated");
	};

	nextSection();
});


function snapFromDirection(up) {
	if (up) {
		previousSection();
	} else {
		nextSection();
	};
};

function updateElementsOnResize() {
	sections[1].getElementsByClassName("animation")[0].style.height = sections[1].getElementsByTagName("p")[0].clientHeight + "px";
	sections[2].getElementsByClassName("animation")[0].style.height = sections[2].getElementsByTagName("p")[0].clientHeight + "px";
	sections[2].getElementsByClassName("animation")[0].style.top = (window.innerHeight - sections[2].getElementsByTagName("p")[0].clientHeight - 50) + "px";
	sections[7].getElementsByClassName("animation")[0].style.height = sections[7].getElementsByTagName("p")[0].clientHeight + "px";
	sections[8].getElementsByClassName("animation")[0].style.height = sections[8].getElementsByTagName("p")[0].clientHeight + "px";
};

window.addEventListener("resize", function() {
	sections[current_section].scrollIntoView();
	updateElementsOnResize();
});

updateElementsOnResize();
