var Q= require('q');
var FS = require("q-io/fs");

//insert('./test-fs.txt', 123, 1)
function insert (filePath, str, index) {
	return FS.read(filePath)
			 .then(function (content) {
			 	return spliceSlice(content, index, str);
			 }, throwErr)

			 //write back
			 .then(function (content) {
			 	return FS.write(filePath, content);
			 })

	// throw		 
	function throwErr(err) {
		throw err;
	}
}

function spliceSlice(str, index, is_str) {
  return str.slice(0, index) + (is_str || "") + str.slice(index);
}

module.exports= insert;