
document.addEventListener("DOMContentLoaded", function()  {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function()  {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!")
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

 runGame("addition");

})
/**
 * The main game "Loop" called when the Script is first loaded 
 * and after the user's answer has been processed
 */

function runGame(gameType) {
    //Create two random num btw 1 and 25
    let num1 = Math.floor(Math.random()*25)+1
    let num2 = Math.floor(Math.random()*25)+1
    //create a variable to store the result of the operation
    //    console.log(`num1: ${num1} | num2:${num2}`);
    //Check which type of question we are dealing with, then call the correct method
    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2); 
    } else {
        alert(`unknown game type: ${gameType}`);
        throw `unknown game type: ${gameType}. Aborting!`;
    }

}

function checkAnswer() {

}
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = parseInt(document.getElementById("operator").innerText);

    if(operator === "+"){
        return[operand1 + operand2, "addition"];
    } else {
        alert(`unknown operator ${operator}`)
        throw `unknown operator ${operator}. Aborting!`;
    }

}
function incrementScore() {

}
function incrementWrongAnswer() {

}
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}
function displaySubtractionQuestion() {

}
function displayMultiplyQuestion() {

}
