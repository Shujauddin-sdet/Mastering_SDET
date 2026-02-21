# 1. What is JavaScript?

JavaScript is a programming language that is used to create dynamic and interactive web pages. It is a high-level, interpreted programming language that is used to add functionality to web pages. It is a client-side programming language that is used to create dynamic and interactive web pages.

- JavaScript is a high-level, interpreted programming language primarily used to make web pages interactive and dynamic. It was created by Brendan Eich in 1995 at Netscape.
- Where it runs: Originally designed to run in web browsers, JavaScript now also runs on servers (via Node.js), mobile apps, desktop applications, and even IoT devices.
- Core features: It supports object-oriented, functional, and event-driven programming styles. It's dynamically typed, meaning you don't need to declare variable types explicitly.
- ECMAScript — mention that JavaScript follows the ECMAScript standard (ES6/ES2015+)
- Role in web development: It's one of the three core technologies of the web alongside HTML (structure) and CSS (styling). JavaScript handles the behavior and logic layer.

---

## 2. Variables

- What is a variable?
- A variable is a container for storing data.
- In JavaScript, variables are declared using the var, let, or const keywords.
- let is the preferred way to declare variables in modern JavaScript.
- const is used to declare variables that cannot be reassigned.
- var is the older way to declare variables and is not recommended for use in modern JavaScript.

- Syntax:
- let variableName = value;
- const variableName = value;
- var variableName = value;

- Example:

```javascript
let name = "John";
const age = 30;
var city = "New York";

console.log(name);
console.log(age);
console.log(city);
```

## Visual Guides

![Variable Rules](Images/Variable_Rules.png)
---

![diff_var_let_const](Images/diff_var_let_const.png)

```javascript
var age = 1;
var age = 2;
var age = 3;
console.log(age);
```

The last value will be printed and it is wrong way to write code using var as we can redeclare the same variable many times.

```javascript
let age = 1;
age = 2;
console.log(age);
```

In `let` we can update the value of the variable but we cannot redeclare the same variable.

```javascript
const age = 1;
// age = 2; // This would cause an error
console.log(age);
```

In `const` we cannot update the value of the variable and we cannot redeclare the same variable.

---

## 3. Data Types

- What is a data type?
- A data type is a type of data that can be stored in a variable.
- In JavaScript, there are two types of data types:
- Primitive data types
- Non-primitive data types

- Primitive data types:
- String (Text)
- Number (Integer, Float)
- Boolean (True, False)
- Undefined (Value is not assigned)
- Null (Value is intentionally assigned as null)
- Symbol (Unique value)
- BigInt (Large integer)

- Non-primitive data types:
- Object (Collection of key-value pairs)
- Array (Ordered list of values)
- Function (Block of code that performs a specific task)

![JavaScript Data Types](Images/Data_Types_Overview.png)

---

## 4. Operators

- What is an operator?

- An operator is a symbol that performs an operation on one or more operands.

-It is used to perform some operation on data.

![Operator_and_Operands](Images/Operator_and_Operands.png)

- In JavaScript, there are different types of operators:

### 1. Arithmetic Operators (+, -, *, /, %, **)

**Meaning:** Used to perform mathematical calculations on numbers.

- `+` Addition - adds two numbers
- `-` Subtraction - subtracts one number from another
- `*` Multiplication - multiplies two numbers
- `/` Division - divides one number by another
- `%` Modulus - returns the remainder after division
- `**` Exponentiation - raises the first operand to the power of the second operand
- `++` Increment - increases the value of a variable by 1
- `--` Decrement - decreases the value of a variable by 1

**Example:**

```javascript
let a = 10;
let b = 3;

console.log(a + b); // Output: 13 (adds 10 and 3)
console.log(a - b); // Output: 7 (subtracts 3 from 10)
console.log(a * b); // Output: 30 (multiplies 10 by 3)
console.log(a / b); // Output: 3.333... (divides 10 by 3)
console.log(a % b); // Output: 1 (remainder when 10 is divided by 3)
console.log(a ** b); // Output: 1000 (10 to the power of 3)
```

![Arithmetic Operators](Images/Arithmetic_Operators.png)

