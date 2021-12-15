const express = require('express');
const path = require('path');
const router = express.Router();


//get and post use an exact match for the path
router.get('/',(req, res, next) => { //next is a function that will be passed to the anon function, and the anon function is passed to the use function. weird.
    //__dirname is a variable which holds the absolute path on the os of this project folder
    //it gives us the path of where we use it
    //../ makes it go up one level in the directory.
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));


});

module.exports = router;