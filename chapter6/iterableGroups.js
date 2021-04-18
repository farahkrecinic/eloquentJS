class GroupIterator {
    constructor(group){
        this.x = 0;
        this.members = group.members;
    }

    next(){
        if (this.x >= this.members.length) return { done: true};
        let value = this.members[this.x];
        this.x++;
        return {value, done: false};
    }
}


for (let value of Group.from(["a", "b", "c", "a", "f"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c