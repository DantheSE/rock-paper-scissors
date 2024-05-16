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
  let userInputText = prompt(
    "what's your choice, 0 for rock, 1 for paper and 2 for scissors"
  );

  let userInputNumeric = +userInputText;
  if (userInputNumeric === 0) {
    return USER_ROCK;
  } else if (userInputNumeric === 1) {
    return USER_PAPER;
  } else if (userInputNumeric === 2) {
    return USER_SCISSORS;
  } else {
    console.log("error");
  }
}
console.log(getHumanChoice());
