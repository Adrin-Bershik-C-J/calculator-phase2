let display: HTMLElement | null = document.getElementById("display");
let currentInput: string = "0";
let operator: string | null = null;
let previousInput: number | null = null;
let waitingForOperand: boolean = false;

function updateDisplay(): void {
  if (display) {
    display.textContent = currentInput;
  }
}

function inputNumber(num: string): void {
  if (waitingForOperand) {
    currentInput = num;
    waitingForOperand = false;
  } else {
    currentInput = currentInput === "0" ? num : currentInput + num;
  }
  updateDisplay();
}

function inputOperator(nextOperator: string): void {
  const inputValue: number = parseFloat(currentInput);

  if (previousInput === null) {
    previousInput = inputValue;
  } else if (operator) {
    const currentValue: number = previousInput || 0;
    const newValue: number = performCalculation();

    currentInput = String(newValue);
    previousInput = newValue;
  }

  waitingForOperand = true;
  operator = nextOperator;
  updateDisplay();
}

function performCalculation(): number {
  const prev: number = parseFloat(String(previousInput));
  const current: number = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return current;

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

function calculate(): void {
  const inputValue: number = parseFloat(currentInput);

  if (previousInput !== null && operator) {
    const newValue: number = performCalculation();
    currentInput = String(newValue);
    previousInput = null;
    operator = null;
    waitingForOperand = true;
  }

  updateDisplay();
}

function clearDisplay(): void {
  currentInput = "0";
  previousInput = null;
  operator = null;
  waitingForOperand = false;
  updateDisplay();
}

function deleteLast(): void {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}

document.addEventListener("keydown", function (event: KeyboardEvent): void {
  const key: string = event.key;

  if ((key >= "0" && key <= "9") || key === ".") {
    inputNumber(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    inputOperator(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Escape" || key === "c" || key === "C") {
    clearDisplay();
  } else if (key === "Backspace") {
    deleteLast();
  }
});
