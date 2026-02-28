//  Challenge 3
// Retry Failed API Call
// In automation testing, API calls sometimes fail due to network issues. Write a JavaScript program that simulates retrying a failed API call using a do...while loop. The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.

// Examples:
// Input:
// MAX_ATTEMPTS = 5
// Output:
// Attempt 1: ❌ FAILED (Timeout/Error) Attempt 2: ✅ SUCCESS (Response 200 OK) API call PASSED after 2 attempt(s).
// 💡 Explanation:The do...while loop runs at least once and continues until success or max attempts. Random simulation determines each attempt result.

const MAX_ATTEMPTS = 5;

let attempt = 0;
let success = false;

do {
    attempt++;

    // 40% chance of success - random value > 0.6
    let randomValue = Math.random();
    success = randomValue > 0.6;

    if (success) {
        console.log(`Attempt ${attempt}: ✅ SUCCESS (Response 200 OK)`);
    } else {
        console.log(`Attempt ${attempt}: ❌ FAILED (Timeout/Error)`);
    }

} while (!success && attempt < MAX_ATTEMPTS);

// print the final verdict
if (success) {
    console.log(`API call PASSED after ${attempt} attempt(s).`);
} else {
    console.log(`API call FAILED after ${attempt} attempt(s). Max retries reached.`);
}
