// Functions in JavaScript
// A function is a block of code designed to perform a particular task
// Functions can take parameters and return values
// Functions help in code reusability and modularity

// Basic function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("John")); // Output: Hello, John!


// Function expression
const add = function(x, y) {
    return x + y;
};

console.log(add(5, 3)); // Output: 8


// Arrow functions (ES6)
const multiply = (x, y) => x * y;
console.log(multiply(4, 6)); // Output: 24


// Function with default parameters
function greetWithDefault(name = "World") {
    return `Hello, ${name}!`;
}

console.log(greetWithDefault()); // Output: Hello, World!
console.log(greetWithDefault("Alice")); // Output: Hello, Alice!


// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// Higher-order functions - functions that take other functions as arguments
const numbers = [1, 2, 3, 4, 5];

// Using map with a function
const doubled = numbers.map(x => x * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Using filter with a function
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // Output: [2, 4]

// Using reduce with a function
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total); // Output: 15


// Callback functions
function calculate(x, y, callback) {
    return callback(x, y);
}

const result = calculate(10, 5, (a, b) => a - b);
console.log(result); // Output: 5


// IIFE - Immediately Invoked Function Expression
(function() {
    console.log("This function runs immediately!");
})(); // Output: This function runs immediately!


// Recursive functions
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120


// Function hoisting
console.log(hoistedFunction(3)); // Works even though function is defined below

function hoistedFunction(x) {
    return x * x;
}


// Closures - A function that has access to variables in its outer (enclosing) scope
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // Output: 8


// Function methods: call, apply, bind
const person = {
    name: "Bob",
    age: 30
};

function introduce(city) {
    return `Hi, I'm ${this.name}, ${this.age} years old, from ${city}`;
}

// Using call
console.log(introduce.call(person, "New York")); // Output: Hi, I'm Bob, 30 years old, from New York

// Using apply
console.log(introduce.apply(person, ["Paris"])); // Output: Hi, I'm Bob, 30 years old, from Paris

// Using bind
const boundIntroduce = introduce.bind(person, "Tokyo");
console.log(boundIntroduce()); // Output: Hi, I'm Bob, 30 years old, from Tokyo


// Function with multiple return types
function getType(value) {
    if (typeof value === 'string') {
        return `String: ${value}`;
    } else if (typeof value === 'number') {
        return `Number: ${value}`;
    } else if (Array.isArray(value)) {
        return `Array with ${value.length} elements`;
    } else {
        return "Other type";
    }
}

console.log(getType("Hello")); // Output: String: Hello
console.log(getType(42)); // Output: Number: 42
console.log(getType([1, 2, 3])); // Output: Array with 3 elements


// Function that returns an object
function createUser(name, email) {
    return {
        name,
        email,
        isActive: true
    };
}

const user = createUser("Jane", "jane@example.com");
console.log(user); // Output: { name: 'Jane', email: 'jane@example.com', isActive: true }