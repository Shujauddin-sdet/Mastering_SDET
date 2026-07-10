## Table of Contents

* [**1. Why TypeScript?**](#1-why-typescript)
* [**2. Setting Up TypeScript**](#2-setting-up-typescript)
* [**3. TypeScript Basic Types**](#3-typescript-basic-types)
* [**4. Functions with Types**](#4-functions-with-types)
* [**5. Union Types & Type Narrowing**](#5-union-types--type-narrowing)
* [**6. Interfaces & Object Types**](#6-interfaces--object-types)

---

## 1. Why TypeScript? (Simplified)

### 🔍 Simple Analogy

- **JavaScript** is like writing a shopping list on a plain piece of paper: "3 milk".
  - You might accidentally write `3` when you meant "3 bottles". The shopkeeper might misunderstand.
- **TypeScript** is the same list, but with stickers that say: `item: text, quantity: number`.
  - Now if you write `quantity: "three"`, the sticker immediately turns red and says "Wrong type!". You fix it before you even leave the house.
- **Conclusion**: TypeScript adds type stickers to JavaScript. They catch mistakes instantly while you code, not when the script runs and fails.

### 🧪 A Real Example (No Async, No Functions)

- **Plain JavaScript (no types)** – no error shown until you run it:
  ```javascript
  let price = 100; // Create a variable holding a number
  price = "expensive"; // JavaScript says nothing. But later, if you try price * 2, you get NaN (confusing).
  ```
- **TypeScript (with types)** – error shown immediately in your editor:
  ```typescript
  let price: number = 100; // Create a variable explicitly typed as a number
  price = "expensive"; // ❌ Error: Type 'string' is not assignable to type 'number'.
  ```
- **The Benefit**: The moment you type the wrong thing, a red squiggly line appears. You fix it in seconds. No more weird runtime bugs. That's the whole point. TypeScript catches dumb mistakes for you, so your code is more reliable.

### 🧠 Why it matters for a QA/SDET (short version)

- You’ll write Playwright tests that click buttons, fill forms, and check text.
- TypeScript makes sure you always use the correct values (like a string for a selector, not a number).
- It autocompletes method names (e.g., `page.fill()`, `page.click()`) so you never misspell.
- If you change a variable name, TypeScript finds every place that needs updating.
- **Summary**: It’s JavaScript with a safety net. That’s all.

---

## 2. Setting Up TypeScript

### 🔍 Simple Analogy

- Before you start writing letters in a new language, you need two things:
  1. **A translator** (the TypeScript compiler `tsc`) that turns your typed notes into plain JavaScript.
  2. **A grammar rulebook** (`tsconfig.json`) that tells the translator how strict to be.
- We’ll install both now.

### 🛠️ Step‑by‑Step Setup

- **1. Open your terminal** (VS Code terminal or macOS Terminal).
- **2. Install TypeScript globally** using npm:
  ```bash
  npm install -g typescript
  ```

  - This gives you the `tsc` command anywhere.
- **3. Verify it’s installed**:
  ```bash
  tsc --version
  ```

  - You should see a version number like `Version 5.x.x`.
- **4. Create a practice folder and open it**:
  ```bash
  mkdir ts-practice
  cd ts-practice
  ```
- **5. Generate the rulebook (`tsconfig.json`)**:
  ```bash
  tsc --init
  ```

  - This creates a `tsconfig.json` file with all the compiler options.
  - For now, you don’t need to change anything. It enables strict mode by default, which gives you the best safety net.
- **6. Create your first TypeScript file**:
  - In your editor, create a file named `index.ts` and write:
    ```typescript
    let message: string = "Hello, TypeScript!"; // Variable strictly assigned to hold text
    console.log(message); // Print the text to the console
    ```
  - This is exactly like JavaScript, but with `: string` after the variable name – the **type annotation**.
- **7. Compile the TypeScript to JavaScript**:
  ```bash
  tsc
  ```

  - This reads `index.ts` and produces `index.js` (plain JavaScript).
- **8. Run the compiled JavaScript**:
  ```bash
  node index.js
  ```

  - You’ll see `Hello, TypeScript!` printed. You just wrote and ran your first typed code.

### 🧠 What just happened?

- **`tsc` is the compiler** – it reads `.ts` files, checks for type errors, and outputs `.js` files.
- **`tsconfig.json` tells `tsc` exactly how to behave** (strictness, output folder, etc.). You don’t need to touch it yet.
- **The type annotation `: string`** told TypeScript “this variable must always be text”. If you later write `message = 123`, your editor shows an error immediately, before you even compile.

---

## 3. TypeScript Basic Types

### 🔍 Simple Analogy

Think of the types as the labels on storage boxes in your warehouse:

- **`string`** → a box for text (names, emails).
- **`number`** → a box for numbers (ages, prices).
- **`boolean`** → a box for yes/no (true/false).
- **`any`** → a box that says "put anything inside, I won’t check". Use it only when you’re desperate.
- **`unknown`** → a box that says "I don’t know what’s inside yet; you must check before using it."
- **`void`** → an empty box – used for a function that returns nothing.
- **`never`** → a box that should never have anything – for functions that throw errors or never finish.
- **Arrays** → a rack of identical boxes (e.g., a rack for string boxes only).
- **Tuples** → a rack with a fixed mix: the first box must be a string, the second a number.
- **Enums** → a set of pre-labelled boxes (like `Size.Small`, `Size.Medium`).

### 📦 The Three Most Common Types

```typescript
let userName: string = "Alice"; // Stores text
console.log("string:", userName); // Output: Alice

let userAge: number = 30; // Stores numbers
console.log("number:", userAge); // Output: 30

let isActive: boolean = true; // Stores true or false
console.log("boolean:", isActive); // Output: true
```

### 🤷 `any` and `unknown`

- **`any`**: Turns off type checking – avoid it when possible.
  ```typescript
  let anything: any = "hello"; // Opting out of type checking completely
  anything = 42; // no error, even though we changed the type from string to number
  console.log("any:", anything); // Output: 42
  ```
- **`unknown`**: Like `any` but safer – you must check the type before using.
  ```typescript
  let uncertain: unknown = "a secret message"; // We don't know the type yet
  // We must prove to TypeScript that it's a string before using string methods
  if (typeof uncertain === "string") {
    // TypeScript now knows it's a string inside this block
    console.log("unknown as string:", uncertain.toUpperCase()); // A SECRET MESSAGE
  }
  ```

### 🕳️ `void` and `never`

- **`void`**: A function that returns nothing.
  ```typescript
  // The ': void' means this function does not return any value
  function logMessage(msg: string): void {
    console.log("void function:", msg);
  }
  logMessage("This function just logs, returns nothing.");
  ```
- **`never`**: A function that never finishes (throws an error).
  ```typescript
  // The ': never' means this function stops execution (crashes) and never returns
  function raiseError(message: string): never {
    throw new Error(message); // Throwing an error stops the script
  }
  // raiseError("Something went wrong!"); // crashes script
  ```

### 📚 Arrays and Tuples

- **Arrays**: An array of strings or numbers.

  ```typescript
  let names: string[] = ["Alice", "Bob", "Charlie"]; // An array that only allows strings
  console.log("string array:", names);

  let scores: number[] = [95, 87, 100]; // An array that only allows numbers
  console.log("number array:", scores);
  ```

- **Tuples**: Fixed number of elements, each with its own type.
  ```typescript
  // A tuple guarantees exactly 2 items: first a string, second a number
  let user: [string, number] = ["Alice", 30];
  console.log("tuple:", user); // Output: [ 'Alice', 30 ]
  ```

### 🏷️ Enums

```typescript
// Define a fixed set of named constants
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}
// Assigning a value using the Enum makes sure we don't misspell "ADMIN"
let currentRole: Role = Role.Admin;
console.log("enum:", currentRole); // Output: ADMIN
```

### 🧠 Why these matter for Playwright

- Playwright’s `page.fill()` expects a string selector, not a number. The `string` type catches that.
- You’ll store locators in variables – their type is `Locator`.
- Test configuration objects (like `{ baseURL: string }`) are typed interfaces.
- **Summary**: With these basic types, your test code already becomes much safer!

---

## 4. Functions with Types

Now we put your type stickers onto functions — the reusable blocks of code that perform actions. In TypeScript, you label what goes in (parameters) and what comes out (return type). This stops you from calling a function with wrong data or forgetting what it returns.

### 🔍 Simple Analogy

Think of a function as a machine in a factory.

- **Parameter types** are the labels on the input slots: "Insert a metal rod (string), not a plastic tube (number)."
- **Return type** is the label on the output tray: "This machine will give you a painted rod (string)."
- **Optional parameters** are slots marked "You can leave this empty; it’s fine."
- **Default parameters** are slots that say "If you don’t insert anything, I’ll use this pre-loaded part."
- **Rest parameters** are a funnel that says "Pour in as many rods as you like; I’ll collect them all."
- **Function type** is the blueprint of the machine itself — what it eats and what it makes.

### 💻 Parameter Types & Return Types

The two most common type stickers you'll use.

```typescript
// Takes two numbers (a and b), and returns a number
function add(a: number, b: number): number {
  return a + b;
}
console.log("add(3,5):", add(3, 5)); // Output: 8

// Takes a string (name), and returns a string
function greet(name: string): string {
  return "Hello, " + name;
}
console.log("greet:", greet("Alice")); // Output: Hello, Alice
```

### ❓ Optional Parameters (`?`)

The `?` means "you can leave this out".

```typescript
// The '?' on 'age' means it is optional. You can call the function without it.
function logUser(name: string, age?: number): void {
  if (age) {
    console.log(`${name} is ${age} years old.`); // Runs if age is provided
  } else {
    console.log(`${name}, age unknown.`); // Runs if age is skipped
  }
}
logUser("Bob"); // Output: Bob, age unknown.
logUser("Alice", 30); // Output: Alice is 30 years old.
```

### ⚙️ Default Parameters

If you don't pass a value, the default is used.

```typescript
// If 'isAdmin' is not provided, it defaults to false
function createUser(name: string, isAdmin: boolean = false): string {
  return isAdmin ? `${name} (Admin)` : `${name} (User)`;
}
console.log(createUser("Eve")); // Output: Eve (User) (because default is false)
console.log(createUser("Alice", true)); // Output: Alice (Admin)
```

### ➕ Rest Parameters (`...`)

Collects any number of arguments into an array.

```typescript
// The '...numbers' gathers any number of arguments into a single array of numbers
function sumAll(...numbers: number[]): number {
  // reduce() adds them all up
  return numbers.reduce((total, n) => total + n, 0);
}
console.log("sumAll:", sumAll(1, 2, 3, 4)); // Output: 10
```

### 📐 Function Type

A variable that holds a function; we describe its shape.

```typescript
// This means: `combine` will hold a function that takes two numbers and returns a number.
let combine: (x: number, y: number) => number;

combine = add; // Works because `add` has the same signature.
console.log("combine(2,10):", combine(2, 10)); // Output: 12

// combine = greet;       // ❌ Error: greet takes a string and returns a string.
```

### 🧠 Why this matters for Playwright

Playwright’s methods are heavily typed functions. For example:

- `page.goto(url: string): Promise<null>` — expects a string URL, returns a Promise.
- `locator.fill(value: string): Promise<void>` — expects a string value to type, returns nothing.

---

## 5. Union Types & Type Narrowing

Now your type stickers get more flexible — you can allow more than one type for the same variable, and TypeScript helps you figure out exactly which type you’re dealing with at any moment.

### 🔍 Simple Analogy

- **Union type (`|`)** — A label that says “this box can hold a book OR a magazine”. You can put either inside, but nothing else.
- **Literal type** — A label so specific it says “this box can only hold the book titled ‘The Alchemist’” — not just any book, that exact one.
- **Type narrowing** — You shine a flashlight into the box to check what’s inside (`typeof`, `instanceof`), so you can safely read it.
- **Type alias** — You give a nickname to a long label so you don't have to keep rewriting the whole thing.
- **Const assertion (`as const`)** — You lock a label so it can never change — it becomes the exact value forever.

### 🔄 Union Types (`|`)
A variable that can be one of several types.

```typescript
// The variable can hold text OR a number
let result: string | number;

result = "Success"; // Valid string
console.log("union string:", result); // Success

result = 200; // Valid number
console.log("union number:", result); // 200
// result = true; // ❌ Error: Type 'boolean' is not assignable to 'string | number'
```

### 🏷️ Literal Types
A variable that can only hold one specific value (or a union of specific values).

```typescript
// The variable can only be one of these exact 4 strings
let direction: "left" | "right" | "up" | "down";

direction = "left"; // ✅ Allowed
// direction = "north"; // ❌ Error: "north" is not in the allowed list
console.log("literal:", direction);
```

### 📛 Type Aliases
A nickname for a type, so you don't repeat long definitions.

```typescript
// We define 'Status' once and use it everywhere
type Status = "pass" | "fail" | "blocked";
let testStatus: Status = "pass"; // Must be one of the three
console.log("alias:", testStatus);

// Creating a blueprint for a user object
type User = { name: string; age: number }; // object shape alias
let user1: User = { name: "Alice", age: 30 }; // Must have a string name and number age
```

### 🔦 Type Narrowing (`typeof`)
Checking a union value at runtime with `typeof`.

```typescript
// 'val' could be a string or number
function printValue(val: string | number): void {
  // Using typeof to check if it's a string at runtime
  if (typeof val === "string") {
    console.log("It's a string:", val.toUpperCase()); // TS knows it's safe to use string methods
  } else {
    console.log("It's a number:", val.toFixed(2)); // TS knows it's a number here
  }
}
printValue("hello");
printValue(42);
```

### 🐕 Type Narrowing (`instanceof`)
Checking if an object is an instance of a specific class.

```typescript
class Dog {
  breed: string = "Labrador";
  bark() {
    console.log("Woof!");
  }
}
class Cat {
  color: string = "black";
  meow() {
    console.log("Meow!");
  }
}

// 'pet' could be a Dog or a Cat object
function handlePet(pet: Dog | Cat): void {
  // Using instanceof to check which class created the object
  if (pet instanceof Dog) {
    pet.bark(); // TS knows it's Dog here, so .bark() is safe
  } else {
    pet.meow(); // TS knows it's Cat here, so .meow() is safe
  }
}
handlePet(new Dog());
handlePet(new Cat());
```

### 🔒 Const Assertions (`as const`)
Locks an object or array into its exact literal values (making it readonly).

```typescript
// Adding 'as const' makes all properties read-only and locks them to exact values
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
} as const;

// config.apiUrl = "other"; // ❌ Error: cannot reassign because it is locked by 'as const'
console.log("const assertion:", config.apiUrl);
```

### 🛡️ Exhaustiveness Checking (with `never`)
Ensures you've handled every possible case in a union.

```typescript
// The allowed shapes
type Shape = "circle" | "square" | "triangle";

// We must handle all three shapes
function getArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return Math.PI * 10 * 10;
    case "square":
      return 10 * 10;
    case "triangle":
      return 0.5 * 10 * 5;
    default:
      // If we ever add a new shape (e.g., "rectangle") to the Shape type,
      // this line will trigger an error reminding us to handle it here too!
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
console.log("circle area:", getArea("circle"));
```

### 🧠 Why these matter for Playwright

- Playwright options often accept unions: `waitForLoadState("load" | "domcontentloaded" | "networkidle")` — literal union.
- You’ll store environment‑specific configs using `as const` to make them immutable.
- When writing custom test helpers, you’ll use `typeof` checks to handle different input types (like a locator or a string).
- Exhaustiveness checking is a powerful pattern for handling test statuses or browser types.

---

## 6. Interfaces & Object Types

Now you’ll learn to describe the shape of objects — what fields they have, what types those fields are, and what’s optional or locked. This is the most important concept for writing clean, safe test data in Playwright.

### 🔍 Simple Analogy

An **interface** is a form template.
Imagine a customer registration form with labelled boxes:
- **“Full Name”** (required, text)
- **“Age”** (optional, number)
- **“Membership ID”** (once printed, you cannot change it)

The form itself isn’t a real customer — it’s the blueprint. Any real customer you create must fill in the boxes exactly as the template says.

- **Optional properties (`?`)** → a box marked “leave blank if you want”.
- **Readonly properties** → a box that’s printed in ink; once written, you can’t erase it.
- **Extending an interface** → taking the basic form and adding extra boxes for a “VIP Customer”.
- **Index signature** → a form with a flexible number of identical boxes (like a list of phone numbers).
- **Interface merging** → you can add more boxes to the same form later, across different files.
- **Intersection types (`&`)** → combining two different forms into one master form.
- **Type alias vs interface** → two ways to create a form; interfaces are extensible, aliases are more compact for unions and literals.

### 📝 Basic Interface
Describing the shape of a user object.

```typescript
// We create a blueprint named 'User' using the 'interface' keyword
interface User {
  // The user MUST have a 'name' that is text (string)
  name: string; 
  // The user MUST have an 'age' that is a number
  age: number; 
}

// We create a variable 'alice' and say it must exactly match the 'User' blueprint
const alice: User = { 
  name: "Alice", // We provide the required string name
  age: 30        // We provide the required number age
};
// Print the user object to the terminal
console.log("Basic user:", alice);
```

### ❓ Optional Properties (`?`)
A property that may or may not exist.

```typescript
// We create a blueprint for a 'Product'
interface Product {
  // A required ID number
  id: number;
  // A required product name (text)
  name: string;
  // The '?' makes 'description' optional. You can provide it or skip it!
  description?: string; 
}

// Here we skip the description, and TypeScript is totally fine with it
const laptop: Product = { id: 1, name: "Laptop" }; 
// Here we provide the description, which is also fine
const phone: Product = { id: 2, name: "Phone", description: "A smart phone" }; 

// Print both products to the console
console.log("Product without desc:", laptop);
console.log("Product with desc:", phone);
```

### 🔒 Readonly Properties
Once set, cannot be changed.

```typescript
// We create a blueprint for configuration settings
interface Config {
  // 'readonly' means once this URL is set, no one can ever change it again
  readonly apiUrl: string; 
  // A normal number that can be changed later
  timeout: number;
}

// We create the config object and set both values initially
const config: Config = { apiUrl: "https://api.example.com", timeout: 5000 };

// config.apiUrl = "new-url"; // ❌ ERROR: TypeScript stops you from changing a readonly value!
config.timeout = 10000;       // ✅ SUCCESS: timeout is not readonly, so we can change it to 10000

// Print the final config to the console
console.log("Config:", config);
```

### ➕ Extending Interfaces
Creating a new interface that includes all properties of another.

```typescript
// First, we create a basic blueprint for a normal Person
interface Person {
  name: string;  // Needs a name
  email: string; // Needs an email
}

// 'extends Person' means the Employee automatically gets 'name' and 'email'
// PLUS we add two new specific properties just for Employees
interface Employee extends Person {
  employeeId: number; // New required number
  department: string; // New required text
}

// When we create an Employee, we MUST provide all 4 properties (2 from Person + 2 from Employee)
const emp: Employee = {
  name: "Bob",                 // From Person
  email: "bob@company.com",    // From Person
  employeeId: 101,             // From Employee
  department: "Engineering"    // From Employee
};
// Print the employee object to the console
console.log("Employee:", emp);
```

### 📖 Index Signatures
An object with unknown property names, but all values are of a specific type.

```typescript
// We create a dictionary blueprint where we don't know the exact property names in advance
interface StringDictionary {
  // '[key: string]' means you can add ANY property name (like 'hello' or 'apple')
  // ': string' means the value you assign to it MUST be text.
  [key: string]: string; 
}

// We create an object using this dictionary rule
const translations: StringDictionary = {
  hello: "Hola",    // 'hello' is a string key, "Hola" is a string value (✅ Valid)
  goodbye: "Adiós"  // 'goodbye' is a string key, "Adiós" is a string value (✅ Valid)
  // age: 30        // ❌ ERROR: 30 is a number, but our dictionary only allows string values!
};
// Print to console
console.log("Translations:", translations);
```

### 🤝 Interface Merging
Declaring the same interface twice merges them together automatically.

```typescript
// We create the Animal blueprint and give it one property
interface Animal {
  species: string; // Must have species
}

// Later in the code, we use the EXACT SAME NAME 'Animal' to add another property.
// TypeScript automatically merges them together into one big Animal blueprint!
interface Animal {
  legs: number; // Must have legs
}

// Because they merged, a valid Animal must now have BOTH 'species' and 'legs'
const dog: Animal = { 
  species: "Canine", // From the first declaration
  legs: 4            // From the second declaration
};
// Print to console
console.log("Merged Animal:", dog);
```

### 🔀 Intersection Types (`&`)
Combine multiple types (interfaces or aliases) into one.

```typescript
// A blueprint for things that can fly
interface Flyable {
  fly(): void; // A function that returns nothing
}

// A blueprint for things that can swim
interface Swimable {
  swim(): void; // A function that returns nothing
}

// The '&' symbol smashes the two blueprints together.
// A 'Duck' MUST have both the fly() AND swim() functions.
type Duck = Flyable & Swimable;

// We create a duck and provide both required functions
const daffy: Duck = {
  fly() { console.log("Flying"); },   // Fulfills the Flyable requirement
  swim() { console.log("Swimming"); } // Fulfills the Swimable requirement
};

// We can now call both functions
daffy.fly();
daffy.swim();
```

### 🆚 Interfaces vs Type Aliases
Both can describe objects, but interfaces can be extended/merged; aliases are better for unions/literals.

```typescript
// INTERFACE: Use this for defining object shapes (like a Car).
// They are easy to extend and merge later.
interface Car {
  brand: string;
  model: string;
}

// TYPE ALIAS: Use this for simple unions or specific values.
// You CANNOT do this easily with an interface!
type Status = "active" | "inactive";

// TYPE ALIAS: You CAN use it for objects too, but it cannot be merged later like an interface.
type Point = {
  x: number;
  y: number;
};

// Creating a Car using the interface
const myCar: Car = { brand: "Tesla", model: "Model 3" };
// Creating a Point using the type alias
const myPoint: Point = { x: 10, y: 20 };
// Creating a Status using the type alias (must be exactly "active" or "inactive")
const userStatus: Status = "active";

// Print them all out
console.log("Car:", myCar);
console.log("Point:", myPoint);
console.log("Status:", userStatus);
```

### 🧠 Why these matter for Playwright

- **Test data shapes**: You’ll define interfaces for test users, orders, and configuration, ensuring every test uses consistent data.
- **Page Object Models**: Each page object (LoginPage, DashboardPage) is often typed as an interface or a class with typed properties (locators as `Locator` type).
- **Configuration typing**: `playwright.config.ts` is a typed object with optional and readonly properties.
- **Extensibility**: You can extend a base test interface with custom fixtures using interface merging (exactly how Playwright’s test fixtures work).

