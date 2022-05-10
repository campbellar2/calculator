//document selectors
const buttons = document.querySelectorAll("button");
//important global variables
let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
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

//when user clicks on operand button
function inputOperand(operand) {
    if (firstOperator === null) {
        
        if (displayValue === '0' || displayValue === 0) {
            //first click, initializes first operand
            displayValue = operand;
        } else if (displayValue === firstOperand) {
            //enables continued calculation after hitting equals
            displayValue = operand;
        } else {
            //enables multidigit operands
            displayValue += operand;
        }
    } else {
        if (displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}

function inputOperator(operator) {
    if (firstOperator != null && secondOperator === null) {
        //handling chain operations
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(FirstOperator, Number(firstOperand), Number(secondOperand));
        displayValue = result;
        firstOperand = displayValue;
        result = null; 
    } else if (firstOperator != null && secondOperator != null) {
        //chain operations after having second operator
        secondOperand = displayValue;
        result = operate(SecondOperator, Number(firstOperand), Number(secondOperand));
        secondOperator = operator
        displayValue = result;
        firstOperand = displayValue;
        result = null;
    } else {
        //standard handling of first operator
        firstOperator = operator;
        firstOperand = displayValue;
    }
}