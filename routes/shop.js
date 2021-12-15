const express = require('express');

const router = express.Router();


//get and post use an exact match for the path
router.get('/',(req, res, next) => { //next is a function that will be passed to the anon function, and the anon function is passed to the use function. weird.
    res.send('<h1>hello from express!</h1>');


});

module.exports = router;