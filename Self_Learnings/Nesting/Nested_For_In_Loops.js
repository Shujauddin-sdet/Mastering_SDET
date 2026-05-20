// 🔙 Back to Main Guide: [Javascript.md](../Javascript.md)
// =========================================================================
// NESTED FOR...IN LOOPS IN JAVASCRIPT
// =========================================================================
// The "for...in" loop is used to loop through the KEYS (properties) of an Object.
//
// Real-world Analogy for SDETs:
// We often receive nested JSON objects from APIs (e.g., config settings, user profiles).
// We use nested for...in loops to traverse through these nested objects.

console.log("--- Example: Iterating over Nested Config Objects ---");

// A nested config object representing API test environments
const testConfig = {
  devEnv: {
    url: "https://dev.api.example.com",
    db: "dev_db"
  },
  stageEnv: {
    url: "https://stage.api.example.com",
    db: "stage_db"
  }
};

// Outer loop: Iterates through the main properties (devEnv, stageEnv)
for (let envName in testConfig) {
  console.log(`Environment: ${envName}`);
  
  // Get the nested object inside the current environment
  const envDetails = testConfig[envName];
  
  // Inner loop: Iterates through the keys of the nested object (url, db)
  for (let detailKey in envDetails) {
    // Get the value corresponding to the detailKey
    const detailValue = envDetails[detailKey];
    console.log(`   └─ Property: ${detailKey} = ${detailValue}`);
  }
  console.log(""); // Space for clarity
}
