const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


//our file import
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error')

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

//will parse forms
app.use(bodyParser.urlencoded({extended: false})); //we put extended false because we don't want it to parse nondefault features.
//we want to statically server files
//we want to grant access to the public folder
//with this, users should be able to access the public path
//anything that tries to find a file, will be sent here and if its not here they cant get it.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes); 
app.use(shopRoutes);

//handles 404 error
app.use(errorController.get404Page)

app.listen(3000);
