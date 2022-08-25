//@ts-check

const button = document.getElementById("guessing-game");

console.log(button);

button?.addEventListener("click", function () {
	// console.log("Clicked!");
	// random returns a number between 0 and 1
	// multiply it by 10 and add then get the whole
	// number using floor.
	let answer = Math.floor(Math.random() * 200 + 1);
	let numberOfGuesses = 10;
	let usedGuesses = 1;
	let isGameOver = false;

	while (isGameOver == false) {
		
		usedGuesses = usedGuesses + 1;
		if (usedGuesses > numberOfGuesses) {
			alert("You lose! No more guesses!");
			isGameOver = true;
		}  else {
			let guess = Number(prompt("Pick a number between 1 and 200"));
			if (answer == guess) {
				alert("You won!");
				isGameOver = true;
			}  else {
				if (guess < answer) {
					alert("Too low! ");
				} else {
					alert("Too high! ");
				}
			}
		}

		
	
}});