"use strict";

// selecting player section
const section0 = document.querySelector(".section--0");
const section1 = document.querySelector(".section--1");

// selecting button
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isGameOver = false;

function switchPlayer() {
  currentScore = 0;
  section0.classList.toggle("active--player");
  section1.classList.toggle("active--player");
  document.querySelector(`.player--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
}

btnRoll.addEventListener("click", () => {
  if (!isGameOver) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    document.querySelector("img").src = `image/dice-${dice}.png`;
    // checking for 1
    if (!(dice === 1)) {
      // showing in dom
      currentScore += dice;
      document.querySelector(`.player--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (!isGameOver) {
    score[activePlayer] += currentScore;
    document.querySelector(`.score--${activePlayer}`).textContent =
      score[activePlayer];
    //winning condition
    if (score[activePlayer] >= 50) {
      document.querySelector(`.player--${activePlayer}`).textContent = "winner";
      document
        .querySelector(`.section--${activePlayer}`)
        .classList.remove("active--player");
      document
        .querySelector(`.section--${activePlayer}`)
        .classList.add("winner--player");
      document.querySelector(".dice-container").style.display = "none";
      // console.dir(document.querySelector(".dice-container"));
      isGameOver = true;
    } else {
      switchPlayer(); //also make currscore = 0
    }
  }
});
