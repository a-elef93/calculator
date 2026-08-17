let firstNumber;
let operator;
let secondNumber;

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
    const display = document.querySelector(".display");
    if(display.textContent === "0")
    {
        display.textContent = number;
    }
    else{
        display.textContent += number;
    }
}
 //UPDATE THE DISPLAY EVERY TIME THE USER CLICK AN OPERATOR. EVERY CONSECUTIVE CLICK REPLACES THE OPERATOR SO THEY DONT STUCK 
function displayUpdateOperator(operator){
    const display = document.querySelector(".display");
    //CHECK WHAT THE LAST CHARACTER WAS
    let lastCharacter = display.textContent[display.textContent.length -1];
    //IF ITS A NUMBER 
    if(!isNaN(lastCharacter)){
        display.textContent += operator;
    }
    //OR REPLACE THE OPERATOR
    else{
        display.textContent = display.textContent.slice(0, -1) + operator;
    }
}

//RESET THE DISPLAY TO VALUE '0' 
function resetDisplay(){
    const display = document.querySelector(".display");
    display.textContent = "0";
}

function updateNumbers(){
    const display = document.querySelector(".display");
    console.log(display.textContent);
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
        updateNumbers();
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