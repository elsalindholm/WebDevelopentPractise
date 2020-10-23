function updateDisplay() {
  document.getElementById("calculatorScreen").innerHTML = leftOperand + ' ' + operator + ' ' + rightOperand + ' ' + result;
}

var leftOperand = "";
var operator = "";
var rightOperand = "";
var result = "";

function inputNumber(val) {
  if (operator !== "") {
    rightOperand += val;
  } else {
    leftOperand += val;
  }
  updateDisplay();
}

function inputOperator(op) {
  if (leftOperand !== "" && operator == "") {
    operator = op;
  }
  updateDisplay();
}

function clearDisplay() {
  leftOperand = "";
  operator = "";
  rightOperand = "";
  equalsSign = "";
  result = "";
  updateDisplay();
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function equals() {
  if (leftOperand == "" || operator == "" || rightOperand == "") {
    return;
  }
  var leftNum = parseInt(leftOperand, 10);
  var rightNum = parseInt(rightOperand, 10);
  var res;
  switch (operator) {
    case "+":
      res = add(leftNum, rightNum);
      break;
    case "-":
      res = subtract(leftNum, rightNum);
      break;
    case "x":
      res = multiply(leftNum, rightNum);
      break;
    case "/":
      res = divide(leftNum, rightNum);
      break;
  }
  result = '= ' + res.toString();
  updateDisplay();
}