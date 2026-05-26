// Scenario: Reading a property from something that could be null

function getUserName(user) {
  try {
    // 🟢 We TRY to read user.name.
    // If 'user' is null or undefined, JavaScript throws a TypeError automatically.
    let name = user.name;                           // attempt to access the 'name' property
    console.log("User name is:", name);             // ✅ runs only if user is valid

  } catch (err) {
    // 🔴 Control lands here only when there is an error.
    console.log("Error caught!");                   // notify that an error was caught
    console.log("Type   :", err.name);              // log the error type (e.g. "TypeError")
    console.log("Reason :", err.message);           // log what went wrong

  } finally {
    // 🔵 This always runs — success or failure.
    console.log("getUserName() finished.\n");       // cleanup/completion message
  }
}

// ✅ Case 1: Valid user — no error is thrown, catch is skipped
getUserName({ name: "Shujauddin" });

// ❌ Case 2: null user — TypeError is thrown, catch runs
getUserName(null);
