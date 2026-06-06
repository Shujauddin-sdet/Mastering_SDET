// --- What are Export and Import in JavaScript? ---
// Imagine each JavaScript file is a separate house. 
// - "export": Placing an item near the door so that other houses can borrow and use it.
// - "import": Reaching out to another house to borrow and use their exported items.

// Importing the variable 'BASE_URL' and function 'formatUpperCaseString' from the '../testutil.js' file
import { BASE_URL, formatUpperCaseString } from "../testutil.js";

// Print the imported variable 'BASE_URL' to the console
console.log(BASE_URL);

// NOTE: 'fname' is defined in testutil.js but NOT exported, so trying to import it would fail.
// console.log(fname);

// Call the imported helper function to convert the name to uppercase
let result = formatUpperCaseString("Pramod");

// Print the converted name ("PRAMOD") to the console
console.log(result);



