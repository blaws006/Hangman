//Global variables

var artists = ['kendrick lamar', 'pimp c', 'tupac shakur'];
var wins, guessesLeft, roundWord, guessedLetter, wordSplit, wordBlank, validLetters


function gameStart() {
	guessesLeft = document.getElementById('guesses-remaining').textContent = 10;
	wins = document.getElementById('win').textContent = 0;
	roundWord = artists[Math.floor(Math.random() * 3)];
	validLetters = roundWord.split('');
	wordSplit = roundWord.split('');
	for (var i = 0; i < wordSplit.length; i++) {
		if (typeof wordSplit[i] === 'string' && wordSplit[i] !== ' ') {
			wordSplit[i] = '_';
		} else {
			wordSplit[i] = '&nbsp;';
		}
	};

	wordBlank = document.getElementById('word').innerHTML = wordSplit.join(' ').toString();

	console.log(wordSplit);
	console.log(roundWord);
	console.log(wordBlank);
	console.log(validLetters)
}

gameStart();


document.addEventListener('keydown', function (event) {
	var keyName = event.key;
	if (keyName == 'a' || keyName == 'b' || keyName == 'c' || keyName == 'd' || keyName == 'e' || keyName == 'f' || keyName == 'g' || keyName == 'h' || keyName == 'i' || keyName == 'j' || keyName == 'k' || keyName == 'l' || keyName == 'm' || keyName == 'n' || keyName == 'o' || keyName == 'p' || keyName == 'q' || keyName == 'r' || keyName == 's' || keyName == 't' || keyName == 'u' || keyName == 'v' || keyName == 'w' || keyName == 'x' || keyName == 'y' || keyName == 'z') {
	console.log(keyName);
	}
})