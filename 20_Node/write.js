const fs = require('fs');

fs.writeFile('hello.txt', 'hello from Node!', function(err){
    if(err) return console.log('Error writing file.');
});

// __dirname

const fs = require('fs');

fs.writeFile(__dirname +'/hello.txt', 'hello from Node!', function(err){
    if(err) return console.log('Error writing file.');
});

// rewriting the module to be more path friendly

const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'hello.txt'), 'hello from Node!', function(err){
    if(err) return console.log('Error writing file.');
});