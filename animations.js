if (parameters["animations"]) {
  setTimeout(function() {
    var element = document.getElementById("in-animation");

    if (parameters["ie"]) {
      return element.parentNode.removeChild(element);
    };

    element.animate([{"opacity": 1}, {"opacity": 0}], {duration: 1000, iterations: 1}).finished.then(function() {
      element.remove();
    });
  }, 1000);
} else {
  document.getElementById("in-animation").remove();
};

function showElement(element, style_display, duration, iterations) {
  duration = typeof duration !== "undefined" ? duration : 200;
  iterations = typeof iterations !== "undefined" ? iterations : 1;
  style_display = typeof style_display !== "undefined" ? style_display : "block";

	element.style.display = style_display;
  if (parameters["animations"]) {
	  element.animate([{opacity: 0}, {opacity: 1}], {duration: duration, iterations: iterations});
  };
};

function hideElement(element, style_display, duration, iterations) {
  duration = typeof duration !== "undefined" ? duration : 200;
  iterations = typeof iterations !== "undefined" ? iterations : 1;
  style_display = typeof style_display !== "undefined" ? style_display : "none";

  if (parameters["animations"]) {
    element.animate([{opacity: 1}, {opacity: 0}], {duration: duration, iterations: iterations}).finished.then(function() {
      element.style.display = style_display;
      element.opacity = "1";
    });
  } else {
    element.style.display = style_display;
  };
};

function crossFade(element1, element2) {
	element1.animate([{opacity: 1}, {opacity: 0}], {duration: 1000, iterations: 1}).finished.then(function() {
		element1.style.display = "none";
	});
	element2.style.display = "initial";
	element2.animate([{opacity: 0}, {opacity: 1}], {duration: 1000, iterations: 1});
};

function newChapterAnimation(chapter_number, name, white=false) {
  var element = document.createElement("div");
  if (white) {
    element.classList.add("white");
  };

  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  var part = document.createElement("p");
  part.innerHTML = "Part " + chapter_number;
  wrapper.appendChild(part);
  var chapter_name = document.createElement("p");
  chapter_name.innerHTML = name;
  wrapper.appendChild(chapter_name);

  element.appendChild(wrapper);

  element.classList.add("new-chapter");
  document.body.appendChild(element);

  if (parameters["animations"]) {
    element.animate([{opacity: "0"}, {opacity: "1"}], {duration: 250, iterations: 1});

    setTimeout(function() {
      element.animate([{opacity: "1"}, {opacity: "0"}], {duration: 750, iterations: 1}).finished.then(function() {
        element.remove();
      });
    }, 2500);
  } else {
    setTimeout(function() {
      element.remove();
    }, 2500);
  };
};

function preinitiatePage() {
  updateElementsOnResize();
  if (parameters["ie"]) {
    if (document.getElementById("previous-page").classList.contains("white")) {
      document.getElementById("previous-page").classList.remove("white");
    };

    if (document.getElementById("next-page").classList.contains("white")) {
      document.getElementById("next-page").classList.remove("white");
    };
  } else {
    document.getElementById("previous-page").style.setProperty("--border-color", document.documentElement.style.getPropertyValue("--foreground-primary"));
    document.getElementById("next-page").style.setProperty("--border-color", document.documentElement.style.getPropertyValue("--foreground-primary"));
  };

  switch (current_section) {
    case 1:
      if (parameters["ie"]) {
        document.getElementById("previous-page").classList.add("white");
        document.getElementById("next-page").classList.add("white");
      } else {
        document.getElementById("previous-page").style.setProperty("--border-color", "white");
        document.getElementById("next-page").style.setProperty("--border-color", "white");
      };
      break;
    case 2:
      document.getElementById("ghg1_image").src = "/images/ghg1" + extension;
      document.getElementById("ghg2_image").src = "/images/ghg2" + extension;
      break;
    case 3:
      newChapterAnimation(2, "Causes");
      break;
    case 5:
      newChapterAnimation(3, "Impacts");
      break;
    case 6:
      newChapterAnimation(4, "Future");
      break;
    case 7:
      if (parameters["ie"]) {
        document.getElementById("previous-page").classList.add("white");
        document.getElementById("next-page").classList.add("white");
      } else {
        document.getElementById("previous-page").style.setProperty("--border-color", "white");
        document.getElementById("next-page").style.setProperty("--border-color", "white");
      };
      break;
    case 8:
      newChapterAnimation(5, "Conclusion", true);
      if (parameters["ie"]) {
        document.getElementById("previous-page").classList.add("white");
        document.getElementById("next-page").classList.add("white");
      } else {
        document.getElementById("previous-page").style.setProperty("--border-color", "white");
        document.getElementById("next-page").style.setProperty("--border-color", "white");
      };
      break;
  };
}

function initiatePage() {
  sections.forEach(function(section) {
    if (section.classList.contains("active")){
      section.classList.remove("active");
    };
  });

  sections[current_section].classList.add("active");
  if (!parameters["animations"]) {
    return;
  };

  switch (current_section) {
    case 1:
      sections[1].getElementsByTagName("p")[0].animate([{marginLeft: -Math.floor(window.innerWidth) + "px"}, {marginLeft: "0px"}], {duration: 1000, iterations: 1, easing: "ease-in-out"});
      break;
    case 2:
      sections[2].getElementsByTagName("p")[0].animate([{marginRight: -Math.floor(window.innerWidth) + "px"}, {marginRight: "0px"}], {duration: 1000, iterations: 1, easing: "ease-in-out"});
      break;
    case 7:
      sections[7].getElementsByTagName("p")[0].animate([{marginLeft: -Math.floor(window.innerWidth) + "px"}, {marginLeft: "0px"}], {duration: 1000, iterations: 1, easing: "ease-in-out"});
      break
    case 8:
      sections[8].getElementsByTagName("p")[0].animate([{marginLeft: -Math.floor(window.innerWidth) + "px"}, {marginLeft: "0px"}], {duration: 1000, iterations: 1, easing: "ease-in-out"});
      break
  };
};
