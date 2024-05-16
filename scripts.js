//find a way to collect user input and determine if it's the user or computer who has logged on,
// give variables accordingly and change the name at the start based on who logs on

const ROCK = "computer chose rock";
const PAPER = "computer chose paper";
const SCISSORS = "computer chose scissors";

function randomNumber() {
  let random = Math.floor(Math.random() * 3);
  return random;
}

var randomValue = randomNumber();
// console.log(randomValue);

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
  if (randomValue === 0) {
    return ROCK;
  } else if (randomValue === 1) {
    return PAPER;
  } else if (randomValue === 2) {
    return SCISSORS;
  } else {
    console.log("error");
  }
}
console.log(getComputerChoice());

const USER_ROCK = "user chose rock";
const USER_PAPER = "user chose paper";
const USER_SCISSORS = "user chose scissors";

function getHumanChoice() {
  let userInputText = prompt("What's your choice? Rock, paper or scissors");
  let finalUserInput = userInputText.toLocaleLowerCase();
  //   let userInputNumeric = +userInputText;
  if (finalUserInput === "rock") {
    return USER_ROCK;
  } else if (finalUserInput === "paper") {
    return USER_PAPER;
  } else if (finalUserInput === "scissors") {
    return USER_SCISSORS;
  } else {
    console.log("error");
  }
}
console.log(getHumanChoice());

var humanScore = 0;
var computerScore = 0;
