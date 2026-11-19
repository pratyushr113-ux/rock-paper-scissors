function getComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3);
     if(randomNumber==0){
        return "rock"
     }
     else if(randomNumber==1){
            return "paper"
     }
     else return "scissor"
    

}

function getHumanChoice(){
    let choice=prompt("Give your choice:");
    return choice;

}
let humanScore=0;
let ComputerScore=0;
function playround(humanChoice,computerChoice)
{
    if(humanChoice.toLowerCase()=="rock"&&computerChoice.toLowerCase()=="paper")
    {
        console.log("“You lose! Paper beats Rock”");
        ComputerScore+=1;
    }
    else if(humanChoice.toLowerCase()=="paper"&&computerChoice.toLowerCase()=="rock")
    {
        console.log("You won! Paper beats Rock");
        humanScore+=1;
    }
    else if(humanChoice.toLowerCase()=="rock"&&computerChoice.toLowerCase()=="scissor")
    {
        console.log("You won! rock beats scissor");
        humanScore+=1;
    }
    else if(humanChoice.toLowerCase()=="rock"&&computerChoice.toLowerCase()=="rock")
    {
        console.log("No result");
        
    }
    else if(humanChoice.toLowerCase()=="paper"&&computerChoice.toLowerCase()=="paper")
    {
         console.log("No result");
    }
    else if(humanChoice.toLowerCase()=="paper"&&computerChoice.toLowerCase()=="scissor")
    {
        console.log("You lose! scissor beats paper");
        ComputerScore+=1;
    }
    else if(humanChoice.toLowerCase()=="scissor"&&computerChoice.toLowerCase()=="scissor")
    {
        console.log("No result");
    }
    else if(humanChoice.toLowerCase()=="scissor"&&computerChoice.toLowerCase()=="rock")
    {
        console.log("“You lose! rock beats scissor”");
        ComputerScore+=1;
    }
    else if(humanChoice.toLowerCase()=="scissor"&&computerChoice.toLowerCase()=="paper")
    {
        console.log("“You win! scissor beats paper”");
        humanScore+=1;
    }



}

function playGame()
{
playround(getHumanChoice(),getComputerChoice());


playround(getHumanChoice(),getComputerChoice());

playround(getHumanChoice(),getComputerChoice());

playround(getHumanChoice(),getComputerChoice());

playround(getHumanChoice(),getComputerChoice());

console.log(ComputerScore);
console.log(humanScore);

if(ComputerScore>humanScore)
{
    console.log("Computer won the game.")
    
}
else if(humanScore>ComputerScore) console.log("You won");
else console.log("Game tie");
}
playGame();




