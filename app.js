//order is yellow - blue / red - green
//note order from highest to lowest: E, D, B, G
const yellowLight = document.querySelector(".yellow-button");
const blueLight = document.querySelector(".blue-button");
const redLight = document.querySelector(".red-button");
const greenLight = document.querySelector(".green-button");
const nextLight = document.querySelector(".next-button");

//declarations n shizz
let levelCount = 0;
let levelDone = true;
let stupidIdiotVariable = 0;
let correctCount = 0;
let lvl1Count = 4;
let lvl2Count = 5;
let yellowHit = false;
let blueHit = false;
let redHit = false;
let greenHit = false;
let nextHit = false;
let wait = true;

function playAudio(url) {
    new Audio(url).play();
}
//basic button functions
document.querySelector(".yellow-button").onclick = function () {
    yellowLight.classList.add("selected");
    playAudio('GlockE.wav');
    yellowHit = true;
    wait = false;
    setTimeout(function() {
        yellowLight.classList.remove("selected");
    }, 500);
}
document.querySelector(".blue-button").onclick = function () {
    blueLight.classList.add("selected");
    playAudio('GlockD.wav');
    blueHit = true;
    wait = false;
    setTimeout(function() {
        blueLight.classList.remove("selected");
    }, 500);
}
document.querySelector(".red-button").onclick = function () {
    redLight.classList.add("selected");
    playAudio('GlockB.wav');
    redHit = true;
    wait = false;
    setTimeout(function() {
        redLight.classList.remove("selected");
    }, 500);
}
document.querySelector(".green-button").onclick = function () {
    greenLight.classList.add("selected");
    playAudio('GlockG.wav');
    greenHit = true;
    wait = false;
    setTimeout(function() {
        greenLight.classList.remove("selected");
    }, 500);

}
document.querySelector(".next-button").onclick = function () {
    if (levelDone === true) {
        levelCount++;
        levelDone = false;
        nextLight.classList.add("selected");
        nextHit = true;
        wait = true;
        if (levelCount === 1) {
            levelOne();
        }
        else if (levelCount === 2) {
            levelTwo();
        }
    }
    else {
        playAudio('error-10.mp3');
    }
}

//things that let the computer press buttons
function fakeYellow() {
    yellowLight.classList.add("selected");
    playAudio('GlockE.wav');
    setTimeout(function() {
        yellowLight.classList.remove("selected");
    }, 500);
}
function fakeBlue() {
    blueLight.classList.add("selected");
    playAudio('GlockD.wav');
    setTimeout(function() {
        blueLight.classList.remove("selected");
    }, 500);
}
function fakeRed() {
    redLight.classList.add("selected");
    playAudio('GlockB.wav');
    setTimeout(function() {
        redLight.classList.remove("selected");
    }, 500);
}
function fakeGreen() {
    greenLight.classList.add("selected");
    playAudio('GlockG.wav');
    setTimeout(function() {
        greenLight.classList.remove("selected");
    }, 500);
}

function falsifier() {
    yellowHit = false;
    blueHit = false;
    redHit = false;
    greenHit = false;
}


