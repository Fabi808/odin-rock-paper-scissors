/*
- Create a list of throw signs, empty player and computer vars, score vars, gameOn var
- Create a function that randomly selects and returns a sign from list for the computer
- Create a function to play a round
- At the beginning of the round, ask for the player to select a sign
- Compare player and computer sign and declare outcome
    -if equal, rerun computer sign and ask player for new sign
    -if player wins, add point to score, vice versa
- Loop game to end once someone gets 5 points then gameOn = False
- Declare winner of the game
*/

const signs = ["Rock", "Paper", "Scissors"];
let playerSign;
let computerSign;
let playerScore = 0;
let computerScore = 0;
let gameOn = true;

function getComputerChoice() {
    computerSign = signs[Math.floor(Math.random() * signs.length)];
}

console.log(getComputerChoice);