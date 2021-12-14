const http = require('http'); //looks for a local file named http that comes with node

//creates the server (inside is nextgen js)
const server = http.createServer((req, res) => {
    console.log(req);
}); 

server.listen(3000);
