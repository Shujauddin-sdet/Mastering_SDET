// Default Export -> Export One Main Thing
// When importing a default export, you can give it any name you want without using curly braces.
// Example: import customLogName from "./logger.js";
export default function log(message) {
    console.log("[LOG] " + message);
}

// Named Export -> Exporting additional functions/variables
// When importing named exports, you must use curly braces and match the exact name.
// Example: import { log2 } from "./logger.js";
export function log2(message) {
    console.log("[LOGS] " + message);
}