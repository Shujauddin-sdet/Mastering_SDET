### TOC
1. Setup & First Look
What and Why TypeScript? (The problem it solves)

Installing Node.js & TypeScript (tsc)

tsconfig.json basics and strict mode options

Your first .ts file: compile and run

2. Basic Types
string, number, boolean

any, unknown, void, never

Arrays and tuples

Enums: numeric and string

3. Functions with Types
Function parameter types

Function return types

Optional parameters

Default parameters

Rest parameters

Function types

4. Union Types & Type Narrowing
Union types (|)

Literal types

Type narrowing with typeof

Type narrowing with instanceof

Type aliases

Const assertions (as const)

Exhaustiveness checking (with never type)

5. Interfaces & Object Types
Interfaces: optional properties (?), readonly properties

Extending interfaces

Index signatures

Interface merging

Intersection types (&)

Interfaces vs. type aliases – when to use each

6. Classes & Object-Oriented Programming (OOP)
Access modifiers (public, private, protected)

Readonly properties in classes

Interfaces with classes (implements)

Abstract classes and methods

Getters and Setters

7. Generics Basics
Generic functions

Generic interfaces

Generic constraints (extends)

Multiple type parameters

Default generic types

Generic classes

keyof and typeof operators

8. Utility Types & Type Guards
Partial<T>, Required<T>, Readonly<T>

Pick<T, K>, Omit<T, K>, Record<K, T>

Exclude<T, U>, Extract<T, U>, NonNullable<T>

ReturnType<T>, Parameters<T>

Custom type guards

Type assertions (as)

satisfies operator

9. Advanced TypeScript (Optional but Powerful)
Mapped types basics

Conditional types basics

Template literal types

Declaration files (.d.ts)

Module augmentation

@types packages

tsconfig.json deep dive: target, module, lib, outDir, rootDir, esModuleInterop

Modules and Imports (import/export, import type)

Decorators

10. TypeScript + Playwright Integration
Playwright types: Page, Locator, Browser

Typed test fixtures

Page Object Model with TypeScript

Environment variable typing

Test data interfaces

Custom assertion types

Generic test helpers
-----

3. Functions with Types
Now we put your type stickers onto functions — the reusable blocks of code that perform actions. In TypeScript, you label what goes in (parameters) and what comes out (return type). This stops you from calling a function with wrong data or forgetting what it returns.

🔍 Simple Analogy
Think of a function as a machine in a factory.

Parameter types are the labels on the input slots: “Insert a metal rod (string), not a plastic tube (number).”

Return type is the label on the output tray: “This machine will give you a painted rod (string).”

Optional parameters are slots marked “You can leave this empty; it’s fine.”

Default parameters are slots that say “If you don’t insert anything, I’ll use this pre‑loaded part.”

Rest parameters are a funnel that says “Pour in as many rods as you like; I’ll collect them all.”

Function type is the blueprint of the machine itself — what it eats and what it makes.

💻 Full Code Example 
Paste the entire block below into a new file called functions.ts. Compile with tsc and run with node functions.js.

typescript
// --------------------- PARAMETER TYPES & RETURN TYPES ---------------------
// The two most common type stickers you'll use.

function add(a: number, b: number): number {
  return a + b;
}
console.log("add(3,5):", add(3, 5));   // 8

function greet(name: string): string {
  return "Hello, " + name;
}
console.log("greet:", greet("Alice")); // Hello, Alice


// --------------------- OPTIONAL PARAMETERS (?) ---------------------
// The `?` means "you can leave this out".

function logUser(name: string, age?: number): void {
  if (age) {
    console.log(`${name} is ${age} years old.`);
  } else {
    console.log(`${name}, age unknown.`);
  }
}
logUser("Bob");            // Bob, age unknown.
logUser("Alice", 30);      // Alice is 30 years old.


// --------------------- DEFAULT PARAMETERS ---------------------
// If you don't pass a value, the default is used.

function createUser(name: string, isAdmin: boolean = false): string {
  return isAdmin ? `${name} (Admin)` : `${name} (User)`;
}
console.log(createUser("Eve"));              // Eve (User)
console.log(createUser("Alice", true));      // Alice (Admin)


// --------------------- REST PARAMETERS (...) ---------------------
// Collects any number of arguments into an array.

function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log("sumAll:", sumAll(1, 2, 3, 4));  // 10


// --------------------- FUNCTION TYPE ---------------------
// A variable that holds a function; we describe its shape.

// This means: `combine` will hold a function that takes two numbers and returns a number.
let combine: (x: number, y: number) => number;

combine = add;            // Works because `add` has the same signature.
console.log("combine(2,10):", combine(2, 10));  // 12

// combine = greet;       // ❌ Error: greet takes a string and returns a string.
🧠 Why this matters for Playwright
Playwright’s methods are heavily typed functions. For example:

page.goto(url: string): Promise<null> — expects a string URL, returns a Promise.

locator.fill(value: string): Promise<void> — expects a string value to type, returns nothing.