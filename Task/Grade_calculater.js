let score = 89.9;
let grade;

if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else if (score >= 60) grade = "D";
else if (score >= 0) grade = "F";
else grade = "Invalid";

console.log(grade);

// ✅ Example 1: score = 95
// First condition: score >= 90 → 95 >= 90 is true.
// → grade = "A"
// → All remaining else if are ignored.
// ✅ Output: "A" (correct)

// ✅ Example 2: score = 85
// score >= 90 → 85 >= 90 is false, so move to next.

// score >= 80 → 85 >= 80 is true.
// → grade = "B"
// → Stop.
// ✅ Output: "B" (correct)

// ✅ Example 3: score = 72.5
// score >= 90 → false

// score >= 80 → false

// score >= 70 → true → grade = "C"
// ✅ Output: "C" (correct – 72.5 is in the 70–79 range)

// ✅ Example 4: score = 60
// score >= 90 → false

// score >= 80 → false

// score >= 70 → false

// score >= 60 → true → grade = "D"
// ✅ Output: "D" (correct – 60 is included in D)

// ✅ Example 5: score = 59.9
// All previous conditions (90, 80, 70, 60) are false.

// score >= 0 → true → grade = "F"
// ✅ Output: "F" (correct)

// ✅ Example 6: score = -5
// All conditions up to score >= 0 are false.

// The else catches it → grade = "Invalid"
// ✅ Output: "Invalid" (correct)