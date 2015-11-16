/*HTTP Object*/
var http = require("http");

/*Create server and bind it to port 8888*/
//http.createServer(function(request, response) {
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write("Hello World");
//  response.end();
//}).listen(8888);

/*Other way to print "Hello World"*/
function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();  /*We can pass content with end also.*/
}

http.createServer(onRequest).listen(8888);