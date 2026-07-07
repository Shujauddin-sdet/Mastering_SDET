# TypeScript Learning Notes

> [!NOTE]
> This document contains notes on learning TypeScript, formatted for easy reading.

## 1. Why TypeScript? (Simplified)

### 🔍 Simple Analogy
* **JavaScript** is like writing a shopping list on a plain piece of paper: "3 milk".
  * You might accidentally write `3` when you meant "3 bottles". The shopkeeper might misunderstand.
* **TypeScript** is the same list, but with stickers that say: `item: text, quantity: number`.
  * Now if you write `quantity: "three"`, the sticker immediately turns red and says "Wrong type!". You fix it before you even leave the house.
* **Conclusion**: TypeScript adds type stickers to JavaScript. They catch mistakes instantly while you code, not when the script runs and fails.

### 🧪 A Real Example (No Async, No Functions)
* **Plain JavaScript (no types)** – no error shown until you run it:
  ```javascript
  let price = 100;
  price = "expensive";   // JavaScript says nothing. But later, if you try price * 2, you get NaN (confusing).
  ```
* **TypeScript (with types)** – error shown immediately in your editor:
  ```typescript
  let price: number = 100;
  price = "expensive";   // ❌ Error: Type 'string' is not assignable to type 'number'.
  ```
* **The Benefit**: The moment you type the wrong thing, a red squiggly line appears. You fix it in seconds. No more weird runtime bugs. That's the whole point. TypeScript catches dumb mistakes for you, so your code is more reliable.

### 🧠 Why it matters for a QA/SDET (short version)
* You’ll write Playwright tests that click buttons, fill forms, and check text.
* TypeScript makes sure you always use the correct values (like a string for a selector, not a number).
* It autocompletes method names (e.g., `page.fill()`, `page.click()`) so you never misspell.
* If you change a variable name, TypeScript finds every place that needs updating.
* **Summary**: It’s JavaScript with a safety net. That’s all.

---

## 2. Setting Up TypeScript

### 🔍 Simple Analogy
* Before you start writing letters in a new language, you need two things:
  1. **A translator** (the TypeScript compiler `tsc`) that turns your typed notes into plain JavaScript.
  2. **A grammar rulebook** (`tsconfig.json`) that tells the translator how strict to be.
* We’ll install both now.

### 🛠️ Step‑by‑Step Setup
* **1. Open your terminal** (VS Code terminal or macOS Terminal).
* **2. Install TypeScript globally** using npm:
  ```bash
  npm install -g typescript
  ```
  * This gives you the `tsc` command anywhere.
* **3. Verify it’s installed**:
  ```bash
  tsc --version
  ```
  * You should see a version number like `Version 5.x.x`.
* **4. Create a practice folder and open it**:
  ```bash
  mkdir ts-practice
  cd ts-practice
  ```
* **5. Generate the rulebook (`tsconfig.json`)**:
  ```bash
  tsc --init
  ```
  * This creates a `tsconfig.json` file with all the compiler options.
  * For now, you don’t need to change anything. It enables strict mode by default, which gives you the best safety net.
* **6. Create your first TypeScript file**:
  * In your editor, create a file named `index.ts` and write:
    ```typescript
    let message: string = "Hello, TypeScript!";
    console.log(message);
    ```
  * This is exactly like JavaScript, but with `: string` after the variable name – the **type annotation**.
* **7. Compile the TypeScript to JavaScript**:
  ```bash
  tsc
  ```
  * This reads `index.ts` and produces `index.js` (plain JavaScript).
* **8. Run the compiled JavaScript**:
  ```bash
  node index.js
  ```
  * You’ll see `Hello, TypeScript!` printed. You just wrote and ran your first typed code.

### 🧠 What just happened?
* **`tsc` is the compiler** – it reads `.ts` files, checks for type errors, and outputs `.js` files.
* **`tsconfig.json` tells `tsc` exactly how to behave** (strictness, output folder, etc.). You don’t need to touch it yet.
* **The type annotation `: string`** told TypeScript “this variable must always be text”. If you later write `message = 123`, your editor shows an error immediately, before you even compile.
