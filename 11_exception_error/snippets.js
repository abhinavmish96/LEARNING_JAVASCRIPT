/* Chap 11 Exception and Error Handling*/

//All the code snippets to be run in browser console for best results


/* Error Object; It is a built-in JS object */
const err = new Error('Invalid email');


/*Sample snippet of validateEail function to find  the email is valid or not by matching for '@' */
function validateEmail(email) {
    return email.match(/@/)? email:new Error(`Invalid email ${email}`);
}
const email = "jane@doe.com";
const validatedEmail = validateEmail(email);
if(validatedEmail instanceof Error){
    console.log(`Error: ${validatedEmail.message}`);
}
else {
    console.log(`Valid email: ${validatedEmail}`);
}


/* Using try and catch */
function validateEmail(email) {
    return email.match(/@/)? email:new Error(`Invalid email ${email}`);
}
const email = null;
try {
    const validatedEmail = validateEmail(email);
    if(validatedEmail instanceof Error){
        console.log(`Error: ${validatedEmail.message}`);
    }
    else {
        console.log(`Valid email: ${validatedEmail}`);
    } 
} catch(err){
    console.log(`Error: ${err.message}`);
}


/* throwing errors*/
function billPay(amount, payee, account){
    if(amount > account.balance)
        throw new Error("insuffuciant funds");
    account.tranfer(payee, amount);
}


/* exception handling and the call stack*/
function a(){
    console.log('a: calling b');
    b();
    console.log('a: done');
}
function b(){
    console.log('b: calling c');
    c();
    console.log('b: done');
}
function c(){
    console.log('c: thrwoing error');
    throw new Error('c error');
    console.log('c: done');
}
function d(){
    console.log('d: calling c');
    c();
    console.log('d: done');
}
try {
    a();
} catch(err) {
    console.log(err.stack);
}
try {
    d();
} catch(err) {
    console.log(err.stack);
}


/* try...catch...finally*/
try {
    console.log('this will be executed');
    throw new Error('error!');
    console.log('this will not be executed');
} catch(err) {
    console.log('there was an error');
} finally {
    console.log('always executed');
    console.log('cleanup');
}
