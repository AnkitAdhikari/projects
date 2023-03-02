let activePlayerEl = document.querySelector(".active-player");

//player1 and player 2 section element
const player1El = document.querySelector(".player1");
const player2El = document.querySelector(".player2");

//player1 and player 2 total score element
const player1TotalScoreEl = document.querySelector(".total-score-player1");
const player2TotalScoreEl = document.querySelector(".total-score-player2");

// player1 defalut active player and selecting it's current score
let currentPlayerScoreEl = activePlayerEl.children[2];
//current player totalscorelement
let currentPlayerTotalScoreEl = activePlayerEl.children[1];

let player1Score = 0;
let player2Score = 0;

let player1TotalScore = 0;
let player2TotalScore = 0;

// rolldice element
const rolldiceEl = document.querySelector(".rolldice");

rolldiceEl.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  if (dice === 1) {
    //making score 0 and changing the active player

    if (currentPlayerScoreEl.classList.contains("current-score-player1")) {
      player1Score = 0;
      currentPlayerScoreEl.textContent = player1Score;
    } else {
      // this means current player is player2
      player2Score = 0;
      currentPlayerScoreEl.textContent = player2Score;
    }

    player1El.classList.toggle("active-player");
    player2El.classList.toggle("active-player");
    activePlayerEl = document.querySelector(".active-player");
    currentPlayerScoreEl = activePlayerEl.children[2];
    currentPlayerTotalScoreEl = activePlayerEl.children[1];
    console.log(currentPlayerTotalScoreEl);

    return;
  }

  // modifing current element when dice is >1
  if (currentPlayerScoreEl.classList.contains("current-score-player1")) {
    player1Score += dice;
    currentPlayerScoreEl.textContent = player1Score;
  } else {
    // this means current player is player2
    player2Score += dice;
    currentPlayerScoreEl.textContent = player2Score;
  }
  // console.log(dice);
  // console.log(player1Score);
});

// hold btn element
const holdEl = document.querySelector(".hold");

holdEl.addEventListener("click", () => {
  if (currentPlayerScoreEl.classList.contains("current-score-player1")) {
    player1TotalScore += player1Score;
    console.log(currentPlayerTotalScoreEl);
    currentPlayerTotalScoreEl.textContent = player1TotalScore;
  } else {
    // this means current player is player2
    player2TotalScore += player2Score;
    console.log(currentPlayerTotalScoreEl);
    currentPlayerTotalScoreEl.textContent = player2TotalScore;
  }

  // changing active player
  console.log(currentPlayerScoreEl);
  player1El.classList.toggle("active-player");
  player2El.classList.toggle("active-player");
  activePlayerEl = document.querySelector(".active-player");
  currentPlayerScoreEl = activePlayerEl.children[2];
  currentPlayerTotalScoreEl = activePlayerEl.children[1];
});
