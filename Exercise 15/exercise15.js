var clickCount = 0;

//function to increase counter by 1//
function incClickCount(val) {
  clickCount += val;
  updateCounter();
}

/*function to increase counter by 3//
function increaseByThree() {
  clickCount += 3;
  updateCounter();
}*/

/*function to increase counter by 5//
function increaseByFive() {
  clickCount += 5;
  updateCounter();
}*/

//function to reset counter to 0//
function resetCounter() {
  clickCount = 0;
  updateCounter()
}

function updateCounter() {
  document.getElementById("counter").innerHTML = "Click count: "+ clickCount;
}