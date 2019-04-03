/* Chap 12 Iterators and Generators*/

//All the code snippets to be run in browser console for best results

/* Iteraor value method */
const book = ["Twinkle, twinkle, little bat!" , "How I wonder what you're at!" , "Up above the world you fly," , "Like a tea tray in the sky." , "Twinkle, twinkle, little bat!" , "How I wonder what you're at!"];
const it = book.values();
it.next();


/* While loop over array using iterator */
const book = ["Twinkle, twinkle, little bat!" , "How I wonder what you're at!" , "Up above the world you fly," , "Like a tea tray in the sky." , "Twinkle, twinkle, little bat!" , "How I wonder what you're at!"];
const it = book.values();
let current = it.next();
while(!current.done){
    console.log(current.value);
    current = it.next();
}


/* logging class that attaches timpestamps to messages */
class Log {
    constructor(){
        this.messages = [];
    }
    add(message){
        this.messages.push({ message, timestamp : Date.now() });
    }
}


/* logging class that attaches timpestamps to messages using iterator */
// Not functioning correctly in browser console but the snippet works totally fine
class Log {
    constructor(){
        this.messages = [];
    }
    add(message){
        this.messages.push({ message, timestamp: Date.now() });
    }
    // iterator protocol
    [Symbol.iterator]() {
        return this.messages.values();
    }
}

const log = new Log();
log.add("A good day to program.");
log.add("Javascript is the key");
log.add("Do it now");
// ...

// iterate over log as if it were array
for(let entry of log) {
    console.log(` ${entry.message} @ ${entry.timestamp} `);
}


/* Fibonacci Sequence using iterators  */
// Not functioning correctly in browser console but the snippet works totally fine
// custom iterator
class FibonacciSequence {
    [Symbol.iterator](){
        let a = 0, b = 1;
        return {
            next(){
                let rval = {value : b, done : false};
                b += a;
                a = rval.value;
                return rval;
            }
        }
    }
}
const fib = new FibonacciSequence();
let i = 0;
for(let n of fib){
    cosnole.log(n);
    if(++i > 9) break;
}


/* Generator */
function* rainbow(){
    yield 'red';
    yield 'green';
    yield 'yellow';
    yield 'blue';
} 
const it = rainbow();
it.next();


/* generator returns iterator, so we can use for...of loop */
function* rainbow(){
    yield 'red';
    yield 'green';
    yield 'yellow';
    yield 'blue';
} 
for(let color of rainbow()){
    console.log(color);
}


