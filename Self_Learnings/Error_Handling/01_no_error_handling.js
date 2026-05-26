// ❌ No error handling — the entire script crashes the moment something fails

let user = null; // user is set to null (no data)

console.log(user.name); // 💥 TypeError: Cannot read properties of null

// ⚠️ Everything below this line NEVER runs — your program is dead.
console.log("Program continues..."); // this line is never reached
