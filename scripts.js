const ROCK = "computer chose rock";
const PAPER = "computer chose paper";
const SCISSORS = "computer chose scissors";

function randomNumber() {
  let random = Math.floor(Math.random() * 3);
  return random;
}

var randomValue = randomNumber();
console.log(randomValue);

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
