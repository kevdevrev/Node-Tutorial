const express = require('express');
//creates an express application.
const app = express();//this is a valid request handler

//if we want a middleware to apply to all requests, then:
app.use('/', (req,res,next) => {
    console.log('This always runs!');
    next();
})


//we want to filter for requests. Put the specific ones first. How we seperate middlewares.
app.use('/add-product',(req, res, next) => { //next is a function that will be passed to the anon function, and the anon function is passed to the use function. weird.
    console.log('in the add product');
    res.send('<h1>The "Add Product" page!</h1>');//allows us to send a response, and attach a body which is of type 'any'

});

app.use('/',(req, res, next) => { //next is a function that will be passed to the anon function, and the anon function is passed to the use function. weird.
    console.log('in the middleware');
    res.send('<h1>hello from express!</h1>');//allows us to send a response, and attach a body which is of type 'any'

});

app.listen(3000);
