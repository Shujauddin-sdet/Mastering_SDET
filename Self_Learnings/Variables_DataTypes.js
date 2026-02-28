// Let's Practice
// Print your first programme
console.log("Hello World");

// ![var_Q1](./Images/var_Q1.png)
// Qs1. Create a const object called “product” to store information shown in the picture.
const product = {
    fullName: "parker Jokker standard city ball pen",
    price: 270,
    rating: 4.5,
    hasoffer: true,
    totalAmount: 270,

};

console.log(product);

// Qs2. Create a const object called “profile” to store information shown in the picture.

const profile = {
    fullname: "Shujauddin",
    post: 2345, //exmaple numbers
    follower: 545676,
    following: 4,
    isEntrepreneur: true,
};

console.log(profile);

// ------------------------
// 1. Declare a variable named city using let and assign it the value "Mumbai".
//  Then, reassign it to "Delhi". Finally, print the value of city using console.log(). 

let city = "Mumbai";
console.log(city);
city = "Delhi";
console.log(city);

// ------------------------


// 2. What will be the output of the following code? Explain why in simple terms.

// javascript
let x = 5;
let y = x;
x = 10;
console.log(y)

// In first line the x value is 5, then y is assigned the value of x whcih is 5, then x is reassign to 10, but y is still 5 because it was assigned the value of x when x was 5.

// Write a short program that swaps the values of two variables a and b using a temporary variable.
// Example: If a = 3 and b = 7, after swapping a should be 7 and b should be 3. Use only variable assignments

let a = 3;
let b = 7;
a = 7;
b = 3;
console.log(a, b);

// Predict the final value of result in the code below. Walk through each step and explain what happens to the variables.

// javascript
let p = 2;
let q = p;
p = p + 3;
let r = q;
q = r * p;
let result = (p + q) / r;
console.log(result);

// p is given the value of 2 in line 1,
// then new variable q is given the value of p which is 2 
// then we add p + 3 which is (2 + 3) === 5
// new varaible is created whcih is r the assigend value is q 
// the q variable vale is  r * p so r is 2 and p is 5 so the value of q is 10
// we have the final variable which is result so the value assigned are (p + q) / r; (so the value of p is 5 and value of q is 10 and the value of r is 2) 
// the final output shoudl be 7.5 


// 5. Explain the differences between let, const, and var. Include:

// When you would use each.

// What happens if you try to reassign a const.

// How var behaves differently in terms of scope and hoisting (give a small code example).

// 🔹 let, const, and var – The Easy Difference
// Feature	let	const	var
// Scope	Block { }	Block { }	Function or global
// Reassign	✅ Yes	❌ No	✅ Yes
// Redeclare	❌ No (in same scope)	❌ No	✅ Yes
// Must initialize	❌ No	✅ Yes	❌ No
// Hoisting	Hoisted but not initialized (TDZ)	Hoisted but not initialized (TDZ)	Hoisted and initialized as undefined
// When to use	When value will change	When value won't change (default choice)	Avoid in modern code
// 🧠 In Simple Words:
// let – Use it for variables that you plan to change later (like counters, temporary values). It lives only inside the { } where it's created.

// const – Use it for variables that should never be reassigned (like a fixed value, e.g., pi = 3.14). It also lives inside { }.
// ⚠️ If you try to reassign it:

// javascript
// const pi = 3.14;
// pi = 3.15; // ❌ TypeError: Assignment to constant variable.
// The code stops with an error.

// var – Old way. It lives in the whole function (or globally) and can be redeclared by mistake, which causes bugs.
// Example of var causing confusion:

// javascript
// if (true) {
//     var x = 5;
// }
// console.log(x); // 5 (because var leaks out of the block!)
// With let or const, x would not exist outside the if.

// 📝 Quick Tips:
// Always prefer const – it makes your code safer and clearer.

// If you need to change the value later, use let.

// Never use var in new code – it's outdated and can create hard‑to‑find bugs.


// ============================================================
// Symbol - A Primitive Data Type (ES6+)
// ============================================================

// Symbol creates a completely unique value every time it is called
// Even if two symbols have the same description, they are never equal

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1);           // Symbol(id)
console.log(id2);           // Symbol(id)
console.log(id1 === id2);   // false - they look the same but are NOT equal!

// you can read the description using .description
console.log(id1.description); // "id"

// common use case - unique property keys in objects
// this prevents accidental key conflicts between libraries or modules
const USER_KEY = Symbol("userKey");
const user = {
    name: "Shujauddin",
    [USER_KEY]: "secret-internal-id-123"  // symbol as key - hidden from normal loops
};

console.log(user.name);       // Shujauddin
console.log(user[USER_KEY]);  // secret-internal-id-123

// symbols are skipped in for...in loops (good for private-like properties)
for (let key in user) {
    console.log(key); // only prints "name" - symbol key is hidden
}

// typeof a symbol
console.log(typeof id1); // "symbol"


// ============================================================
// BigInt - For Very Large Numbers (ES2020+)
// ============================================================

// Regular numbers in JS can only safely handle up to:
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 (about 9 quadrillion)

// beyond this number, regular numbers lose precision and become inaccurate
console.log(9007199254740991 + 1);  // 9007199254740992 - ok
console.log(9007199254740991 + 2);  // 9007199254740992 - WRONG! same result!

// BigInt solves this by handling numbers of any size accurately
// just add 'n' at the end of the number or use BigInt()

const bigNum1 = 9007199254740991n;          // using the 'n' suffix
const bigNum2 = BigInt("9007199254740991");  // using BigInt() constructor

console.log(bigNum1 + 2n);   // 9007199254741993n - correct!
console.log(bigNum1 * 2n);   // 18014398509481982n - accurate!

// typeof a BigInt
console.log(typeof bigNum1); // "bigint"

// you CANNOT mix BigInt with regular numbers - you must convert first
// console.log(bigNum1 + 5);  // ❌ TypeError!
console.log(bigNum1 + BigInt(5)); // ✅ convert regular number to BigInt first

// practical example - bank transaction with very large amount
const bankBalance = 999999999999999999999n;
const deposit = 1000000000000000000000n;
const newBalance = bankBalance + deposit;
console.log(`New balance: ${newBalance}`); // accurate!
