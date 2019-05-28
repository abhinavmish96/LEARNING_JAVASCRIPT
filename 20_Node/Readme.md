# This Chapter focuses on the different components of NodeJS

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

#### Operating System

- OS module provides some platform-specific information about the computer on which the app is running.

#### Child Processes

- The child_processmodule allows your app to run other programs, whether it be another Node Program, an executable, or a script in another language.
- The child_process module exposes three primary functions: **exec**, **execFile**, and **fork**.
- *exec* and *exec_File* can run any executable supported by your operating system.
- *exec* invokes a shell( Which is what underlies your operating system's command line; if you can run it from the command line, you can run it from exec).
- *execFile* allows you to execute an executable directly, which offers slightly improved memory and resourse uses, but generally requires greater care.
- *fork* allows you to execute other Node scripts(which can also be done with exec).

#### Streams

- A stream is an object that deals with data as the name implies in a stream(flow). Stream makes sense whenever there is flow of data over time.
- Streams can be *read streams*, *Write streams*, or both *duplex streams*.
- File access, too, often uses streams and can also *pipe* streams to one another.
- Because data *flows* through streams, it stands to reason that you could take the data coming out of a *read stream* and immediately write it to a *write stream*. This process is called **piping**