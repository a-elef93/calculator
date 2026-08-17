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

function displayUpdate(number){
    // let n = parseInt(number);
    const display = document.querySelector(".display");
    if(display.textContent === "0")
    {
        display.textContent = number;
    }
    else{
        display.textContent += number;
    }

}
function resetDisplay(){
    const display = document.querySelector(".display");
    display.textContent = "0";
}

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayUpdate(button.textContent);
    });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayUpdate(button.textContent);
    })
})

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    resetDisplay();
});