'use strict';

let checkBtn = document.querySelector(".check");
let againBtn = document.querySelector(".again");

let score = 20;
let highscore = 0;
let secretNumber = Number(document.querySelector(".number").value);
let guess;
let msg = document.querySelector(".message");

// random number generator 
secretNumber = Math.floor(Math.random() * 20 + 1);

const check = function () {
    guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        msg.textContent = "No Number!";
        return;
    }

    if (guess === secretNumber) {
        msg.textContent = "Correct Number!"
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.color = 'red';

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = score;
        }
    } else {
        msg.textContent = guess > secretNumber ? "Too high!" : "Too low!";
        score--;
    }

    if (score <= 0) {
        msg.textContent = "You lost! Try Again!";
        restore();
    }

    document.querySelector(".score").textContent = score;
    console.log(document.querySelector(".score"), typeof document.querySelector(".score"));
}

const restore = function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector(".number").textContent = '?';
    msg.textContent = 'Start guessing...';
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = '';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.color = 'black';
}

checkBtn.addEventListener('click', check);
againBtn.addEventListener('click', restore);




