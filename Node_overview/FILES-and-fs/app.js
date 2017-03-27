var fs = require('fs');

//Synchrnous execution
var greet = fs.readFileSync(__dirname + '/greet.txt',  'utf8');
console.log(greet);

//Asynchronous execution
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	console.log(data);
});
console.log('Done!'); 