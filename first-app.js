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

//also works on objects SPREAD OPERATOR
const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];


//slice copies an array
// const copiedArray = hobbies.slice();
//this will give an array with another array in it. Its not a copy.
//its an array where the first element is the other array. Nested array.
// const copiedArray = [hobbies];

//SPREAD OPERATOR
//it pulls out all the elements of the array or porperties of an object
//and puts it to whereever is around that spread operator.
const copiedArray = [...hobbies];
console.log(copiedArray);

//not flexible. Lets use the rest operator instead.
// const toArray = (arg1,arg2,arg3) => {
//     return[arg1, arg2, arg3];
// };
//REST OPERATOR
const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3,4));