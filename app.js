//order is yellow - blue / red - green
const yellowLight = document.querySelector(".yellow-button");
const blueLight = document.querySelector(".blue-button");
const redLight = document.querySelector(".red-button");
const greenLight = document.querySelector(".green-button");

document.querySelector(".yellow-button").onclick = function () {
    yellowLight.classList.add("selected");
    setTimeout(function() {
        yellowLight.classList.remove("selected");
    }, 600);
}
document.querySelector(".blue-button").onclick = function () {
    blueLight.classList.add("selected");
    setTimeout(function() {
        blueLight.classList.remove("selected");
    }, 600);
}
document.querySelector(".red-button").onclick = function () {
    redLight.classList.add("selected");
    setTimeout(function() {
        redLight.classList.remove("selected");
    }, 600);
}
document.querySelector(".green-button").onclick = function () {
    greenLight.classList.add("selected");
    setTimeout(function() {
        greenLight.classList.remove("selected");
    }, 600);

}
document.querySelector(".next-button").onclick = function () {
    alert("next.");
}
