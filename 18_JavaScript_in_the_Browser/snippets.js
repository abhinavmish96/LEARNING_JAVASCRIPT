/* Chap 18 Javascript in the browser */

//All the code snippets to be run in browser console for best results

/* function that traverses the entire DOM and prints it to the console */
function printDOM(node, prefix){
    console.log(prefix + node.nodeName);
    for(let i=0; i<node.childNodes.length; i++){
        printDOM(node.childNodes[i], prefix + '\t');
    }
}
printDOM(document, '');

/* DOM "Get" Methods */
document.getElementById('content'); // <div id="content">...</div>

// document.getElementByClassName returns a collection of elements that have the given class name
const callouts = document.getElementsByClassName('callout');

// document.getElementByTagName returns a collection of elements that have the given tag name
const paragraphs = document.getElementsByTagName('p');

/* Querying DOM Elements */
document.querySelectorAll('.callout');

document.querySelector('#content div p'); //<p>​This is as fancy as we'll get.​</p>​


document.querySelector('#content p'); // <p>​"This is a "<i>​simple​</i>​" HTML file."</p>​

