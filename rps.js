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

   if(choiceNum == 0) {return "Rock";}
   else if(choiceNum == 1) {return "Paper";}
   else {return "Scissors";}
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function playRPS(playerSelection, computerSelection)
{
    /*returns a string that declares the winner of the
    round like: "You Lose! Paper beats Rock"
    */
}