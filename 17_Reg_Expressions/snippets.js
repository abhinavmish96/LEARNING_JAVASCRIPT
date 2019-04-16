/* Chap 17 Regular Expression */

//All the code snippets to be run in browser console for best results

/* Substring Matching and Replacing */
//String.protoype
const input = "As I was going to Saint Ivens";
input.startsWith("As"); // true
input.endsWith("Ivens"); // true
input.startsWith("going", 9); // true -- starts at index 9
input.endsWith("going", 14); // true -- treat index 14 as the end of the string
input.includes("going"); // true
input.includes("going", 10); // false -- starting at index 10
input.indexOf("going"); // 9
input.indexOf("going", 10); // -1
input.indexOf("nope"); // -1

// to do a case-sensitive comparison, simply convert inpu to lowercase
input.toLowerCase().startsWith("as");

//find a substring and replace it
const input = "As I was going to Saint Ivens";
const output = input.replace("going","walking");

/* Constructing Regular Expression */
const re1 = /going/; // regex that can search for the word "going"
const re2 = new RegExp("going"); // equivalent object constructor

/* Searching with Regular Expressiojns */
const input = "As I was going to Saint Ivens";
const re = /\w{3,}/ig;

//starting with the string (input)
input.match(re); // ["was", "going", "Saint", "Ivens"]
input.search(re); // 5 -- the first three letter word starts at index 5

// starting with regex (re)
re.test(input); // true -- input contains at least one three-letter word
re.exec(input); // ["was"] -- first match
re.exec(input); // ["going"] -- exec "remembers" where it is
re.exec(input); // ["Saint"]
re.exec(input); // ["Ivens"]
re.exec(input); // null -- no more matches

// note that any of these methods can be used directly with a regex literal
input.match(/\w{3,}/ig);
input.search(/\w{3,}/ig);
re.test(/\w{3,}/ig);
re.exec(/\w{3,}/ig);

/* Replacing with Regular Expression */
const input = "As I was going to Saint Ivens";
const output = input.replace(/\w{4,}/ig, '****'); // "As I was **** to **** ****"

/* Alteration */
const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' + '<script src ="stuff.js"></script>';
const match = html.match(/area|a|link|script|soutce/ig); // first attempt

/* Matching HTML */
const html = '<br> [!CDATA[[<br>]]';
const matches = html.match(/<br>/ig);

/* Character Sets */
const berr99 = "99 bottles of beer on the wall " + "take 1 down and pass it around -- " + "98 bottles of beer on the wall.";
const matches = berr99.match(/0||1|2|3|4|5|6|7|8|9/g); // tedious
const m1 = beer99.match(/[0123456789]/g); //okay
const m2 = beer99.match(/[0-9]/g); // better!

// combining ranges
const match = beer99.match(/[-0-9a-z.]/ig);

// negate character
const match = beer99.match(/[^\-0-9a-z.]/ig);

// using named character set -- abbreviations
const stuff = 'high:    9\n' +
              'medium:  5\n' +
              'low:     2\n';
const levels = stuff.match(/:\s*[0-9]/g);

// using \D
const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');

//using \S
const field = '     something';
const valid = /\S/.test(field);

/* Repetition */
const berr99 = "99 bottles of beer on the wall " + "take 1 down and pass it around -- " + "98 bottles of beer on the wall.";
const match = beer99.match(/[0-9][0-9][0-9][0-9][0-9][0-9]/);
const match = beer99.match(/[0-9]+/);

/* The Peiod Metacharacter and Escaping */
const input = "Address: 333 Main St., Anywhere, NY, 55532. Phone : 555-555-2525.";
const match = input.match(/\d{5}.*/);

// to escape any special regex character, simply prefix it with a backslash
const equation = "(2 + 3.5) * 7";
const match = equation.match(/\(\d \+ \d\.\d\) \* \d/);

