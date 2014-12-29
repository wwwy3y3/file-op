var fop= require('../');
var fs= require('fs');
var testfile= process.cwd()+'/test/test.txt';
/*
fop.insert(testfile, '123', 3)
   .done(function () {
   		var content= fs.readFileSync(testfile, 'utf8');
   		console.log(content);
   }, function (err) {
   	console.log(err);
   })
*/

fop.remove(testfile, 0,2)
	.done(function () {
   		var content= fs.readFileSync(testfile, 'utf8');
   		console.log(content);
   }, function (err) {
   	console.log(err);
   })