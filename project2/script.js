const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center")

//console.log(window.getComputedStyle(red).background);

// Otherway
const getBGColor = (selectorElement) => {
    return window.getComputedStyle(selectorElement).backgroundColor;
}

console.log(getBGColor(pink));
console.log(getBGColor(red));
console.log(getBGColor(cyan));
console.log(getBGColor(violet));


// Event Part
var pinkElementColor = getBGColor(pink);

pink.addEventListener("Mouseenter", () => {
    center.style.background = pinkElementColor;
});