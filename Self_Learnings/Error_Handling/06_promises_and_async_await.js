// Simulating an API call that fails
function fetchUserData(userId) {
  return new Promise(function (resolve, reject) {
    if (userId <= 0) {
      reject(new RangeError("User ID must be a positive number"));
    } else {
      resolve({ id: userId, name: "Shujauddin" });
    }
  });
}

// ============================================
// 1. Error Handling with Promises (.then/.catch)
// ============================================
console.log("--- Using .then() and .catch() ---");

fetchUserData(-1)
  .then(user => console.log("Got user:", user.name))
  .catch(err => console.log("Promise Error:", err.message))
  .finally(() => console.log("Promise Request finished.\n"));


// ============================================
// 2. Error Handling with async/await
// ============================================
async function loadUser(userId) {
  try {
    let user = await fetchUserData(userId);
    console.log("Loaded:", user.name);
  } catch (err) {
    console.log("Failed to load user:", err.message);
  } finally {
    console.log("Done loading.\n");
  }
}

// Wrap in setTimeout just to keep output clean after the first example runs
setTimeout(() => {
  console.log("--- Using async/await ---");
  loadUser(10);  // Valid ID
  loadUser(-1);  // Invalid ID
}, 100);
