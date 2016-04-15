var http = require('http');
var server = http.createServer(function(request, response){
	// response.writeHead(200, {'Content-Type': 'application/json'});
	response.setHeader('Content-Type', 'application/json');

	var data = [
	  {id: 1, author: "Pete Hunt", text: "This is one comment"},
	  {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
	  {id: 3, author: "Jun Zheng", text: "What a beautiful day."},
	  {id: 4, author: "Jiangli Shi", text: "Nothing ventured, nothing gained"},
	  {id: 5, author: "Zhigang Zheng", text: "Run this code."}
	];

	response.write(JSON.stringify(data, null, 3));
	console.log(JSON.stringify(data, null, 3));
	response.end();
});

server.listen(8081);
console.log('Juns server is running');