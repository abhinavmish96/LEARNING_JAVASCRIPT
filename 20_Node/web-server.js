const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res){
    console.log(`${req.method} ${req.url}`);
    res.end('Hello World!');
});

const port = 8080;

server.listen(port, function(){
    // you can pass a callback to listen that lets you know the server has started
    console.log(`server started on port ${port}`);
});