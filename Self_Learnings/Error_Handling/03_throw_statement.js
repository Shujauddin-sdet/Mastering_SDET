// Scenario: A function that should only accept positive numbers

function calculateDiscount(price) {
  // 🟡 We manually throw an error if the input breaks our rules.
  if (typeof price !== "number") {
    throw new TypeError("Price must be a number, got: " + typeof price);
  }
  if (price <= 0) {
    throw new RangeError("Price must be positive, got: " + price);
  }

  // If we reach here, the input is valid.
  return price * 0.10;
}

// ✅ Valid call
try {
  let discount = calculateDiscount(500);
  console.log("Discount:", discount);
} catch (err) {
  console.log(err.name + ":", err.message);
}

// ❌ Invalid call — wrong type
try {
  let discount = calculateDiscount("hello");
} catch (err) {
  console.log(err.name + ":", err.message);
}

// ❌ Invalid call — negative number
try {
  let discount = calculateDiscount(-100);
} catch (err) {
  console.log(err.name + ":", err.message);
}
