// Your code here.
function loop(n, testFunc, updateFunc, bodyFunc) {
    for(n; testFunc(n); n=updateFunc(n)) {
      bodyFunc(n);
    }
  }
  
  
  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1