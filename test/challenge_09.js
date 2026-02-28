// Challenge 9
// Login Brute-Force Detection
// Write a JavaScript program that simulates a login system with brute-force detection. The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).

// Examples:
// Input:
// Valid: admin@testingacademy.com / Test@1234 Attempts: [wrong, wrong, wrong, correct]
// Output:
// Attempt 1: ❌ FAILED - Strike 1/3 Attempt 2: ❌ FAILED - Strike 2/3 Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected
// 💡 Explanation:After 3 consecutive failures, the account is locked. Even correct credentials on attempt 4 are rejected.

// valid credentials stored as constants
const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_STRIKES = 3;

// login attempts to simulate - mix of wrong and right
const loginAttempts = [
    { email: "admin@testingacademy.com", password: "wrongpass" },
    { email: "admin@testingacademy.com", password: "wrongpass" },
    { email: "admin@testingacademy.com", password: "wrongpass" },
    { email: "admin@testingacademy.com", password: "Test@1234" }
];

// var for global strike counter
var strikes = 0;
var isLocked = false;

let attemptIndex = 0;

do {
    let attempt = loginAttempts[attemptIndex];
    let attemptNum = attemptIndex + 1;

    if (isLocked) {
        console.log(`Attempt ${attemptNum}: 🔒 ACCOUNT LOCKED - Rejected`);
    } else {
        // strict equality check on both fields
        let isValid = attempt.email === VALID_EMAIL && attempt.password === VALID_PASSWORD;

        if (isValid) {
            console.log(`Attempt ${attemptNum}: ✅ LOGIN SUCCESS`);
            strikes = 0; // reset strikes on success
        } else {
            strikes++;
            console.log(`Attempt ${attemptNum}: ❌ FAILED - Strike ${strikes}/${MAX_STRIKES}`);

            // lock after hitting max strikes
            if (strikes >= MAX_STRIKES) {
                console.log("🚨 ACCOUNT LOCKED");
                isLocked = true;
            }
        }
    }

    attemptIndex++;

} while (attemptIndex < loginAttempts.length);
