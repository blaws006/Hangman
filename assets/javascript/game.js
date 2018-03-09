//Global variables

var artists = ["kendrick lamar", "pimp c", "tupac shakur"];
var wins, guessesLeft, roundWord, guessedLetter, wordSplit, wordBlank

function gameStart() {
	guessesLeft = document.getElementById("guesses-remaining").textContent = 10;
	wins = document.getElementById("win").textContent = 0;
	roundWord = artists[Math.floor(Math.random() * 3)];
	wordSplit = roundWord.split("")
	for (var i = 0; i < wordSplit.length; i++) {
		if (typeof wordSplit[i] === "string" && wordSplit[i] !== " ") {
			wordSplit[i] = "_";
		} else {
			wordSplit[i] = "&nbsp;";
		}

	};
	wordBlank = document.getElementById("word").innerHTML = wordSplit.join(" ").toString();

	console.log(wordSplit);
	console.log(roundWord);
	console.log(wordBlank);
}

gameStart();