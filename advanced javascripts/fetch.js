// const API_URL="https://api.github.com/users/mohitchawda22"


// // Fetch API

// async function fetchData(){
    
//     const data=await fetch(API_URL)

//     const jsondata =await data.json()

//     console.log(jsondata)
// }

// fetchData().catch(err=>console.log(err))

// When to Use:
// Use Callbacks when working with simple, small-scale asynchronous operations like setTimeout or in scenarios where legacy libraries rely on callbacks.
// Use Promises (or async/await) for more complex asynchronous workflows, API calls, or when readability and error handling are critical.

// aysnc-await function is a syntactic sugar over promises
// async-await is a way to write asynchronous code in a synchronous way
// async-await is a newer way to write asynchronous code
// behind writing the aysnc-await function it is using promises only
// in aysnc-await is doesnt deal with the callbacks...

// async function x(){
//     throw function y(){
//         console.log("Hello World")
//     }
// }


// x()
// .catch(err=>console.log(err)) // [Function: y]

// function x(){
//     throw("mohit")
// }

// x()

// Yes, you can return a promise inside another promise. This is a common practice in JavaScript and is widely used when dealing with asynchronous operations. When you return a promise from within a .then() or a function, the outer promise will wait for the inner promise to resolve or reject before continuing.


// const fetchData = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Fetched data");
//         resolve("Data fetched");
//       }, 1000);
//     });
//   };
  
//   const processData = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Processed data");
//         resolve("Data processed");
//       }, 1000);
//     });
//   };
  
//   // Chaining Promises with Returning
//   fetchData()
//     .then((data) => {
//       console.log(data); // Logs: "Data fetched"
//       return processData(); // Returning another promise
//     })
//     .then((processedData) => {
//       console.log(processedData); // Logs: "Data processed"
//     });
  

// To avoid blocking caused by multiple console.log calls:

// Use setTimeout, queueMicrotask, or setImmediate to defer execution.
// Batch logs with setInterval.
// Use an async logger or a professional logging library like Winston or Pino.
// Minimize excessive logging in production environments.


const fs = require('fs');

// Reading a file to simulate I/O
fs.readFile('example.txt', () => {
  console.log('File Read Completed'); // Executes after file read is done
  
  setTimeout(() => {
    console.log('setTimeout(0)');
  }, 0);

  setImmediate(() => {
    console.log('setImmediate');
  });
});

console.log('Outside I/O');
