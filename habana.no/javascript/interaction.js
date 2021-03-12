// Habana Javascript


window.onload = function() {
// Clickable Link Block for hcard(Habana Card)
const hcard = document.querySelector(".hcard");
const hmainLink = hcard.querySelector(".hmain-link");
const hclickableElements = Array.from(hcard.querySelectorAll("a")); 
//we are using 'a' here for simplicity but ideally you should put a class like 'clickable' on every clicable element inside hcard(a, button) and use that in query selector.

hclickableElements.forEach((ele) =>
	ele.addEventListener("click", (e) => e.stopPropagation())
);

function handleClick(event) {
	const noTextSelected = !window.getSelection().toString();

	if (noTextSelected) {
		hmainLink.click();
	}
}

hcard.addEventListener("click", handleClick);
}