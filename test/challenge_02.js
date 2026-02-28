// Challenge 2 - Test Case Result Counter
// After a test suite runs, I get an array of results like "pass", "fail", "skip".
// Using a for loop to count each type and print a report with a verdict.

// Verdict rules:
// - All passed → "All tests passed. Ready for release!"
// - ≤ 2 failures → "Minor failures. Review before release."
// - > 2 failures → "Too many failures. Block release!"

// Example:
// Input  : ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
// Output : Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.

// change this array to test different scenarios
let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passed = 0;
let failed = 0;
let skipped = 0;

for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passed++;
    } else if (testResults[i] === "fail") {
        failed++;
    } else if (testResults[i] === "skip") {
        skipped++;
    }
}

let total = testResults.length;
let passRate = ((passed / total) * 100).toFixed(2);

// figure out the verdict based on failure count
let verdict = "";
if (failed === 0) {
    verdict = "All tests passed. Ready for release!";
} else if (failed <= 2) {
    verdict = "Minor failures. Review before release.";
} else {
    verdict = "Too many failures. Block release!";
}

console.log(`Total Tests : ${total} Passed: ${passed} Failed: ${failed} Skipped: ${skipped} Pass Rate: ${passRate}% VERDICT: ${verdict}`);
