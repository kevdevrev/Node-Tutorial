const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminData.products;
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //since we set pug as our default rendering engine, we don't need to specifify .pug
    //we can pass in a key value pair javascript object to pug
    res.render('shop', {prods: products, docTitle: 'Shop'});
});

module.exports = router;
