// Habana Javascript

function checkEditable(item){
	// get parent article div to search
	var article = item.parents('.t51.article');
	// find the hcard title h3
	var title = article.find('h3.hcard-title');
	// if h3 has class .cke_editable, activate clickable
	if(!title.hasClass('cke_editable')){
          return false;
        } else {
          return true;
        }
}

// Klikkbar mÃƒÂ¥te for lenker/hcards.
// Krever jQuery
window.onload = function() {


		// When you click inside one of the hcards
		$("body").on("click", ".hcard", function (e) {
			// Find the hcard that got clicked and save it into a variable
			var hcard = $(this);
			if(checkEditable(hcard)) {
				return false;
			}
			// Find all the links in this hcard and save them into a variable
			var links = $(hcard).find("*[href]");
			// Find the main link of this hcard and save it into a variable
			var mainlink = $(hcard).find("a.hmain-link");

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
		$("body").on("mouseover", ".hcard", function () {
			// Find the hcard that got hovered and save it into a variable
			var hcard = $(this);
			if(checkEditable(hcard)) {
				return false;
			}
			// Find the main link of the hcard and save it into a variable
			var mainlink = $(hcard).find("a.hmain-link");
			// Find the url of the main link and save it into a variable
			var href = $(mainlink).attr("href");

			// Show a status bar with the url of the main link
			window.status = href;
			// CSS fallback solution in case no browser status bar is showing
			$(".hstatusbar").text(href);
			$(".hstatusbar").css("opacity", "1");
		});
		$("body").on("mouseout", ".hcard", function () {
			// On hover out, empty the status bar or hide it
			window.status = "";
			$(".hstatusbar").css("opacity", "0");
		});

		// When you hover over one of the other links inside the hcard
		$("body").on("mouseover", ".hcard a", function () {
			// Hide the fallback status bar because the browser already shows one
			$(".hstatusbar").css("opacity", "0");
		});
		$("body").on("mouseout", ".hcard a", function () {
			// On hover out, show the fallback status bar once again.
			$(".hstatusbar").css("opacity", "1");
		});
}