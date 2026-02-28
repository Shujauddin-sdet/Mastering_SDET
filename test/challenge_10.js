//  Challenge 10
// Mini Test Suite Runner
// Build a mini test suite runner that executes test cases and generates a summary report. This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

// Each test case has a name, expected value, actual value, and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), find first failure (do...while), and print a comprehensive report.

// Examples:
// Input:
// { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" }
// Output:
// ✅ TC-01: Status code is 200 → PASS (200 === 200) ... Pass Rate: 80.00% Overall: ❌ FAILED
// 💡 Explanation:Each test is evaluated based on its comparison type using switch, with results tracked via counters and reported at the end.

// test suite - change or add test cases here
const testCases = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "Response body is truthy", actual: "OK", expected: null, type: "truthy" },
    { name: "Type of userId is number", actual: 101, expected: "number", type: "typeCheck" },
    { name: "Response time under 500", actual: 320, expected: 500, type: "lessThan" },
    { name: "Error message matches", actual: "Not Found", expected: "OK", type: "strictEqual" }
];

// var for global counters
var passed = 0;
var failed = 0;
var errors = 0;

// run through each test case
for (let i = 0; i < testCases.length; i++) {
    let tc = testCases[i];
    let tcNum = "TC-" + String(i + 1).padStart(2, "0");
    let result = "";
    let detail = "";

    // switch decides how to compare based on type
    switch (tc.type) {
        case "strictEqual":
            if (tc.actual === tc.expected) {
                result = "PASS";
                detail = `${tc.actual} === ${tc.expected}`;
            } else {
                result = "FAIL";
                detail = `${tc.actual} !== ${tc.expected}`;
            }
            break;

        case "looseEqual":
            if (tc.actual == tc.expected) {
                result = "PASS";
                detail = `${tc.actual} == ${tc.expected}`;
            } else {
                result = "FAIL";
                detail = `${tc.actual} != ${tc.expected}`;
            }
            break;

        case "typeCheck":
            if (typeof tc.actual === tc.expected) {
                result = "PASS";
                detail = `typeof ${tc.actual} is '${tc.expected}'`;
            } else {
                result = "FAIL";
                detail = `typeof ${tc.actual} is '${typeof tc.actual}', expected '${tc.expected}'`;
            }
            break;

        case "truthy":
            if (tc.actual) {
                result = "PASS";
                detail = `${tc.actual} is truthy`;
            } else {
                result = "FAIL";
                detail = `${tc.actual} is falsy`;
            }
            break;

        case "lessThan":
            if (tc.actual < tc.expected) {
                result = "PASS";
                detail = `${tc.actual} < ${tc.expected}`;
            } else {
                result = "FAIL";
                detail = `${tc.actual} is not less than ${tc.expected}`;
            }
            break;

        default:
            result = "ERROR";
            detail = "Unknown comparison type";
            errors++;
    }

    // update counters based on result
    if (result === "PASS") {
        passed++;
        console.log(`✅ ${tcNum}: ${tc.name} → PASS (${detail})`);
    } else if (result === "FAIL") {
        failed++;
        console.log(`❌ ${tcNum}: ${tc.name} → FAIL (${detail})`);
    }
}

// find consecutive passes from the start using while loop
let consecutivePasses = 0;
let wi = 0;
// note: re-running logic to track streak - clean approach
let tempPassed = 0;
let tempFailed = 0;
const results = [];

for (let i = 0; i < testCases.length; i++) {
    let tc = testCases[i];
    let isPass = false;

    switch (tc.type) {
        case "strictEqual": isPass = tc.actual === tc.expected; break;
        case "looseEqual": isPass = tc.actual == tc.expected; break;
        case "typeCheck": isPass = typeof tc.actual === tc.expected; break;
        case "truthy": isPass = !!tc.actual; break;
        case "lessThan": isPass = tc.actual < tc.expected; break;
    }

    results.push(isPass);
}

while (wi < results.length && results[wi] === true) {
    consecutivePasses++;
    wi++;
}

// find first failure using do...while
let firstFailIndex = -1;
let di = 0;
do {
    if (results[di] === false) {
        firstFailIndex = di + 1;
        break;
    }
    di++;
} while (di < results.length);

// final summary report
let total = testCases.length;
let passRate = ((passed / total) * 100).toFixed(2);
let overall = failed === 0 ? "✅ PASSED" : "❌ FAILED";

console.log("-------------------------------------------");
console.log(`Total: ${total} | Passed: ${passed} | Failed: ${failed} | Errors: ${errors}`);
console.log(`Pass Rate: ${passRate}%`);
console.log(`Consecutive passes from start: ${consecutivePasses}`);
console.log(`First failure at: TC-${String(firstFailIndex).padStart(2, "0")}`);
console.log(`Overall: ${overall}`);
