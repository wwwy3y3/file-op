var fop= require('../');
var fs= require('fs');
var testfile= process.cwd()+'/test/test.txt';

fop.insert(testfile, 'qwe', 0)
   .done(function () {
   		var content= fs.readFileSync(testfile, 'utf8');
   		console.log(content);
   }, function (err) {
   	console.log(err);
   })
