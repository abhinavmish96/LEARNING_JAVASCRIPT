# This Chapter focuses on the JavaScript running on the browser side via the help of NodeJS

### Here are some of my learnings you might find intersting

#### Use of module and export

- **module** is a special object that Node makes available to implement modules
- Whatever you assign to it **exports property** will be what is *exported* from the module
- We can import all the modules into our applicaton

#### There are three types of modules:

| Type | String passed to require | Examples |
|------|:------------------------:|---------:|
| Core | Doesn't start with /, ./ , or ../ | require('fs')<br>require('os')<br>require('http')<br>require('child_process') |
| File | Start with /, ./ , or ../ | require('./debug.js')<br>require('/full/path/to/module.js')<br>require('../a.js')<br>require('../../a.js') |
| npm  | Not a core module and doesn't start with /, ./ , or ../ | require('debug')<br>require('express')<br>require('chalk')<br>require('koa')<br>require('q') |