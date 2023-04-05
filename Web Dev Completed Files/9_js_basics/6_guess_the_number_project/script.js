//JavaScript Guess the Number

//Funciton Declarations
function getValues(){
    //Get intial conditions for a game round and return the important ones.
    let range = parseInt(prompt("Guess from numbers 0 to..."));
    let guessNumber = prompt("How many guesses would you like?");
    let secretNumber = Math.floor(Math.random()*(range+1));

    let gameData = [guessNumber, secretNumber];
    return gameData;
}

function playGame(gameData){
    //Simulate playing a round of Guess the Number and return the game result.
    let guessNumber = gameData[0];
    let secretNumber = gameData[1];

    for (let i = 0; i < guessNumber; i++){
        let guess = prompt("Guess " + (i+1) + ": What is your number?");

        if (guess < secretNumber){
            alert(guess + " is too low...");
        }
        else if (guess > secretNumber){
            alert(guess + " is too high...");
        }
        else{
            return "Correct!  My number was " + guess + "!";
        }
    }
    return "Sorry, you ran out of guesses!  The correct number was " + secretNumber + "!";
}


//Our main game loop.
let playing = "yes";
while (playing == "yes"){
    let gameData = getValues();
    let result = playGame(gameData);
    alert(result);
    playing = prompt("Would you like to play again (yes/no)?");
}   