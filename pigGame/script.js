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

function switchPlayer() {
  currentScore = 0;
  section0.classList.toggle("active--player");
  section1.classList.toggle("active--player");
  document.querySelector(`.player--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
}

btnRoll.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  // checking for 1
  if (!(dice === 1)) {
    // showing in dom
    currentScore += dice;
    console.log(dice);
    document.querySelector(`.player--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener("click", () => {
  score[activePlayer] += currentScore;
  document.querySelector(`.score--${activePlayer}`).textContent =
    score[activePlayer];
  //winning condition
  if (score[activePlayer] >= 20) {
    document.querySelector(`.player--${activePlayer}`).textContent = "winner";
  } else {
    switchPlayer(); //also make currscore = 0
  }
});
