"use strict";
// src/hello.ts
// A simple function demonstrating type annotations for parameters and return value
function greet(name) {
    return `Hello, ${name}!`;
}
// Declaring a variable with a type annotation
const userName = "Magical World";
console.log(greet(userName));
// Let's see what happens if we try to misuse the function:
// Uncomment the line below to see the TypeScript error during compilation
// console.log(greet(42));
