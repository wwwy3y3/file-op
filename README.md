# file-op
simple file insert, delete by api

# install
``` javascript
npm install file-op
```

# api
## Insert (filePath, str, index)
insert chars to file

#### parameters
*	filePath: file you want to write to
*	str: string you want to write
*	index: index your string start to write in the file

#### example
``` javascript
var fop= require('file-op');

// insert chars 'hello' in testfile, start on index 3
fop.insert('./testfile', 'hello', 3)
   .then(function () {
   		// success	
   })
```

## Remove (filePath, from, to)
remove chars from file by index

#### parameters
*	filePath: file you want to write to
*	from: index start from which chars you want to remove
*	to: index end from which chars you want to remove

#### example
``` javascript
var fop= require('file-op');

// remove chars that index from 0 to 2 in file './testfile'
fop.remove('./testfile', 0,2)
   .then(function () {
   		// success	
   })
```