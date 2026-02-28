// Challenge 6
// Bug Severity Classifier
// As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

// Examples:
// Input:
// frequency = "always", impact = "blocker"
// Output:
// Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: blocker Severity: P0 - Critical: Stop release immediately
// 💡 Explanation:A bug that always occurs and is a blocker gets the highest severity P0, requiring immediate action.

// tweak these two to test different combos
let frequency = "always";
let impact = "blocker";

let bugTitle = "Checkout page crashes on applying coupon";

let severity = "";
let description = "";

if (frequency === "always") {
    if (impact === "blocker") {
        severity = "P0";
        description = "Critical: Stop release immediately";
    } else if (impact === "major") {
        severity = "P1";
        description = "High: Must fix before release";
    } else if (impact === "minor") {
        severity = "P2";
        description = "Medium: Fix in current sprint";
    }
} else if (frequency === "often") {
    if (impact === "blocker") {
        severity = "P1";
        description = "High: Must fix before release";
    } else if (impact === "major") {
        severity = "P2";
        description = "Medium: Fix in current sprint";
    } else if (impact === "minor") {
        severity = "P3";
        description = "Low: Fix in next sprint";
    }
} else if (frequency === "rarely") {
    if (impact === "blocker") {
        severity = "P2";
        description = "Medium: Fix in current sprint";
    } else if (impact === "major") {
        severity = "P3";
        description = "Low: Fix in next sprint";
    } else if (impact === "minor") {
        severity = "P4";
        description = "Trivial: Log and monitor";
    }
}

console.log(`Bug Title: ${bugTitle} Frequency: ${frequency} Impact: ${impact} Severity: ${severity} - ${description}`);
