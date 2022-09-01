//Functions are blocks of reuseable code
//Function defition
function displayGreeting()
{
    document.write("Hello");
}

function displayPlayerScore()
{
    playerScore = 3
    document.write("</br/>Player score: " + playerScore);
}
//function ,parameters and returns

function displayTotalScore(totalScore)
{
    document.write("<br/>Total Score:" + totalScore);
}

function displayFinalScore(finalScore)
{
    finalScore +=100 //finalScore = finalScore+1000;
    document.write("<br/>Final score:" + finalScore);
}

function addTheseNumbers(x,y)
{
    document.write(x+y);
}

function subtractNumbers(x,y)
{
    return(x-y);
}

function greet (name, owner) { // function = greet takes two arguments
    let result = "";
    if (name == owner)
    {
       result = "Hello boss"
    }
    else 
    {
       result = "Hello guest"
    }
    return result;
  }
  greet("Daniel","Daniel")