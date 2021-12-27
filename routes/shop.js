const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop')

const router = express.Router();


router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts)

router.get('/products/delete')

// having a colon lets express know theres a variable here. put more specific routes before this.
router.get('/products/:productId', shopController.getProduct)



router.get('/cart', shopController.getCart)

router.get('/orders', shopController.getOrders)

router.get('/checkout', shopController.getCheckout)


module.exports = router;
