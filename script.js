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
