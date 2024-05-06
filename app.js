//order is yellow - blue / red - green
let yellowLight = document.getElementById("yellow");

document.querySelector(".js-yellow-button").onclick = function () {
    //alert("yellow.");
    colorChange('yellow');
}
document.querySelector(".js-blue-button").onclick = function () {
    alert("blue.");
}
document.querySelector(".js-red-button").onclick = function () {
    alert("red.");
}
document.querySelector(".js-green-button").onclick = function () {
    alert("green.");
}

document.querySelector(".js-next-button").onclick = function () {
    alert("next.");
}

function colorChange() {
    
    //yellowLight.classList.toggle('yellow'); //nukes the buttons styling
    //yellowLight.className = 'yellow'; //doesnt do anything
}