//const products = [];
const fs = require('fs');
const path = require('path');

//this represents a single entity, its a constructor for a product
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    //saving our product to the array
    save() {
        //products.push(this);
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
            );
        //we will either get an error or filecontent
        //important to use => function otherwise it will lose scope and wont know its in this class
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if(!err){
                //if not error, then read products from file
                products = JSON.parse(fileContent);
            }
            products.push(this);
            //converts our product object array to a json
            //may give an error so we have a callback function to handle /check that
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
        
    }

    //not called on an instance of an object so static, we can call directly on the class itself and not an object.
    static fetchAll() {
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
            );
        fs.readFile(p, (err, fileContent) => {
            if(err){
                return [];
            }
            return JSON.parse(fileContent);
        })
    }

}