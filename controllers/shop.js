const req = require('express/lib/request');
const res = require('express/lib/response');
const fs = require('fs')
//use capital for classes
const Product = require('../models/product')


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
    console.log(prodId);
    res.redirect('/');
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