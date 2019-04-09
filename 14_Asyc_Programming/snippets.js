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