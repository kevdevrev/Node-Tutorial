//3rd party packages
const express = require('express');
//creates an express application.
const app = express();//this is a valid request handler

//we travel from middleware to middleware from top to bottom by calling next().

//this allows us to add another middleware function.
app.use((req, res, next) => { //next is a function that will be passed to the anon function, and the anon function is passed to the use function. weird.
    //we want to travel on to the next middleware
    console.log('in the middleware');
    //we need to type next(); here to allow the code to get to the next parts of code
    //if we never send this, we will be stuck here
    next();//allows the request to continue to the next middleware in line.
    //WE SHOULD SEND NEXT IF WE DO NOT SEND A RESPONSE OTHERWISE IT WILL JUST DIE

});

app.use((req, res, next) => { //next is a function that will be passed to the anon function, and the anon function is passed to the use function. weird.
    //we want to travel on to the next middleware
    console.log('in the 2nd middleware');
    res.send('<h1>hello from express!</h1>');//allows us to send a response, and attach a body which is of type 'any'

});

// server.listen(3000);
//we can use app.listen() instead of http....
app.listen(3000);
