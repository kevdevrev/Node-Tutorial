const http = require('http'); //looks for a local file named http that comes with node

//creates the server (inside is nextgen js)
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //sending a header back to the browser, basically the content type is text/html
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>hi</title></head>');
    res.write('</html>');
    //we are done writing, send it to the browser
    res.end();

}); 

server.listen(3000);
