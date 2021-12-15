const express = require('express');
const bodyParser = require('body-parser');
//creates an express application.
const app = express();//this is a valid request handler
//our file import
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//will parse forms
app.use(bodyParser.urlencoded({extended: false})); //we put extended false because we don't want it to parse nondefault features.

//we can use our admin routes easily doing this.
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
