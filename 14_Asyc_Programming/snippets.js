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

/* Scope and Asynchronous function */
// 5-second countdown result : -1 six
function countdown(){
    let i;
    console.log('Countdown:');
    for(i = 5; i >= 0; i-- ){
        setTimeout(function(){
            console.log(i==0 ? 'Go!' : i);
        }, (5-i)*1000);
    }
}
countdown();

// 5-second countdown correct result
function countdown(){
    console.log('Countdown:');
    for(let i = 5; i >= 0; i-- ){
        setTimeout(function(){
            console.log(i==0 ? 'Go!' : i);
        }, (5-i)*1000);
    }
}
countdown();

/* Error-first Callbacks */
// reading the contents of a file in Node
const fs = require('fs');

const fname = 'may_or_may_not_exist.txt';
fs.readFile(fname, function(err, data){
    if(err) return console.log(`error reading file ${fname}: ${err.message}`);
    console.log(`${fname} contents: ${data}`)
});

/* callback hell */
// callback hell triangle
const fs = require('fs');

fs.readFile('a.txt', function(err, dataA){
    if(err) console.log(err);
    fs.readFile('b.txt', function(err, dataB){
        if(err) console.log(err);
        fs.readFile('c.txt', function(err, dataC){
            if(err) console.log(err);
            setTimeout(function(){
                fs.writeFile('d.txt',dataA+dataB+dataC, function(err){
                    if(err) console.log(err);
                });
            }, 60*1000);
        });
    });
});

//try..catch failure
const fs = require('fs');
function readSketchyFile(){
    try{
        fs.readFile('does_not_exist.txt', function(err, data){
            if(err) throw err;
        }); 
    } catch(err){
        console.log('warning: minor issue occured, program counting');
    }
}
reaSketchyFile();

/* creating promises */
function countdown(seconds){
    return new Promise(function (resolve, reject){
        for(let i = seconds; i>=0; i--) {
            setTimeout(function(){
                if(i>0) console.log(i+'...');
                else resolve(console.log('Go!'));
            }, (seconds - i)*1000);
        }
    });
}
// use of then handler
countdown(5).then(
    function(){
        console.log("countdowm completed successfully");
    },
    function(err){
        console.log("countdowm experinced an error:" + err.message);
    }
);
// use of catch with promise stored in the variable
cosnt p = countdown(5);
p.then(function(){
    console.log("countdowm completed successfully")
});
p.catch(function(err){
    console.log("countdowm experinced an error:" + err.message);
});