// 🔙 Back to Main Guide: [Javascript.md](../Javascript.md)
// =========================================================================
// NESTED FOR LOOPS IN JAVASCRIPT
// =========================================================================
// A nested "for" loop is a loop inside another "for" loop.
// 
// Real-world Analogy for SDETs (Software Development Engineers in Test):
// Think of an Excel Sheet or HTML Table.
// - The OUTER loop iterates through each ROW.
// - The INNER loop iterates through each COLUMN (cell) of the current row.

console.log("--- Example 1: Traversing a 2D Array (Excel Grid Analogy) ---");

// Let's define a 2D array representing test data (3 users, each with name and role)
const testUsers = [
  ["Alice", "Admin"],      // Row 0
  ["Bob", "Tester"],       // Row 1
  ["Charlie", "Developer"] // Row 2
];

// Outer loop: Iterate through each Row (from row 0 to 2)
for (let row = 0; row < testUsers.length; row++) {
  console.log(`Checking Row ${row}...`);

  // Inner loop: Iterate through each Column (cell) inside the current Row
  // testUsers[row].length gets the number of items in that specific row
  for (let col = 0; col < testUsers[row].length; col++) {
    const cellValue = testUsers[row][col];
    console.log(`   └─ Column ${col} value: ${cellValue}`);
  }
}


console.log("\n--- Example 2: Printing a Square Grid Pattern (3x3) ---");
// This prints a grid of stars. 
// Outer loop controls how many rows we have.
// Inner loop prints stars in each row.

const gridSize = 3;
for (let i = 0; i < gridSize; i++) {
  let rowString = ""; // Start with an empty string for the row
  
  for (let j = 0; j < gridSize; j++) {
    rowString += "* "; // Add a star for each column
  }
  
  console.log(rowString); // Print the completed row
}
