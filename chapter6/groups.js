class Group{
    //taken from teacher
    constructor() {
        this.members = [];
    }

    add(val){
        if (!this.has(val)){ this.members.push(val);}
    }
    
    has(val){
        for(let each of this.members){
            if (each === val) { return true; }
        }
        return false;
    }

    delete(val){
        if (this.has(val)){
            this.members.splice(this.members.indexOf(val), 1);
        }
    }

    displayAll(){
        for(let each of this.members){
            console.log(each);
        }
    }

    //calling a static method allows you to create a Group instance without the need to do 
    //new Group cause it's done in the static function
    static from(obj){
        let FromObj = new Group;
        for (let each of obj){
            FromObj.add(each);
        }
        return FromObj;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

let group = Group.from([10, 20, 10, 20, 20, 10]);
group. displayAll();
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
group. displayAll();
console.log(group.has(10));
// → false