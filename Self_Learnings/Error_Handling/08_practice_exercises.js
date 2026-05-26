// Exercise 1 — Basic Division with try / catch
try {
  const dividend = 10;
  const divisor = 0;

  if (divisor === 0) {
    throw new Error("You can't divide by the Number Zero");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a Number");
  }

  const result = dividend / divisor;
  console.log(`Result: ${result}`);
} catch (error) {
  console.error("Ex 1 Error:", error.message);
}

// Exercise 2 — String Length Validation
function getStringLength(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.length;
}

try {
  console.log(getStringLength(10));
} catch (error) {
  console.error("Ex 2 Error:", error.message);
}

// Exercise 3 — Division with try / catch / finally
function divide(a, b) {
  if (b === 0) {
    throw new Error("cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Ex 3 Error:", error.message);
} finally {
  console.log("Division attempt finished\n");
}

// Exercise 4 — TypeError Validation
function doubleNumber(num) {
  if (typeof num !== "number") {
    throw new TypeError("Not a number");
  }
  return num * 2;
}

try {
  console.log(doubleNumber("hi"));
} catch (error) {
  console.log("Ex 4 Error - " + error.name + ": " + error.message);
}
