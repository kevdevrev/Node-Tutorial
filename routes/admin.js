const express = require('express');
const path = require('path');

const router = express.Router();

//router can use post, get, use etc.
//we replace app with router here.
router.get('/add-product',(req, res, next) => { 
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));

});

//we changed it to post, so that it only takes post requests.
router.post('/product', (req,res,next) => {
    console.log(req.body);
    //go back to '/' route after logic done
    res.redirect('/');
});

//exports these routes
module.exports = router;