//thing that makes the levels go
let counted = 0;
let target = 10000;
function levelOne() {
    falsifier();
    setTimeout(fakeYellow, 300);
    setTimeout(fakeBlue, 1000);
    setTimeout(fakeRed, 1700);
    setTimeout(fakeGreen, 2400);
    let i = setInterval(function () {
        if (counted <= target) {
            counted++;
            if (correctCount >= lvl1Count) { //done if all right buttons pressed
                levelDone = true;
                playAudio('clapping.wav');
                nextLight.classList.remove("selected");
                falsifier();
                correctCount = 0;
                clearInterval(i);
            }
            else if (wait === true) {
                stupidIdiotVariable += 0;
            }
            else if (correctCount === 3) {
                if (greenHit === true) {
                    correctCount += 1;
                    greenHit = false;
                    wait = true;
                }
                else if (greenHit != true) {
                    levelCount -= 1;
                    correctCount = 0;
                    playAudio('error-10.mp3');
                    levelDone = true;
                    wait = true;
                    nextLight.classList.remove("selected");
                    falsifier();
                    clearInterval(i);
                }
            }
            else if (correctCount === 2) {
                if (redHit === true) {
                    correctCount += 1;
                    redHit = false;
                    wait = true;
                }
                else if (redHit != true) {
                    levelCount -= 1;
                    correctCount = 0;
                    playAudio('error-10.mp3');
                    levelDone = true;
                    wait = true;
                    nextLight.classList.remove("selected");
                    falsifier();
                    clearInterval(i);
                }
            }
            else if (correctCount === 1) {
                if (blueHit === true) {
                    correctCount += 1;
                    blueHit = false;
                    wait = true;
                }
                else if (blueHit != true) {
                    levelCount -= 1;
                    correctCount = 0;
                    playAudio('error-10.mp3');
                    levelDone = true;
                    wait = true;
                    nextLight.classList.remove("selected");
                    falsifier();
                    clearInterval(i);
                }
            }
            else if (correctCount === 0) {
                if (yellowHit === true) {
                    correctCount += 1;
                    yellowHit = false;
                    wait = true;
                }
                else if (yellowHit != true) {
                    levelCount -= 1;
                    correctCount = 0;
                    playAudio('error-10.mp3');
                    levelDone = true;
                    wait = true;
                    nextLight.classList.remove("selected");
                    falsifier();
                    clearInterval(i);
                }
            }
            else {
                stupidIdiotVariable += 0;
            }
        } else {
            nextLight.classList.remove("selected");
            falsifier();
            clearInterval(i);
        }
    }, 200); }

let counted2 = 0;
let target2 = 10000;
function levelTwo() {
    falsifier();
    setTimeout(fakeRed, 300);
    setTimeout(fakeBlue, 1000);
    setTimeout(fakeYellow, 1700);
    setTimeout(fakeGreen, 2400);
    setTimeout(fakeGreen, 3100);
    let i = setInterval(function () {
        if (counted2 <= target2) {
            counted2++;
            if (correctCount >= lvl2Count) {
                levelDone = true;
                playAudio('clapping.wav');
                nextLight.classList.remove("selected");
                falsifier();
                correctCount = 0;
                clearInterval(i);
            }
            else if (wait === true) {
                stupidIdiotVariable += 0;
            } //put new input checks below here
            else if (correctCount === 4) {
                if (greenHit === true) {
                    correctCount += 1;
                    greenHit = false;
                    wait = true;
                }
                else if (greenHit != true) {
                    levelCount -= 1;
                    correctCount = 0;
                    playAudio('error-10.mp3');
                    levelDone = true;
                    wait = true;
                    nextLight.classList.remove("selected");
                    falsifier();
                    clearInterval(i);
                }
            }
            else if (correctCount === 3) {
                if (greenHit === true) {
                    correctCount += 1;
                    greenHit = false;
                    wait = true;
                }
                else if (greenHit != true) {
                    levelCount -= 1;
                    correctCount = 0;
                    playAudio('error-10.mp3');
                    levelDone = true;
                    wait = true;
                    nextLight.classList.remove("selected");
                    falsifier();
                    clearInterval(i);
                }
            }
            else if (correctCount === 2) {
                if (yellowHit === true) {
                    correctCount += 1;
                    yellowHit = false;
                    wait = true;
                }
                else if (yellowHit != true) {
                    levelCount -= 1;
                    correctCount = 0;
                    playAudio('error-10.mp3');
                    levelDone = true;
                    wait = true;
                    nextLight.classList.remove("selected");
                    falsifier();
                    clearInterval(i);
                }
            }
            else if (correctCount === 1) {
                if (blueHit === true) {
                    correctCount += 1;
                    blueHit = false;
                    wait = true;
                }
                else if (blueHit != true) {
                    levelCount -= 1;
                    correctCount = 0;
                    playAudio('error-10.mp3');
                    levelDone = true;
                    wait = true;
                    nextLight.classList.remove("selected");
                    falsifier();
                    clearInterval(i);
                }
            }
            else if (correctCount === 0) {
                if (redHit === true) {
                    correctCount += 1;
                    redHit = false;
                    wait = true;
                }
                else if (redHit != true) {
                    levelCount -= 1;
                    correctCount = 0;
                    playAudio('error-10.mp3');
                    levelDone = true;
                    wait = true;
                    nextLight.classList.remove("selected");
                    falsifier();
                    clearInterval(i);
                }
            }
            else {
                stupidIdiotVariable += 0;
            }
        } else {
            nextLight.classList.remove("selected");
            falsifier();
            clearInterval(i);
        }
    }, 200); }
