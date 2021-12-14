const http = require('http'); //looks for a local file named http that comes with node
const fs = require('fs');
const { parse } = require('path/posix');

//creates the server (inside is nextgen js)
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>hi</title></head>');
        res.write('<body><form action="/message" method="POST"><input type ="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        //we want to quit before the other res writes / headers occur after the res end.
        return res.end();
    }
    //we ensure the page is on /message and it is recieving a POST request.
    if(url ==='/message' && method === 'POST'){
        const body = [];//we can never reassign body, but we can push arrays and stuff.
        req.on('data', (chunk) => { // we get chunks at a time
            console.log(chunk);//chunk we cant work with
            body.push(chunk);
        });//allows us to listen to certain events, we want to listen for the data event and the fucntion to be executed for every incoming request
        //if we add return to req.on, the code below won't run
        return req.on('end', () => { //We can now know that all the chunks have been read once we are here.
            //we now need to buffer all the chunks to be able to work with them.
            const parsedBody = Buffer.concat(body).toString();//will concat all the body to the Buffer, we convert it to a string for our purpose here
            console.log(parsedBody);//this we can work with.
            const message = parsedBody.split('=')[1];
            //Sync means synchronus, which will block code execution until this file is created. We don't want that.
            fs.writeFile('message.txt', message, (err) => {
                //code moved here because we want it to occur once the file is done being used.
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }); //we pass an extra function which will also hold an error if it occurs.
            //The method though is used to run code that needs to occur AFTER we are done with the file.
        })
    }
    //this won't occur if we return res.on('end...) at the same tiem, but will occur before it, unless we return that res.on(end)
    //sending a header back to the browser, basically the content type is text/html
    //this WILL run before our earlier req.on('end, ...)
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>hi</title></head>');
    res.write('</html>');
    //we are done writing, send it to the browser
    res.end();

}); 

//Notes:
//Sending a response does not mean our event listners give up. They will still execute even if the response is already gone.
//So if you need certain code to run before the respond is returned, put it in the event listener.

server.listen(3000);
