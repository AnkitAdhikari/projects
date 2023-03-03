"use strict";

// selecting player section
const section0 = document.querySelector(".section--0");
const section1 = document.querySelector(".section--1");

// selecting button
const btnRoll = document.querySelector(".btn-roll");

let currentScore = 0;
let activePlayer = 0;

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
    section0.classList.toggle("active--player");
    section1.classList.toggle("active--player");
  }
});
console.log(btnRoll);
