var util = require('util');

var name = 'Simon';
var greeting = util.format('Hello, %s', name);
util.log(greeting);