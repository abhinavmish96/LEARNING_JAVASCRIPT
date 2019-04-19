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