const fs = require('fs');

fs.writeFile('hello.txt', 'hello from Node!', function(err){
    if(err) return console.log('Error writing o file.');
});