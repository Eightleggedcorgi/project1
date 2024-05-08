//order is yellow - blue / red - green
const yellowLight = document.querySelector(".yellow-button");
const blueLight = document.querySelector(".blue-button");
const redLight = document.querySelector(".red-button");
const greenLight = document.querySelector(".green-button");
const nextLight = document.querySelector(".next-button");
let levelCount = 0;
let levelDone = true;
let stupidIdiotVariable = 0;
let correctCount = 3;

function playAudio(url) {
    new Audio(url).play();
}
//basic button functions
document.querySelector(".yellow-button").onclick = function () {
    yellowLight.classList.add("selected");
    setTimeout(function() {
        yellowLight.classList.remove("selected");
    }, 500);
}
document.querySelector(".blue-button").onclick = function () {
    blueLight.classList.add("selected");
    setTimeout(function() {
        blueLight.classList.remove("selected");
    }, 500);
}
document.querySelector(".red-button").onclick = function () {
    redLight.classList.add("selected");
    setTimeout(function() {
        redLight.classList.remove("selected");
    }, 500);
}
document.querySelector(".green-button").onclick = function () {
    greenLight.classList.add("selected");
    setTimeout(function() {
        greenLight.classList.remove("selected");
    }, 500);

}
document.querySelector(".next-button").onclick = function () {
    if (levelDone === true) {
        levelCount++;
        levelDone = false;
        if (levelCount === 1) {
            levelOne();
        }
        else if (levelCount === 2) {
            levelTwo();
        }
    }
    else {
        stupidIdiotVariable++;
        playAudio('error-10.mp3');
        nextLight.classList.add("selected");
        setTimeout(function() {
            nextLight.classList.remove("selected");
        }, 400);
    }
}

//things that let the computer press buttons
function fakeYellow() {
    yellowLight.classList.add("selected");
    setTimeout(function() {
        yellowLight.classList.remove("selected");
    }, 500);
}
function fakeBlue() {
    blueLight.classList.add("selected");
    setTimeout(function() {
        blueLight.classList.remove("selected");
    }, 500);
}
function fakeRed() {
    redLight.classList.add("selected");
    setTimeout(function() {
        redLight.classList.remove("selected");
    }, 500);
}
function fakeGreen() {
    greenLight.classList.add("selected");
    setTimeout(function() {
        greenLight.classList.remove("selected");
    }, 500);
}

//thing that makes the levels go
function levelOne() {
    setTimeout(fakeYellow, 300);
    setTimeout(fakeBlue, 1000);
    setTimeout(fakeRed, 1700);
    setTimeout(fakeGreen, 2400);
    /*for (i = 0; i < correctCount; i ++) {
        if (levelCount === 1) {
            fakeYellow();
        }
    }*/
}
