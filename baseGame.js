var theThing = document.querySelector("#thing");
var container = document.querySelector("#contentContainer");

container.addEventListener("click", function(event) {
	var xPosition = event.clientX - container.getBoundingClientRect().left - (theThing.clientWidth / 2);
	var yPosition = event.clientY - container.getBoundingClientRect().top - (theThing.clientHeight / 2);
	// in case of a wide border, the boarder-width needs to be considered in the formula above
	theThing.style.left = xPosition + "px";
	theThing.style.top = yPosition + "px";
	}
);