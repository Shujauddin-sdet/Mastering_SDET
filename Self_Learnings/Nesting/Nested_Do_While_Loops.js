// 🔙 Back to Main Guide: [Javascript.md](../Javascript.md)
// =========================================================================
// NESTED DO...WHILE LOOPS IN JAVASCRIPT
// =========================================================================
// A nested "do...while" loop has one do...while loop inside another.
//
// Key Feature of do...while:
// The code inside the loop is guaranteed to run AT LEAST ONCE, 
// even if the condition is false from the start.

console.log("--- Example: Nested do...while loop ---");

let outer = 1;

do {
  console.log(`Outer Loop starts (outer = ${outer})`);
  
  let inner = 1; // Reset inner counter inside outer loop
  
  do {
    console.log(`   └─ Inner Loop runs (outer = ${outer}, inner = ${inner})`);
    inner++;
  } while (inner <= 2); // Inner loop runs while inner <= 2
  
  console.log(`Outer Loop ends for this turn\n`);
  outer++;
} while (outer <= 2); // Outer loop runs while outer <= 2


console.log("--- Example 2: Demonstrating the 'Run-At-Least-Once' Rule ---");

let x = 10; // Condition x < 5 is false immediately
let y = 20; // Condition y < 5 is false immediately

do {
  console.log(`Outer runs once (x = ${x})`);
  
  do {
    console.log(`   └─ Inner runs once (y = ${y})`);
    y++;
  } while (y < 5); // False immediately!
  
  x++;
} while (x < 5); // False immediately!
