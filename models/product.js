const products = [];

//this represents a single entity, its a constructor for a product
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    //saving our product to the array
    save() {
        products.push(this);
    }

    //not called on an instance of an object so static, we can call directly on the class itself and not an object.
    static fetchAll() {
        return products;
    }

}