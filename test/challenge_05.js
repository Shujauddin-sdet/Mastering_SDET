// Challenge 5
// Test Data Generator
// As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).

// Examples:
// Input:
// Generate 8 users
// Output:
// USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE
// 💡 Explanation:Each user gets a padded ID, sequential name/email, cycling role, and every 3rd user is INACTIVE for edge case testing.

// total users to generate - change this to test different counts
const TOTAL_USERS = 8;

// roles cycle through this list
const roles = ["admin", "editor", "viewer", "tester", "manager"];

// var used as a global counter across the loop
var userCount = 0;

for (let i = 1; i <= TOTAL_USERS; i++) {
    userCount++;

    // pad the ID to 4 digits e.g. USR-0001
    let userId = "USR-" + String(i).padStart(4, "0");

    let name = `TestUser_${i}`;
    let email = `testuser${i}@testingacademy.com`;

    // cycle through roles using modulo
    let role = roles[(i - 1) % roles.length];

    // every 3rd user is inactive - edge case
    let status = i % 3 === 0 ? "INACTIVE" : "ACTIVE";

    console.log(`${userId} | ${name} | ${email} | ${role} | ${status}`);
}
