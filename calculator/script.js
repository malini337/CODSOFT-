const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstValue = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value)) {
      currentInput += value;
      display.value = currentInput;
    }

    else if (value === "C") {
      currentInput = "";
      operator = "";
      firstValue = "";
      display.value = "";
    }

    else if (value === "=") {
      if (firstValue && operator && currentInput) {
        display.value = eval(firstValue + operator + currentInput);
        currentInput = display.value;
        operator = "";
        firstValue = "";
      }
    }

    else {
      operator = value;
      firstValue = currentInput;
      currentInput = "";
    }
  });
});
