const express = require('express');

const router = express.Router();

//router can use post, get, use etc.
//we replace app with router here.
router.get('/add-product',(req, res, next) => { 
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');//allows us to send a response, and attach a body which is of type 'any'

});

//we changed it to post, so that it only takes post requests.
router.post('/product', (req,res,next) => {
    console.log(req.body);
    //go back to '/' route after logic done
    res.redirect('/');
});

//exports these routes
module.exports = router;