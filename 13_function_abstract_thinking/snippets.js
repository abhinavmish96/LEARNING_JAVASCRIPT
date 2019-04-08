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

// Aliasing the function
function addThreeSquareAddFiveTakeSquareRoot(){
    // a sillly long name
    return Math.sqrt(Math.pow(x+3, 2)+ 5);
}
// before
const answer = (addThreeSquareAddFiveTakeSquareRoot(5) + addThreeSquareAddFiveTakeSquareRoot(2))/addThreeSquareAddFiveTakeSquareRoot(7);
//after
const f = addThreeSquareAddFiveTakeSquareRoot;
const answer = (f(5) + f(2)) / f(7);

/* Functions in an Array */
// graphic transformation
const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI/4;
const zoom = 2;
const offset = [1, -3];

const pipline = [
    function rotate(p){
        return {
            x: p.x * cos(theta) - p.y * sin(theta),
            y: p.x * sin(theta) + p.y * cos(theta),
        };
    },
    function scale(p) {
        return { x: p.x *zoom, y: p.y * zoom};
    },
    function translate(p) {
        return { x: p.x + offset[0], y: p.y + offset[1]};
    }
];
//pipeline is now an array of functions for a specific 2D transform
// we can transform a point
const p = { x:1, y:1};
let p2 = p;
for(let i =0; i<pipeline.length; i++){
    p2 = pipeline[i](p2);
}
// p2 is now p1 rotated 45 degrees (pi/4 radians) around the origin,
// moved 2 units farther from the origin, and translated 1 unit to the right and 3 units down

/* Pass a Function into a function */
function sum(arr, f) {
    //if no function is supplied, use a null function that simply return its argument unmodified
    if(typeof f != 'function') f = x => x;

    return arr.reduce((a,x)=> a += f(x), 0);
}
sum([1,2,3]); // 6
sum([1,2,3], x => x*x); // 14
sum([1,2,3], x => Math.pow(x,3)); // 36