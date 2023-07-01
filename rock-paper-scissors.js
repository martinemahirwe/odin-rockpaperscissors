function getComputerChoice(){
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection,computerSelection){
playerSelection = playerSelection.toLowerCase();

if(playerSelection === computerSelection.toLowerCase()){
  return "it's a tie";
}
else if((computerSelection === 'rock' && playerSelection === 'scissors') ||
  (computerSelection === 'scissors' && playerSelection === 'paper') ||(computerSelection === 'paper' && playerSelection === 'rock')){
  return `you lose! ${computerSelection} beats ${playerSelection}`;
}
else {
  return `you win! ${playerSelection} beats ${computerSelection}`;
}
}
function game(){
let playerScore = 0;
let computerScore = 0;
for(let round = 1; round <= 5; round++){
const computerSelection = getComputerChoice();
const playerSelection = prompt('Enter your choice(rock/paper/scissors):');
const result = playRound(playerSelection,computerSelection);
console.log(`Round ${round} : ${result}`);

if (result.includes('win')){
playerScore++;
}
else if(result.startsWith('you lose!')){
  computerScore++;
}
}
if(computerScore < playerScore){
  console.log('you win the game!');
}
else if(computerScore > playerScore){
  console.log('you lose the game!');
}
else{
  console.log("it's a tie game!");
}
}
game();