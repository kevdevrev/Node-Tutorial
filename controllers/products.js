const fs = require('fs')
//use capital for classes
const Product = require('../models/product')

exports.getAddProductPage =  (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Product',
     path: '/admin/add-product',
     formsCSS: true,
     productsCSS: true,
     activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    //create a new object based off imported class
    const product = new Product(req.body.title);
    product.save(); // now we save the product in our array.
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    //we pass in a function where we know we will eventually get our products
    //we don't need to store it here because fetchAll does not return anything.
    //we will create our own callback process with the anonymous function
    //the function passes products directly so we can just render inside this callback.
    //same logic readfile uses, but we defined our self. It uses a callback.
    //basically, we don't render our shop until we fetch all of our products.
    Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            docTitle: 'Shop', 
            path: '/', 
            pageTitle: 'Shop'});
    }); //get an array of all objects
    // res.render('shop', {
    //     prods: products,
    //     docTitle: 'Shop', 
    //     path: '/', 
    //     pageTitle: 'Shop'});
}
