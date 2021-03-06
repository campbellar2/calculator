//TODO List
//rounding function to fix display errors, numbers floating past display
//dbl click numbers -> 3 numbers
//pressing operator button multiple times in a row exponentially operates on display value
//make equals repeat the last operation on result, ie 1 + 1 = 2, press = you get 3, press again you get 4
//negative/positive operator time requirement
//NaN on display after dividing by 0 and getting 'nice try'
//backspace button/clear button && clear all button
//keyboard functionality


//document selectors
const buttons = document.querySelectorAll("button");
//important global variables
let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

//update display function
function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = displayValue;
    if (displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    };
}

updateDisplay();
 
//operator function
function operate(operator, num1, num2) {
    if (operator === "+") {
        return (num1 + num2);
    } else if (operator === "-") { 
        return (num1 - num2);
    } else if (operator === "*") { 
        return (num1 * num2);
    } else if (operator === "/") { 
        if (num2 === 0) {
            return 'nice try'
        } else {
            return (num1 / num2);
        };
    };
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
                updateDisplay();
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
        });
    };
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
    };
}

//when user clicks on operator button
function inputOperator(operator) {
    if (firstOperator != null && secondOperator === null) {
        //handling chain operations
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(firstOperator, Number(firstOperand), Number(secondOperand));
        displayValue = result;
        firstOperand = displayValue;
        result = null; 
    } else if (firstOperator != null && secondOperator != null) {
        //chain operations after having second operator
        secondOperand = displayValue;
        result = operate(secondOperator, Number(firstOperand), Number(secondOperand));
        secondOperator = operator
        displayValue = result;
        firstOperand = displayValue;
        result = null;
    } else {
        //standard handling of first operator
        firstOperator = operator;
        firstOperand = displayValue;
    };
}

//when user clicks on equals button
function inputEquals() {
    if (firstOperator === null) {
        //prevents hitting equals before operator is selected
        displayValue = displayValue;
    } else if (secondOperator != null) {
        //final result after chain operation
        secondOperand = displayValue;
        result = operate(secondOperator, Number(firstOperand), Number(secondOperand));
        displayValue = result;
        firstOperand = displayValue;
        secondOperand = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
    } else {
        //standard operation
        secondOperand = displayValue;
        result = operate(firstOperator, Number(firstOperand), Number(secondOperand));
        displayValue = result;
        firstOperand = displayValue;
        secondOperand = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
    };
}

//when user clicks on decimal button
function inputDecimal() {
    if (displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = 0;
        displayValue += '.';
    } else if (!displayValue.includes('.')) {
        displayValue += '.';
    };
}

//when user clicks on percent button
function inputPercent(num) {
    displayValue = (num / 100).toString();
}

//when user clicks on sign button
function inputSign(num) {
    displayValue = (num * -1).toString();
}

//when user clicks on clear button
function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}