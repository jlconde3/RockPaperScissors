

const btnrock = document.querySelector('#btnrock'); 
btnrock.addEventListener("click",SelectionRock);

function SelectionRock(){
  Game("rock",ComputerPlay());
}

const btnpaper = document.querySelector('#btnpaper'); 
btnpaper.addEventListener("click",SelectionPaper);

function SelectionPaper(){
  Game("paper",ComputerPlay());
}

const btnscissors = document.querySelector('#btnscissors'); 
btnscissors.addEventListener("click",SelectionScissors);

function SelectionScissors(){
  Game("scissors",ComputerPlay());
}


function ComputerPlay (){
  let  computerchoicevalue = Math.floor (Math.random()*3);
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
  if (playerselection =="rock" && computerchoice == "scissors"){result = 1; console.log(ResultText(result));}
  else if (playerselection =="paper" && computerchoice == "rock"){result = 1; console.log(ResultText(result));}
  else if (playerselection =="scissors" && computerchoice == "paper"){result = 1; console.log(ResultText(result));}
  else if (playerselection =="rock" && computerchoice == "paper"){result = 0; console.log(ResultText(result));}
  else if (playerselection =="paper" && computerchoice == "scissors"){result = 0; console.log(ResultText(result));}
  else if (playerselection =="scissors" && computerchoice == "rock"){result = 0; console.log(ResultText(result));}
  else if (playerselection == computerchoice){result = 2; console.log(ResultText(result));}
}
 
function ResultText (result){

  const container = document.querySelector('#Resultado');
  const content = document.createElement('div');  

  switch (result){
    case 0:
      content.textContent = 'You win!'; 
      container.appendChild(content);
      break;
    case 1:
      content.textContent = 'You loose!'; 
      container.appendChild(content);
      break;
    case 2:
      content.innerHTML = '<h4>Draw!</h4>'; 
      container.appendChild(content);
      break;
  }
}
