//object creation
//has key value pairs
const person = {
    name: 'Max',
    age: 29,
    //how to add a function to an object
    greet() {
        console.log('Hi, I am ' + this.name 
        + ' and my age is: ' + this.age);
    }
}

person.greet();