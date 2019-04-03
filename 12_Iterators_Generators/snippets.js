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
        this.messages =[];
    }
    add(message){
        this.messages.push({ message, timestamp : Date.now() });
    }
}


/*  */