// Your code here.
function deepEqual(a, b) {
    if (a === null && b === null) { return true; }
    else if (a !== null && b !== null) {
      if (typeof a !== typeof b) { return false; }
        if (typeof a === 'object') { 
        	let aRay = Object.keys(a);
          	let bRay = Object.keys(b);
          	if (JSON.stringify(aRay)!=JSON.stringify(bRay)) { return false; }
        	for(let aKey of aRay){ 
              return deepEqual(a[aKey], b[aKey]);
            }
        } else if ( a === b) { return true; }
      	else { return false; }
    } else if (a !== null || b !== null) { return false;}
  }


  let obj = {here: {is: "an"}, object: {left: {go: "deeper"}}};
  let obj2 = {here: {is: "an"}, object: {left: {go: "deeper"}, even: "deeper"}};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, obj2));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: {left: {go: "deeper"}}}));
  // → true


  // with the fix fromlooking at the professor's code
  function deepEqual(a, b) {
    if (a === null && b === null) { return true; }
    else if (a !== null && b !== null) {
      if (typeof a !== typeof b) { return false; }
        if (typeof a === 'object') { 
        	let aRay = Object.keys(a);
          	let bRay = Object.keys(b);
          	if (JSON.stringify(aRay)!=JSON.stringify(bRay)) { return false; }
        	for(let aKey of aRay){ 
             if (!deepEqual(a[aKey], b[aKey])) { return false; }
            }
        } else if ( a === b) { return true; }
      	else { return false; }
    } else if (a !== null || b !== null) { return false;}
  	return true;
  }

//professor's code
function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
 }
  
