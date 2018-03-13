//Global variables
var artists = ['kendrick lamar', 'tory lanez', 'meek mill', 'chance the rapper', 'vince staples', 'mick jenkins', 'logic', 'drake', 'earthgang', 'towkio'];
var wins, losses, guessesLeft, roundWord, guessedLetter, wordSplit, wordBlank, validLetters, keyName, counter, list, letterGuessed, guessedLetter,
	letters

wins = 0;
losses = 0;
//Intializes the game
function gameStart() {

	letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
		'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
	]
	counter = 0;
	//Starts at 15
	guessesLeft = 15;
	document.getElementById('guesses-remaining').textContent = guessesLeft;
	//Displays wins and losses
	document.getElementById('win').textContent = wins;
	document.getElementById('lose').textContent = losses;
	//Picks the word for the round
	roundWord = artists[Math.floor(Math.random() * 10)];
	//Splits the word by letter and shoots to global array
	validLetters = roundWord.split('');

	//Splits the word by letter and replaces letter with character
	wordSplit = roundWord.split('');
	for (var i = 0; i < wordSplit.length; i++) {
		if (typeof wordSplit[i] === 'string' && wordSplit[i] !== ' ') {
			wordSplit[i] = '_';
		} else {
			wordSplit[i] = '&nbsp;';
		}
		//Empties guessedLetter array and displays
		guessedLetter = [];
		document.getElementById('guessed-letters').textContent = guessedLetter;
	};

	//Displays blanks
	wordBlank = document.getElementById('word').innerHTML = wordSplit.join(' ');
}

gameStart();


document.addEventListener('keydown', function (event) {
	if (guessesLeft > 0) {

		keyName = event.key;
		// Loop through letters and if keyName equals the remaining letters.
		for (var i = 0; i < letters.length; i++) {
			if (keyName === letters[i]) {
				counter++;
				// Count down the amount of guesses and display the guesses (will not work if already guessed)
				guessesLeft -= 1;
				document.getElementById('guesses-remaining').textContent = guessesLeft;
				// Remove the guessed letter from the letter array and displayed (will not work if already guessed)
				letters.splice(i, 1);
				guessedLetter.push(keyName);
				document.getElementById('guessed-letters').textContent = guessedLetter;
				rightOrWrong();
				winOrLose();
			}
		}
	}

});

function rightOrWrong() {
	for (var i = 0; i < validLetters.length; i++) {
		//Evaluates whether the Key equals at least one of the validLetters
		if (keyName === validLetters[i]) {
			// If so, replace the underscore in the wordSplit array with the letter at the same index as in the validLetters array 	
			wordSplit.splice(i, validLetters[i].length, validLetters[i]);
			//And display the new wordBlank output in the #word div
			wordBlank = document.getElementById('word').innerHTML = wordSplit.join(' ')
		}
	};
};


function winOrLose() {
	//Evaluates whether not we can find an underscore value in the wordSplit array
	if (wordSplit.indexOf('_') === -1) {
		//If not you win
		document.querySelector('#playAgain').style.display = 'block'
		document.getElementById('playAgain').innerHTML = '<p>You Win!</p>' + '<button id="restart" type="button" class="btn btn-primary">Play Again</button>';
		activate();
		return wins++;

	} else if (wordSplit.indexOf('_') > -1 && guessesLeft === 0) {
		// If so and you've run out of turns, you lose
		document.querySelector('#playAgain').style.display = 'block'
		document.getElementById('playAgain').innerHTML = '<p>You Lose!</p>' + '<button id="restart" type="button" class="btn btn-danger">Play Again</button>';
		activate();
		return losses++;

	} 

}
//Functionality activated after you win or lose
function activate() {
	document.getElementById('restart').addEventListener('click', function (event) {
		event.preventDefault();
		document.getElementById('playAgain').style.display = 'none';
		gameStart();
	})
}