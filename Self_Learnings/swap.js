// Method A: Using a Third Variable (Recommended for Readability)
// JavaScript
let a = 10;
let b = 20;

console.log("Before Swap: a =", a, "b =", b);

let temp = a; // temp stores 10
a = b;        // a becomes 20
b = temp;     // b becomes 10 (from temp)

console.log("After Swap: a =", a, "b =", b);
// Method B: Without a Third Variable (The Interview Logic)
// This uses math to "store" the information of both numbers inside one variable temporarily.

// JavaScript
let a1 = 10;
let b1 = 20;

console.log("Before Swap: a =", a1, "b =", b1);

// Step 1: Combine them
a1 = a1 + b1; // a is now 30 (10 + 20)

// Step 2: Extract the original 'a' into 'b'
b1 = a1 - b1; // b is now 10 (30 - 20)

// Step 3: Extract the original 'b' into 'a'
a1 = a1 - b1; // a is now 20 (30 - 10)

console.log("After Swap: a =", a1, "b =", b1);