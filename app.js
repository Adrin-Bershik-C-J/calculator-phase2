var display = document.getElementById("display");
var currentInput = "0";
var operator = null;
var previousInput = null;
var waitingForOperand = false;
function updateDisplay() {
    if (display) {
        display.textContent = currentInput;
    }
}
function inputNumber(num) {
    if (waitingForOperand) {
        currentInput = num;
        waitingForOperand = false;
    }
    else {
        currentInput = currentInput === "0" ? num : currentInput + num;
    }
    updateDisplay();
}
function inputOperator(nextOperator) {
    var inputValue = parseFloat(currentInput);
    if (previousInput === null) {
        previousInput = inputValue;
    }
    else if (operator) {
        var currentValue = previousInput || 0;
        var newValue = performCalculation();
        currentInput = String(newValue);
        previousInput = newValue;
    }
    waitingForOperand = true;
    operator = nextOperator;
    updateDisplay();
}
function performCalculation() {
    var prev = parseFloat(String(previousInput));
    var current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current))
        return current;
    switch (operator) {
        case "+":
            return prev + current;
        case "-":
            return prev - current;
        case "*":
            return prev * current;
        case "/":
            return current !== 0 ? prev / current : 0;
        default:
            return current;
    }
}
function calculate() {
    var inputValue = parseFloat(currentInput);
    if (previousInput !== null && operator) {
        var newValue = performCalculation();
        currentInput = String(newValue);
        previousInput = null;
        operator = null;
        waitingForOperand = true;
    }
    updateDisplay();
}
function clearDisplay() {
    currentInput = "0";
    previousInput = null;
    operator = null;
    waitingForOperand = false;
    updateDisplay();
}
function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    }
    else {
        currentInput = "0";
    }
    updateDisplay();
}
document.addEventListener("keydown", function (event) {
    var key = event.key;
    if ((key >= "0" && key <= "9") || key === ".") {
        inputNumber(key);
    }
    else if (key === "+" || key === "-" || key === "*" || key === "/") {
        inputOperator(key);
    }
    else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    }
    else if (key === "Escape" || key === "c" || key === "C") {
        clearDisplay();
    }
    else if (key === "Backspace") {
        deleteLast();
    }
});