### 2. Comparison Operators (==, ===, !=, !==, >, <, >=, <=)

**Meaning:** Used to compare two values and return a boolean (true or false).

- `==` Equal to - checks if values are equal (with type conversion)
- `===` Strict equal to - checks if values AND types are equal
- `!=` Not equal to - checks if values are not equal
- `!==` Strict not equal to - checks if values OR types are not equal
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than or equal to

**Example:**

```javascript
let x = 10;
let y = "10";
let z = 5;

console.log(x == y);   // Output: true (10 equals "10" after type conversion)
console.log(x === y);  // Output: false (number 10 is NOT strictly equal to string "10")
console.log(x != z);   // Output: true (10 is not equal to 5)
console.log(x !== y);  // Output: true (different types: number vs string)
console.log(x > z);    // Output: true (10 is greater than 5)
console.log(x < z);    // Output: false (10 is not less than 5)
console.log(x >= 10);  // Output: true (10 is greater than or equal to 10)
console.log(z <= 5);   // Output: true (5 is less than or equal to 5)
```

-Comparison Operators (The Equality Trap)
In SDET work, checking values correctly is the difference between a "Pass" and a "Fail" in your tests.

A. Loose Equality (==)
Rule: Checks only the Value.

Coercion: It converts data types automatically (e.g., changes a string to a number) to try and make them match.

Example: 5 == "5" is true.

B. Strict Equality (===)
Rule: Checks both Value AND Data Type.

SDET Best Practice: Always use === to prevent "invisible" bugs in your automation scripts.

Example: 5 === "5" is false.

![Equality Comparison](Images/Equality_Comparison.png)

### 3. Logical Operators (&&, ||, !)

**Meaning:** Used to combine or invert boolean values.

- `&&` AND - returns true if BOTH conditions are true
- `||` OR - returns true if AT LEAST ONE condition is true
- `!` NOT - inverts the boolean value (true becomes false, false becomes true)

**Example:**

```javascript
let age = 25;
let hasLicense = true;

console.log(age >= 18 && hasLicense); // Output: true (age is 18+ AND has license)
console.log(age >= 18 || hasLicense); // Output: true (at least one is true)
console.log(!hasLicense);             // Output: false (inverts true to false)

let isSunny = false;
let isWarm = true;
console.log(isSunny && isWarm);       // Output: false (NOT both are true)
console.log(isSunny || isWarm);       // Output: true (at least one is true)
console.log(!isSunny);                // Output: true (inverts false to true)
```

![Logical_Operators](Images/Logical_Operators.png)

### 4. Assignment Operators (=, +=, -=, *=, /=, %=)

**Meaning:** Used to assign or update values to variables.

- `=` Assigns a value
- `+=` Adds and assigns (a += 5 is same as a = a + 5)
- `-=` Subtracts and assigns
- `*=` Multiplies and assigns
- `/=` Divides and assigns
- `%=` Modulus and assigns

**Example:**

```javascript
let score = 10;

score = 20;    // Assigns 20 to score
console.log(score); // Output: 20

score += 5;    // Same as: score = score + 5 (20 + 5)
console.log(score); // Output: 25

score -= 3;    // Same as: score = score - 3 (25 - 3)
console.log(score); // Output: 22

score *= 2;    // Same as: score = score * 2 (22 * 2)
console.log(score); // Output: 44

score /= 4;    // Same as: score = score / 4 (44 / 4)
console.log(score); // Output: 11

score %= 5;    // Same as: score = score % 5 (remainder of 11/5)
console.log(score); // Output: 1
```

![Assignment Operators Flow](Images/Assignment_Operators_Flow.png)

### 5. Increment/Decrement Operators (++, --)

**Meaning:** Used to increase or decrease a variable's value by 1.

- `++` Increment - increases value by 1
- `--` Decrement - decreases value by 1
- Can be used as prefix (++a) or postfix (a++)

**Example:**

