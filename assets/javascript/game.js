//What the comp chooses
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//What the comp chooses    
var userGuesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Everything is now user ready to start
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];

//key up
document.onkeyup = function(event) {

var userGuesses = event.key;

var compGuesses = compChoices[Math.floor(Math.random() * compChoices.length)];
    console.log('userGuesses', userGuesses, 'compGuesses', compGuesses); 

      //Wins
      if (userGuess === compGuesses) {
        wins ++;
      } else {
        userGuesses --;
      }

      //Reset
      if (guessesLeft > 0){
            if (userGuesses == compGuesses){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("OMG YOU ARE PSYCHIC!! So what are the lottery numbers?!");
                reset();
            }
        }else if(guessesLeft == 0){

            //update the losses
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Not trying to be rude but you may want to try again?!");
            
            // then the page will start over no reload necessary 
            reset();
          }
        }; 