let range = (a, b, step=1) => {
  let rangeArr = [];
  for (let n = a; rangeArr.length < (Math.abs(a-b))+1; n += step){
    rangeArr.push(n);
  }
  return rangeArr;
}

let sum = numArray => {
  let ans = 0;
  for (let num of numArray){
    ans += num;
  }
  return ans;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(5, 2, -1)));
// → 55