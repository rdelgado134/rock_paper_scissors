/*
    randomly returns "Rock", "Paper", "Scissors".
    
    -Randomly generate a number from [0,1); r.
        -Multiply r by N (this interval runs from [0,N]
        which in this case is 3.
            -Get the floor to get a whole number.
            let randomNum = Math.random * 1
    */

function getComputerChoice()
{
   let choiceNum = Math.floor(Math.random() * 3);

   if(choiceNum == 0) {return "ROCK";}
   else if(choiceNum == 1) {return "PAPER";}
   else {return "SCISSORS";}
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  /*returns a string that declares the winner of the
    round like: "You Lose! Paper beats Rock"
    */
function playRPS(playerSelection, computerSelection)
{
    playerSelection = prompt("Choose you discipline.");
    playerSelection = playerSelection.toUpperCase();
    computerSelection = getComputerChoice();

    if(playerSelection == computerSelection) {return " TIE!"}

    if(playerSelection == "ROCK")
    {
        if(computerSelection == "PAPER") { return "You lose! Paper beats Rock.";}
        else if(computerSelection == "SCISSORS") {return "You Win! Rock beats Scissors.";}
    }

    if(playerSelection == "PAPER")
    {
        if(computerSelection == "SCISSORS") { return "You lose! Scissors beats Paper.";}
        else if(computerSelection == "PAPER") {return "You Win! Paper beats Rock.";}
    }
    
    if(playerSelection == "SCISSORS")
    {
        if(computerSelection == "ROCK") { return "You lose! Rock beats Scissors.";}
        else if(computerSelection == "PAPER") {return "You Win! Scissors beats Paper.";}
    }
}

function bestOfFive()
{
    let counter = 0;
    let playerScore = 0;
    let computerScore = 0;
    let resultHolder = "";

    while(playerScore != 5 || computerScore != 5)
    {
        resultHolder = playRPS();
        if(resultHolder == "You Win! Rock beats Scissors." || "You Win! Paper beats Rock." || "You Win! Scissors beats Paper.")
            {
                playerScore++;
            }
        else if (resultHolder == "You lose! Paper beats Rock." || "You lose! Scissors beats Paper." || "You lose! Rock beats Scissors.")
            {
                computerScore++;
            }
            resultHolder == " ";
    }
    return resultHolder;
}