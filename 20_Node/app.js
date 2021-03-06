const amanda_calculate = require('./amanda.js');
const tyler_calculate = require('./tyler.js');
const func = require('./func.js')

console.log(amanda_calculate(1,2,5)); // 31
console.log(tyler_calculate(2)); // 33.510321638291124

console.log(func.geometricSum(1,2,5)); // 31
console.log(func.quadraticFormula(1, 2, -15)); // [3, -5]
console.log(func.arithmeticSum(5)); // 15

const debug1 = require('./debug.js')('one');
const debug2 = require('./debug.js')('two');

debug1('started first debugger!');
debug2('started second debugger!');

setTimeout(function(){
    debug1('after some time...');
    debug2('what happens?');
}, 200);