```javascript
let count = 5;

count++;           // Increases count by 1 (postfix)
console.log(count); // Output: 6

++count;           // Increases count by 1 (prefix)
console.log(count); // Output: 7

count--;           // Decreases count by 1 (postfix)
console.log(count); // Output: 6

--count;           // Decreases count by 1 (prefix)
console.log(count); // Output: 5

// Difference between prefix and postfix:
let a = 10;
console.log(a++);  // Output: 10 (uses current value first, THEN increments)
console.log(a);    // Output: 11 (now incremented)

let b = 10;
console.log(++b);  // Output: 11 (increments FIRST, then uses new value)
console.log(b);    // Output: 11
```

![Pre vs Post Increment](Images/Pre_Post_Increment.png)

### 6. Ternary Operator (? :)

**Meaning:** A shorthand for if-else statements. Returns one value if condition is true, another if false.

- Syntax: `condition ? valueIfTrue : valueIfFalse`
-if condition is true then valueIfTrue will be executed else valueIfFalse will be executed

**Example:**

```javascript
let age = 20;
let canVote = age >= 18 ? "Yes" : "No"; // If age >= 18, return "Yes", else "No"
console.log(canVote); // Output: "Yes"

let marks = 45;
let result = marks >= 50 ? "Pass" : "Fail"; // Check if marks are 50 or more
console.log(result); // Output: "Fail"

// Can also use directly in console.log:
let temp = 35;
console.log(temp > 30 ? "Hot" : "Cold"); // Output: "Hot"
```

![Ternary Operator Flow](Images/Ternary_Operator_Flow.png)

### 7. typeof Operator

**Meaning:** Returns the data type of a value as a string.

**Example:**

```javascript
let name = "John";
let age = 30;
let isStudent = true;
let salary = null;
let address;

console.log(typeof name);      // Output: "string" (text)
console.log(typeof age);       // Output: "number" (numeric value)
console.log(typeof isStudent); // Output: "boolean" (true/false)
console.log(typeof salary);    // Output: "object" (null is considered object - historical bug)
console.log(typeof address);   // Output: "undefined" (value not assigned)
console.log(typeof [1, 2, 3]); // Output: "object" (arrays are objects)
```

![typeof Operator](Images/Typeof_Operator.png)

### 8. in Operator

**Meaning:** Checks if a property/key exists in an object. Returns true if found, false if not.

**Example:**

```javascript
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log("name" in person);    // Output: true (property "name" exists)
console.log("age" in person);     // Output: true (property "age" exists)
console.log("country" in person); // Output: false (property "country" doesn't exist)

let car = { brand: "Toyota", model: "Camry" };
console.log("brand" in car);      // Output: true
console.log("year" in car);       // Output: false
```

![in Operator](Images/In_Operator.png)

### 9. instanceof Operator

**Meaning:** Checks if an object is an instance of a specific class or constructor. Returns true or false.

**Example:**

```javascript
let numbers = [1, 2, 3, 4];
let today = new Date();
let message = "Hello";

console.log(numbers instanceof Array);  // Output: true (numbers is an array)
console.log(today instanceof Date);     // Output: true (today is a Date object)
console.log(message instanceof String); // Output: false (primitive string, not String object)

let obj = { name: "Test" };
console.log(obj instanceof Object);     // Output: true (obj is an object)
console.log(obj instanceof Array);      // Output: false (obj is not an array)

function Person(name) {
  this.name = name;
}
let john = new Person("John");
console.log(john instanceof Person);    // Output: true (john is instance of Person)
```

![instanceof Operator](Images/Instanceof_Operator.png)

---

### 10. Unary Operators

**Meaning:** Operators that work with only ONE operand (value). They perform operations on a single value.

**Common Unary Operators:**

- `+` Unary plus - converts operand to a number
- `-` Unary minus - negates the operand
- `!` Logical NOT - inverts boolean value
- `++` Increment - increases value by 1
- `--` Decrement - decreases value by 1
- `typeof` - returns the data type
- `delete` - deletes a property from an object
- `void` - evaluates an expression and returns undefined

**Example:**

