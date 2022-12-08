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
