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
