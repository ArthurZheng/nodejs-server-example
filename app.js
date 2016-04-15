var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.type('text/plain');
	res.send('response sent back from the server.');
});

app.listen(process.env.PORT || 8081);
console.log('Juns express node js server is running');