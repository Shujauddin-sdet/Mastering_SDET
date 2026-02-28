//  Challenge 4
// Element Visibility Checker
// In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

// States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
// Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

// Examples:
// Input:
// isPresent = true, isDisplayed = true, isEnabled = false
// Output:
// Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.
// 💡 Explanation:Element is present and displayed but not enabled. Severity is WARNING because it's not fully interactable.

// change these to test different combos
let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let status = "";
let action = "";

// check what state the element is in
if (!isPresent) {
    status = "NOT FOUND";
    action = "Element does not exist in DOM. Check your selector or page load timing.";
} else if (isPresent && !isDisplayed) {
    status = "HIDDEN";
    action = "Element exists but is not visible. Check CSS display/visibility or scroll into view.";
} else if (isPresent && isDisplayed && !isEnabled) {
    status = "DISABLED";
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
} else {
    status = "READY";
    action = "Element is fully interactable. Safe to click or type.";
}

// ternary for severity - keeps it short and clean
let severity = !isPresent ? "CRITICAL" : (!isDisplayed || !isEnabled) ? "WARNING" : "OK";

console.log(`Status: ${status} Severity: ${severity} Action: ${action}`);
