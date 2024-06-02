const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const randomValue = () => {
  let random = Math.floor(Math.random() * 3);
  return random;
};

function getComputerChoice() {
  switch (randomValue()) {
    case 0: {
      return ROCK;
    }
    case 1: {
      return PAPER;
    }
    case 2: {
      return SCISSORS;
    }
  }
}

// function getHumanChoice() {
//   let userInputText = prompt("What's your choice? Rock, paper or scissors");
//   let finalUserInput = userInputText.toLowerCase();
//   if (finalUserInput === "rock") {
//     return ROCK;
//   } else if (finalUserInput === "paper") {
//     return PAPER;
//   } else if (finalUserInput === "scissors") {
//     return SCISSORS;
//   } else {
//     console.log("error");
//   }
// }

let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice = getComputerChoice;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === ROCK && computerChoice === SCISSORS) ||
    (humanChoice === PAPER && computerChoice === ROCK) ||
    (humanChoice === SCISSORS && computerChoice === PAPER)
  ) {
    console.log("you chose: " + humanChoice);
    console.log("computer chose: " + computerChoice);
    console.log("You win!");
    humanScore++;
  } else if (
    (computerChoice === ROCK && humanChoice === SCISSORS) ||
    (computerChoice === PAPER && humanChoice === ROCK) ||
    (computerChoice === SCISSORS && humanChoice === PAPER)
  ) {
    console.log("you chose: " + humanChoice);
    console.log("computer chose: " + computerChoice);
    console.log("Computer wins!");
    computerScore++;
  } else if (
    (computerChoice === ROCK && humanChoice === ROCK) ||
    (computerChoice === PAPER && humanChoice === PAPER) ||
    (computerChoice === SCISSORS && humanChoice === SCISSORS)
  ) {
    console.log("you chose: " + humanChoice);
    console.log("computer chose: " + computerChoice);
    console.log("It's a tie!");
  }
  console.log("your score: " + humanScore);
  console.log("computer score: " + computerScore);
}

//creating the UI
const player_choice_rock = document.querySelector(".rock");
const player_choice_scissors = document.querySelector(".scissors");
const player_choice_paper = document.querySelector(".paper");
let players_choice_display = document.querySelector(".playerChoices");
let score_display = document.querySelector(".scoreDisplay");
let winnerDisplay = document.querySelector(".roundWinner");

player_choice_rock.addEventListener("click", () => {
  humanChoice = ROCK;
  players_choice_display.textContent = "you chose rock";
  return humanChoice;
});

player_choice_scissors.addEventListener("click", () => {
  humanChoice = SCISSORS;
  players_choice_display.textContent = "you chose scissors";
  return humanChoice;
});

player_choice_paper.addEventListener("click", () => {
  humanChoice = PAPER;
  players_choice_display.textContent = "you chose paper";
  return humanChoice;
});
