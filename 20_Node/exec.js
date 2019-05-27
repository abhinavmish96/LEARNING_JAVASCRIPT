const exec = require('child_process').exec;

exec('ls', function(err, stdout, stderr) {
    if(err) return console.log('Error executing "dir"');
    stdout = stdout.toString();
    console.log(stdout);
    stderr = stderr.toString();
    if(stderr !== ''){
        console.log('error: ');
        console.log(stderr);
    }
});