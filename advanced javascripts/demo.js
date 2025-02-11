// function createUser() {
//     const user = { name: "Rishi", age: 25 }; // Object is stored in the heap
//     return user;
//     }
//     const newUser = createUser(); // 'user' stays in the heap as long as 'newUser' references it
//     console.log("a");
    

// function greet() {
//     let name = "Rishi"; // 'name' is stored in the stack
//     console.log(name);
//     }
//     greet(); // 'name' is removed from the stack after function execution
//     console.log("a");
    
// var a = 2
// var b = 5

// function name() {
//   var c = 5
//   console.log(a)
//   console.log('This is name function')
// }

// name()
// var d = 9
// console.log(d)


// (function(){
//     var c = 5;
// })();

// function greet() {
//     console.log("Hello!");
//   }
  
//   function sayName() {
//     console.log("My name is Rishi.");
//     greet();
//   }
  
//   function start() {
//     console.log("Starting program...");
//     sayName();
//   }
  
//   start();
  
// function recurse() {
//     recurse();
//     console.log("a") // Function calls itself indefinitely
//   }
//   recurse(); // Causes a "Maximum call stack size exceeded" error
  

// function outerFunction() {
//     let outerVariable = "I am from outer scope";
  
//     function innerFunction() {
//       console.log(outerVariable); // Accesses the variable from the outer function
//     }
  
//     return innerFunction; // Returns the inner function
//   }
  
//   const closureFunction = outerFunction(); // outerFunction is executed
//   closureFunction(); // Logs: "I am from outer scope"
  

//   let a =10
//   function temp(){
//     var c = 20
//     console.log(a)
//   }
//   temp()
//   console.log(a) // 10


// function exampleFunction() {
//     var name = "John";
//     console.log(name); // Output: "John"
//   }
  
//   exampleFunction();
  
//   console.log(name);
  

// let x=10
// function printx(){
//     console.log(x)
// } 

// {
//     let y=20
//     printx()
//     console.log(y);
//     console.log(x);
// }

// console.log(y);

// let a
// function sum(){
//     a=10
// }

// {
//     sum()
//     console.log(a);  
// }

// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(`Count is now ${count}`);
//   }

//   function decrement() {
//     count--;
//     console.log(`Count is now ${count}`);
//   }

//   return {
//     increment,
//     decrement
//   };
// }

// let counter = createCounter();
// counter.increment(); // logs "Count is now 1"
// counter.increment(); // logs "Count is now 2"
// counter.decrement(); // logs "Count is now 1"


// console.log("aaaaa");

// setTimeout(function x(){
//     console.log("Hello");
// },1000)

// function y(){
//     setTimeout(function(){
//         console.log("World")
//     },1000)
// }
// y()

// var x=10
// {
//     var x=20
//     console.log(x);
// }

// array= [10, 20, 30, 40, 50];
// // const [a = aDefault, b,...rest] = array;
// // const [a, b, ...{ pop, push }] = array;
// const [a, b, ...[c, d]] = array;
// console.log(a, b,c,d); // 10 20 30 40

// function v(){
//     var a=10
//     return a
// }console.log(v());

// console.log(a)

// {
//     // TDZ starts at beginning of scope
//     const func = () => console.log(letVar); // OK
  
//     // Within the TDZ letVar access throws `ReferenceError`
  
//     let letVar = 3; // End of TDZ (for letVar)
//     func(); // Called outside TDZ!
//   }
  


    // typeof i; // ReferenceError: Cannot access 'i' before initialization
// { console.log(typeof(i)); // 10
//     var i = 10;
// } 

// console.log(typeof undeclaredVariable); // "undefined"

// function foo(a) {
//     let a = 1; 
//   }
//   try {
//   } catch (e) {
//     let e; 
//   }
  
// let x = 1;
// switch (x) {
//   case 0:
//     let foo;
//     break;
//   case 1:
//     let foo;
//     break;
// }

// var a = 1;
// var b = 2;

// {
//   var a = 11; // the scope is global
//   let b = 22; // the scope is inside the block

//   console.log(a); // 11
//   console.log(b); // 22
// }

// console.log(a); // 11
// console.log(b); // 2

// const result = /(a+)(b+)(c+)/.exec("aaabcc");
// let [, a, b, c] = result;
// console.log(a, b, c);

// console.log(typeof({})+typeof([]))

// const createCounter = () => {
//     let counter =0 
//     return function(){
//         // counter++
//         return counter+=1
//         // console.log(counter);
        
//     }
//   };
  
//   const counter = createCounter();
//   console.log(counter()); // 1
//   console.log(counter()); // 2
//   console.log(counter()); // 3
  
// console.log(a); // Output?
// var a = 10;

// console.log(b); // Output?
// let b = 20;

// function hoistedFunction() {
//   console.log("I am hoisted!");
// }

// hoistedFunction();


// var x = 5;
// function test() {
//   var x = 10;
//   if (true) {
//     var x = 15;
//   }
//   console.log(x); // Output?
// }
// test();


// const globalVar = "I am global";
// function outer() {
//   const outerVar = "I am outer";
//   function inner() {
//     const innerVar = "I am inner";
//     console.log(globalVar); // Output?
//     console.log(outerVar);  // Output?
//   }
//   inner();
// }
// outer();

// console.log("Start");

// function first() {
//   console.log("First Function");
//   second();
// }

// function second() {
//   console.log("Second Function");
// }

// first();
// console.log("End");

// console.log("Start");
// throw new Error("errror ")
// console.log("Hello");