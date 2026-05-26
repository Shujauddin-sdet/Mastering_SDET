// Example 1: ValidationError
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("email", `"${email}" is not a valid email address`);
  }
  return true;
}

try {
  validateEmail("shujauddin-at-gmail.com"); // no '@' symbol — will throw
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Validation failed on field:", err.field);
    console.log("Reason:", err.message);
  } else {
    throw err;
  }
}

console.log("---------------------------------------------------");

// Example 2: NetworkError
class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

function fetchData(shouldFail) {
  if (shouldFail === true) {
    throw new NetworkError("Network request failed");
  }
  return "Data received";
}

try {
  console.log(fetchData(true));
} catch (err) {
  if (err instanceof NetworkError) {
    console.log("Network issue: " + err.message);
  } else {
    console.log("Other error:", err);
  }
}
