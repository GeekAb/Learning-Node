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
        
    } else if (req === '/upload') {
        
        var upload = '';
        
        /*Handle request based on Method : POST on form submit , GET to diplay form.*/
        if (request.method === 'POST') {

            request.on('data', function (chunk) {
                upload += chunk;
                console.log('FILE CHUNK : '+ chunk);
            });
            
            console.log('File Length : '+ upload.length);
            
        } else if (request.method === 'GET') {
            response.writeHead(200, {"Content-Type": "text/html"});
        
            response.write("<html><body><form action='/upload' method='POST' enctype='multipart/form-data'><input type='file' name='file'><button type='submit'>UPLOAD</button></body></html>");
        }
        
    } else {
        /*Handling scenario where URL doesnt match anything. Basically 404 error in general.*/
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("I think I am lost!");
        
    }
    
    response.end();
}).listen(1234);