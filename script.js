//document selectors
const buttons = document.querySelectorAll("button");


//connect buttons to keyboard
window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`button[data-key=${e.key}]`);
    key.click();
});

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
    return num1 / num2;
}

//operator function
function operate(operator, num1, num2) {
    if (operator === "+") { return add(num1, num2) }
    else if (operator === "-") { return subtract(num1, num2) }
    else if (operator === "*") { return multiply(num1, num2) }
    else { return divide(num1, num2) };
}