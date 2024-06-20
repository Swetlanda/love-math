// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// added event listener, use TagName for all buttons
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    // return of getElementByTagName is Array so we are using a loop for all eleements inside (instead of let i = 0;etc)
    for (let button of buttons) {
        button.addEventListener("click", function () {

            // getAttribute get the value of clicked button to check if this is Submit button using data-type - Submit, and other data-type for each of the math operations
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame() {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}


function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}