# This Chapter focuses on the JavaScript running on the browser side via the help of NodeJS

### Here are some of my learnings you might find intersting

#### Use of module and export

- **module** is a special object that Node makes available to implement modules
- Whatever you assign to it **exports property** will be what is *exported* from the module
- We can import all the modules into our applicaton

#### There are three types of modules:

| Type | String passed to require | Examples |
|------|:------------------------:|:---------|
| Core | Doesn't start with /, ./ , or ../ | require('fs')<br>require('os')<br>require('http')<br>require('child_process') |
| File | Start with /, ./ , or ../ | require('./debug.js')<br>require('/full/path/to/module.js')<br>require('../a.js')<br>require('../../a.js') |
| npm  | Not a core module and doesn't start with /, ./ , or ../ | require('debug')<br>require('express')<br>require('chalk')<br>require('koa')<br>require('q') |

- Core module such as process and buuffer are global are always available, and do not require an explicit *require* statement

#### Customizing modules with function modules

- A module that exports a function that's intended to be invoked immediately
- Node only ever imports any given module once(every time a Node app is run)

#### Filesystem access

- To create a file use fs.writeFile, this will create a file in the directory you're currently in when you run node *_program_.js*

For example;
$ cd /home/jdoe/fs # current working dir is home/jdoe/fs
$ node write.js # creates /home/jdoe/fs/*_program_.js*
$ cd .. # current working dir is home/jdoe
$ cd node fs/*_program_.js* # creates /home/jdoe/*_program_.js*
- Node provides a special variable,**__dirname**, which is always set to the directory in which the source file resides
- **path.join** will join directory elements using whatever directory seperator is appropriate for the operating system, and is generally good for practise
- We use fs.readFile to read the contents of the file back
- All of the functions in fs have synchronous equivalent(that end in "Sync"). With the synchronous versions, error handling is accomplished with exceptions, so to make our program robust , we would wrap them in try/catch blocks
- The files in the directory can be listed with fs.readdir
- The fs module contains many more filesystem functions; you can delete files (**fs.unlink**), move or rename files (**fs.rename**), get information about files and directories (**fs.stat**), and much more. Consult the [Node API Documentation](https://nodejs.org/api/documentation.html) for more info.

#### Process

- Every running Node program has access to a variable called proces that allows it to get information about -- and control -- its own execution
- Execution can be immediately stopped by calling *process.exit*
- 