const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart {
    static addProduct(id, productPrice){
        //fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
            if(!err) {
                cart = JSON.parse(fileContent);
        }
        //analyze cart for exisiting product
        const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
        const existingProduct = cart.products[existingProductIndex];
        //if we alreay have one of these in our cart, increase the quantity
        let updatedProduct;
        if(existingProduct) {
            //... takes all properties of existing object
            updatedProduct = {...existingProduct};
            updatedProduct.qty = existingProduct.qty + 1;
            //replace old product here
            cart.products = [...cart.products];
            //replace index with updated product
            cart.products[existingProductIndex] = updatedProduct;
        }
        //add a new product to cart
        else{
            updatedProduct = { id: id, qty: 1 };
            //add a new product here (this is how you append with next gen javascript to an existing array)
            cart.products = [...cart.products, updatedProduct];
        }

        //we add a plus in front of product price to ensure it stays as a number.
        cart.totalPrice = cart.totalPrice + +productPrice;
        
        fs.writeFile(p, JSON.stringify(cart), err => {
            console.log(err);
          });
        });
    }

}