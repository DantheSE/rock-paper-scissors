//find a way to collect user input and determine if it's the user or computer who has logged on,
// give variables accordingly and change the name at the start based on who logs on

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const randomValue = () => {
  let random = Math.floor(Math.random() * 3);
  return random;
};

// console.log(randomValue());

// function choiceMaker() {
//   if (randomValue === 0) {
//     return ROCK;
//   } else if (randomValue === 1) {
//     return PAPER;
//   } else if (randomValue === 2) {
//     return SCISSORS;
//   } else {
//     console.log("error");
//   }
// }

// console.log(choiceMaker());

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

const USER_ROCK = "rock";
const USER_PAPER = "paper";
const USER_SCISSORS = "scissors";

function getHumanChoice() {
  let userInputText = prompt("What's your choice? Rock, paper or scissors");
  let finalUserInput = userInputText.toLowerCase();
  //   let userInputNumeric = +userInputText;
  if (finalUserInput === "rock") {
    return ROCK;
  } else if (finalUserInput === "paper") {
    return PAPER;
  } else if (finalUserInput === "scissors") {
    return SCISSORS;
  } else {
    console.log("error");
  }
}

var humanScore = 0;
var computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(humanChoice);
console.log(computerChoice);
playRound(humanChoice, computerChoice);

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors");
    humanScore++;
  } else if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "paper")
  ) {
    console.log("tie");
  }
}

function playGame() {}
