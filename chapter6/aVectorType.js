class Vec {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    plus(vic){
        return new Vec((this.x + vic.x), (this.y + vic.y));
    }

    minus(vic){
        return new Vec((this.x - vic.x), (this.y - vic.y));
    }

    get length(){
        return Math.hypot(this.x,this.y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5