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

const hobbies = ['Sports', 'Cooking'];
// for(let hobby of hobbies) {
//     console.log(hobbies);
// }
//map is great and one of many methods provided.
// console.log(hobbies.map(hobby => {return 'Hobby:' + hobby;}));//will return a new array once edited
// //will update each elemnt one by one.
// console.log(hobbies);
hobbies.push('Programming');
console.log(hobbies);