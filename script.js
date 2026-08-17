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
    display.textContent= number;
}

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayUpdate(button.textContent);
    });
});