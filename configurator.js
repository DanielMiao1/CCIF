Array.from(document.getElementsByTagName("switch")).forEach(function(element) {
  element.addEventListener("click", function() {
    this.setAttribute("aria-checked", this.getAttribute("aria-checked") != "true");
  });
});

document.getElementById("dark-mode-switch").addEventListener("click", function() {
  if (this.getAttribute("aria-checked") == "true") {
    document.documentElement.classList.add("dark");
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    };
  };
});

document.getElementById("continue").addEventListener("click", function() {
  var dark_mode, music_enabled;

  if (document.getElementById("dark-mode-switch").getAttribute("aria-checked") == "true") {
    dark_mode = "1";
  } else {
    dark_mode = "0";
  };

  if (document.getElementById("music-switch").getAttribute("aria-checked") == "true") {
    music_enabled = "1";
  } else {
    music_enabled = "0";
  };

  document.location = "/?dark_mode=" + dark_mode + "&music=" + music_enabled;
});
