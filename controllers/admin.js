const Product = require('../models/product')


exports.getAddProductPage =  (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
       path: '/admin/add-product',
       formsCSS: true,
       productsCSS: true,
       activeAddProduct: true
      });
  }
  
  exports.postAddProduct = (req, res, next) => {
      const title = req.body.title;
      const imageUrl = req.body.imageUrl;
      const price = req.body.price;
      const description = req.body.description;

      //create a new object based off imported class
      const product = new Product(title, imageUrl, description, price);
      product.save(); // now we save the product in our array.
      res.redirect('/');
  }

  exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            docTitle: 'Admin Products', 
            path: '/admin/products', 
            pageTitle: 'Admin Products'});
    });
  }