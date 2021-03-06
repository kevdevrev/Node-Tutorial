const req = require('express/lib/request');
const res = require('express/lib/response');
const fs = require('fs')
//use capital for classes
const Product = require('../models/product')
const Cart = require('../models/cart')

//Product List Renderer
exports.getProducts = (req, res, next) => {
    //we pass in a function where we know we will eventually get our products
    //we don't need to store it here because fetchAll does not return anything.
    //we will create our own callback process with the anonymous function
    //the function passes products directly so we can just render inside this callback.
    //same logic readfile uses, but we defined our self. It uses a callback.
    //basically, we don't render our shop until we fetch all of our products.
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            docTitle: 'All Products', 
            path: '/products', 
            pageTitle: 'Shop'});
    }); //get an array of all objects
    // res.render('shop', {
    //     prods: products,
    //     docTitle: 'Shop', 
    //     path: '/', 
    //     pageTitle: 'Shop'});
}

exports.getProduct = (req,res,next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        //the {} inside is a javascript object
        //put the product we retrieve inside this renderer
        //once it does find it, it calls this rendered and then calls back
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title,
            path: '/products'
        });
    });
}

//Index Renderer
exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            docTitle: 'Shop', 
            path: '/', 
            pageTitle: 'Shop'});
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
}

exports.postCart = (req,res,next) => {
    //we use the request body to get the value sent to us via post
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    })
    res.redirect('/cart')
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Orders'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
}