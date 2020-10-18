function buttin() {
  var myArray = [1, 2, 3, 4, 5];
  console.log("My array length: ", myArray.length);
  console.log("First: ", myArray[0]);
  myArray[0] = 10;
  console.log("First: ", myArray[0]);
  myArray.push(6);
  console.log(myArray);
  myArray.pop();
  console.log(myArray);
  myArray.unshift(0);
  console.log(myArray);
  myArray.splice(0, 1);
  console.log(myArray);
}

function buttin2() {
  var myArray = [4, 78, 306, 3, 62];
  for (var i = 0; i < myArray.length; i++) {
    
    if (myArray[i] > 200) {
      break;
    }
    console.log(myArray[i]);
  }
  // some other code
}

function buttin4() {
  var myArray = [];
  for (var i = 1; i < 11; i++) {
    var val = 5 * i;
    myArray.push(val);
  }
  console.log(myArray);
  console.log(i);
}

function madness() {
  var madArray = [[]];
  for (var i = 0; i < 5; i++) {
    var subarray = [];
    for (var j = 0; j < 3; j++) {
      subarray.push('inner ' + j.toString());
    }
    madArray.push(subarray);
  }
  console.log(madArray);
}

function buttin3() {
  var stuff = [1, 2, 3];
  // for of loop
  for (var thing of stuff) {
    thing++;
    console.log(thing);
  }

  stuff.forEach((thing) => {
    console.log(thing);
  });

  return;
}

