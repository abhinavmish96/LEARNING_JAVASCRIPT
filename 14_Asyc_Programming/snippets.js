/* Chap 14 Asynchronous Programming*/

//All the code snippets to be run in browser console for best results

/* Callbacks */

// setTimeout function as callback
console.log('Before timeout: ' + new Date());
function f(){
    console.log('After timeout: ' + new Date());
}
setTimeout(f, 60*1000); // one minute
console.log('I happen after setTimeout!');
console.log('Me too!');

/* setInterval and clearInterval */
const start = new Date();
let i = 0;
const intervalId = setInterval(function(){
    let now = new Date();
    if(now.getMinutes() != start.getMinutes() || ++i>10) return clearInterval(intervalId);
    console.log(`${i} : ${now}`);
}, 5*1000);