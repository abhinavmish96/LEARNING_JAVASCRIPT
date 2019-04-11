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

