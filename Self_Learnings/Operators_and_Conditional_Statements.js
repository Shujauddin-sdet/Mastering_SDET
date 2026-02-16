// Artimatic Operators

let a = 10;
let b = 7;

console.log("a = ", a, "and b = ", b); console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);


// Unary Operators

let c = 5;
console.log("c = ", c);

// Post-increment (c++)
c++;
console.log("Post-increment:", c);

// Pre-increment (++c)
++c;
console.log("Pre-increment:", c);

// Post-decrement (c--)
c--;
console.log("Post-decrement:", c);

// Pre-decrement (--c)
--c;
console.log("Pre-decrement:", c);

// Assignment Operators

let d = 10;
console.log("d = ", d); // 10
d += 5;
console.log("d += 5:", d); // 10 + 5 = 15
d -= 5;
console.log("d -= 5:", d); // 15 - 5 = 10(The valuse of d is taken from the previous line not from the initial value of d = 10)
d *= 5;
console.log("d *= 5:", d); // 10 * 5 = 50(The valuse of d is taken from the previous line not from the initial value of d = 10)
d /= 5;
console.log("d /= 5:", d); // 50 / 5 = 10(The valuse of d is taken from the previous line not from the initial value of d = 10)
d %= 5;
console.log("d %= 5:", d); // 10 % 5 = 0(The valuse of d is taken from the previous line not from the initial value of d = 10)
d **= 5;
console.log("d **= 5:", d); // 10 ** 5 = 100000

let e = 20
console.log("e = ", e);
e -= 5;
console.log("e -= 5:", e); // 20 - 5 = 15 ( This is taken from the initial value  of e = 20) (If change name of variable then the value will be taken from the initial value of that variable)

//comparison Operators

let f = 30;
let g = 10;

console.log("f = ", f, "and g = ", g);
console.log("f == g", f == g);
console.log("f != g", f != g);
console.log("f > g", f > g);
console.log("f < g", f < g);
console.log("f >= g", f >= g);
console.log("f <= g", f <= g);
console.log("f === g", f === g);
console.log("f !== g", f !== g);

// Comparison Operators (The Equality Trap)
// In work, checking values correctly is the difference between a "Pass" and a "Fail" in your tests.

// A. Loose Equality (==)
// Rule: Checks only the Value.

// Coercion: It converts data types automatically (e.g., changes a string to a number) to try and make them match.

// Example: 5 == "5" is true.

// B. Strict Equality (===)
// Rule: Checks both Value AND Data Type.

// SDET Best Practice: Always use === to prevent "invisible" bugs in your automation scripts.

// Example: 5 === "5" is false.

// Logical Operators (&&, ||, !)

let h = 5;
let i = 10;

console.log("h = ", h, "and i = ", i);
console.log("h && i", h && i);
console.log("h || i", h || i);
console.log("!h", !h);
console.log("!i", !i);
 
