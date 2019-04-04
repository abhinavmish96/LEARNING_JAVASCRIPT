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