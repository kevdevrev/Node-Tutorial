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
    const products = Product.fetchAll(); //get an array of all objects
    res.render('shop', {
        prods: products,
        docTitle: 'Shop', 
        path: '/', 
        pageTitle: 'Shop'});
}