```javascript
// Unary Plus (+) - converts to number
let str = "5";
console.log(+str);        // Output: 5 (string "5" converted to number 5)
console.log(typeof +str); // Output: "number"

let bool = true;
console.log(+bool);       // Output: 1 (true converted to 1)
console.log(+false);      // Output: 0 (false converted to 0)

// Unary Minus (-) - negates the value
let num = 10;
console.log(-num);        // Output: -10 (makes positive number negative)
console.log(-(-num));     // Output: 10 (double negative becomes positive)

// Logical NOT (!) - inverts boolean
let isActive = true;
console.log(!isActive);   // Output: false (inverts true to false)
console.log(!!isActive);  // Output: true (double negation returns original)

// Increment (++) and Decrement (--)
let count = 5;
console.log(++count);     // Output: 6 (increments first, then returns)
console.log(count++);     // Output: 6 (returns first, then increments)
console.log(count);       // Output: 7 (now incremented)

// typeof operator
console.log(typeof "Hello");  // Output: "string"
console.log(typeof 42);       // Output: "number"

// delete operator
let person = { name: "John", age: 30 };
delete person.age;            // Deletes the 'age' property
console.log(person);          // Output: { name: "John" }

// void operator
console.log(void 0);          // Output: undefined
console.log(void (2 + 2));    // Output: undefined (evaluates 2+2 but returns undefined)
```

---

## Operator Classification by Number of Operands

### **1. Unary Operators** (One Operand)

Operate on a single value.

- **Examples:** `!a`, `++a`, `--a`, `typeof a`, `-a`, `+a`, `delete obj.prop`
- **Use cases:** Type conversion, negation, increment/decrement, type checking

### **2. Binary Operators** (Two Operands)

Operate on two values.

- **Examples:** `a + b`, `a > b`, `a && b`, `a = b`, `a % b`
- **Use cases:** Arithmetic, comparison, logical operations, assignments
- **Note:** Most operators in JavaScript are binary operators

### **3. Ternary Operator** (Three Operands)

Operates on three values. JavaScript has only ONE ternary operator.

- **Example:** `condition ? valueIfTrue : valueIfFalse`
- **Use cases:** Conditional expressions, shorthand if-else statements

_____________________________________________________

## 5. Conditional Statements

**What are Conditional Statements?**
Conditional statements allow you to make decisions in your code based on conditions. Think of them as "if this happens, then do that."

![Conditional Statements Flow](Images/Conditional_Statements_Flow.png)

---
  
### **A) IF Statement**

**Rule:** Executes code ONLY if the condition is **true**. If false, nothing happens.

**Syntax:**

```javascript
if (condition) {
    // code to execute if condition is true
}
```

**Example:**

```javascript
let age = 20;

if (age >= 18) {
    console.log("You can vote!"); // This will print because age is 20
}

if (age >= 21) {
    console.log("You can drink!"); // This will NOT print (nothing happens)
}
```

---

### **B) IF-ELSE Statement**

**Rule:** If the condition is **true**, execute the `if` block. If **false**, execute the `else` block.

**Syntax:**

```javascript
if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}
```

**Example:**

```javascript
let mode = "dark-mode";
let color;

if (mode === "dark-mode") {
    color = "Black"; // This executes because mode is "dark-mode"
} else {
    color = "White";
}

console.log(color); // Output: Black
```

**Another Example:**

```javascript
let marks = 45;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail"); // This executes because marks < 50
}
```

---

### **C) IF-ELSE-IF Statement**

**Rule:** Checks multiple conditions in order. Executes the FIRST true condition. If none are true, executes the `else` block.

**Syntax:**

```javascript
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else {
    // code if none of the conditions are true
}
```

**Example:**

```javascript
let marks = 75;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B"); // This executes because marks = 75
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Output: Grade: B
```

**Traffic Light Example:**

```javascript
let light = "yellow";

if (light === "green") {
    console.log("Go!");
} else if (light === "yellow") {
    console.log("Slow down!"); // This executes
} else if (light === "red") {
    console.log("Stop!");
} else {
    console.log("Invalid light!");
}

// Output: Slow down!
```

---

### **Quick Comparison:**

| Statement | When to Use |
|-----------|-------------|
| **if** | Execute code only when condition is true, otherwise skip |
| **if-else** | Choose between 2 options (true or false) |
| **if-else-if** | Choose between 3+ options (multiple conditions) |

---

---

### **D) SWITCH Statement**

