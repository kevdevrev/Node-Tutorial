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
//we want to statically server files
//we want to grant access to the public folder
//with this, users should be able to access the public path
//anything that tries to find a file, will be sent here and if its not here they cant get it.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes); 
app.use(shopRoutes);

//will handle anything...
app.use((req,res,next) => {
    //status will set our status code.
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);
