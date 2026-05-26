// 1. Global handler for unhandled promise rejections
process.on('unhandledRejection', (reason) => {
  console.log("GLOBAL HANDLER CAUGHT PROMISE REJECTION:", reason);
  // process.exit(1); // commented out to let the script continue for demonstration
});

// Promise rejects with no .catch()
Promise.reject("Network failed");

// 2. Global handler for regular errors
process.on('uncaughtException', (err) => {
  console.log("GLOBAL HANDLER CAUGHT:", err.message);
  // process.exit(1); 
});

// This line throws an error with NO try/catch around it
throw new Error("I forgot try/catch!");

console.log("This line will never run because error happened above");
