//Global variables
var artists = ['kendrick lamar', 'pimp c', 'tupac shakur', 'chance the rapper'];
var wins, guessesLeft, roundWord, guessedLetter, wordSplit, wordBlank, validLetters, keyName, counter, list, letterGuessed, guessedLetter,
	letters

guessedLetter = [];

//Intializes the game
function gameStart() {
	letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
		'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
	]
	counter = 0;
	//Starts at 10
	guessesLeft = 15;
	document.getElementById('guesses-remaining').textContent = guessesLeft;

	//Starts at 0
	wins = 0;
	document.getElementById('win').textContent = wins;
	//Picks the word for the round
	roundWord = artists[Math.floor(Math.random() * 4)];
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
	};

	//Displays blanks
	wordBlank = document.getElementById('word').innerHTML = wordSplit.join(' ').toString();

	console.log(wordSplit);
	console.log(roundWord);
	console.log(wordBlank);
	console.log(validLetters);
}

gameStart();


document.addEventListener('keydown', function (event) {
	if (guessesLeft > 0) {

		keyName = event.key;




		for (var i = 0; i < letters.length; i++) {
			if (keyName === letters[i]) {
				counter++;
				guessesLeft -= 1;
				document.getElementById('guesses-remaining').textContent = guessesLeft;
				letters.splice(i, 1);
				guessedLetter.push(keyName);
				document.getElementById('guessed-letters').textContent = guessedLetter;
				console.log(letters);
			} 
		}

		/* if (keyName == 'a' || keyName == 'b' || keyName == 'c' || keyName == 'd' || keyName == 'e' || keyName == 'f' || keyName == 'g' || keyName == 'h' || keyName == 'i' || keyName == 'j' || keyName == 'k' || keyName == 'l' || keyName == 'm' || keyName == 'n' || keyName == 'o' || keyName == 'p' || keyName == 'q' || keyName == 'r' || keyName == 's' || keyName == 't' || keyName == 'u' || keyName == 'v' || keyName == 'w' || keyName == 'x' || keyName == 'y' || keyName == 'z') {


			// guessedLetter.splice(counter - 1, 0, keyName);
			
			guessedLetter.join();
			document.getElementById('guessed-letters').textContent = guessedLetter;
			
			console.log(counter)

		} */
	}
});
