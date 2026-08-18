let firstNumber = null;
let operator = null;
let waitSecondNumber = false;
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "*", "/"];

const display = document.querySelector(".display");

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
    if(b === 0){
        return "Error";
    }
    else{
        return a / b;
    }
}

function calculate(op , num1, num2 ){
    if (op === "+") {
        return add(num1, num2);
    } else if (op === "-") {
        return substract(num1, num2);
    } else if (op === "×") {
        return multiply(num1, num2);
    } else if (op === "÷") {
        return divide(num1, num2);
    }
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
function displayUpdateOperator(clickedOperator){
    const currentNumber = Number(display.textContent);
    if (display.textContent === "Error") {
        return;
    }
    //IF CONSECUTIVE OPERATORS PRESSES THEN IT GETS REPLACED
    if (operator !== null && waitSecondNumber) {
        operator = clickedOperator;
        return;
    }
    //OPERATOR PRESSED SO WE SAVE THE 1ST INPUT
    if (firstNumber === null) {
            firstNumber = currentNumber;
    }
    //IT HAS BEEN PRESSED ALREADY SO WE HAVE TO CALCULATE
    else if(operator !== null){
        const result = calculate(operator, firstNumber , currentNumber);
        if (result === "Error") {
            firstNumber = null;
            operator = null;
            waitSecondNumber = true;
            return;
        }
        //DISPLAY SAVE THE RESULT TO firstNumber SO WE CAN CONTINUE CONSECUTIVE CALCULATIONS
        display.textContent = result;
        firstNumber = result;
    }
    //SAVE NEW OPERATOR
    operator = clickedOperator;
    waitSecondNumber = true;
}

//CALCULATE RESULT WHEN "=" IS PRESSED
function calculateResult(){
    //CHECK IF OPERATOR HAS BEEN PRESSED OR SECOND NUMBER IS INPUTED
    if(operator === null || waitSecondNumber || display.textContent === "Error"){
        return;
    }
    const secondNumber = Number(display.textContent);
    const result = calculate(operator,firstNumber,secondNumber);
    display.textContent = result;
    if (result === "Error") {
        firstNumber = null;
    } else {
        firstNumber = result;
    }
    operator = null;
    waitSecondNumber = true;
}

//RESET THE DISPLAY TO VALUE '0' WHEN CLEAR BUTTON IS PRESSED
function resetDisplay(){
    display.textContent = "0";
    firstNumber = null;
    operator = null;
    waitSecondNumber = false;
}

function inputDecimal(){
    if(!display.textContent.includes(".")){
        display.textContent += ".";
    }
}

function erase(){
    display.textContent = display.textContent.slice(0, -1);
    if(display.textContent === ""){
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
    calculateResult();
});

//CLICK ON DECIMAL BUTTON
const decimalButton = document.querySelector(".decimals");
decimalButton.addEventListener("click", () => {
    inputDecimal();
});

//CLICK ON BACKSPACE BUTTON
const backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", () => {
    erase();
});

//KEYBOARD FUNCTION
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if(numbers.includes(key)){
        displayUpdateNumber(Number(key));
    }
    if(operators.includes(key)){
        if(key === "*"){
            displayUpdateOperator("×");
        }
        else if(key === "/"){
            displayUpdateOperator("÷");
        }
        else if(key === "+"){
            displayUpdateOperator("+");
        }
        else{
            displayUpdateOperator("-");
        }
       
    }
    if(key === "Enter"){
        calculateResult();
    }    
    if(key === "Backspace"){
        erase();
    }
    if(key === "Escape"){
        resetDisplay();
    }
    if(key === "."){
        inputDecimal();
    }
});