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
               checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
document.getElementById("answer-box").addEventListener("keydown", function(event) {
    if (event.key==="Enter") {
        checkAnswer();
    }
})
runGame("addition");
   
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {

    document.getElementById("answer-box").value="";
    document.getElementById("answer-box").focus();

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        // if the gameType is addition, then display the Addition Question, otherwise alert & abort
        displayAdditionQuestion(num1, num2);

    } else if (gameType === "subtract") {
        // if the gameType is substraction, then display the Substruction Question, otherwise alert & abort
        displaySubtractQuestion(num1, num2);
    
    } else if (gameType === "multiply") {
        // if the gameType is multiply, then display the Multiply Question, otherwise alert & abort
        displayMultiplyQuestion(num1, num2);

    } else if (gameType === "division") {
        // if the gameType is division, then display the Division Question, otherwise alert & abort
        displayDivisionQuestion(num1, num2);
    
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    // Run the 2nd game and so on
    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    // get the values from operands and treat them as interger. get the operator
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    // retun Array - 2 values - 1st a Number/Answer, 2nd - "addition" to continue playing
    if (operator === "+") {
        return [operand1 + operand2, "addition"];

    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];

    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];

    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
            
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
     
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivisionQuestion(operand1, operand2) {
    operand1 = operand1 * operand2;
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById('operator').textContent = "/";
}