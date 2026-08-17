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
    console.log(operator);
    const display = document.querySelector(".display");
    let lastCharacter = display.textContent[display.textContent.length -1];
    if(!isNaN(lastCharacter)){
        display.textContent += operator;
    }
    else{
        display.textContent = display.textContent.slice(0, -1) + operator;
    }
}

//RESET THE DISPLAY TO VALUE '0' 
function resetDisplay(){
    const display = document.querySelector(".display");
    display.textContent = "0";
}

//CLICKS ON NUMBERS
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayUpdateNumber(button.textContent);
    });
});

//CLICKS ON OPERATORS
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