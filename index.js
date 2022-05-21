

Game("rock", ComputerPlay());

function ComputerPlay (){

   let  computerchoicevalue = Math.floor (Math.random()*2);
   let computerchoice;

    switch (computerchoicevalue){
        case 0:
            computerchoice = "rock";
            break;
        case 1:
            computerchoice = "paper";
            break;
        case 2: 
            computerchoice = "scissors";
            break;
    }

    return computerchoice;
}



function Game(playerselection, computerchoice){
    let result;
    if (playerselection =="rock" && computerchoice == "scissors"){result = 1; console.log(ResultText(playerselection, computerchoice, result));}
    else if (playerselection =="paper" && computerchoice == "rock"){result = 1; console.log(ResultText(playerselection, computerchoice, result));}
    else if (playerselection =="scissors" && computerchoice == "paper"){result = 1; console.log(ResultText(playerselection, computerchoice, result));}
    else if (playerselection =="rock" && computerchoice == "paper"){result = 0; console.log(ResultText(playerselection, computerchoice, result))}
    else if (playerselection =="paper" && computerchoice == "scissors"){result = 0; console.log(ResultText(playerselection, computerchoice, result));}
    else if (playerselection =="scissors" && computerchoice == "rock"){result = 0; console.log(ResultText(playerselection, computerchoice, result));}
    else if (playerselection == computerchoice){result = 2; console.log(ResultText(playerselection, computerchoice, result));}
}
 
function ResultText (playerselection, computerchoice,result){
    switch (result){
        case 0:
            return "You loose! " + computerchoice + " beats " + playerselection;
        case 1:
            return "You win! " + playerselection + " beats " + computerchoice;
        case 2:
            return "Draw!! " + playerselection + " equals to " + computerchoice;
    }

}

