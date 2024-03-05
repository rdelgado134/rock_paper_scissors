/*returns either rock, paper , or scissors for the computer"*/
function getComputerChoice()
{
   let choiceNum = Math.floor(Math.random() * 3);

   if(choiceNum == 0) {return "ROCK";}
   else if(choiceNum == 1) {return "PAPER";}
   else {return "SCISSORS";}
}
const userScore = document.createElement("div");
const comScore = document.createElement("div");

userScore.textContent = 0;
comScore.textContent = 0;

/* Generates a number from 0-2 which will help determine the computers choice.*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");
  rockButton.addEventListener('click', playRock);
  paperButton.addEventListener("click", playPaper);
  scissorsButton.addEventListener("click", playScissors);

  /*returns a string that declares the winner of the
    round like: "You Lose! Paper beats Rock"
    */
   
function playRock()
{
    const playerSelection = "ROCK";
    const computerSelection = getComputerChoice();
    const result = document.createElement("div");

    if(playerSelection == computerSelection) {result.textContent = " TIE!"}
    
    if(computerSelection == "PAPER")
     {
        result.textContent = "You lose! Paper beats Rock.";
        comScore.textContent++;
    }
    else if(computerSelection == "SCISSORS") 
    {
        result.textContent = "You Win! Rock beats Scissors.";
        userScore.textContent++;
    }
    updateScore();

        document.getElementById("resultsHolder").appendChild(result);
}
function playPaper()
{
    const playerSelection = "PAPER"
    const computerSelection = getComputerChoice();
    const result = document.createElement("div");

    if(playerSelection == computerSelection) {result.textContent = " TIE!"}

    if(computerSelection == "SCISSORS") 
    {
        result.textContent ="You lose! Scissors beats Paper.";
        comScore.textContent++;
    }
    else if
    (
        computerSelection == "ROCK") {result.textContent ="You Win! Paper beats Rock.";
        userScore.textContent++;
    }
    updateScore();

    document.getElementById("resultsHolder").appendChild(result);
}
function playScissors()
{
    const playerSelection = "SCISSORS"
    const computerSelection = getComputerChoice();
    const result = document.createElement("div");

    if(playerSelection == computerSelection) {result.textContent = " TIE!"}

    if(computerSelection == "ROCK") 
    {
         result.textContent = "You lose! Rock beats Scissors.";
         comScore.textContent++;
    }
    else if (computerSelection == "PAPER") 
    {
        result.textContent ="You Win! Scissors beats Paper.";
        userSCore++;
    }

    updateScore();
    document.getElementById("resultsHolder").appendChild(result);
}
function updateScore()
{
    document.getElementById("userScore").appendChild(userScore);
    document.getElementById("comScore").appendChild(comScore);
}
