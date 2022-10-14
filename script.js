/*
- Create a list of throw signs, declare undefined player and computer vars, score vars = 0, gameOn var = true
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
    return computerSign = signs[Math.floor(Math.random() * signs.length)];
}

function getPlayerChoice() {
    playerSign = prompt("Choose your throw: Rock, Paper, or Scissors?");
    tempSign = playerSign.toLowerCase();
    playerSign = tempSign.charAt(0).toUpperCase() + tempSign.slice(1);

    if (playerSign === "Rock" || playerSign === "Paper" || playerSign === "Scissors") {
        return playerSign;
    }
    else {
        alert("Sorry, that is not a valid throw. Try again.");
        return getPlayerChoice();
    }
}



computerSign = getComputerChoice();
console.log(computerSign);

playerSign = getPlayerChoice();
console.log(playerSign);



console.log("Welcome to Rock, Paper, Scissors");
console.log("You will be battling against The Computer. The first one to 5 points wins.")