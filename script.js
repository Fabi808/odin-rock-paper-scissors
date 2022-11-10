// Declare an array for picking comp's sign and initialize score counter vars and gameOn bool.
const signs = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let gameOn = true;
const scoreboard = document.querySelector("#scoreboard");

//This fuction uses Math library to randomly select a sign from the array for the computer.
function getComputerChoice() {
    return computerSign = signs[Math.floor(Math.random() * signs.length)];
}

//Takes player signs as input and compares them against eachother, then updates announcement div textContent. 
function playRound(playerSign, computerSign){
    const announcement = document.querySelector("#announcement");
    if (playerSign === computerSign) {
        announcement.textContent = "You tied.";
        announceScore();
    } else if (playerSign === "Rock" && computerSign === "Scissors") {
        playerScore++;
        announcement.textContent = "You won!";
        announceScore();
    } else if (playerSign === "Paper" && computerSign === "Rock") {
        playerScore++;
        announcement.textContent = "You won!";
        announceScore();
    } else if (playerSign === "Scissors" && computerSign === "Paper") {
        playerScore++;
        announcement.textContent = "You won!";
        announceScore();
    } else {
        computerScore++;
        announcement.textContent = "You lost.";
        announceScore();
    }
}

/*(Noob method) Randomly generates comp sign then sets player sign based off button pressed. Runs a round which outputs results
to DOM and awards the winner a point which is displayed on the scoareboard.*/
function playRoundRock() {
    var pickedComputerSign = getComputerChoice();
    var pickedPlayerSign = "Rock";
    playRound(pickedPlayerSign, pickedComputerSign); 
}

function playRoundPaper() {
    var pickedComputerSign = getComputerChoice();
    var pickedPlayerSign = "Paper";
    playRound(pickedPlayerSign, pickedComputerSign); 
}

function playRoundScissors() {
    var pickedComputerSign = getComputerChoice();
    var pickedPlayerSign = "Scissors";
    playRound(pickedPlayerSign, pickedComputerSign); 
}

//Announces each players score below round results via DOM manipulation and concatenation.
function announceScore() {
    scoreboard.textContent = "Your Score: " + playerScore + "   " + "Computer Score: " + computerScore;
}

//Query select each of the 3 html buttons. Then add event listeners for each thay runs the above corresponding function. 
const rock = document.querySelector("#rock"); 
const paper = document.querySelector("#paper"); 
const scissors = document.querySelector("#scissors"); 

rock.addEventListener("click", playRoundRock);
paper.addEventListener("click", playRoundPaper);
scissors.addEventListener("click", playRoundScissors);

//Main body of function. 
