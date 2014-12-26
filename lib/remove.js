var Q= require('q');
var FS = require("q-io/fs");

function remove (filePath, from, to) {
	return FS.read(filePath)
			 .then(function (content) {
			 	return cut(content, from, to);
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

function cut(str, from, to) {
  return str.slice(0, from-1) + str.slice(to);
}

module.exports= remove;