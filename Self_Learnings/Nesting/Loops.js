// 🔙 Back to Main Guide: [Javascript.md](../Javascript.md)
// =========================================================================
// Example of Nested Loops
// =========================================================================
// 1. SUPER EASY INTRODUCTORY NESTED LOOP
// =========================================================================
// Think of a clock: The Outer Loop is the HOUR hand (moves slowly),
// and the Inner Loop is the MINUTE hand (moves fast).
// The inner loop must run to completion for *every single iteration* of the outer loop.

console.log("--- 1. Simple Nested Loop (Grid/Clock analogy) ---");

// Outer loop: Runs 2 times (i = 1 to 2)
for (let i = 1; i <= 2; i++) {
  console.log(`Outer Loop (i) is on step: ${i}`);

  // Inner loop: Runs 3 times (j = 1 to 3) for every single step of the outer loop!
  for (let j = 1; j <= 3; j++) {
    console.log(`   └─ Inner Loop (j) runs: ${j} (Current: i=${i}, j=${j})`);
  }
  console.log(""); // Empty line for readability
}


// =========================================================================
// 2. THE ORIGINAL PATTERN NESTED LOOP (Dynamic Inner Loop Boundary)
// =========================================================================
// In this loop, the inner loop's boundary is dependent on the outer loop's variable (j <= i).
// This creates a stair-step/triangle pattern!

console.log("--- 2. Original Triangle Nested Loop ---");

// Outer loop: i goes from 0, to 1, to 2
for (let i = 0; i <= 2; i++) {
  // Inner loop: j starts at 0, and runs ONLY as long as j is less than or equal to i
  // Let's trace how this executes step-by-step:
  //
  // STEP 1: Outer loop i = 0
  //   - Inner loop runs: j = 0. (j <= 0 is true) -> prints: "0 0"
  //   - Inner loop increases to j = 1. (j <= 0 is false) -> inner loop stops.
  //
  // STEP 2: Outer loop i = 1
  //   - Inner loop runs: j = 0. (j <= 1 is true) -> prints: "1 0"
  //   - Inner loop runs: j = 1. (j <= 1 is true) -> prints: "1 1"
  //   - Inner loop increases to j = 2. (j <= 1 is false) -> inner loop stops.
  //
  // STEP 3: Outer loop i = 2
  //   - Inner loop runs: j = 0. (j <= 2 is true) -> prints: "2 0"
  //   - Inner loop runs: j = 1. (j <= 2 is true) -> prints: "2 1"
  //   - Inner loop runs: j = 2. (j <= 2 is true) -> prints: "2 2"
  //   - Inner loop increases to j = 3. (j <= 2 is false) -> inner loop stops.
  
  for (let j = 0; j <= i; j++) {
    console.log(i + " " + j);
  }
}
