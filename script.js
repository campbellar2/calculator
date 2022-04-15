//document selectors
const btn0 = document.getElementById("0")
const btn1 = document.getElementById("1")
const btn2 = document.getElementById("2")
const btn3 = document.getElementById("3")
const btn4 = document.getElementById("4")
const btn5 = document.getElementById("5")
const btn6 = document.getElementById("6")
const btn7 = document.getElementById("7")
const btn8 = document.getElementById("8")
const btn9 = document.getElementById("9")
const btnDecimal = document.getElementById(".")
const btnEqual = document.getElementById("=")
const btnAdd = document.getElementById("+")
const btnSubtract = document.getElementById("-")
const btnMultiply = document.getElementById("*")
const btnDivide = document.getElementById("/")
const btnClear = document.getElementById("clear")

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