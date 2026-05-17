import sys

file_path = "/Users/shujauddinms/Shujauddin's Lobby/SDET/Learning_JS_Pramod/Self_Learnings/Javascript.md"

with open(file_path, "r") as f:
    lines = f.readlines()

new_content = """## 27. Callbacks in JavaScript

### 27.1 What is a Callback?
A callback is a function that you give to another function, and that other function calls (executes) your function later when something happens.

```javascript
// You write this function
function ringBell() {
  console.log("Ding dong! Pizza is ready!");
}

// You give it to the waiter (setTimeout)
setTimeout(ringBell, 5000); // after 5 seconds, ringBell runs

console.log("Ordering pizza..."); // this runs immediately
```
**Output:**

```text
Ordering pizza...
(5 seconds later) Ding dong! Pizza is ready!
```
See? `ringBell` is the callback. It runs later, not right away.

---

### 27.2 Why Do We Need Callbacks?
JavaScript does things one at a time (single-threaded). But some tasks take time:

*   Reading a file
*   Fetching data from the internet
*   Waiting for a user to click a button

If JavaScript waited, the whole page would freeze. So instead, we say: "Hey, do this slow thing, and when you finish, CALL BACK this function".

---

### 27.3 How to Write a Callback (Step by Step)
**Step 1: Write a normal function**
```javascript
function greet() {
  console.log("Hello there!");
}
```

**Step 2: Give it to another function that expects a callback**
```javascript
setTimeout(greet, 2000); // calls greet after 2 seconds
```

You can also write the callback directly inside (anonymous function):

```javascript
setTimeout(function() {
  console.log("Hello there!");
}, 2000);
```

Or with an arrow function:

```javascript
setTimeout(() => {
  console.log("Hello there!");
}, 2000);
```

---

### 27.4 Callbacks with Parameters
Sometimes the callback needs data. Example: reading a file.

```javascript
function processData(data) {
  console.log("The data is:", data);
}

// Imagine a fake "readFile" function
readFile("myfile.txt", processData);
```
`readFile` will call `processData` and pass the file content as `data`.

---

### 27.5 Real Example: Button Click (Browser)
```html
<button id="myButton">Click me</button>

<script>
  // This callback runs when the button is clicked
  document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
  });
</script>
```
You gave a function to `addEventListener`. It calls your function every time the button is clicked.

---

### 27.6 Callbacks in Array Methods
You already used callbacks without knowing! `forEach`, `map`, `filter` all take callbacks.

**`forEach` – do something with each item**
```javascript
const fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit) {
  console.log("I like " + fruit);
});
```

**`map` – transform each item**
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6]
```

**`filter` – keep only items that pass a test**
```javascript
const ages = [12, 18, 21, 15, 30];
const adults = ages.filter(function(age) {
  return age >= 18;
});
console.log(adults); // [18, 21, 30]
```
In each case, you give a function (callback) that says what to do with each element.

---

### 27.7 Callback Hell (The Pyramid of Doom)
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
This looks like a triangle. That's why later we learned Promises and async/await to flatten it.

---

### 27.8 Summary in Very Simple Words
*   A callback is a function you give to someone else.
*   That someone else calls it back later.
*   It's like giving your phone number to a friend: "Call me when you're ready".

We use callbacks for waiting – waiting for time to pass, waiting for a click, waiting for data from the internet.

---

### 27.9 🎮 Practice Exercise (Do It in Your Console)
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
Run these and see what happens. You'll understand callbacks in no time!

---

### 27.10 Pros and Cons of Callbacks

![Callback Pros and Cons](Pros_and_cons_of_callbacks.png)
"""

# Replace lines 11731 to 12122 (0-indexed: 11730 to 12122)
# Check if the lines are what we expect
if "27. Callbacks in JavaScript" not in lines[11730]:
    print("Warning: line 11731 does not contain '27. Callbacks in JavaScript'")
    
if "Pros_and_cons_of_callbacks.png" not in lines[12121]:
    print("Warning: line 12122 does not contain 'Pros_and_cons_of_callbacks.png'")

# lines[11730:12122] will be replaced by new_content + "\n"
lines[11730:12122] = [new_content + "\n"]

with open(file_path, "w") as f:
    f.writelines(lines)

print("Replacement successful")
