/**
 * Bitwise Operators 
 * 
 * Bitwise operators work on 32-bit integers.
 * They treat numbers as 32-bit binary (0s and 1s) and operate on them.
 */

console.log("=== Bitwise Operators in JavaScript ===");

// We use an empty console.log() just to print a blank line in the terminal
// so the output is easier to read!
console.log(); 

let a = 5;  // Binary: 0101
let b = 1;  // Binary: 0001

console.log("a =", a);
console.log("b =", b);
console.log(); 

// 1. Bitwise AND (&)
console.log("1. Bitwise AND (&)");
console.log("a & b =", a & b); 

console.log();

// 2. Bitwise OR (|)
console.log("2. Bitwise OR (|)");
console.log("a | b =", a | b); 

console.log();

// 3. Bitwise XOR (^)
console.log("3. Bitwise XOR (^)");
console.log("a ^ b =", a ^ b); 

console.log();

// 4. Bitwise NOT (~)
console.log("4. Bitwise NOT (~)");
console.log("~a =", ~a);       

console.log();

// 5. Left Shift (<<)
console.log("5. Left Shift (<<)");
console.log("a << 1 =", a << 1); 

console.log();

// 6. Right Shift (>>)
console.log("6. Right Shift (>>)");
console.log("a >> 1 =", a >> 1); 

console.log();

// 7. Unsigned Zero-Fill Right Shift (>>>)
console.log("7. Unsigned Right Shift (>>>)");
console.log("a >>> 1 =", a >>> 1); 
