//Why is a Function Called a First-Class Citizen in JavaScript?
    
    
    In JavaScript, functions are first-class citizens (or first-class functions) because they can be assigned to variables, passed as arguments, and returned from other functions—just like any other value (e.g., numbers, strings, objects).

    This concept is fundamental to JavaScript's flexibility, enabling higher-order functions, callbacks, and functional programming.

1. Properties of First-Class Functions
✅ Functions Can Be Assigned to Variables
A function can be stored in a variable, just like a number or string.

```
    const greet = function() { // Anonymous function
    console.log("Hello!");
    };

    greet(); // "Hello!"
```


    ✅ Functions Can Be Passed as Arguments
    Since functions are values, they can be passed to other functions as arguments (callback functions).

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);


    ✅ Functions Can Be Returned from Other Functions
    A function can return another function, enabling closures and function factories.

function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10

    ✅ Functions Can Be Stored in Data Structures
    Since functions are values, they can be stored in arrays or objects.

const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

console.log(operations.add(5, 3)); // 8
console.log(operations.subtract(10, 4)); // 6


    ✅ Functions Can Be Created at Runtime
    Functions can be created dynamically inside other functions.

const sayHello = new Function("name", "return `Hello, ${name}!`");

console.log(sayHello("John")); // "Hello, John!"


    Functions in JavaScript are first-class citizens because they behave like any other value:

    They can be assigned to variables.
    They can be passed as arguments.
    They can be stored in data structures.
    This allows JavaScript to support powerful programming paradigms like functional programming and asynchronous programming. 🚀
    They can be returned from other functions.