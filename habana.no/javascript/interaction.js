// Habana Javascript


// Klikkbar måte for lenker/hcards.
// Krever jQuery
window.onload = function() {

// When you click inside one of the hcards
$(".hcard").on("click", function (e) {
	// Find the hcard that got clicked and save it into a variable
	var hcard = $(this);
	// Find all the links in this hcard and save them into a variable
	var links = $(hcard).find("*[href]");
	// Find the main link of this hcard and save it into a variable
	var mainlink = $(hcard).find("a.hmain");

	// Check if a mainlink is present
	if ($(mainlink).length) {
		// If the clicked element is already a link, leave it
		if ($(e.target).is(links)) {
			e.stopPropagation();
		} else {
			// When it's not, make sure the user is not selecting text
			if (window.getSelection().toString() == "") {
				// Find the url of the main link and save it into a variable
				var href = $(mainlink).attr("href");
				// Find the target of the main link and save it into a variable
				var target = $(mainlink).attr("target");

				// If the target is '_blank'
				if (target === "_blank") {
					// Open the url in a new window
					window.open(href);
				} else {
					// If not, open the url in the current window
					window.location = href;
				}
			}
		}
	}
});

// When you hover over one of the hcards
$(".hcard").hover(
	function () {
		// Find the hcard that got hovered and save it into a variable
		var hcard = $(this);
		// Find the main link of the hcard and save it into a variable
		var mainlink = $(hcard).find("a.hmain");
		// Find the url of the main link and save it into a variable
		var href = $(mainlink).attr("href");

		// Show a status bar with the url of the main link
		window.status = href;
		// CSS fallback solution in case no browser status bar is showing
		$(".hstatusbar").text(href);
		$(".hstatusbar").css("opacity", "1");
	},
	function () {
		// On hover out, empty the status bar or hide it
		window.status = "";
		$(".hstatusbar").css("opacity", "0");
	}
);

// When you hover over one of the other links inside the hcard
$(".hcard a").hover(
	function () {
		// Hide the fallback status bar because the browser already shows one
		$(".hstatusbar").css("opacity", "0");
	},
	function () {
		// On hover out, show the fallback status bar once again.
		$(".hstatusbar").css("opacity", "1");
	}
);
}