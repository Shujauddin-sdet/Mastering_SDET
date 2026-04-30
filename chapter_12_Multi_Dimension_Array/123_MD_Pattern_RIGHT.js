// n = 3a
// *
// * *
// * * *

let n = 3;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        //row = row + "* ";
        row += "* ";
    }
    console.log(row.trim());
}

console.log("----------------------------")

let m = 6;

// OUTER LOOP: Controls the Rows (Top to Bottom)
for (let i = 1; i <= m; i++) {
    
    // INNER LOOP: Controls the Columns (Left to Right)
    for (let j = 1; j <= i; j++) {
        
        // 🛑 process.stdout.write(): 
        // Prints the string BUT leaves the cursor exactly where it finished. 
        // This forces the next star to be printed right next to it horizontally.
        process.stdout.write("* "); 
    }
    
    // 🟢 console.log() (Empty):
    // Once the inner loop is done building the row, we use an empty console.log().
    // This simply acts like hitting the "Enter" key to drop the cursor down to the next line for the next row.
    console.log(); 
}
