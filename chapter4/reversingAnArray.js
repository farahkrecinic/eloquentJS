const reverseArray = yourArray => {
  newArray = [];
  for (let each of yourArray){
    newArray.unshift(each);
  }
  return newArray;
}

const reverseArrayInPlace = yourArray => {
  let arrayLength = yourArray.length;
  for (let n = 0; n < (arrayLength*2); n+=2){
    yourArray.unshift(yourArray[n]);
  }
  for (let n = 0; n < arrayLength; n++){
    yourArray.pop();
  }
}

// teacher's answer
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}