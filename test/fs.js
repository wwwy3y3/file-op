var fop= require('../');
var fs= require('fs');
var testfile= process.cwd()+'/test/test.txt';

// insert test
fop.insert(testfile, '456\n22', 0)
   .done(function () {
   		var content= fs.readFileSync(testfile, 'utf8');
   		console.log(content);
   }, function (err) {
   	console.log(err);
   })


//remove test
fop.remove(testfile, 0,2)
	.done(function () {
   		var content= fs.readFileSync(testfile, 'utf8');
   		console.log(content);
   }, function (err) {
   	console.log(err);
   })