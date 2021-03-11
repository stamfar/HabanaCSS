/* Habana Javascript */


/* Clickable Link Block for hcard(Habana Card) */
const card = document.querySelector(".hcard");
const mainLink = card.querySelector(".main-link");
const clickableElements = Array.from(card.querySelectorAll("clickable"));

clickableElements.forEach((ele) =>
    ele.addEventListener("click", (e) => e.stopPropagation())
);

function handleClick(event) {
    const noTextSelected = !window.getSelection().toString();

    if (noTextSelected) {
        mainLink.click();
    }
}

card.addEventListener("click", handleClick);