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
  currentScore += dice;
  console.log(dice);
  document.querySelector(`.player--${activePlayer}`).textContent = currentScore;
});
console.log(btnRoll);
