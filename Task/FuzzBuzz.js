/**
 * FuzzBuzz Challenge
 * ------------------
 * Loop from 1 to 100 and apply the following rules for each number:
 *
 * Step 1 → Loop runs from i = 1 up to i = 100.
 * Step 2 → If the number is divisible by both 3 AND 5  → print "FuzzBuzz"
 * Step 3 → Else if divisible by 3 only                 → print "Fuzz"
 * Step 4 → Else if divisible by 5 only                 → print "Buzz"
 * Step 5 → Otherwise                                   → print the number
 *
 * NOTE: The "both 3 and 5" check must come FIRST,
 *       otherwise numbers like 15 would only match "Fuzz" and stop there.
 */

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        // Step 2 — divisible by both 3 and 5 (e.g. 15, 30, 45...)
        console.log("FuzzBuzz");

    } else if (i % 3 === 0) {
        // Step 3 — divisible by 3 only (e.g. 3, 6, 9...)
        console.log("Fuzz");

    } else if (i % 5 === 0) {
        // Step 4 — divisible by 5 only (e.g. 5, 10, 20...)
        console.log("Buzz");

    } else {
        // Step 5 — none of the above; just print the number
        console.log(i);
    }
}