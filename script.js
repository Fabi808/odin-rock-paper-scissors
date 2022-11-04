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


// Declare an array for signs and initialize score counter vars and gameOn bool.
const signs = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let gameOn = true;

//This fuction uses Math library to randomly select a sign from the array for the computer.
function getComputerChoice() {
    return computerSign = signs[Math.floor(Math.random() * signs.length)];
}

//Prompt user to pick a sign and convert it to title case. Use conditional to test whether user input a valid sign; if not, recursive prompt.
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

//Print the scores using concatenation.
function printScore() {
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);
}

//Takes player signs as input and compares them against eachother, then returns a string called result. Also incremanets winner's score. 
function playRound(playerSign, computerSign){
    if (playerSign === computerSign) {
        let result = "You tied.";
        return result;
    } else if (playerSign === "Rock" && computerSign === "Scissors") {
        playerScore++;
        let result = "You won!.";
        return result;
    } else if (playerSign === "Paper" && computerSign === "Rock") {
        playerScore++;
        let result = "You won!.";
        return result;
    } else if (playerSign === "Scissors" && computerSign === "Paper") {
        playerScore++;
        let result = "You won!.";
        return result;
    } else {
        computerScore++;
        let result = "You lost.";
        return result;
    }
}

//Combines function to obtain player signs, prints, then compares. 
function game() {
    getComputerChoice();
    getPlayerChoice();
    console.log("Player = " + playerSign);
    console.log("Computer = " + computerSign);
    console.log(playRound(playerSign, computerSign));
    printScore();
    console.log("========== New Round ==========")
}


//Main body: Runs new rounds until someone reaches 5 pts. If so, check for who won and print final score and message. 
while (gameOn === true) {
    // if (playerScore === 5 || computerScore === 5) {
    //     gameOn = false;
    //     console.log("Game over!");

    //     if (playerScore > computerScore) {
    //         console.log("You won the game!")
    //         console.log("Final Scores: " + "Player: " + playerScore + " to " + "Computer: " + computerScore);
    //         break;
    //     } else {
    //         console.log("The computer won the game!")
    //         console.log("Final Scores: " + "Player: " + playerScore + " to " + "Computer: " + computerScore);
    //         break;
    //     }
    // }
    game();
}