**Rule:** Compares a single value against multiple `case` labels. It is more readable than long `if-else-if` chains when checking the same variable for specific values.

**Syntax:**

```javascript
switch (expression) {
    case value1:
        // code to execute
        break;
    case value2:
        // code to execute
        break;
    default:
        // code if no case matches
}
```

**Example:**

```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // This executes because day is 3
        break;
    default:
        console.log("Invalid day");
}

// Output: Wednesday
```

![Switch Statement Flow](Images/Switch_Statement_Flow.png)

**Key Note:** The `break` keyword is essential to stop the execution from "falling through" to the next case. The `default` case acts like an `else`
---

## 6. JavaScript Input/Output Methods

**Overview:** Different ways to get input from users and display output in JavaScript.

| Feature | Works in Browser? | Works in VS Code/Node? | Recommended For |
|---------|-------------------|------------------------|-----------------|
| `console.log()` | ✅ Yes | ✅ Yes | Everything (Universal) |
| `prompt()` | ✅ Yes | ❌ No | Learning Browser basics |
| `alert()` | ✅ Yes | ❌ No | Visual web alerts |
| `confirm()` | ✅ Yes | ❌ No | Yes/No questions in browser |
| `process.argv` | ❌ No | ✅ Yes | SDET Command Line Tools |

---

### **A) console.log()**

**What it does:** Prints output to the console (browser DevTools or terminal).

**Example:**

```javascript
console.log("Hello, World!"); // Output: Hello, World!
let age = 25;
console.log("Age:", age); // Output: Age: 25
```

---

### **B) prompt()**

**What it does:** Shows a popup box in the browser asking for user input. Returns the input as a **string**.

**Example:**

```javascript
let name = prompt("Enter your name:");
console.log("Hello,", name); // Whatever user types is stored in 'name'

let num = prompt("Enter a number:");
console.log(num + 5); // ⚠️ Will concatenate, not add! num is a string!
console.log(Number(num) + 5); // ✅ Convert to number first
```

**Important:** Always convert `prompt()` input to a number if doing math!

---

### **C) alert()**

**What it does:** Shows a popup message in the browser. User can only click "OK".

**Example:**

```javascript
alert("Welcome to our website!"); // Shows popup with message
alert("Your form has been submitted!"); // Another popup
```

**Use case:** Show important messages to users on web pages.

---

### **D) confirm()**

**What it does:** Shows a popup with "OK" and "Cancel" buttons. Returns `true` if OK is clicked, `false` if Cancel.

**Example:**

```javascript
let wantToDelete = confirm("Are you sure you want to delete?");

if (wantToDelete) {
    console.log("Item deleted!");
} else {
    console.log("Deletion cancelled.");
}
```

**Use case:** Ask yes/no questions before important actions.

---

### **E) process.argv**

**What it does:** Gets command-line arguments in Node.js. Returns an **array** of arguments.

**Example:**

```javascript
// File: test.js
console.log(process.argv);
```

**Run in terminal:**

```bash
node test.js hello world 123
```

**Output:**

```javascript
[
  '/usr/local/bin/node',    // process.argv[0] - Node path
  '/path/to/test.js',       // process.argv[1] - File path
  'hello',                  // process.argv[2] - First argument
  'world',                  // process.argv[3] - Second argument
  '123'                     // process.argv[4] - Third argument
]
```

**Practical example:**

```javascript
// File: greet.js
let name = process.argv[2]; // Get first argument
console.log("Hello,", name);
```

**Run:** `node greet.js John` → **Output:** `Hello, John`

**Use case:** Building SDET command-line tools and automation scripts.

---

### **Quick Summary:**

- **Browser only:** `prompt()`, `alert()`, `confirm()`
- **Node.js only:** `process.argv`
- **Works everywhere:** `console.log()`

---

## Appendix: Comparison Recap (== vs ===)

- **`==` (Loose Equality)**: Checks only the value. It performs **type coercion** (automatically converts data types to match).
  - *Example*: `5 == "5"` is `true`.
- **`===` (Strict Equality)**: Checks both value AND data type. It does **not** perform type coercion.
  - *Example*: `5 === "5"` is `false`.
