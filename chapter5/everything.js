function every(array, test) {
    // Your code here.
    let bool = true;
    for(let el of array){
      bool = bool && test(el);
    }
    return bool;
  }

  //with reduce
  function every(array, test) {
    // Your code here.
    let bool = true;
    bool = array.reduce((bool, el) => bool && test(el), bool);
    return bool;
  }

  //with some
  function every(array, test) {
    // Your code here.
    let bool = true;
    bool = !(array.some(el => !test(el)));
    return bool;
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true