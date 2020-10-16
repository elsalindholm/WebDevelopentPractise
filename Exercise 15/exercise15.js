var clickCount = 0;
var divisibleByThree = false;
var divisibleByFive = false;

function incClickCount(val) {
  clickCount += val;
  checkNum();
  updateCounter();
}

//function to reset counter to 0//
function resetCounter() {
  clickCount = 0;
  updateCounter()
}

function updateCounter() {
  var message = "Click count: " + clickCount;

  if (divisibleByThree == true) {
    message += " fizz";
  }
  if (divisibleByFive == true) {
    message += " buzz"
  }
  document.getElementById("counter").innerHTML = message;
}

function checkNum() {
  divisibleByThree = dividesEvenly(clickCount, 3);
  divisibleByFive = dividesEvenly(clickCount, 5);
}


function dividesEvenly(num1, num2) {
  if (num1 % num2 == 0) {
    return true;
  } 
  return false;
}





/*function checkNum() {
  if (clickCount % 3 == 0) {
    divisibleByThree = true;
  } else {
    divisibleByThree = false;
  }
  if (clickCount % 5 == 0) {
    divisibleByFive = true;
  } else {
    divisibleByFive = false;
  }
}*/