const path=require('path');

// The path module in Node.js is a core module used for handling and transforming file paths. It provides utilities for working with file and directory paths in a way that is cross-platform compatible, meaning it handles differences between operating systems (e.g., Windows uses \ as a path separator, while Linux and macOS use /).

// Common Methods of the path Module
// path.basename() – Returns the last portion (base) of a file path.
// path.dirname() – Returns the directory part of a file path.
// path.extname() – Returns the file extension from a file path.
// path.join() – Joins multiple segments into a single path.
// path.resolve() – Resolves a sequence of paths into an absolute path.
// path.parse() – Parses a file path into an object containing its components.
// path.format() – Formats a path object into a string.
// path.isAbsolute() – Checks if a path is absolute.
// path.normalize() – Normalizes a path, resolving .. and . segments.

// 1.path.basename()
// This method returns the last part of a path (the file name or the directory name).
var a="/home/pmt_User/Documents/Interview/gitHubPractice_code/node_js/test.txt";

console.log(path.basename(a));

// 2.path.dirname()
console.log(path.dirname(a));

// 3.path.extname()
console.log(path.extname(a,'check'));

//4.path.join()

// Join path segments
const joinedPath = path.join('home', 'user', 'docs', 'file.txt');
console.log(joinedPath);  // Output: '/home/user/docs/file.txt'

// Handling extra slashes and relative segments
const anotherPath = path.join('/home/user/', '../', 'docs', './file.txt');
console.log(anotherPath);  // Output: '/home/docs/file.txt'


// 4.path.resolve()

// Resolve an absolute path
const resolvedPath = path.resolve('docs', 'file.txt');
console.log(resolvedPath);  // Output (depends on the current working directory): '/Users/yourUser/currentDir/docs/file.txt'

// If the first argument is absolute, it ignores the previous paths
const anotherResolvedPath = path.resolve('/home/user', 'docs', 'file.txt');
console.log(anotherResolvedPath);  // Output: '/home/user/docs/file.txt'


// path.parse()
console.log(path.parse(a));