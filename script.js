if (parameters["ie"]) {
	function IEVersion() {
		var user_agent = navigator.userAgent.toLowerCase();
		return (user_agent.indexOf("msie") != -1) ? parseInt(user_agent.split("msie")[1]) : false;
	};
	
	if (IEVersion() && IEVersion() < 10) {
		document.location = "/unsupported_browser";
	};
	
	document.location = "#";
	
	Element.prototype.classList = {
    contains: function(string) {
      return this.className.split(" ").includes(string);
    },
    add: function(string) {
      this.className += " " + string;
    },
    remove: function(string) {
      this.className = this.className.replace(string, "");
    }
  }


	var browser_warning = document.createElement("p");
	browser_warning.classList.add("browser-warning");

	switch (IEVersion()) {
		case false:
			browser_warning.innerText = "Internet Explorer 11 is not fully supported. Features such as dark mode and background music are disabled."
			break;
		case 10:
			browser_warning.innerText = "Internet Explorer 10 is not supported. Most features are disabled, and the page may not function properly."
			break;
	};

	var close_warning = document.createElement("button");
	close_warning.classList.add("close-browser-warning");
	close_warning.innerHTML = "&times;";
	close_warning.addEventListener("click", function() {
		var element = document.getElementsByClassName("browser-warning")[0];
		element.parentNode.removeChild(element);
	});
	browser_warning.appendChild(close_warning);

	document.body.appendChild(browser_warning);

	document.getElementById("next-page").classList.remove("uninitiated");
};

if (parameters["dark_mode"] == "1") {
	document.documentElement.classList.add("dark");
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

if (document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") == 0) {
	extension = ".webp";
} else {
	extension = ".png";
};

document.documentElement.style.setProperty("--electricity-2-image", "url(/images/electricity_2/1080p" + extension + ")");
document.documentElement.style.setProperty("--ocean-2-image", "url(/images/ocean_2/1080p" + extension + ")");
document.documentElement.style.setProperty("--road-1-image", "url(/images/road_1/1080p" + extension + ")");
document.documentElement.style.setProperty("--solar-1-image", "url(/images/solar_1/1080p" + extension + ")");

var chart_color_choices = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];

document.getElementById("previous-page").style.display = "none";

Array.from(document.getElementsByClassName("previous-image")).forEach(function(element) {
	element.addEventListener("click", function() {
		var image_set = this.parentNode.getElementsByClassName("image-set")[0];
		var selected = parseInt(image_set.dataset.selected);
		image_set.children[selected].style.display = "none";
		image_set.children[selected - 1].style.display = "initial";
		image_set.dataset.selected = selected - 1;

		this.parentNode.getElementsByClassName("next-image")[0].disabled = false;

		if (selected == 1) {
			this.disabled = true;
			return;
		};
	});
});


Array.from(document.getElementsByClassName("next-image")).forEach(function(element) {
	element.addEventListener("click", function() {
		var image_set = this.parentNode.getElementsByClassName("image-set")[0];
		var selected = parseInt(image_set.dataset.selected);
		image_set.children[selected].style.display = "none";
		image_set.children[selected + 1].style.display = "initial";
		image_set.dataset.selected = selected + 1;

		this.parentNode.getElementsByClassName("previous-image")[0].disabled = false;

		if (selected + 1 >= image_set.children.length - 1) {
			this.disabled = true;
			return;
		};
	});
});
