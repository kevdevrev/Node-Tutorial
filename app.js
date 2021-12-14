const http = require('http'); //looks for a local file named http that comes with node
//will import routes.js and look for module.exports and see what is registered in there
const routes = require('./route');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
