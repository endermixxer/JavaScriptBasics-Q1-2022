//ts-check

const button = document.getElementById("guessing-game");

console.log(button)

button?.addEventListener("click", function(){
 console.log("Clicked");
let answer = 7;
    let guess = Number(
        prompt("Pick a nmber between 1 and 10")
        );

        if (answer == guess) {
    alert("You Won!")            


        }
        if (answer != guess) {
            alert("Incorrect try again, note you only have 3 tries before you start over")
        }
console.log(guess);
} );