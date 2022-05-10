//document selectors
const buttons = document.querySelectorAll("button");
//important global variables
let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;

//connect buttons to keyboard
window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`button[data-key=${e.key}]`);
    key.click();
});

//update display function
function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = displayValue;
    if (displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    };
}

updateDisplay();
 
//basic math operations functions
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 === 0) { return 'nice try' }
    return num1 / num2;
}

//operator function
function operate(operator, num1, num2) {
    if (operator === "+") { return add(num1, num2) }
    else if (operator === "-") { return subtract(num1, num2) }
    else if (operator === "*") { return multiply(num1, num2) }
    else { return divide(num1, num2) };
}

//funcion to update the display when buttons are clicked
function clickButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].classList.contains('operand')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            } else if (buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if (buttons[i].classList.contains('decimal')) {
                inputDecimal();
                updateDisplay();
            } else if (buttons[i].classList.contains('percent')) {
                inputPercent(displayValue);
                updateDisplay();
            } else if (buttons[i].classList.contains('sign')) {
                inputSign(displayValue);
                updateDisplay();
            } else if (buttons[i].classList.contains('clear')) {
                clearDisplay();
                updateDisplay();
            }
        })
    }
}

clickButton();

