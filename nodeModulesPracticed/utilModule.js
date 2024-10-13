// The util module in Node.js provides utility functions that make working with asynchronous operations, debugging, and more advanced programming patterns easier. It includes various helpful methods like formatting strings, inheriting from objects, and handling asynchronous functions using promisify().

// The util module is a core module in Node.js, meaning you don’t need to install it — it’s included by default. It is widely used to simplify coding patterns and improve readability.

// Key Functions in the util Module
// util.format() – Formats a string using placeholders (like printf in C).
// util.promisify() – Converts a callback-based function to a Promise-based one.
// util.callbackify() – Converts a Promise-based function into a callback-based one.
// util.inherits() – Inherits the prototype methods from one constructor to another (used to set up classical inheritance in JavaScript).
// util.inspect() – Returns a string representation of objects, used for debugging.
// util.types – Provides type checking utilities (e.g., isDate(), isPromise())

const util=require('util');


const name = 10;
const age = 25;

console.log(util.format('Name: %s, Age: %d', name, age));

let check=util.format('Name: %s, Age: %d', name, age);

// %s – String placeholder
// %d – Number placeholder
// %j – JSON placeholder
// %% – To escape the % symbol

console.log(typeof check);

// 2. util.promisify()
// The util.promisify() function converts callback-based functions into promise-based ones. This is extremely useful when working with older Node.js APIs that use callbacks, allowing you to use them with async/await or Promise syntax.
// const util = require('util');
// const fs = require('fs');

// // Promisify fs.readFile
// const readFile = util.promisify(fs.readFile);

// // Use with async/await
// (async () => {
//   try {
//     const data = await readFile('example.txt', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// })();

// 6. util.types
// The util.types object provides various type-checking utilities. These methods are more accurate than the typeof operator or the instanceof operator, especially when dealing with objects like promises, arrays, and dates.

// Common Methods in util.types:
// util.types.isPromise() – Checks if a value is a Promise.
// util.types.isDate() – Checks if a value is a Date object.
// util.types.isRegExp() – Checks if a value is a RegExp object.
