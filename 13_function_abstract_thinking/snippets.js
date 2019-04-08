/* Chap 13 Function and power of abstract thinking*/

//All the code snippets to be run in browser console for best results

/* Function as Subroutine */
function printLeapYearstatus(){
    const year = new Date().getFullYear();
    if(year % 4 !== 0) console.log(`${year} is NOT a leap year`);
    else if(year % 100 != 0) console.log(`${year} is a leap year`);
    else if(year % 400 != 0) console.log(`${year} is NOT a leap year`);
    else console.log(`${year} is a leap year`);
}

/* Function as subroutines that return value */
function isCurrentYearLeapYear(){
    const year = new Date().getFullYear();
    if(year % 4 !== 0) return false;
    else if(year % 100 != 0) return true;
    else if(year % 400 != 0) return false;
    else return true;
}
const daysInMonth = [31, isCurrentYearLeapYear()?29:28, 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31 ];
if(isCurrentYearLeapYear()) console.log('It is a leap year.');

/* Functions as...Functions */

// Rainbow function - Not a pure fucntion
const colors = ['red' , 'orange' , 'yellow' , 'green' , 'blue' , 'indigo' , 'violet'];
let colorIndex = -1;
function getNextRainbowColor(){
    if(++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
}

// Example of a pure function
function isLeapYear(year){
    if(year % 4 !== 0) return false;
    else if(year % 100 != 0) return true;
    else if(year % 400 != 0) return false;
    else return true;
}

// Rainbow function - A pure fucntion\
function getRaibowIterator(){
    const colors = ['red' , 'orange' , 'yellow' , 'green' , 'blue' , 'indigo' , 'violet'];
    let colorIndex = -1;
    return {
        next(){
            if(++colorIndex >= colors.length) colorIndex = 0;
            return {value: colors[colorIndex] , done: false};
        }
    };
}

/* IIFE */

// using setTimeout()
setTimeout(function(){console.log('hello');}, 1500);

// using setTimeout() with different time interval without scoping problem
var i;
for(i = 5; i >= 0 ; i--){
        setTimeout( function(){
            console.log(i===0 ? "go!" : i);
        }, (5 - i)*1000);
}

// using setTimeout() with different time interval without scoping problem
for(let i = 5; i >= 0 ; i--){
    setTimeout( function(){
        console.log(i===0 ? "go!" : i);
    }, (5 - i)*1000);
}

// Uisng IIFE to solve scoping problem
var i;
for(i = 5; i >= 0 ; i--){
    (function(i) {
        setTimeout( function(){
            console.log(i===0 ? "go!" : i);
        }, (5 - i)*1000);
    })(i);
}

/* Function variable */