
// //Global Variables
//  // Artists for Guessing
// var kendrickLamar = ["k","e","n","d","r","i","c","k", " ", "l", "a", "m", "a", "r" ];
// var chanceTheRapper = ["c", "h", "a", "n", "c", "e", " ", "t", "h", "e", " ", "r", "a", "p", "p", "e", "r"];
// var vicMensa = ["v", "i", "c", " ", "m", "e", "n", "s", "a"];
// var vinceStaples = ["v", "i", "n", "c", "e", " ", "s", "t", "a", "p", "l", "e", "s"];
// var buddy = ["b", "u", "d", "d", "y"];
// var artistName = [kendrickLamar, chanceTheRapper, vicMensa, vinceStaples, buddy];


var artistName = ["kendrick lamar", "chance the rapper", "vic mensa", "vince staples", "buddy"];

var wins = 0; // Number of Wins

var guessLeft = 12; //Number of guesses left
var randomizer = [];
var userGuess = [];
var character = [ ] ; //Guesses
var letterGuessed = [];
var randomizer = []; 
var incorrect;
var randomizer = artistName[Math.floor(Math.random() * artistName.length)];


//Starts the game by randomly selecting a word to guess and replacing characters with underscores
function gameStart() {
	for(var i = 0; i < randomizer.length; i++) {

		if(randomizer[i] === " ") {
			character = character + " &nbsp; ";
		}
		else {
			character =  character +  "&nbsp;_ &nbsp;";
		}
	 document.getElementById("word").innerHTML = character;
	}	
console.log(randomizer);
console.log(character);
}

gameStart();

///Logs number of wins after completing the game 
function winCounter() {

	wins = document.getElementById("win").innerHTML = wins;
	console.log(wins)
}
winCounter();
///Logs the number of guesses remaining

function guessCount() {

	document.getElementById("numberGuesses").innerHTML = guessLeft;
}

guessCount();


///Logs whether a guess was correct or incorrect by running the guess array against the new word array of randomizer array as I called it.

document.onkeyup = function(event) {
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	var map = {}, result = [], i;
for (i = 0; i < userGuess.length; ++i) {
    map[userGuess[i]] = 1;
}

for (i = 0; i < randomizer.length; ++i) {
    if (map[randomizer[i]] === 1) {
        result.push(randomizer[i]);
        console.log(result);
        // avoid returning a value twice if it appears twice in array 2
        var newDisplay = userGuess.replace("&nbsp;_ &nbsp;", userGuess);
 		document.getElementById("word").innerHTML = newDisplay;
    }

}
return result;
}



//check if key was used

// function keyCheck(charStr) {

// 	if(userGuess.includes(charStr)) {

// 		return false;
// 	}
// 	else{
// 		userGuess.push(charStr);

// 		if (randomizer.toLowerCase().includes(charStr)){

// 			gameStart(charStr); 
// 		}

// 		else {

// 			guessLeft--;

// 			document.getElementById("letterGuessed").innerHTML = document.getElementById("letterGuessed").innerHTML + charStr + " ";
// 		}
// 	}

// 	}

// 	keyCheck();
