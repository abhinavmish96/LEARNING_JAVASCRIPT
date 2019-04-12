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