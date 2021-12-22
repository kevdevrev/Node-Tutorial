const path = require('path');

const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productsController.getAddProductPage);
//we pass a reference to this function

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

//export multiple
module.exports = router;
