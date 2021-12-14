//global variables
const name = 'Max' //var is kind of outdated. use let or const instead.
let age = 29
const hasHobbies = true;

age = 30;

console.log(name);

//arrow function, annoymous 
//its shorter but we use it because:
//
const summarizeUser = (userName, userAge, userHasHobbies) => {
    return 'Name is ' + userName + ", age is " + userAge + 
    ", user has hobbies: " + userHasHobbies; 
}

//shorter way of doing it
const add = (a,b) => a + b;
//if you have one argument only, you can have just the argument without parenthesis
//const addOne = a => a + 1;
const addRandom = () => 1 + 2;
console.log(addRandom());

console.log(summarizeUser(name,age,hasHobbies));
console.log(add(1,2));