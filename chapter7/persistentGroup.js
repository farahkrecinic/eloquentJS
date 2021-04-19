class PGroup{
    //taken from teacher
    constructor(members) {
        this.members = members;
    }

    add(val){
        let newPGroup = new PGroup([]);
        for (let each of this.members){
            newPGroup.members.push(each);
        }
        if (!this.has(val)){ newPGroup.members.push(val); }
        return newPGroup;
    }
    
    has(val){
        for(let each of this.members){
            if (each === val) { return true; }
        }
        return false;
    }

    delete(val){
        let newPGroup = new PGroup([]);
        for (let each of this.members){
            newPGroup.members.push(each);
        }
        if (this.has(val)){
            newPGroup.members.splice(newPGroup.members.indexOf(val), 1);
        }
        return newPGroup;
    }
}
//taken from teacher
PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(a.members);
console.log(ab.members);
console.log(b.members);
console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false

// Teacher's PGroup
class TPGroup {
    constructor(members) {
      this.members = members;
    }
  
    add(value) {
      if (this.has(value)) return this;
      return new TPGroup(this.members.concat([value]));
    }
  
    delete(value) {
      if (!this.has(value)) return this;
      return new TPGroup(this.members.filter(m => m !== value));
    }
  
    has(value) {
      return this.members.includes(value);
    }
}

TPGroup.empty = new TPGroup([]);

let q = TPGroup.empty.add("q");
let qr = q.add("r");
let r = qr.delete("q");

console.log(q.members);
console.log(qr.members);
console.log(r.members);
console.log(r.has("r"));
// → true
console.log(q.has("r"));
// → false
console.log(r.has("q"));
// → false