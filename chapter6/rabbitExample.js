console.log("sup");

class Rabbit {
    constructor(type, color='black') {
        this.type = type;
        this.color = color;
    }
    speak(line){
        document.getElementById("demo").innerHTML = 
        `<p>The <span style='color: ${this.color}'>${this.type} rabbit</span> says '${line}'</p>`;
    }
    toString(){
        return `a ${this.type} rabbit`;
    }
}

let whiteRabbit = new Rabbit("white","white");
whiteRabbit.speak("I'm late!")

let weirdRabbit = new Rabbit("weird","green");
weirdRabbit.speak("gimme chocolate covered fishsticks and pickles.");
console.log(weirdRabbit.toString());
console.log(String(weirdRabbit));


// -------------------------------------------------------------------------------------------

const toStringSymbol = Symbol("toString");
Array.prototype.toStringSymbol = function() {
    return `${this.length} cm of blue yarn`;
};

console.log([1,2,8].toStringSymbol());

// -------------------------------------------------------------------------------------------

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};

console.log(varyingSize.size);


console.log ("end");
