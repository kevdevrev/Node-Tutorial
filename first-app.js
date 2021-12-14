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

// const printName = (personData) => {
//     console.log(personData.name);
// }

//Object Destrucoring. { }
//it will pull name out of the object
const printName = ({ name }) => {
    console.log(name);
}

printName(person);

//we can make constants off the value of the person lol
const { name, age} = person;

console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2);