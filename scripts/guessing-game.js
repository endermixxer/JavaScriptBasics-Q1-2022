//@ts-check
const button = document.getElementById("Guessing-game");
console.log(button)
button?.addEventListener("click", function(){
    console.log("Clicked");
    let answer = 128;
    let guess = Number(
    prompt("Pick a number between 1 and 200")
    )
    if (answer == guess) {
        alert("You Won!")
    }
    if (answer != guess) {
        alert("Incorrect try again, note you only have 3 tries before you start over")
    }
    console.log(guess);
});















