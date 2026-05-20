// 🔙 Back to Main Guide: [Javascript.md](../Javascript.md)
// =========================================================================
// NESTED FOR...OF LOOPS IN JAVASCRIPT
// =========================================================================
// The "for...of" loop is used to loop through the VALUES of an iterable (like Arrays).
// Unlike for...in (which gets keys/indices), for...of gets the actual elements directly.
//
// Real-world Analogy for SDETs:
// Think of a Test Suite where you have groups of test cases.
// - The OUTER loop iterates through each TEST GROUP.
// - The INNER loop iterates through the individual TEST CASES inside each group.

console.log("--- Example: Iterating over Nested Arrays (Test Groups & Cases) ---");

// Array of arrays containing test cases
const testSuites = [
  ["Login Test", "Logout Test", "Forgot Password Test"], // Group 0 (Auth Suite)
  ["Add to Cart Test", "Checkout Test"],                  // Group 1 (Cart Suite)
  ["Search Product Test", "Filter Results Test"]         // Group 2 (Search Suite)
];

let suiteNumber = 1;

// Outer loop: Gets each inner array (suite) directly
for (const suite of testSuites) {
  console.log(`Running Test Suite #${suiteNumber}...`);
  
  // Inner loop: Gets each string (test case name) directly from the current suite
  for (const testCase of suite) {
    console.log(`   └─ Executing: ${testCase}`);
  }
  
  suiteNumber++;
  console.log(""); // Empty line for readability
}
