/* Chap 15 Date and Time */

//All the code snippets to be run in browser console for best results

/* Constructing Date Objects */
// all below are interpreted with respect to local time
new Date(); // current date

// note that months are zero based in JS: 0=Jan, 1=Feb, etc.

new Date(2019, 0); // Tue Jan 01 2019 00:00:00 GMT+0530 (India Standard Time)

new Date(2019, 4, 3); // Fri May 03 2019 00:00:00 GMT+0530 (India Standard Time)

new Date(2019, 10, 30, 11, 30, 30, 33); // Sat Nov 30 2019 11:30:30 GMT+0530 (India Standard Time)

// create date from unix epoch time
new Date(0);


// use negative dates to get dates prior to the unix Epoch
new Date(-365*24*60*60*1000);

// parsing date string
new Date('June 14, 1996'); //Fri Jun 14 1996 00:00:00 GMT+0530 (India Standard Time)

new Date('June 14, 1996 GMT-0000') // Fri Jun 14 1996 05:30:00 GMT+0530 (India Standard Time)

/* Constructing dates on server */
const d = new Date(Date.UTC(2019,3,11)); // April 11 UTC

// Passing an array to Moment.js uses the same parameters as JS's Date Constructor, including zero-based months
// .toDate() converts back to a JS Date object.

const d = moment.tz([2019, 3, 11, 9, 19], 'America/Los_Angeles').toDate();

/* Transmitting Dates */
const before = { d: new Date()};
before.d instanceof Date ;// True
const json = JSON.stringify(before);
const after = JSON.parse(json);
after.d instanceof Date; // false
typeof after.d //string

// recovering a date
after.d = new Date(after.d);
after.d instanceof Date; // true

// numeric valueof the date
const before = { d: new Date().valueOf()};
typeof before.d  // "number"
const json = JSON.stringify(before);
const after = JSON.parse(json);
typeof after.d  // "number"
const d = new Date(after.d);

/* Displaying Dates */
const d = new Date();

 d.toLocaleDateString(); // "11/04/2019"
 d.toLocaleFormat();
 d.toLocaleTimeString(); // "13:59:53"
 d.toTimeString(); // "13:59:53 GMT+0530 (India Standard Time)"
 d.toUTCString(); // "Thu, 11 Apr 2019 08:29:53 GMT"

 //using moment.js
 moment(d).format("YYYY-MM_DD"); // "2019-04-11"
 moment(d).format("YYYY-MM_DD HH:mm"); // "2019-04-11 14:07"
 moment(d).format("YYYY-MM_DD HH:mm Z"); // "2019-04-11 14:07 +5:30"
 moment(d).format("YYYY-MM_DD HH:mm [UTC]Z"); // "2019-04-11 14:07 UTC+5:30"

 moment(d).format("dddd, MMMM [the] Do, YYYY"); // "Thursday, April the 11th, 2019"
 moment(d).format("h:mm a"); // "2:08 pm"

 /* Date Components */
 const d = new Date();

d.getFullYear(); // 2019
d.getMonth(); // 3
d.getDate(); // 11
d.getDay();  // 4
d.getHours(); // 14
d.getMinutes(); // 59
d.getSeconds(); // 0
d.getMilliseconds(); // 0

// there are also UTC equivalent
d.getUTCFullYear();
d.getUTCMonth();
// etc

/* comparing dates */
const d1 = new Date(1996,2,1);
const d2 = new Date(2009, 4, 27);

d1 > d2; // false
d1 < d2; // true

/* Date Arithmetic */
const d1 = new Date(1996,2,1);
const d2 = new Date(2009, 4, 27);
const msDiff = d2 - d1; // ms
const daysDiff = msDiff/1000/60/60/24; // days

// sort array using Array.protoype.sort
const dates = [];
// create some random dates
const min = new Date(2017,0,1).valueOf();
const delta = new Date(2020,0,1).valueOf() - min;
for(let i=0; i<10; i++)
dates.push(new Date(min + delta*Math.random()));
// dates are random probably jumbled
// we can sort them (descending):
dates.sort((a,b) => b - a);
// or ascending
dates.sort((a,b) => a - b);


/* User-friendly relative dates */
 // using Moment.js
 moment().subtract(10, 'seconds').fromNow(); // a few secons ago
 moment().subtract(5, 'minutes').fromNow(); // 5 minutes ago
 moment().subtract(5, 'hours').fromNow(); // 4 hours ago
 moment().subtract(22, 'days').fromNow(); // a day ago