const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
//    module.exports = path.dirname(require.main.filename);
//creates an express application.
const app = express();//this is a valid request handler
//our file import
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//will parse forms
app.use(bodyParser.urlencoded({extended: false})); //we put extended false because we don't want it to parse nondefault features.

//we can use our admin routes easily doing this.
app.use('/admin', adminRoutes); //now only routes with the starting directory admin will run here
app.use(shopRoutes);
//will handle anything...
app.use((req,res,next) => {
    //status will set our status code.
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);
