# Chrome DevTools Guide

## Table of Contents
- [1. Elements Tab](#1-elements-tab)
- [2. Console Tab](#2-console-tab)
- [3. Sources Tab](#3-sources-tab)
- [4. Performance Tab](#4-performance-tab)
- [5. Memory Tab](#5-memory-tab)
- [6. Application Tab](#6-application-tab)
- [7. Lighthouse Tab](#7-lighthouse-tab)

---

## 1. Elements Tab

### 🔍 Simple Analogy
Imagine a house made of LEGO bricks. The Elements tab shows you every single brick, its colour, its position, and how they’re stacked together. You can even click on a brick and repaint it, or move it slightly, just to see what happens. The real house doesn’t change permanently — only what you see on your screen changes.

### 💼 What it actually does
The Elements tab shows the HTML (the structure) and CSS (the styling) of the current webpage. You can:

| Action | Description |
| :--- | :--- |
| **View Code** | See the entire page’s code. |
| **Highlight** | Hover over any line to highlight that part of the page. |
| **Edit** | Temporarily edit text, colours, or sizes to test how the UI would look. |

### 🧪 Why a QA uses it
- To inspect a button’s text or an error message when it’s not visible.
- To check if an element has an ID or class that you can use in your Playwright selector.
- To temporarily remove a pop‑up overlay that blocks your test.

---

## 2. Console Tab

### 🔍 Simple Analogy
Imagine the webpage is a person working silently in a room. You can’t see what’s going on in their head. The Console is like a diary that the person writes in while they work.
- If something goes wrong, they write: “Error! I can’t find the login button!”
- If they just want to leave a note, they write: “Page loaded successfully.”
- You can even pass them a note (type a command) and they’ll reply immediately.

So the Console shows you the webpage’s thoughts, complaints, and answers to your questions – all in real time.

### 💼 What it actually does
The Console tab displays:

| Type | Description |
| :--- | :--- |
| **Errors (Red)** | JavaScript errors – when the code breaks. |
| **Warnings (Yellow)** | Something isn’t ideal but the page still works. |
| **Logs (White/Grey)** | Messages developers left for debugging (e.g., `console.log('User logged in')`). |
| **Command Line** | You can type JavaScript code and run it instantly on the page. |

### 🧪 Why a QA uses it
- **Spotting bugs:** When you test something and it doesn’t work, open the Console. If you see a red error, that’s a defect you can report with the exact error message.
  - *Example:* You click “Login” and nothing happens. Console shows: `Uncaught TypeError: Cannot read property 'value' of null` → You now have proof that the page’s JavaScript broke.
- **Testing selectors quickly:** Before writing a Playwright test, you can test a CSS selector in the Console. Type: `document.querySelector('.login-button')`. If it returns the button element, your selector is correct. If it returns null, you need a different one.
- **Checking data:** You can see what data the page has stored in variables, which is helpful for debugging.

### 🛠️ How to open it
- Press F12 to open DevTools.
- Click the “Console” tab.
- You’ll immediately see any logs or errors.
- To type a command, click at the bottom (where the `>` symbol is) and write JavaScript.

---

## 3. Sources Tab

### 🔍 Simple Analogy
Imagine the webpage is a theatre play. The Elements tab shows you the stage and the props. The Sources tab shows you the complete script of the play — every line of dialogue, every scene change, every instruction the actors follow. You can even pause the play at a specific line, read the script, and step forward one line at a time to see exactly what happens.

### 💼 What it actually does
The Sources tab shows all the JavaScript, CSS, and other files that the webpage loads. You can:
- Browse the folder structure of the website’s code.
- Open a JavaScript file and read it.
- Set breakpoints (pause points) in the code, so when the page runs, it stops at that exact line.
- Step through the code line by line to debug complex logic.

### 🧪 Why a QA might use it (rarely, but sometimes)
- If a bug only happens in a specific sequence, a developer might ask you to set a breakpoint so you can show them the exact state of the code when it fails.
- When debugging a flaky automated test, you might pause the script in the Sources tab to inspect variables.
- As an SDET, when you write advanced Playwright tests, you might use the Sources tab to debug your own test code if it runs in the browser.

---

## 4. Performance Tab

### 🔍 Simple Analogy
Imagine you’re timing how long it takes a pizza shop to make and deliver your order. You start a stopwatch the moment you hang up the phone. You record:
- How long until the dough is made.
- How long the pizza is in the oven.
- How long the delivery driver takes to reach your door.

The Performance tab is that stopwatch for a webpage. It records every tiny step the browser takes to load the page, run code, paint pixels, and respond to your clicks. You can then see exactly where the slow parts are.

### 💼 What it actually does
The Performance tab records a timeline of everything the browser does over a few seconds:

| Stage | Description |
| :--- | :--- |
| **Loading** | Loading files (HTML, CSS, JS, images). |
| **Scripting** | Running JavaScript. |
| **Rendering** | Calculating styles and layout. |
| **Painting** | Drawing pixels on the screen. |

It gives you a detailed waterfall chart, similar to the Network tab, but focused on time spent in different parts of the browser engine, not just network requests.

### 🧪 Why a QA might use it
- To check if a page loads in an acceptable time (non‑functional testing).
- To find what’s blocking the page from being interactive (e.g., a huge JavaScript file taking 3 seconds to run).
- To verify that performance doesn’t degrade after a new feature is added.
- *Note:* For quick everyday performance checks, we often use Lighthouse (a separate tab) because it gives a simple score out of 100 and practical advice. The Performance tab is for deep dives.

### 🛠️ How to run a quick recording
- Open DevTools → Performance tab.
- Click the Record button (a circle).
- Interact with the page (e.g., click a button, scroll, or just let it load).
- Click Stop. You’ll see a timeline with colourful bars. The red and yellow parts indicate long‑running scripts or layout recalculations that can slow down the page.

---

## 5. Memory Tab

### 🔍 Simple Analogy
Imagine a kitchen sink with a tap running and a drain.
- The tap adds water (the webpage creates objects, variables, event listeners).
- The drain removes water (the browser cleans up unused objects – garbage collection).

A memory leak is like the drain being partially blocked. Water keeps coming in, but not enough drains out. Over time, the sink overflows (the page slows down and eventually crashes). The Memory tab lets you measure the water level and check if the drain is working.

### 💼 What it actually does
The Memory tab helps you profile the JavaScript heap – the part of the browser’s memory where objects live. You can:
- Take a heap snapshot to see what objects are using the most memory right now.
- Record a timeline of memory usage to see if it’s constantly growing (a leak).
- Take multiple snapshots and compare them to find objects that weren’t cleaned up.

### 🧪 Why a QA might use it (rarely)
- If you’re testing a single‑page application (SPA) that should run for hours without refreshing (like a trading dashboard or a monitoring screen), you might check that leaving it open doesn’t slowly consume all memory.
- If you notice the page getting sluggish after repeated actions, you could take before/after snapshots to provide evidence of a memory leak.
- *Note:* For everyday API and UI testing, you will almost never open this tab. It’s a specialist tool for performance/stability testing.

---

## 6. Application Tab

### 🔍 Simple Analogy
Imagine a hotel.
- The front desk is the webpage you see.
- The Application tab is the hotel's back‑office storage room.

It shows you:
- **Cookies:** little sticky notes the hotel puts on your luggage to remember who you are.
- **Local Storage:** a filing cabinet where the hotel keeps your preferences (like "always give me a room on the top floor").
- **Session Storage:** a temporary notepad that gets thrown away the moment you check out (close the tab).
- **Service Workers:** the hotel's maintenance crew that works even when no guests are around, preparing things for your next visit.

As a QA, you visit this storage room to check that the hotel is keeping the right notes and not leaving sensitive information lying around for anyone to see.

### 💼 What it actually does
The Application tab shows everything a website stores in your browser:

| Storage Type | Description |
| :--- | :--- |
| **Cookies** | Small pieces of data sent with every request, often used for authentication tokens, session IDs, or tracking. |
| **Local Storage** | Key‑value pairs that persist even after the browser is closed and reopened. Used for user settings, theme preferences, etc. |
| **Session Storage** | Same as Local Storage but cleared when the tab is closed. Used for short‑lived data like a multi‑step form's progress. |
| **IndexedDB** | A full database inside the browser (rare for testing, but exists). |
| **Service Workers** | Scripts that run in the background for offline support and push notifications. |

### 🧪 Why a QA uses it
- **Authentication testing:** After logging in, you can open Application → Cookies → find the domain. Check if the auth token is stored with the Secure and HttpOnly flags (which protect it from being stolen). If not, that’s a security defect.
- **Checking data cleanliness:** When you log out, the token should be deleted. If it’s still there, a subsequent user could reuse it – a serious bug.
- **Testing UI state:** If a user selects "Dark Mode", the preference is saved in Local Storage. You can clear it and verify the UI resets to default. This helps you test state‑dependent features.
- **Privacy / GDPR checks:** You can verify that no personally identifiable information (email, phone) is stored in plain text in cookies or local storage.

---

## 7. Lighthouse Tab

### 🔍 Simple Analogy
Imagine your car is due for its annual inspection. Instead of manually checking the brakes, lights, emissions, and tyres yourself, you drive it into an automated testing bay. In 30 seconds, a machine scans everything and hands you a report card with scores out of 100 and a list of exactly what to fix.

Lighthouse is that automated testing bay for a webpage. With one click, it audits:
- Performance – How fast does the page load?
- Accessibility – Can people with disabilities use it?
- Best Practices – Is the code secure and modern?
- SEO – Will search engines find it?

It gives you a simple score and practical advice — perfect for a QA.

### 💼 What it actually does
Lighthouse is an open‑source tool built right into Chrome DevTools. You open it, choose which audits to run, and it simulates loading the page on a mid‑range mobile device with a slow network. It then produces a detailed report.

**Scores (0–100, colour‑coded):**
- 🔴 0–49 (red) – Poor
- 🟠 50–89 (orange) – Needs Improvement
- 🟢 90–100 (green) – Good

**What it checks:**
| Audit | Description |
| :--- | :--- |
| **First Contentful Paint** | How quickly text/images appear. |
| **Total Blocking Time** | How long the page is frozen while scripts run. |
| **Cumulative Layout Shift** | Do elements jump around during load? |
| **Accessibility** | Color contrast, missing alt text for images, keyboard navigation. |
| **Best Practices** | HTTPS usage, correct image aspect ratios, no vulnerable libraries. |

### 🧪 Why a QA uses it
- **Quick health check:** Before a release, you run Lighthouse on key pages. If the Performance score drops from 90 to 60, something went wrong — you can flag it immediately.
- **Accessibility testing:** It finds missing labels, low contrast, and missing alt texts — things you might miss visually.
- **Non‑functional regression:** You can automate Lighthouse runs in CI/CD (using Lighthouse CI) to prevent performance regressions.
- **Baseline evidence:** You can take a Lighthouse report before a new feature and after, to prove it didn't degrade the user experience.
