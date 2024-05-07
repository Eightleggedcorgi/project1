//order is yellow - blue / red - green
const yellowLight = document.querySelector(".yellow-button");
const blueLight = document.querySelector(".blue-button");
const redLight = document.querySelector(".red-button");
const greenLight = document.querySelector(".green-button");

document.querySelector(".yellow-button").onclick = function () {
    yellowLight.classList.add("selected");
}
document.querySelector(".blue-button").onclick = function () {
    blueLight.classList.add("selected");
}
document.querySelector(".red-button").onclick = function () {
    redLight.classList.add("selected");
}
document.querySelector(".green-button").onclick = function () {
    greenLight.classList.add("selected");
}

document.querySelector(".next-button").onclick = function () {
    alert("next.");
}
