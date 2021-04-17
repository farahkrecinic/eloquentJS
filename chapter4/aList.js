//code from teacher. I didn't answer lists
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }

//mine
  function listToArray(list, array=[]){
    if (list.rest === null){ 
      array.push(list.value);
      return array;
    }
    array.push(list.value);
    return listToArray(list.rest, array);
  } 

  function prepend(val, list){
    return {value: val, rest: list};
  }

  function nth(list, n, i=0){
    if (n == i) { return list.value;  }
    if (list.rest === null){ return undefined; }
    return nth(list.rest, n, i+1);
  }

  //code from teacher
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  