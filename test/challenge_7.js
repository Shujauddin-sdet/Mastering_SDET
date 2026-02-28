// Challenge 7
// Response Time SLA Analyzer
// As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop that analyzes an array of response times and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.

// Examples:
// Input:
// responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500
// Output:
// Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED
// 💡 Explanation:The while loop iterates through response times, tracking min/max and counting breaches over 500ms.

// sample response times in ms - change to test different scenarios
let responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

let i = 0;
let total = responseTimes.length;
let minTime = responseTimes[0];
let maxTime = responseTimes[0];
let sumTime = 0;
let breaches = 0;

while (i < total) {
    let current = responseTimes[i];

    // track min and max
    if (current < minTime) minTime = current;
    if (current > maxTime) maxTime = current;

    sumTime += current;

    // check if this one breached the SLA
    if (current > SLA_LIMIT) {
        breaches++;
    }

    i++;
}

let avgTime = (sumTime / total).toFixed(2);
let breachPercent = ((breaches / total) * 100).toFixed(2);

// decide overall status based on any breaches
let overallStatus = breaches === 0 ? "✅ SLA MET" : "❌ SLA VIOLATED";

console.log(`Total Requests: ${total} Min Response: ${minTime}ms Max Response: ${maxTime}ms SLA Breaches: ${breaches} (${breachPercent}%) Overall Status: ${overallStatus}`);
