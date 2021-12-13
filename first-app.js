//global variables
const name = 'Max' //var is kind of outdated. use let or const instead.
let age = 29
const hasHobbies = true;

age = 30;

console.log(name);

function summarizeUser(userName, userAge, userHasHobbies){
    return 'Name is ' + userName + ", age is " + userAge + 
    ", user has hobbies: " + userHasHobbies; 
}

console.log(summarizeUser(name,age,hasHobbies));