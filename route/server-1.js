/*HTTP Object*/
var http = require("http");

/*Create server and bind it to port 8888*/
http.createServer(function (request, response) {

    /*Print request URL on console*/
    console.log(request.url);
    
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("Hello World");
    response.end();
}).listen(8888);