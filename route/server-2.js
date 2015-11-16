/*HTTP Object*/
var http = require("http");

/*Create server and bind it to port 8888*/
http.createServer(function (request, response) {

    /*Show content based on URL*/
    var req = request.url;
    
    console.log(req);
    
    if (req === '/') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("This is my home.");
        
    } else if (req === '/holiday') {    /*Note / in front of holiday; I had missed it at first.*/
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Planning Holiday??");
        
    } else {
        /*Handling scenario where URL doesnt match anything. Basically 404 error in general.*/
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("I think I am lost!");
        
    }
    
    response.end();
}).listen(8888);