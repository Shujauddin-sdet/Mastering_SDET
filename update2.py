import sys

file_path = "/Users/shujauddinms/Shujauddin's Lobby/SDET/Learning_JS_Pramod/Self_Learnings/Javascript.md"

with open(file_path, "r") as f:
    lines = f.readlines()

new_content = """---

### 27.7 How to Identify a Callback (Easy Rules)
A callback is simply a function passed as an argument to another function.

**Rule 1: You give the function to another function.**
*   You don't call it yourself (no parentheses `()` after it).
*   The other function will call it for you.

**Rule 2: It's usually inside the parentheses of another function call.**
```javascript
someFunction(   function() { ... }   )
//                ↑ this is the callback
```

**Rule 3: In `forEach`, `map`, `filter`, etc., the callback runs once for each item in the array.**

#### ✅ Step‑by‑Step Breakdown of `forEach`
```javascript
// 1. forEach is a method that expects ONE argument: a function.
fruits.forEach(        ???        );

// 2. You write the function right there:
fruits.forEach(  function(fruit) { ... }  );

// 3. That function is the callback.
```
When you run the code, JavaScript does this internally:

```javascript
// Pseudo‑code (how forEach might work internally)
function fakeForEach(callback) {
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    callback(item);   // <<< it CALLS your function here
  }
}
```
So `forEach` calls your function for every fruit. That's why it's called a callback – you give it, and it calls back to you.

#### 🧪 Compare with a Normal Function Call
```javascript
// This is NOT a callback – YOU are calling the function directly
function sayHello() {
  console.log("Hello");
}
sayHello();   // ← you put the parentheses, so you call it now

// This IS a callback – YOU give the function to setTimeout, and setTimeout calls it later
setTimeout(sayHello, 1000);   // ← no parentheses after sayHello
```
**The biggest clue:** If you see a function name or definition inside another function's parentheses and without parentheses `()` after it, it's probably a callback.

#### 🚀 Quick Test – Identify the Callback
```javascript
const numbers = [1, 2, 3];
numbers.filter(num => num > 1);
```
**Answer:** The callback is `num => num > 1` – it's passed to `filter`.

**🎓 Remember:**
*   **Callback** = a function you give to another function.
*   You do **not** put `()` after it when you give it.
*   The other function will call it when ready.

---

### 27.8 Callback Hell (The Pyramid of Doom)
When you nest many callbacks inside each other, it becomes hard to read.

```javascript
doFirstTask(function(result1) {
  doSecondTask(result1, function(result2) {
    doThirdTask(result2, function(result3) {
      doFourthTask(result3, function(result4) {
        console.log("All done!");
      });
    });
  });
});
```
This looks like a triangle. That's why later we learn Promises and async/await to flatten it.

---

### 27.9 Summary 
*   A callback is a function you give to someone else.
*   That someone else calls it back later.
*   It's like giving your phone number to a friend: "Call me when you're ready".

We use callbacks for waiting – waiting for time to pass, waiting for a click, waiting for data from the internet.

---

### 27.10 🎮 Practice Exercise 
```javascript
// 1. Simple callback with setTimeout
setTimeout(() => {
  console.log("3 seconds later!");
}, 3000);

// 2. Callback with array forEach
const colors = ["red", "green", "blue"];
colors.forEach((color) => {
  console.log(color + " is a nice color.");
});

// 3. Your own function that accepts a callback
function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  callback(); // this calls the callback
}

doHomework("math", function() {
  console.log("Finished homework!");
});
```

---

### 27.11 Pros and Cons of Callbacks

![Callback Pros and Cons](Pros_and_cons_of_callbacks.png)
"""

# Replace lines 11859 to 11918 (0-indexed: 11859 to 11918)
if "Callback Hell (The Pyramid of Doom)" not in lines[11861]:
    print("Warning: line 11862 does not contain 'Callback Hell (The Pyramid of Doom)'")
    
if "Pros_and_cons_of_callbacks.png" not in lines[11916]:
    print("Warning: line 11917 does not contain 'Pros_and_cons_of_callbacks.png'")

lines[11859:11918] = [new_content + "\n"]

with open(file_path, "w") as f:
    f.writelines(lines)

print("Replacement successful")
