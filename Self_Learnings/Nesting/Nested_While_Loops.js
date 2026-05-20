// 🔙 Back to Main Guide: [Javascript.md](../Javascript.md)
// =========================================================================
// NESTED WHILE LOOPS IN JAVASCRIPT
// =========================================================================
// A nested "while" loop is a while loop placed inside another while loop.
// 
// ⚠️ CRITICAL WARNING FOR BEGINNERS:
// You must declare/reset the inner loop counter variable INSIDE the outer loop.
// If you declare it outside the outer loop and do not reset it, the inner loop 
// will run only during the first outer iteration, and then never run again!

console.log("--- Example: Printing Coordinate Pairs (using nested while loops) ---");

let outerCounter = 1; // 1. Declare outer loop counter

while (outerCounter <= 3) { // 2. Outer loop condition
  console.log(`Outer Loop is at: ${outerCounter}`);
  
  // 3. Declare and reset inner loop counter INSIDE the outer loop!
  // This ensures that 'innerCounter' goes back to 1 every time the outer loop ticks.
  let innerCounter = 1; 
  
  while (innerCounter <= 2) { // 4. Inner loop condition
    console.log(`   └─ Inner Loop step: ${innerCounter} (Pair: ${outerCounter}, ${innerCounter})`);
    
    innerCounter++; // 5. Increment inner loop counter (prevent infinite loop)
  }
  
  console.log(""); // Blank line for spacing
  outerCounter++; // 6. Increment outer loop counter (prevent infinite loop)
}

// -------------------------------------------------------------------------
// ❌ WRONG WAY (Common Mistake):
// -------------------------------------------------------------------------
// let j = 1;
// while (i <= 3) {
//   while (j <= 2) {
//     console.log(i, j);
//     j++;
//   }
//   i++;
//   // Here, 'j' is now 3. In the next iterations of the outer loop, 
//   // the inner loop condition 'j <= 2' will be false instantly,
//   // so the inner loop will NEVER execute again!
// -------------------------------------------------------------------------
