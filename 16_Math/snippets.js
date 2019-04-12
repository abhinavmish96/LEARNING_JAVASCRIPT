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

/* Different Bases */
const x = 12;
x.toString(); // "12" (base 10)
x.toString(10); // "12" (base 10)
x.toString(16); // "c" (hexadecimal)
x.toString(8); // "14" (octal)
x.toString(2); // "1100" (binary)

/* Constants */
Math.E; // the root of the natural logarith : ~2.718
Math.PI; // the ratio of a circle circumerence to its diameter: ~3.14

// the lograthmic convenience constants -- these can be accessed through library calls, but they're commonly used enough to warrant conveince constants
Math.LN2; // the natural lograthmic of 2: ~0.693
Math.LN10; // the natural lograthmic of 10: ~2.303
Math.LOG2E; // the base 2 lograthmic of Math.E: ~1.443
Math.LOG10E; // the base 10 lograthmic of Math.E: ~0.434

//algebric convenience constants
Math.SQRT1_2 // the square root of 1/2: ~0.707
Math.SQRT2 // the square root of 2: ~1.414

/* Algebric function */

// Exponentiation
Math.pow(2, 3); // X^y : 2^3 : 8
Math.sqrt(16); // 4
Math.cbrt(27); // 3
Math.exp(1); // ~2.718
Math.expm1(1); // ~1.718
Math.hypot(3,4); // 5

// Lograthmic function
Math.log(17.5); // ~2.86
Math.log10(10); // 1
Math.log2(2); // 1
Math.log1p(17.5); // ~2.92

// Miscellaneous
Math.abs(-5.5); // 5.5
Math.sign(5.6); // 1
Math.sign(-5.6); // -1
Math.ceil(2.2); // 3
Math.floor(-3.2); // -4
Math.trunc(7.52); // 7
Math.round(7.7); // 8
Math.min(2,5,1); // 1
Math.max(4,.5,7.9); // 7.9


//Pseudornadom number generation
Math.random();

/* Trignometric FUnctions */