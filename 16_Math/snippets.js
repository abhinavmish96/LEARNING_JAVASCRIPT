/* Chap 16 Math */

//All the code snippets to be run in browser console for best results

// this chapter describes JS built-in Math object

/* Fixed Decimal */
// use of Number.protoype.toFixed
const x = 19.51;
x.toFixed(3); // "19.510"
x.toFixed(2); // "19.51"
x.toFixed(1); // "19.5"
x.toFixed(0); // "20"

// the o/p is in string form to preserve format
// o/p is not truncated instead rounded

/* Exponential Notation */
const x = 3800.5;
x.toExponential(4); // "3.8005e+3"
x.toExponential(3); // "3.801e+3"
x.toExponential(2); // "3.80e+3"
x.toExponential(1); // "3.8e+3"
x.toExponential(0); // "4e+3"

// o/p is not truncated instead rounded
// the specified precision is the number of digits past the decimal

/* Fixed Precision */
let x = 1000;
x.toPrecision(5); // "1000.0"
x.toPrecision(4); // "1000"
x.toPrecision(3); // "1.00e+3"
x.toPrecision(2); // "1.0e+3"
x.toPrecision(1); // "1e+3"
x = 15.335;
x.toPrecision(6); // "15.3350"
x.toPrecision(5); // "15.335"
x.toPrecision(4); // "15.34"
x.toPrecision(3); // "15.3"
x.toPrecision(2); // "15"
x.toPrecision(1); // "2e+1"

// o/p is rounded and will always have the specified number of digits of precision

