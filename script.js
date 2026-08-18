let firstNumber = null;
let operator = null;
let secondNumber = null;
let waitSecondNumber = false;

const display = document.querySelector(".display");


function operate(op , num1, num2 ){

}

function add(a, b){
    return a + b;
}

function substract(a , b){
    return a - b;
}

function multiply(a , b){
    return a * b;
}

function divide(a , b){
    return a / b;
}

//UPDATE THE DISPLAY EVERY TIME THE USER CLICKS A NUMBER BUTTON
function displayUpdateNumber(number){
    if(display.textContent === "0" || waitSecondNumber){
        display.textContent = number;
        waitSecondNumber =false;
    }
    else{
        display.textContent += number;
    }
}

 //UPDATE THE DISPLAY EVERY TIME THE USER CLICK AN OPERATOR. EVERY CONSECUTIVE CLICK REPLACES THE OPERATOR SO THEY DONT STUCK 
function displayUpdateOperator(operator){
    const currentNumber = Number(display.textContent);
    if (display.textContent === "Error") {
        return;
    }
    //IF CONSECUTIVE OPERATORS PRESSES THEN IT GETS REPLACED
    if (operator !== null && waitingForSecondNumber) {
        operator = clickedOperator;
        return;
    }
    //CHECK WHAT THE LAST CHARACTER WAS
    let lastCharacter = display.textContent[display.textContent.length -1];
    //IF ITS A NUMBER 
    if(waitSecondNumber){
        firstNumber = Number(display.textContent);
        if(!isNaN(lastCharacter)){
            display.textContent += operator;
            console.log(firstNumber);
            resetDisplay();
        }
        //OR REPLACE THE OPERATOR
        else{
            display.textContent = display.textContent.slice(0, -1) + operator;
        }
        waitSecondNumber =false;
    }

}

//RESET THE DISPLAY TO VALUE '0' 
function resetDisplay(){
    if(waitSecondNumber){
        display.textContent = "";
    }
    //DISPLAY ZERO ONLY WITH THE CLEAR BUTTON
    else{
        display.textContent = "0";
    }
}

//CLICKS ON NUMBERS
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayUpdateNumber(button.textContent);
    });
});

//CLICKS ON OPERATORS AND SAVE THE NUMBER
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayUpdateOperator(button.textContent);
    })
})

//CLICK ON CLEAR BUTTON
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    resetDisplay();
});

//CLICK ON EQUALS BUTTON
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    const display = document.querySelector(".display"); 
    console.log(display.textContent);
} )