
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector('.calculatorScreen');
  display.value = calculator.displayValue;
}

updateDisplay();

