//const products = [];
const fs = require('fs');
const path = require('path');

//global helper constant
const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
    );

//helper function
//it RECIEVES a callback
const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            cb([]);
            // return [];
        }else{
            cb(JSON.parse(fileContent));
        }
        // return JSON.parse(fileContent);
    })
}

//this represents a single entity, its a constructor for a product
module.exports = class Product {
    
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this. description = description;
        this.price = price;
    }

    //saving our product to the array
    save() {
        //generate a "unqiue" id (not really)
        this.id = Math.random().toString();
        //we don't forward the callback here.
        //we make an anonymous function which recieves the products
        //always use arrow functions so it doens't lose its context
        //the callback returns that products here.
        getProductsFromFile(products => {
            //we run this, then we get our callback after this code completes,
            //so we will have an updated array json thing.
            products.push(this);
            //converts our product object array to a json
            //may give an error so we have a callback function to handle /check that
            //writes to file
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });            
        });
    }

    //not called on an instance of an object so static, we can call directly on the class itself and not an object.
    //fetch all does not return anything at the start, as the returns in those inner functions
    //are for those functions alone. Therefore, it currently returns undefined

    //we will pass a function into fetchAll which has a function that returns the data we need.
    //in our controller, products.js, we pass the cb method.
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

}