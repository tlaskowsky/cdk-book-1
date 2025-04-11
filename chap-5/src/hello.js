// src/hello.ts
// A simple function demonstrating type annotations for parameters and return value
function greet(name) {
    return "Hello, ".concat(name, "!");
}
// Declaring a variable with a type annotation
var userName = "Magical World";
console.log(greet(userName));
// Let's see what happens if we try to misuse the function:
// Uncomment the line below to see the TypeScript error during compilation
console.log(greet(42));
