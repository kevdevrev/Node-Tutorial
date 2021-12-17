const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
//our file import
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//will parse forms
app.use(bodyParser.urlencoded({extended: false})); //we put extended false because we don't want it to parse nondefault features.
//we want to statically server files
//we want to grant access to the public folder
//with this, users should be able to access the public path
//anything that tries to find a file, will be sent here and if its not here they cant get it.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes); 
app.use(shopRoutes);

//will handle anything...
app.use((req,res,next) => {
    //status will set our status code.
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
  //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);
