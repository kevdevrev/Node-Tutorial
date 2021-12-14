//our argument will eventually call in our inner function once the timer is done.
// const fetchData = callback => {

//we no longer use any callback here, and instead do resolve.
const fetchData = () => {
    //we make our promise here.

    //new is our constructor obviously
    //promise constructor is built into js
    //resolve means it does the promise succesfully, reject means it fails and throws an error.
    //normally this is behind the scenes hidden away, and not written by me.
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //callback('Done!');
        //we now do resolve instead
        resolve('Done');
    }, 1500);
    });
    //this is synchronus, it will return before the code inside is run.
    return promise;
};


//TIMED DELAYS
//ASYNCHRONUS
//Its a "Callback" function that executes in the future and JS recognizes it.
//If we keep nesting callbacks, theres something called "promises" which are in Node.js.
//3rd party packages use promises for us usually. We are gonna use a handmade one.
setTimeout(() => {
    console.log('Timer is done!');
    //we are calling fetchData here
    // fetchData(text => {
    //     console.log(text);
    // });
    //now we no longer pass a callback , but instead just do:
    fetchData()
    .then(text => {
        console.log(text);
        //we return another promise here to let the next then run.
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
        //no promise returned here, so we are done nesting
    })// we can just have a series of .then instead of nesting so many and its more clear now
    ; // this is callable on a promise, and returns a promise
}, 2000);

//SYNCHRONUS
console.log('hello!');
console.log('hi');




