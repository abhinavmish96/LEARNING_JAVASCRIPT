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

