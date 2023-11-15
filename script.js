let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};
console.log(generateTarget());
const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
};
const compareGuesses = (humanNum, computerNum, secretNum) => {
  console.log('human', getAbsoluteDistance(humanNum, secretNum));
  console.log('compute', getAbsoluteDistance(computerNum, secretNum));
  if (
    getAbsoluteDistance(humanNum, secretNum) >
    getAbsoluteDistance(computerNum, secretNum)
  ) {
    return false;
  }
  return true;
};
const updateScore = (value) => {
  if (value === 'human') humanScore++;
  computerScore++;
};
const advanceRound = () => {
  currentRoundNumber++;
};
