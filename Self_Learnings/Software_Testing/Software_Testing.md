# Software Testing — Comprehensive Reference

## Table of Contents

* [1. What is Software Testing?](#1-what-is-software-testing)
  * [1.1 Why Do We Need Software Testing?](#11-why-do-we-need-software-testing)
* [2. Types of Software Testing](#2-types-of-software-testing)
* [3. Types of Manual Testing](#3-types-of-manual-testing)
  * [3.1 Testing Methodologies (Techniques)](#31-testing-methodologies-techniques)
  * [3.2 Levels of Testing](#32-levels-of-testing)
    * [3.2.1 Testing Hierarchy in Detail](#321-testing-hierarchy-in-detail)
    * [3.2.2 System Testing vs. Integration Testing](#322-system-testing-vs-integration-testing)
  * [3.3 Testing Types (Functional vs. Non-Functional)](#33-testing-types-functional-vs-non-functional)
  * [3.4 Static vs. Dynamic Testing](#34-static-vs-dynamic-testing)
  * [3.5 Positive vs. Negative Testing](#35-positive-vs-negative-testing)
  * [3.6 Re-testing vs. Regression Testing](#36-re-testing-vs-regression-testing)
  * [3.7 Ad-hoc and Exploratory Testing](#37-ad-hoc-and-exploratory-testing)
  * [3.8 Usability Testing](#38-usability-testing)
  * [3.9 Maintenance Testing](#39-maintenance-testing)
  * [3.10 Experience-Based Testing](#310-experience-based-testing)
  * [3.11 Globalization (i18n) vs. Localization (l10n)](#311-globalization-i18n-vs-localization-l10n)
  * [3.12 Accessibility Testing (A11y)](#312-accessibility-testing-a11y)
  * [3.13 Compatibility Testing](#313-compatibility-testing)
  * [3.14 API vs. Interface Testing](#314-api-vs-interface-testing)
  * [3.15 Performance Testing Deep Dive (Load vs. Stress)](#315-performance-testing-deep-dive-load-vs-stress)
  * [3.16 Gray Box Testing](#316-gray-box-testing)
* [4. Verification vs. Validation](#4-verification-vs-validation)
* [5. QA vs. QC](#5-qa-vs-qc)
  * [5.1 QA Activities Before Development Begins](#51-qa-activities-before-development-begins)
  * [5.2 Key QA Deliverables (Pre-Development)](#52-key-qa-deliverables-pre-development)
* [6. Human-in-the-Loop (HITL) Testing](#6-human-in-the-loop-hitl-testing)
* [7. Shift Left Testing](#7-shift-left-testing)
* [8. How to Perform Manual Testing?](#8-how-to-perform-manual-testing)
* [9. SDLC (Software Development Life Cycle)](#9-sdlc-software-development-life-cycle)
  * [9.1 SDLC Stakeholders](#91-sdlc-stakeholders)
  * [9.2 SDLC Phases](#92-sdlc-phases)
  * [9.3 SDLC Models](#93-sdlc-models)
    * [9.3.1 Waterfall Model / Linear Sequential Model](#931-waterfall-model--linear-sequential-model)
    * [9.3.2 Iterative Model](#932-iterative-model)
    * [9.3.3 Spiral Model](#933-spiral-model)
    * [9.3.4 Waterfall vs. Spiral — Comparison](#934-waterfall-vs-spiral--comparison)
    * [9.3.5 V-Model (Verification & Validation Model)](#935-v-model-verification--validation-model)
    * [9.3.6 Agile Development Model](#936-agile-development-model)
    * [9.3.7 Scrum Framework](#937-scrum-framework)
    * [9.3.8 SAFe — Scaled Agile Framework](#938-safe--scaled-agile-framework)
    * [9.3.9 Agile vs. V-Model — Comparison](#939-agile-vs-v-model--comparison)
    * [9.3.10 Prototype Model](#9310-prototype-model)
    * [9.3.11 Hybrid Model](#9311-hybrid-model)
    * [9.3.12 Derived Model](#9312-derived-model)
    * [9.3.13 DevOps Model (Modern)](#9313-devops-model-modern)
* [10. Build vs. Release](#10-build-vs-release)
* [11. Project vs. Product](#11-project-vs-product)
* [12. Product-Based vs. Service-Based Companies](#12-product-based-vs-service-based-companies)
* [13. Risk in Software Projects](#13-risk-in-software-projects)
* [14. Software Testing Life Cycle (STLC)](#14-software-testing-life-cycle-stlc)
* [15. Test Plan vs Test Strategy](#15-test-plan-vs-test-strategy)
  * [15.1 Simple Analogy](#151-simple-analogy)
  * [15.2 Professional Comparison](#152-professional-comparison)
  * [15.3 Deep Dive: Test Strategy](#153-deep-dive-test-strategy-the-master-rulebook)
  * [15.4 Deep Dive: Test Plan](#154-deep-dive-test-plan-the-project-specific-battle-plan)
  * [15.5 Why This Distinction Matters for a QA/SDET](#155-why-this-distinction-matters-for-a-qasdet)
* [16. Test Design Techniques](#16-test-design-techniques)
  * [16.1 Equivalence Partitioning (EP)](#161-equivalence-partitioning-ep)
  * [16.2 Boundary Value Analysis (BVA)](#162-boundary-value-analysis-bva)
  * [16.3 Real‑World Example: Forgot Password](#163-realworld-example-forgot-password--email-field)
  * [16.4 Decision Table Testing](#164-decision-table-testing)
  * [16.5 Error Guessing](#165-error-guessing)
  * [16.6 Summary of Techniques](#166-summary-of-techniques)
* [17. Writing Effective Test Cases (Positive & Negative)](#17-writing-effective-test-cases-positive--negative)
  * [17.1 Simple Analogy](#171-simple-analogy)
  * [17.2 Professional Context](#172-professional-context)
  * [17.3 Positive Test Cases](#173-positive-test-cases)
  * [17.4 Negative Test Cases](#174-negative-test-cases)
  * [17.5 How to Write Effective Test Cases – 7 Golden Rules](#175-how-to-write-effective-test-cases--7-golden-rules)
  * [17.6 Meaning](#176-meaning)
  * [17.7 Test Case Design Workflow](#177-test-case-design-workflow)
  * [17.8 Best Practices for Creating Good Test Cases](#178-best-practices-for-creating-good-test-cases)
  * [17.9 Detailed Breakdown of Test Case Fields](#179-detailed-breakdown-of-test-case-fields)
  * [17.10 Why Test Cases Matter (and Risks of Omitting Them)](#1710-why-test-cases-matter-and-risks-of-omitting-them)
  * [17.11 Comprehensive Test Case Example: Facebook Login](#1711-comprehensive-test-case-example-facebook-login)
  * [17.12 Comprehensive Test Case Example: Google Account Login](#1712-comprehensive-test-case-example-google-account-login)
  * [17.13 Use Case vs Test Scenario vs Test Case](#1713-use-case-vs-test-scenario-vs-test-case)
    * [17.13.1 🔍 Simple Analogy](#17131-simple-analogy)
    * [17.13.2 💼 Professional Definition](#17132-professional-definition)
    * [17.13.3 🧪 Real‑World Example – Login Feature](#17133-real-world-example--login-feature)
    * [17.13.4 📊 Use Case vs Test Scenario vs Test Case – Side‑by‑Side](#17134-use-case-vs-test-scenario-vs-test-case--side-by-side)
    * [17.13.5 📝 Explanation](#17135--explanation)
* [18. Testing Types & Defect Management (Topic 27: Error, Bug, Defect, Failure – Definitions)](#18-testing-types--defect-management-topic-27-error-bug-defect-failure--definitions)
  * [18.1 🔍 Simple Analogy](#181-simple-analogy)
  * [18.2 💼 Professional Definitions](#182-professional-definitions)
  * [18.3 🧪 Real‑World Example – Login Feature](#183-real-world-example--login-feature)
  * [18.4 🔁 Bug vs Defect – Are They the Same?](#184-bug-vs-defect--are-they-the-same)
  * [18.5 📊 Summary Table](#185-summary-table)
  * [18.6 ❓ Why This Matters for a QA/SDET](#186-why-this-matters-for-a-qasdet)
  * [18.7 📝 Explanation](#187-explanation)
* [19. Requirements Traceability Matrix (RTM)](#19-requirements-traceability-matrix-rtm)
  * [19.1 🔍 Simple Analogy](#191-simple-analogy)
  * [19.2 💼 Professional Definition](#192-professional-definition)
  * [19.3 📊 Typical RTM Structure (Columns)](#193-typical-rtm-structure-columns)
  * [19.4 📝 Creating an RTM in Google Sheets – Step‑by‑Step Guide](#194-creating-an-rtm-in-google-sheets--stepbystep-guide)
  * [19.5 🏢 Real‑World Example – Login & Forgot Password RTM](#195-realworld-example--login--forgot-password-rtm)
  * [19.6 🔗 How RTM Links to Other STLC Phases](#196-how-rtm-links-to-other-stlc-phases)
  * [19.7 ❓ Why This Matters for a QA/SDET](#197-why-this-matters-for-a-qasdet)
  * [19.8 🗣️ Explanation](#198-explanation)
  * [19.9 ⚠️ Important Summary Flow](#199-important-summary-flow)
* [20. Test Execution & Test Closure Activities](#20-test-execution--test-closure-activities)
  * [20.1 🧪 Part 1 – Test Execution (STLC Phase 5)](#201--part-1--test-execution-stlc-phase-5)
  * [20.2 🧾 Part 2 – Test Cycle Closure (STLC Phase 6)](#202--part-2--test-cycle-closure-stlc-phase-6)
  * [20.3 🗣️ Explanation](#203-explanation)
* [21. GUI Testing & Error Guessing](#21-gui-testing--error-guessing)
  * [21.1 🖥️ Part A – GUI Testing (Graphical User Interface)](#211-️-part-a--gui-testing-graphical-user-interface)
  * [21.2 🎯 Part B – Error Guessing (as a Testing Type)](#212--part-b--error-guessing-as-a-testing-type)
  * [21.3 🗣️ Explanation & Malfunctions](#213-explanation--malfunctions)
* [22. Smoke vs. Sanity Testing](#22-smoke-vs-sanity-testing)
  * [22.1 🧪 Part A – Smoke Testing](#221--part-a--smoke-testing)
  * [22.2 🧪 Part B – Sanity Testing](#222--part-b--sanity-testing)
  * [22.3 ⚖️ Smoke vs Sanity – Side‑by‑Side](#223-️-smoke-vs-sanity--sidebyside)
  * [22.4 🧠 Why This Matters for an SDET](#224--why-this-matters-for-an-sdet)
  * [22.5 📝 Explanation](#225--explanation)
  * [22.6 🛠️ Smoke Tests for Login – Example Selection](#226-️-smoke-tests-for-login--example-selection)
  * [22.7 🔧 Sanity Test – After a Bug Fix](#227--sanity-test--after-a-bug-fix)
* [23. Functional vs. Non-Functional Testing Deep Dive](#23-functional-vs-non-functional-testing-deep-dive)
  * [23.1 🔍 Simple Analogy](#231-simple-analogy)
  * [23.2 💼 Professional Definition](#232-professional-definition)
  * [23.3 📊 Side‑by‑Side Comparison](#233-sidebyside-comparison)
  * [23.4 🧠 Why This Matters for an SDET](#234-why-this-matters-for-an-sdet)
  * [23.5 📝 Explanation](#235--explanation)
* [24. Retesting vs. Regression Testing Deep Dive](#24-retesting-vs-regression-testing-deep-dive)
  * [24.1 🔍 Simple Analogy](#241-simple-analogy)
  * [24.2 💼 Professional Definition](#242-professional-definition)
  * [24.3 🧪 Real‑World Example – Login Feature](#243-realworld-example--login-feature)
  * [24.4 🔁 How They Fit Together (The Cycle)](#244-how-they-fit-together-the-cycle)
  * [24.5 ❓ Why This Matters for an SDET](#245-why-this-matters-for-an-sdet)
  * [24.6 📝 Explanation](#246--explanation)
* [25. Exploratory vs. Ad-hoc Testing Deep Dive](#25-exploratory-vs-ad-hoc-testing-deep-dive)
  * [25.1 🔍 Simple Analogy](#251-simple-analogy)
  * [25.2 💼 Professional Definition](#252-professional-definition)
  * [25.3 📊 Ad‑hoc vs Exploratory – Side‑by‑Side](#253-ad-hoc-vs-exploratory--side-by-side)
  * [25.4 🧠 Why This Matters for an SDET](#254-why-this-matters-for-an-sdet)
  * [25.5 📝 Explanation](#255--explanation)
* [26. Monkey vs. Gorilla Testing Deep Dive](#26-monkey-vs-gorilla-testing-deep-dive)
  * [26.1 🔍 Simple Analogy](#261-simple-analogy)
  * [26.2 💼 Professional Definition](#262-professional-definition)
  * [26.3 📊 Monkey vs Gorilla – Side‑by‑Side](#263-monkey-vs-gorilla--side-by-side)
  * [26.4 🧠 Why This Matters for an SDET](#264-why-this-matters-for-an-sdet)
  * [26.5 📝 Explanation](#265--explanation)
* [27. The Defect Lifecycle Deep Dive](#27-the-defect-lifecycle-deep-dive)
  * [27.1 🔍 Simple Analogy](#271-simple-analogy)
  * [27.2 💼 Professional Definition](#272-professional-definition)
  * [27.3 🧾 Standard Defect Lifecycle States](#273-standard-defect-lifecycle-states)
  * [27.4 🔁 The Ideal Flow (happy path)](#274-the-ideal-flow-happy-path)
  * [27.5 🧪 Real‑World Example – Login Defect](#275-real-world-example--login-defect)
  * [27.6 ❓ Why This Matters for a QA/SDET](#276-why-this-matters-for-a-qasdet)
  * [27.7 📝 Explanation](#277--explanation)
  * [27.8 📍 Where exactly is each thing recorded?](#278--where-exactly-is-each-thing-recorded)
  * [27.9 🧩 How they connect in practice](#279--how-they-connect-in-practice)
* [28. Defect Severity vs Priority Deep Dive](#28-defect-severity-vs-priority-deep-dive)
  * [28.1 🔍 Simple Analogy](#281-simple-analogy)
  * [28.2 💼 Professional Definition](#282-professional-definition)
  * [28.3 📊 Severity Levels (Typical)](#283-severity-levels-typical)
  * [28.4 📊 Priority Levels (Typical)](#284-priority-levels-typical)
  * [28.5 🧩 The Classic Combinations (and why they’re different)](#285-the-classic-combinations-and-why-theyre-different)
  * [28.6 🧪 Real‑World Example – Login Feature](#286-real-world-example--login-feature)
  * [28.7 ❓ Why This Matters for a QA/SDET](#287-why-this-matters-for-a-qasdet)
  * [28.8 📝 Explanation](#288--explanation)
* [29. Advanced Defect Concepts Deep Dive](#29-advanced-defect-concepts-deep-dive)
  * [29.1 🩺 Defect Triage](#291--defect-triage)
  * [29.2 💧 Defect Leakage](#292--defect-leakage)
  * [29.3 🐜 Defect Clustering](#293--defect-clustering)
  * [29.4 ⌛ Defect Age](#294--defect-age)
  * [29.5 🎭 Defect Masking](#295--defect-masking)
  * [29.6 📝 Explanation](#296--explanation)
* [30. Manual Testing Workbook Structure](#30-manual-testing-workbook-structure)
* [31. Essential Manual Testing Concepts for SDETs](#31-essential-manual-testing-concepts-for-sdets)
  * [31.1 Test Data Management](#311-test-data-management)
  * [31.2 Test Environment Management](#312-test-environment-management)
  * [31.3 End-to-End (E2E) Testing vs. System Testing](#313-end-to-end-e2e-testing-vs-system-testing)
  * [31.4 Mobile Web Testing Basics](#314-mobile-web-testing-basics)
  * [31.5 Root Cause Analysis (RCA) - The "5 Whys" & "Fishbone Diagram"](#315-root-cause-analysis-rca---the-5-whys--fishbone-diagram)

---

## 1. What is Software Testing?

Software Testing is the process of evaluating and verifying that a software product or application does what it is supposed to do. It helps identify **defects**, **gaps**, or **missing requirements** before the software reaches end users.

**Core objectives:**
* Validate the application against its requirements.
* Identify defects to ensure the final product is reliable.
* Build confidence in the level of quality.

### 1.1 Why Do We Need Software Testing?

| Reason | Description |
| :--- | :--- |
| **Quality Assurance** | Ensures the product is reliable, functions correctly, and meets user expectations. |
| **Cost Effectiveness** | Detecting defects early in development is significantly cheaper than fixing them post-release. |
| **Security** | Identifies vulnerabilities and protects sensitive user data from attacks. |
| **User Satisfaction** | A smooth, defect-free application provides an excellent user experience and builds trust. |
| **Business Reputation** | A faulty product launch can damage brand credibility and cause revenue loss. |
| **Performance** | Validates the software can handle expected user loads without degradation. |

---

## 2. Types of Software Testing

| Type | Description |
| :--- | :--- |
| **Manual Testing** | Testing performed by a human who executes test cases step by step without automation tools. Effective for finding usability issues, visual bugs, and complex edge cases. |
| **Automated Testing** | Tests executed automatically via test automation frameworks (e.g., Playwright, Selenium) and CI/CD pipelines. Ideal for regression, high-volume, and repetitive test scenarios. |

---

## 3. Types of Manual Testing

![Manual Testing](../Images/TypesofManual_Testing.png)

Manual Testing can be broadly classified into several categories:

### 3.1 Testing Methodologies (Techniques)

| Technique | Description |
| :--- | :--- |
| **Black Box Testing** | Testing without knowledge of internal code/structure. Focuses entirely on inputs and expected outputs. |
| **White Box Testing** | Testing with full knowledge of internal code and structure. Also known as Glass Box Testing. |
| **Gray Box Testing** | A hybrid approach — testing with partial knowledge of the internal workings. |

### 3.2 Levels of Testing

![Levels of Testing](../Images/Levels_of_Testing.png)

| Level | What Is Tested | Primary Owner |
| :--- | :--- | :--- |
| **Unit Testing** | Individual components or functions in isolation. | Developers |
| **Integration Testing** | Interactions between connected modules/services. | Developers + SDET |
| **System Testing** | The complete, integrated application end-to-end. | QA / SDET |
| **Acceptance Testing** | Whether the software meets business needs. | End users / Stakeholders |

**Acceptance Testing sub-types:**
* **Alpha Testing:** Performed by internal employees at the development site.
* **Beta Testing:** Performed by real users in their own environment.

#### 3.2.1 Testing Hierarchy in Detail

> **Conceptual Overview:** Imagine you're building a house.
>
> Unit Testing is checking each brick and beam as it's made. "Is this brick solid? Are these beams straight?" You're testing the smallest pieces individually.
>
> Integration Testing is checking that the walls and the roof connect properly. "Does the roof fit on these walls? Do the water pipes connect to the sink without leaking?" You're testing that the pieces work together in small groups.
>
> System Testing is walking through the entire finished house. You turn on every light, flush every toilet, open every window, and check if the whole house functions correctly as one unit.
>
> User Acceptance Testing (UAT) is when the future homeowner visits. They walk through the house and confirm: "Yes, the kitchen is where I wanted it. The master bedroom gets enough morning light. The house meets my expectations."
>
> So the testing hierarchy moves from tiny single parts → connected parts → whole system → user's final approval.

| Level | What Is Tested | Who Does It | Tools / Approach |
| :--- | :--- | :--- | :--- |
| **Unit Testing** | Individual functions, methods, or classes in isolation. | Developers (SDET may contribute to testable code design). | Jest, Mocha, JUnit. Mocking/stubbing dependencies. |
| **Integration Testing** | Data flow and interface between 2–3 components (e.g., API → database). | Developers + SDETs. | Postman, Playwright API testing (`request` fixture), REST Assured. |
| **System Testing** | Entire application — end-to-end user journeys (login → checkout → payment). | QA / SDET (primary owners). | Playwright, Selenium, Cypress. Performance tools (JMeter). |
| **UAT** | Complete system against real-world business scenarios. | End users, business stakeholders, product owners. | Usually manual, in a production-like environment. |

**The Test Pyramid principle:** Maintain many fast unit tests at the base, fewer integration tests in the middle, and a targeted set of slower system tests at the top. This keeps the overall suite fast and reliable.

> **Key Takeaway:** "Unit tests verify individual code functions. Integration tests check that multiple components work together correctly. System tests validate the entire application end-to-end. UAT confirms the software meets business needs from the user's perspective. As an SDET, integration and system test automation provide the highest-value fast feedback."

#### 3.2.2 System Testing vs. Integration Testing

> **Conceptual Overview:** Integration Testing is like testing whether the engine fits properly into the car frame, and whether the fuel line connects to the engine without leaking. You check that two or three big parts work together, but you don't drive the car yet.
>
> System Testing is like taking the fully assembled car out for a long test drive on real roads. You check everything together: engine, brakes, lights, air conditioning, music system – as one complete vehicle.
>
> So: Integration = checking connections between parts. System = checking the whole working product.

| Feature | Integration Testing | System Testing |
| :--- | :--- | :--- |
| **Scope** | Narrow — specific data flow between 2–3 components. | Wide — entire system with real database, browser, network. |
| **When** | After unit tests pass; runs per build / pull request. | After integration tests pass; nightly or per release candidate. |
| **Who** | Developers + SDETs. | QA / SDET primarily. |
| **Tools** | Postman, Playwright API (`request` fixture), REST Assured. | Playwright (browser), Selenium, Cypress, Appium (mobile). |
| **Environment** | Test environment with stubs or limited services. | Staging / pre-production mirroring production. |
| **Speed** | Faster — no browser rendering. | Slower — full UI rendering, real browser interactions. |
| **Defects Found** | Data mismatches, wrong API responses, contract violations. | UI layout issues, broken user flows, environment config errors. |

> **Key Takeaway:** "Integration testing verifies module-to-module communication (e.g., API ↔ database). System testing validates the complete application as a user would experience it. A healthy test strategy automates both layers for fast, layered feedback."

### 3.3 Testing Types (Functional vs. Non-Functional)

*(See [Section 23](#23-functional-vs-non-functional-testing-deep-dive) for a detailed breakdown, analogies, and side-by-side comparisons)*

![Functional vs Non-Functional Testing](../Images/Functional_vs_NonFunctional.png)

**Functional Testing** — Verifying **what** the software does:

| Type | Description |
| :--- | :--- |
| **Smoke Testing** | High-level check to confirm the build is stable enough for further testing. *(See [Section 22](#22-smoke-vs-sanity-testing) for deep dive)* |
| **Sanity Testing** | Quick, focused check of specific functionality after a bug fix or minor change. *(See [Section 22](#22-smoke-vs-sanity-testing) for deep dive)* |
| **Regression Testing** | Ensuring new changes haven't broken existing, previously working functionalities. |

**Non-Functional Testing** — Verifying **how** the software performs:

| Type | Description |
| :--- | :--- |
| **Performance Testing** | Checking responsiveness, stability, and speed under load. |
| **Usability Testing** | Checking how user-friendly and intuitive the application is. |
| **Compatibility Testing** | Verifying the app works across different browsers, OS, and devices. |
| **Security Testing** | Identifying vulnerabilities and ensuring data protection. |

### 3.4 Static vs. Dynamic Testing

| Aspect | Static Testing | Dynamic Testing |
| :--- | :--- | :--- |
| **Execution** | Code is **not** executed. | Code **is** executed. |
| **Methods** | Code reviews, inspections, walkthroughs, static analysis tools. | Running test cases and validating output against expected results. |
| **When** | Early — during requirements, design, or code review phases. | After a build is available. |

### 3.5 Positive vs. Negative Testing

| Aspect | Positive Testing | Negative Testing |
| :--- | :--- | :--- |
| **Approach** | "Happy Path" — valid inputs. | Invalid data, unexpected behaviour. |
| **Validates** | The system does what it's supposed to do. | The system handles errors gracefully (doesn't do what it shouldn't). |

### 3.6 Re-testing vs. Regression Testing

*(See [Section 24](#24-retesting-vs-regression-testing-deep-dive) for a detailed breakdown, real-world examples, and analogies)*

| Feature | Re-testing | Regression Testing |
| :--- | :--- | :--- |
| **Purpose** | Verify a specific bug fix. | Ensure existing features still work after changes. |
| **Execution** | Done before Regression testing. | Done after Re-testing is successful. |
| **Scope** | Only the failed test cases are re-run. | All related features are checked. |
| **Automation** | Difficult to automate (one-time fix). | Highly recommended for automation. |

### 3.7 Ad-hoc and Exploratory Testing

*(See [Section 25](#25-exploratory-vs-ad-hoc-testing-deep-dive) for a detailed breakdown, side-by-side comparisons, and SDET application)*

**Ad-hoc Testing:**

> **Conceptual Overview:** Imagine you just bought a brand new video game. You don't read the instruction manual, and you don't follow a checklist. You just pick up the controller, start mashing buttons, try to walk through walls, and jump off cliffs just to see what happens. You are relying entirely on your gut feeling to break the game.
>
> "Ad-hoc" literally means "created or done for a particular purpose as necessary." In QA, it means you have no test cases written down. You just open the app and use your human intuition to try and crash it.

* No formal test plan or documentation.
* Leverages the tester's domain knowledge to identify high-level defects quickly.
* Best used immediately after a new build is deployed for a rapid quality pulse-check.

**Exploratory Testing:**
* Simultaneous learning, test design, and test execution.
* More structured than ad-hoc — the tester actively explores, documents findings, and adapts the approach in real-time.

> **Key Takeaway:** "Ad-hoc testing relies on domain knowledge to surface obvious defects without formal scripts. It complements documented regression testing and is valuable as a first pass on new builds."

### 3.8 Usability Testing

> **Conceptual Overview:** Have you ever walked up to a glass door that has a big handle on it, so you pull it, but it turns out it's a "Push" door? Technically, the door works (Functional Testing passed), but the design is confusing and makes the user feel stupid. Usability testing is making sure the app doesn't have "push doors with pull handles."
>
> You aren't checking if the code works; you are checking if the design works for a human brain. Is the text too small? Are the buttons too close together? Is the checkout process too confusing?

* Validates the workflow is intuitive, accessible, and frictionless.
* Checks: text readability, button spacing, navigation flow, checkout clarity.
* A working application that frustrates the user is still a quality failure.

> **Key Takeaway:** "A feature isn't truly complete because it passes functional requirements. Usability testing ensures the workflow is intuitive and frictionless, because a technically correct app that frustrates users is still a failed product."

### 3.9 Maintenance Testing

Testing on software **already in production**.
* **Purpose:** Verifying the system after bug fixes, new features, or migrations.
* **Focus:** Ensuring updates haven't introduced "side-effect" regressions.

### 3.10 Experience-Based Testing

*(See [Section 26](#26-monkey-vs-gorilla-testing-deep-dive) for a detailed breakdown of Monkey and Gorilla testing)*

Relies on the tester's intuition and past knowledge.

| Technique | Description |
| :--- | :--- |
| **Error Guessing** | Predicting where developers commonly introduce mistakes. |
| **Monkey Testing** | Providing random, nonsensical data to test system resilience. |
| **Gorilla Testing** | Repeatedly and exhaustively testing one specific module. |

### 3.11 Globalization (i18n) vs. Localization (l10n)

| Aspect | Globalization (i18n) | Localization (l10n) |
| :--- | :--- | :--- |
| **Focus** | Technical support for different languages, formats, currencies. | Adapting the app for a specific region (e.g., RTL text for Arabic). |

### 3.12 Accessibility Testing (A11y)

Ensuring the application is usable by people with disabilities.
* **Focus:** Screen readers, high-contrast modes, keyboard-only navigation.

### 3.13 Compatibility Testing

Verifying the app works across different:
* **Browsers:** Chrome, Safari, Firefox.
* **Operating Systems:** Windows, macOS, Linux.
* **Mobile Devices:** iOS, Android.

> **Key Takeaway:** "If it works perfectly on a Mac with Chrome, but crashes on a Windows PC with Edge, it's not a complete product. Compatibility testing ensures no user is left behind."

### 3.14 API vs. Interface Testing
Both deal with how different parts of a system talk to each other, but they have distinct focuses.

| Feature | API Testing | Interface Testing |
| :--- | :--- | :--- |
| **Focus** | Verifies the business logic, data formatting (JSON/XML), security, and status codes of the API endpoints directly. | Verifies the flow of data across the entire communication pipeline (e.g., UI → Web Server → Database). |
| **GUI Dependency** | **No.** Tested via headless tools like Postman, REST Assured, or Playwright `request`. | **Yes.** Usually tests if the UI correctly displays the data fetched from the server/API. |
| **Analogy** | Checking if the kitchen can successfully cook the exact dish you asked for on the ticket. | Checking if the waiter correctly takes your order, gives it to the kitchen, and safely brings the food back to your table. |

### 3.15 Performance Testing Deep Dive (Load vs. Stress)
Performance testing is the overarching term for measuring how the system handles different volumes of users and data. 

| Type | Definition | The Goal | Analogy |
| :--- | :--- | :--- | :--- |
| **Load Testing** | Testing the system under **expected, normal, and peak** workloads. | "Can our e-commerce site handle the normal 5,000 shoppers during Black Friday without slowing down?" | Packing exactly the maximum allowed weight into a backpack to make sure the straps don't snap. |
| **Stress Testing** | Testing the system **beyond** its expected capacity until it breaks. | "How many users does it take before our server crashes? Does it recover gracefully when it does?" | Filling the backpack with rocks until the seams rip open, just to see which part breaks first. |

### 3.16 Gray Box Testing
Gray Box (or Grey Box) Testing is the hybrid approach that sits between Black Box and White Box testing.

* **Black Box:** You only see the UI (Inputs and Outputs).
* **White Box:** You see and understand every line of source code.
* **Gray Box:** You use the UI to test, but you have *partial knowledge* of the internal architecture, such as database structures or API behavior.

> **Conceptual Overview:** Imagine you are testing a login form. In Black Box, you enter credentials and see if it logs you in. In Gray Box, you enter credentials on the UI, but you also check the backend database directly using a SQL query to verify that a session token was securely generated in the `sessions` table.

---

## 4. Verification vs. Validation

> **Conceptual Overview:** Verification is like reading a recipe while you cook. You check each step: "Did I add two spoons of sugar exactly as written?" You're making sure you follow the instructions correctly.
>
> Validation is like tasting the dish after it's cooked. Does it actually taste good? Would someone else enjoy eating it? You're checking if you made the right dish that satisfies the person eating it.
>
> So: Verification = Are we following the instructions correctly? Validation = Did we make the right thing that works for the user?

| Aspect | Verification | Validation |
| :--- | :--- | :--- |
| **Core Question** | Are we building the product **correctly**? | Are we building the **correct** product? |
| **Focus** | Documents, designs, code, specifications. | The actual working software against real user needs. |
| **Activity Type** | **Static** — no code executed. Reviews, walkthroughs, inspections, static analysis. | **Dynamic** — code is executed. Unit tests, integration tests, system tests, UAT. |
| **When** | Early stages — requirements, design, test cases, code reviews. | After a working build is available. |

**User Acceptance Testing (UAT):** The final validation phase where real users or client representatives test the software to confirm it meets their business needs before go-live.

**Why both matter:**
* Skipping verification → you build the wrong thing beautifully.
* Skipping validation → you have a well-documented product that crashes on launch.

> **Key Takeaway:** "Verification ensures we are building the product correctly — it's checking documents and designs without running the software. Validation ensures we built the correct product — it involves executing the software and checking it meets user needs. Both are necessary for quality."

---

## 5. QA vs. QC

> **Conceptual Overview:** QA (Quality Assurance) is like the rules a restaurant creates to make sure every dish is good: chefs must wash hands, ingredients must be fresh, the oven must be at the right temperature. These rules exist before cooking starts and guide how the work is done.
>
> QC (Quality Control) is like the chef tasting the soup just before it goes to the customer and saying, "Yes, this is good" or "No, it needs more salt." It's about inspecting the finished product.
>
> So: QA = Process-focused (preventing defects). QC = Product-focused (finding defects).

| Aspect | QA (Quality Assurance) | QC (Quality Control) |
| :--- | :--- | :--- |
| **Focus** | The **process** used to build the software. | The **product** itself (the working software). |
| **Goal** | **Prevent** defects by improving the development process. | **Identify** defects in the finished or in-progress product. |
| **How** | Standards, checklists, audits, process reviews, training. | Executing test cases, running automation suites, inspecting outputs. |
| **When** | Throughout the entire SDLC — starting before development. | After a build or component is ready to be tested. |
| **Who** | Everyone on the team (developers, testers, managers). | Primarily the testing/QA team. |
| **Example** | Defining a mandatory code review policy before code merge. | Running a Playwright script to verify the login flow works. |

> In modern agile teams, SDETs contribute to **both** QA (process improvements, test strategies, linting rules) and QC (executing tests, reporting defects).

> **Key Takeaway:** "Quality Assurance is process-oriented — improving development practices to prevent defects. Quality Control is product-oriented — testing the actual software to find defects. Both are needed to deliver a high-quality product."

### 5.1 QA Activities Before Development Begins

Using a practical example — a team building a **"Forgot Password"** feature:

| Step | QA Activity | Value |
| :--- | :--- | :--- |
| **1. Requirement Analysis** | Review draft requirements and ask clarifying questions. E.g., "What happens if the email isn't registered?", "Should the reset link expire?", "How many requests per 10 minutes?" | Prevents defects from being born — makes requirements unambiguous. |
| **2. Acceptance Criteria** | Define testable conditions for "done". E.g., "Reset email sent within 10s", "Link expires after 30 min", "Non-registered emails show a generic success message (security)." | Removes ambiguity; gives developers a precise target. |
| **3. Test Scenario Design** | Outline high-level scenarios (not full test cases yet). E.g., "Verify email sent for valid user", "Verify expired link shows error." | Creates shared understanding and highlights coverage gaps early. |
| **4. Design Review** | Review technical design documents. E.g., "What if the database is down when validating the token?" | Catches design flaws early (verification). |
| **5. Environment & Data Prep** | Prepare test data (test user accounts), coordinate test email server setup. | Reduces delays when the build arrives. |

### 5.2 Key QA Deliverables (Pre-Development)

| # | Deliverable | Description |
| :--- | :--- | :--- |
| 1 | **Review Notes / Clarification Questions** | A list of unclear, missing, or contradictory aspects of the requirement. |
| 2 | **Acceptance Criteria** | Specific, testable conditions that must be met for the feature to be "done." |
| 3 | **High-Level Test Scenarios** | Short descriptions of what areas will be tested (blueprint for future test cases). |
| 4 | **Test Plan / Test Strategy** | Scope, testing types, environment needs, schedule, risks (lightweight in Agile). |
| 5 | **Detailed Test Cases** | Step-by-step cases with preconditions, steps, and expected results (refined once build arrives). |

> Writing test cases early means the moment a build is delivered, testing begins immediately — no scrambling.

---

## 6. Human-in-the-Loop (HITL) Testing

> **Conceptual Overview:** Think of the autopilot on a commercial airplane. The autopilot (automation) can fly the plane perfectly 99% of the time while the pilot drinks coffee. But if a massive storm suddenly appears, the autopilot pauses and alerts the human pilot to grab the steering wheel and make a judgment call.
>
> Automation is blind. Sometimes, an automation script can't tell if a picture looks weird or if a layout is ugly—it only checks the code. HITL is a testing system where the automated robot does all the boring, repetitive work, but pauses to ask the human QA engineer, "Hey, does this look right to you?" before moving on.
>
> Automation is **deterministic** — it cannot evaluate whether a layout "looks right" or a UX flow "feels intuitive."
> HITL designs the automated pipeline to **escalate** visual changes, subjective UX workflows, or ambiguous outputs to a human QA engineer for review.

> **Key Takeaway:** "I design Human-in-the-Loop test strategies where Playwright handles repetitive data validation, but the pipeline alerts me to manually review complex visual changes or highly subjective UX workflows."

---

## 7. Shift Left Testing

> **Conceptual Overview:** Imagine you're building a house.
>
> The old way: you build the entire house, then call the inspector. The inspector finds a crack in the foundation — but the house is already finished. You have to tear down walls to fix it.
>
> The new way (Shift Left): you call the inspector before you even pour the concrete. They check the soil, the steel rods, the blueprint. You fix issues when they're still tiny and cheap.
>
> Shift Left means moving testing activities to the left on the project timeline — earlier in the development process. The earlier you test, the earlier you find problems, and the less they cost to fix.
>
> **Shift Left** means moving testing activities **earlier** in the SDLC timeline.

| Stage | Traditional QA (Testing Late) | Shift-Left QA (Testing Early) |
| :--- | :--- | :--- |
| **Requirements** | QA waits for final requirements. | QA reviews drafts, asks questions, writes acceptance criteria **before** development. |
| **Design** | QA has little involvement. | QA reviews UI mockups and technical designs for usability gaps and security concerns. |
| **Coding** | QA doesn't look at unit tests. | SDET helps developers write better unit tests, sets up static analysis (linters, type-checking). |
| **Integration** | QA tests after all pieces are merged. | SDET writes API contract tests and component tests that run on **every pull request**. |
| **System / E2E** | QA performs large manual testing cycles late. | SDET automates critical user journeys in CI; manual testing is reduced to exploratory sessions. |

**The cost of a defect over time:**
* Caught during **requirements review** → nearly free (a conversation).
* Caught during **development** → a few hours.
* Caught **after release** → thousands in hotfixes, lost trust, and revenue.

> **Key Takeaway:** "Shift Left testing means moving testing activities earlier in the SDLC. Instead of testing only after development, we validate requirements, designs, and code as soon as they're created. For SDET, this means writing automated checks — API tests, unit tests, static analysis — that run early and often, not just E2E tests at the release gate."

---

## 8. How to Perform Manual Testing?

![Manual Testing Steps](../Images/Perform_Manual_Testing.png)

| Step | Description |
| :--- | :--- |
| **Analyze** | Understand the requirements and project scope. |
| **Plan** | Define the test strategy, resources, and schedule. |
| **Design** | Create detailed test cases and scenarios. |
| **Execute** | Perform tests manually and record results. |
| **Log** | Report defects and track them to resolution. |
| **Close** | Verify fixes and provide a final summary report. |

---

## 9. SDLC (Software Development Life Cycle)

The SDLC is a structured sequence of stages used to develop software — from the initial idea through delivery and ongoing maintenance.

### 9.1 SDLC Stakeholders

1. Business Analyst
2. Project Manager
3. Development Team
4. Quality Assurance Team
5. End User

---

### 9.2 SDLC Phases

| Phase | Description |
| :--- | :--- |
| **1. Planning** | Gathering requirements and defining the project scope. |
| **2. Analysis** | Evaluating requirements for feasibility and technical details. |
| **3. Design** | Creating system architecture and user interface blueprints. |
| **4. Implementation** | Writing the actual source code. |
| **5. Testing** | Verifying the software to find defects and ensure quality. |
| **6. Deployment** | The software goes live for users. |
| **7. Maintenance** | Fixing bugs, gathering feedback, and updating the system post-release. |

![Planning](../Images/Planning.png)

**Key documents used during Analysis:**

| Document | Description |
| :--- | :--- |
| **BRD** (Business Requirement Document) | High-level goals of what the business needs. |
| **SRS** (System Requirement Specification) | Detailed technical and functional requirements. |
| **FRD/FRS** (Functional Requirement Document) | Specific description of how individual features should work. |

---

### 9.3 SDLC Models

![SDLC Models](../Images/Model_SDLC.png)

#### 9.3.1 Waterfall Model / Linear Sequential Model

![Waterfall Model Phases](../Images/Waterfall_Phases.png)
![When to Choose Waterfall Model](../Images/Choose_Waterfall_Model.png)
![Advantages of Waterfall](../Images/Advantage_waterfall_model.png)
![Disadvantages of Waterfall](../Images/Disadvantage_waterfall.png)

> **Conceptual Overview:** Development flows steadily downward through phases like a waterfall — each phase must be 100% completed before the next begins. Once a phase is signed off, there is no going back.

* **Flow:** Linear and sequential.
* **Best for:** Small projects with fixed, well-understood requirements.
* **Limitation:** Extremely rigid; not suitable for projects with evolving requirements.

#### 9.3.2 Iterative Model

![Iterative Model Phases](../Images/Iterative_Phases.png)

> **Conceptual Overview:** Instead of building the full system at once, you build a small part, then repeatedly enhance it in iterations — like writing successive drafts, each one more refined.

* **Flow:** Builds the system in small cycles.
* **Advantage:** Early detection of design flaws, flexible adaptation between iterations.
* **Limitation:** Can become complex for very large-scale systems.

#### 9.3.3 Spiral Model

![Spiral Model Phases](../Images/Spiral_Phases.png)

> **Conceptual Overview:** Imagine you're going on a treasure hunt in a dark forest. You don't just run straight in — that's risky. Instead, you take a small step forward, stop, look around for danger (like snakes or holes), plan your next step, then move again. You keep doing this: step, check for risk, plan, move. Each time you go a little deeper into the forest, but you're always watching out for problems. The Spiral model works just like that: build a bit, check for risks, plan the next bit, repeat. It's all about managing risk at every turn.
>
> Introduced by **Barry Boehm (1986)**, the Spiral model combines iterative development with rigorous risk analysis. Each loop has four activities:

| Activity | Description |
| :--- | :--- |
| **1. Determine Objectives** | Define what this iteration should achieve. |
| **2. Identify & Reduce Risks** | Analyse technical, budget, and timeline risks — the heart of the model. |
| **3. Development & Testing** | Build and test the features for this iteration. |
| **4. Plan Next Iteration** | Review progress and plan the next spiral loop. |

**SDET relevance:**
* Risk-driven testing — the risk analysis phase directly determines what gets tested most rigorously.
* Testing is not a single phase; it's present in **every loop**.
* Common in safety-critical systems: banking, aerospace, medical devices.

#### 9.3.4 Waterfall vs. Spiral — Comparison

| Feature | Waterfall | Spiral |
| :--- | :--- | :--- |
| **Flow** | Linear, sequential. | Iterative, looping. |
| **Risk Analysis** | Little or none. Bugs found only during the testing phase. | Explicit risk analysis at every loop. Highest risks addressed first. |
| **Testing** | Only at the end, after all development is complete. | Continuous, integrated into each loop. |
| **Flexibility** | Rigid. Changing requirements post-design is very difficult. | Flexible. Adjustments after each loop based on feedback and risk. |
| **Customer Feedback** | Late — only after deployment. | Early and frequent — after each spiral loop. |
| **Best Suited For** | Small projects with fixed, well-known requirements. | Large, complex, high-risk projects (banking, aerospace, medical). |
| **Cost of Defects** | High — late detection means expensive fixes. | Lower — continuous testing catches defects early. |

> **SDET implication:** In Waterfall, you receive a massive code drop and must automate tests in one burst. In Spiral, you build automation incrementally, prioritizing the riskiest features first.

#### 9.3.5 V-Model (Verification & Validation Model)

![V-Model Phases](../Images/V_Model_Phases.png)

> **Conceptual Overview:** An extension of Waterfall shaped like a "V" — for every development phase on the left side, there is a corresponding testing phase on the right. Test planning happens **in parallel** with development, not after it.

* **Proactive:** Testing is planned from the very start.
* **Disciplined:** Each development phase has a matched validation phase (requirements → acceptance tests, design → integration tests, coding → unit tests).
* **Best for:** Projects with fixed, well-understood requirements where quality discipline is critical.

#### 9.3.6 Agile Development Model

![Agile Development Phases](../Images/Agile_Phases.png)

> **Conceptual Overview:** Imagine you want to build a custom bicycle. Instead of designing the whole bike on paper, ordering every single part, assembling it all at once, and only then letting the customer ride it (Waterfall), you do this:
>
> First, you build a basic frame with two wheels and a seat—a rideable scooter. You show it to the customer. They say, "I need handlebars higher and a softer seat." Next, you add those changes and also attach pedals. You show it again. Customer tries it: "Great! But the chain slips sometimes." You fix the chain in the next delivery.
>
> You deliver working pieces early and often, and you adapt based on real feedback after each tiny release. That's Agile: building software in small, working slices, getting feedback, and constantly improving.
>
> Based on the **Agile Manifesto (2001):**

| Value | Agile Prioritises |
| :--- | :--- |
| Individuals and interactions | over processes and tools |
| Working software | over comprehensive documentation |
| Customer collaboration | over contract negotiation |
| Responding to change | over following a plan |

**Core mechanics:**
* Software is built in short, time-boxed cycles called **sprints** (typically 1–4 weeks).
* Each sprint delivers a **potentially shippable increment** of working software.
* After each sprint: demo → collect feedback → adjust the plan.

**SDET relevance:**
* Testing is **continuous** — no separate "testing phase" at the end.
* Shift-left in action: QA reviews user stories and writes acceptance criteria before coding.
* **Automation is essential** — regression testing every sprint makes it a necessity, not a luxury.
* Close daily collaboration with developers and product owners.

> **Key Takeaway:** "Agile delivers working software in short sprints with continuous testing and feedback. The focus is on people, working software, collaboration, and embracing change. For QA, this means testing happens continuously, and automation is crucial to keep up with frequent releases."

#### 9.3.7 Scrum Framework

> **Conceptual Overview:** You're part of a small film crew making a web series. Instead of writing the whole season, shooting everything, and releasing it a year later, you do this:
>
> You pick a 2‑week goal: "We'll shoot and edit Episode 1." Every morning, the crew stands together for 5 minutes to say what they did yesterday, what they'll do today, and what's blocking them. After 2 weeks, you screen Episode 1 to a test audience. They give feedback. You then look back on how the shoot went and agree to buy a better microphone next time. Then you pick the goal for the next 2‑week cycle: "Episode 2, with more outdoor shots."
>
> Each 2‑week cycle is a Sprint. The crew is a Scrum Team. That's Scrum: a structured rhythm of planning, daily syncs, frequent delivery, feedback, and reflection.

**The 3 Scrum Roles:**

| Role | Responsibility |
| :--- | :--- |
| **Product Owner (PO)** | Decides **what** to build. Manages and prioritises the Product Backlog. |
| **Scrum Master (SM)** | Coaches the team on Scrum practices, removes impediments. A servant-leader, not a manager. |
| **Development Team** | Cross-functional group that builds and tests the product. **QA/SDET is part of this team.** |

**The 5 Scrum Events:**

| Event | Description |
| :--- | :--- |
| **Sprint** | A fixed time-box (1–4 weeks) where a potentially shippable increment is created. |
| **Sprint Planning** | Team selects Product Backlog items and defines how to deliver them → output: Sprint Backlog. |
| **Daily Scrum (Stand-up)** | 15-minute daily sync: What did I do? What will I do? Any blockers? |
| **Sprint Review** | Team demos the working increment to stakeholders; feedback may change the Product Backlog. |
| **Sprint Retrospective** | Team reflects: What went well? What to improve? At least one actionable improvement for next sprint. |

**The 3 Scrum Artifacts:**

| Artifact | Description |
| :--- | :--- |
| **Product Backlog** | Single source of all work (features, bugs, technical tasks), prioritised by the PO. |
| **Sprint Backlog** | Subset of Product Backlog items selected for the current sprint + delivery plan. |
| **Increment** | Sum of all completed items at sprint end. Must meet the team's **Definition of Done**. |

**QA/SDET in Scrum:**
* Attend all Scrum events.
* During **Sprint Planning** — raise testing concerns, clarify acceptance criteria.
* During the **Sprint** — test features as soon as they're coded, not at the end.
* Own the **Definition of Done** for testing: all automated tests pass, new features covered, no critical defects open.
* During **Sprint Review** — may demo automated test reports alongside the feature demo.

> **Key Takeaway:** "Scrum structures Agile work into fixed Sprints with defined roles (PO, SM, Dev Team), events (Planning, Daily, Review, Retro), and artifacts (Product Backlog, Sprint Backlog, Increment). As an SDET, I'm a core part of the Development Team — automating tests and ensuring quality is built in, not added later."

#### 9.3.8 SAFe — Scaled Agile Framework

> **Conceptual Overview:** Scrum = A single small kitchen (one team) making pizzas in short cycles (sprints) and improving.
>
> SAFe = 50 kitchens (many teams) all making different parts of a huge festival meal. They need to coordinate so everything is ready at the same time, hot and tasty. SAFe is the set of rules, schedules, and communication methods that make this possible.
>
> When you have only one team, communication is easy. When you have 10 teams building the same big product (like a banking app), problems appear: teams depend on each other, releases can break if uncoordinated, and work may overlap. SAFe solves this by adding coordination layers above the single teams, without killing the agility of each team. Think of it like a traffic control system for many Agile teams.

**Key Building Blocks:**

| Concept | Description | SDET Relevance |
| :--- | :--- | :--- |
| **Agile Release Train (ART)** | A group of 5–12 Scrum teams working together on a common product — a virtual "super-team." | Your team belongs to an ART; you coordinate testing with other teams. |
| **Program Increment (PI)** | A large time-box (8–12 weeks) containing multiple Sprints. By PI's end, all teams deliver a working, integrated product increment. | Test planning aligns with PI goals; integration testing spans teams by PI end. |
| **PI Planning** | A 2-day planning event where all ART teams align goals and identify dependencies for the upcoming PI. | You speak up about testing dependencies: "If Team A's API isn't ready by Sprint 2, I can't test my team's dashboard." |
| **System Demo** | At the end of every Sprint (and PI), all teams demonstrate the integrated product as a whole. | Present test results, demonstrate cross-team feature integration, highlight integration defects. |
| **Inspect & Adapt (I&A)** | Large-scale retrospective at PI end — the entire ART reflects and improves. | Provide feedback on cross-team testing processes (e.g., "Integration testing started too late"). |

**Day-to-day for SDET in SAFe:**
* You remain part of a Scrum team with daily stand-ups, sprint planning, and retros.
* You additionally participate in ART-level events, especially PI Planning.
* You collaborate with other QAs on the ART to share test strategies, automation frameworks, and test data.
* Your automation suite runs against both your team's code **and** other teams' code in CI/CD to catch integration failures early.

> **Key Takeaway:** "SAFe scales Agile across many teams using an Agile Release Train. Teams work in a PI rhythm (8–12 weeks) with coordinated planning and integrated demos. As a QA, I'm still in a Scrum team but also coordinate testing across teams to ensure the entire product works smoothly."

#### 9.3.9 Agile vs. V-Model — Comparison

| Feature | V-Model | Agile |
| :--- | :--- | :--- |
| **Approach** | Sequential and linear. Each phase must finish before the next. | Iterative and incremental. Work in short sprint cycles. |
| **Phases Overlap** | No. Development on the left, testing on the right. | Yes. Coding, testing, and design happen continuously within each sprint. |
| **Testing** | Starts only after coding is complete, with phases matching development (unit, integration, system, UAT). | Continuous from day one. Every sprint delivers **tested**, working software. |
| **Customer Feedback** | Late — only after the product is built (UAT phase). | Early and frequent — at the end of every sprint (Sprint Review). |
| **Change Management** | Very rigid. Changes are difficult and costly after requirements sign-off. | Embraces change. The backlog can be reprioritised before every sprint. |
| **Documentation** | Heavy emphasis at every phase. | Values working software over comprehensive documentation. Just enough documentation. |
| **Risk Handling** | Risks identified early, but mitigation happens late. | Risks continuously identified and addressed in each sprint. Small failures are inexpensive. |
| **Team Structure** | Separate teams with hand-offs between phases. | Cross-functional: PO, SM, Developers, QA/SDET in one team. |
| **Delivery** | One big delivery at the end. | Small, frequent deliveries of working increments. |
| **Best For** | Fixed requirements, regulated industries (aerospace, medical). | Evolving requirements, fast-paced markets, user-facing applications. |

> **Key Takeaway:** "The V-Model is sequential with testing planned in parallel but executed only after coding. Agile is iterative, delivering tested software in short sprints with continuous feedback. Agile integrates QA from day one, enabling early automation and close developer collaboration."

#### 9.3.10 Prototype Model

> **Conceptual Overview:** Imagine you want a custom wedding cake. Instead of baking the final 5‑tier cake directly from a sketch and hoping the couple likes it, the baker first makes a small, sample cake with the same flavour and decoration style. The couple tastes it, says "More chocolate, less cream," and the baker adjusts. Only after they approve the sample does the baker build the final, expensive cake.
>
> That sample is a prototype — a quick, working model to test ideas and get feedback before building the real thing.

**Phases:**
1. Initial Requirement Gathering → basic, high-level ideas.
2. Quick Design → simplified UI or key features.
3. Build Prototype → fast, functional model for user interaction.
4. User Evaluation → users provide feedback.
5. Refine Requirements → update based on feedback.
6. Build Final Product → from clarified requirements.

**Two types:**

| Type | Description |
| :--- | :--- |
| **Throwaway Prototype** | A fast, disposable mock-up built only to understand requirements, then discarded. |
| **Evolutionary Prototype** | Continuously improved based on feedback until it becomes the final product. |

**SDET relevance:**
* Requirements are clarified before full development — fewer defects from misunderstood specifications.
* Exploratory testing on the prototype surfaces usability issues and logical gaps very early.
* In evolutionary prototyping, test automation must evolve constantly — a flexible design (e.g., Page Object Model) is essential.

#### 9.3.11 Hybrid Model

> **Conceptual Overview:** Imagine you're building a custom car. You love the speed and feedback of Agile's short test drives, but you also need the solid documentation and upfront planning of Waterfall for the engine and safety systems (which can't be "iterated" quickly without risk). So you mix them:
>
> For the car's chassis and engine, you follow a strict Waterfall plan with heavy documentation. For the interior dashboard and entertainment system, you use Agile sprints, showing the customer a new version every two weeks and adjusting based on their feedback.
>
> The final car is built using two different approaches at the same time, each chosen for the part they suit best. That's a Hybrid Model: combining two or more SDLC methodologies to get the best of both worlds.

**Common real-world scenarios:**

| Project Need | Approach |
| :--- | :--- |
| Banking app: regulated transaction engine + customer mobile app. | Waterfall for backend core, Agile/Scrum for frontend app. |
| Legacy enterprise modernisation: stable old modules + new microservices. | V-Model for legacy, Agile for new features. |
| Agile within sprints, but quarterly milestones with formal sign-offs at the programme level. | Agile at team level, Waterfall at programme level. |

**SDET relevance:**
* You may maintain two different testing rhythms on the same project.
* Formal test plans and traceability matrices for the Waterfall portion; lightweight test scenarios and rapid automation for the Agile portion.
* Integration testing between Agile and Waterfall components is critical.

#### 9.3.12 Derived Model

> **Conceptual Overview:** Imagine you own a restaurant and you've created a very successful recipe book that all your chefs follow. One day you decide to open a new pizza place. Instead of writing a completely new recipe book from scratch, you take the original book, keep the chapters on hygiene and kitchen safety, remove the pasta recipes, and add a whole new section on pizza dough and toppings. The new book is derived from the old one – it reuses what still works, discards what doesn't, and adds new things.
>
> In software, the Derived Model is when a team takes an existing SDLC process that worked on a previous project, modifies it to fit the new project's needs, and creates a "derived" custom process.

* Built from real-world experience, not theory.
* May combine Waterfall's documentation discipline, Agile's sprint cycles, and Spiral's risk-based test gates.
* Large organisations often have their own derived testing processes.

**SDET relevance:**
* When joining a new organisation, expect their own custom-derived model — no textbook model is followed exactly as written.
* You may be asked to improve the derived model by adding better automation strategies, shift-left practices, or enhanced test reporting.

> **Key Takeaway:** "Processes are not sacred — they should be adapted to the project, not the other way around."

#### 9.3.13 DevOps Model (Modern)

![DevOps Model Phases](../Images/DevOps_Phases.png)

> **Conceptual Overview:** A continuous loop (∞) combining Development (Dev) and Operations (Ops) — constant coding, testing, and deployment with no hard phase boundaries.

* **Focus:** Automation, continuous integration, continuous delivery, and monitoring.
* **Capability:** Enables multiple releases in a single day.
* **SDET relevance:** Test automation is integral to the CI/CD pipeline; every commit triggers builds, tests, and potential deployment.

---

## 10. Build vs. Release

> **Conceptual Overview:** Imagine a car factory.
>
> A Build is when the factory assembles a car and rolls it off the production line. Now the car exists and can be started, but it's sitting in the factory yard. No customer has it yet.
>
> A Release is when the factory cleans that car, puts on the number plates, completes the paperwork, and hands it over to the customer. Now it's officially out in the world, being used.
>
> So: Build = the software is compiled and packaged. Release = the software is delivered to end users.

| Aspect | Build | Release |
| :--- | :--- | :--- |
| **What It Is** | Source code compiled and packaged into a runnable version. | A specific build that is fully tested, approved, and delivered to users. |
| **Who Does It** | Developers + CI/CD pipeline (automated). | DevOps, QA sign-off, Product Manager approval. |
| **Frequency** | Many per day (every commit may trigger a build). | Less frequent — scheduled (e.g., bi-weekly) or on stability confirmation. |
| **Stability** | May have bugs, may fail tests — an internal checkpoint. | Expected to be stable, tested, and production-ready. |
| **QA/SDET Role** | Tests specific builds; automation runs on every build in CI. | Provides the final "go / no-go" based on test results, coverage, and defect severity. |

**Typical flow:**
1. Developer commits code → CI creates **Build #105**.
2. Automated tests run on Build #105 → all pass.
3. QA performs exploratory testing on Build #105.
4. After several stable builds, the team decides **Build #112** will become **Release v1.3**.
5. Build #112 is deployed to production, tagged, and release notes are published.

> **Key Takeaway:** "A build is a compiled, runnable version created internally, often many times daily. A release is a specific build that has been fully tested, approved, and officially delivered to users. In QA, I run tests on every build to catch issues early and help decide when a build is stable enough to be released."

---

## 11. Project vs. Product

> **Conceptual Overview:** A project is like building a sandcastle for a competition. You plan it, build it, present it, and then it's done. Once the competition is over, you stop working on it.
>
> A product is like a garden. You plant it, water it daily, remove weeds, add new plants over time. It keeps growing and needs continuous care as long as people use it.
>
> So: Project = temporary, with a clear end. Product = ongoing, lives as long as users exist.

| Aspect | Project | Product |
| :--- | :--- | :--- |
| **Duration** | Fixed start and end date. | Continuous lifecycle. |
| **Focus** | Delivering a specific output (e.g., a website for an event). | Solving ongoing user problems (e.g., WhatsApp). |
| **Team** | Assembled for the project, then dispersed. | Dedicated, long-term team. |
| **Testing Approach** | Plan-driven, executed within the project timeline. | Continuous testing across releases, patches, updates. |
| **Examples** | Custom payroll system for one company → handover. | Microsoft Excel, Spotify, Slack. |

---

## 12. Product-Based vs. Service-Based Companies

### 12.1 Product-Based Companies

Build their **own products** to sell directly to users.

* **Focus:** Innovation, user experience, improving their own software.
* **Examples:** Google (Search, Gmail), Microsoft (Windows, Office), Meta (Facebook, Instagram), Amazon (Shopping, AWS).

### 12.2 Service-Based Companies

Provide **services** or build software for **other clients** (they work on projects).

* **Focus:** Delivering projects on time, meeting client-specific needs.
* **Examples:** TCS, Infosys, Accenture, Wipro, Cognizant.

---

## 13. Risk in Software Projects

**Risk** is the possibility of an adverse event that could negatively affect the project's timeline, budget, scope, or quality.

| Risk Type | Description |
| :--- | :--- |
| **Technical Risk** | Technology limitations, integration failures, performance issues. |
| **Schedule Risk** | Delays in delivery timelines. |
| **Cost Risk** | Budget overruns. |
| **Resource Risk** | Unavailability of skilled personnel or tools. |
| **Management Risk** | Poor decision-making, lack of leadership, scope creep. |
| **External Risk** | Regulatory changes, vendor issues, market shifts. |

---

## 14. Software Testing Life Cycle (STLC)

### 14.1 🔍 Simple Analogy
Planning a large wedding. You don't just wake up on the day and start cooking. You:

1. **First figure out the menu** (what to test).
2. **Decide who will cook what and when** (planning).
3. **Write detailed recipes** (test cases).
4. **Set up the kitchen** (environment).
5. **Cook and taste every dish** (execute and report issues).
6. **Finally, serve the guests and close the kitchen** (closure).

> That entire sequence is the STLC — a structured, phase‑by‑phase process that ensures nothing is left to chance.

---

### 14.2 💼 Professional Context
The Software Testing Life Cycle is a systematic process that describes every activity a QA team performs, from the moment a testing need is identified until the test cycle is formally closed. It runs parallel to the Software Development Life Cycle (SDLC) but focuses entirely on testing.

The STLC consists of 6 phases. In many standard models, Defect Reporting is embedded within the Test Execution phase. However, in practice, because defect management is so critical, many teams treat it as a distinct, continuous activity. This version uses your preferred structure, which separates it out for clarity.

---

### 14.3 📊 STLC Phases at a Glance

| # | Phase | Primary Objective | Key Deliverables / Outputs | Responsible |
|---|---|---|---|---|
| **1** | **Requirement Analysis** | Understand what to test, identify gaps, and map requirements to tests. | Requirements Traceability Matrix (RTM), Automation feasibility notes, Clarification list. | Tester / QA |
| **2** | **Test Planning** | Define how testing will be done: scope, resources, schedule, tools, risks. | Test Plan document, Test Strategy document. | Test Lead / Senior QA |
| **3** | **Test Case Development** | Create detailed test cases, test scripts, and test data. Baseline the test cases. | Baselined Test Cases, Test Scripts, Test Data. | Tester |
| **4** | **Test Environment Setup** | Prepare and verify the hardware, software, and data where tests will execute. | Ready test environment, Smoke test results. | Tester / DevOps |
| **5** | **Test Execution & Defect Reporting** | Run tests, log defects, retest fixes, and track bugs to closure. | Executed test cases (Pass/Fail), Defect reports, Updated RTM. | Tester |
| **6** | **Test Cycle Closure** | Evaluate testing completion, release readiness, and archive test assets. | Test Closure Report, Signed‑off release recommendation, Lessons learned. | Test Lead / QA team |

Now, a deeper look at each phase, including the specific responsibilities and key concepts you added.

---

### 14.4 Phase 1: Requirement Analysis
**Tester’s Responsibility:**
* **Study the requirement documents** – user stories, functional specifications, wireframes.
* **Identify the types of testing needed** – functional, UI, security, performance, etc.
* **Prepare the Requirements Traceability Matrix (RTM)** – a table that links every requirement to its corresponding test scenarios and later test cases. This ensures 100% coverage.
* **Perform Automation Feasibility Analysis** – decide which tests can and should be automated, and with what tool (e.g., Playwright for UI, Postman/Playwright for API).
* **Ask clarifying questions** – find ambiguities, missing edge cases, and missing error handling. This prevents defects from entering development.

#### Key Concept: Requirements Traceability Matrix (RTM)

**What it means:**
The RTM is simply a checklist that connects the features the client asked for (Requirements) to the tests you wrote (Test Cases). 

Think of it like a shopping list. If your partner asks you to buy "Milk, Eggs, and Bread" (Requirements), your receipt showing you bought them is the proof (Test Cases). The RTM is the document that puts the shopping list and the receipt side-by-side so you can prove you didn't forget anything. 

**Real-world Example:**
Imagine you are testing an E-commerce website. The business gives you two requirements:
1. Users must be able to add an item to the cart.
2. Users must be able to remove an item from the cart.

You write multiple test cases for these to make sure they work in different scenarios. The RTM looks like this:

| Req ID | Business Requirement | Test Case ID(s) | What the Test Does | Status |
|---|---|---|---|---|
| **REQ-01** | Add item to cart | TC-101 <br> TC-102 | Add 1 item to empty cart <br> Add 99 items to cart (Max limit) | ✅ Pass <br> ❌ Fail |
| **REQ-02** | Remove item from cart | TC-103 <br> TC-104 | Remove the only item in cart <br> Remove item when cart is already empty | ✅ Pass <br> ✅ Pass |

**Why it's important:** If the product manager asks, "Did we test the 'Remove item' feature?", you just look at the RTM and say "Yes, we ran TC-103 and TC-104, and they both passed." It guarantees **100% test coverage** so no requirement is missed.

> **Note:** For a detailed step-by-step guide on creating an RTM in Google Sheets, see **[Section 19. Requirements Traceability Matrix (RTM)](#19-requirements-traceability-matrix-rtm)**.

---

### 14.5 Phase 2: Test Planning
**Test Lead / Senior QA Responsibility:**
* **Understand the project scope** – what are we testing and, equally important, what are we not testing.
* **Define scope of testing** – in‑scope and out‑of‑scope items.
* **Identify resources** – who will test, which tools, which environments.
* **Create schedules** – start and end dates for test design, execution, and closure.
* **List deliverables** – Test Plan, Test Cases, Defect Reports, Test Summary Report.
* **Decide the testing approach/strategy** – manual vs automated, testing levels (unit, integration, system, UAT), risk‑based testing priorities.
* **Effort estimation** – how many person‑days are required.

**Outcomes of Test Planning:**
* **Test Plan Document**: A project‑specific document that answers who, what, when, where, and how for testing. It includes scope, schedule, resources, risk, and entry/exit criteria.
* **Test Strategy Document**: A higher‑level, organization‑wide document that defines the general testing principles, standards, and test levels used across projects. 

---

### 14.6 Phase 3: Test Case Development
**Tester’s Responsibility:**
* **Design / script detailed test cases** – step‑by‑step with preconditions, test steps, test data, and expected results.
* **Review test cases** – peer review or lead review to catch gaps, improve clarity.
* **Update test cases** based on review feedback.
* **Baseline the test cases** – finalize and freeze the approved version. A baseline is the agreed‑upon reference version that will be executed. Any later changes require a formal update.
* **Create test data** – valid data (to check happy paths) and invalid data (to check error handling and boundary values).

#### Key Concept: Baseline Test Case
> The final, reviewed, and approved version of a test case, ready for execution. It is the version everyone on the team agrees to test against, ensuring consistency.

---

### 14.7 Phase 4: Test Environment Setup
**Tester / DevOps Responsibility:**
* **Set up the test environment** – configure servers, databases, browsers, mobile devices, and network.
* **Deploy the correct build** – the version of the software to be tested.
* **Execute a quick smoke test** – a shallow run of critical paths to confirm the environment is stable and the build is testable.
* **Document the test environment configuration** – so it can be recreated or debugged later.

#### Key Concept: Smoke Test
> A minimal set of tests that checks the core functionality is working (e.g., app launches, login works). If smoke tests fail, the build is rejected for further testing.

---

### 14.8 Phase 5: Test Execution & Defect Reporting
**Tester’s Responsibility:**
* **Execute test cases** as per the plan, following the baselined steps.
* **Compare actual results** with expected results.
* **Log defects** when a mismatch occurs, with clear and complete information.
* **Retest fixed defects** once the developer resolves them.
* **Perform regression testing** – re‑run critical test cases to ensure the fixes didn’t break anything else.
* **Update the RTM** with execution status (Pass/Fail/Blocked) and defect IDs.

#### Defect Reporting & Tracking (The Heart of This Phase)

*(See [Section 28](#28-defect-severity-vs-priority-deep-dive) for a detailed deep dive into Severity vs. Priority and their combinations)*

A well‑written defect report includes:
* **Defect ID** – unique number (auto‑generated by tool).
* **Summary** – short, precise description of the bug.
* **Steps to Reproduce** – numbered, exact steps.
* **Expected Result vs Actual Result**.
* **Severity** – impact on the system (Critical, Major, Minor, Cosmetic).
* **Priority** – urgency to fix (High, Medium, Low).
* **Environment** – OS, browser, build version.
* **Attachments** – screenshots, logs, screen recordings.

*Tracking is done using tools like JIRA, Azure DevOps, Bugzilla, where each defect moves through a lifecycle: New → Assigned → Open → Fixed → Retest → Closed / Reopened.*

---

### 14.9 Phase 6: Test Cycle Closure
**Test Lead / QA Team Responsibility:**
* **Check exit criteria** – are all planned test cases executed? Are all critical/blocker defects closed? Is test coverage sufficient?
* **Prepare the Test Closure Report** – summary of what was tested, defects found, test coverage percentage, and any open risks.
* **Archive test artifacts** – test cases, test data, scripts, and reports for future maintenance and reuse.
* **Conduct lessons learned** – what went well, what should be improved. This feeds into future test planning.

---

### 14.10 🧪 Real‑World Walkthrough: “Forgot Password” Feature

#### 1. Requirement Analysis
* Read the user story: “User can reset password via email.”
* Ask: “What if email not registered?” “Should link expire?”
* Identify tests: valid email, invalid email, expired link, multiple requests.
* Create RTM with these scenarios mapped to the requirement.
* Automation analysis: the API part (send reset request) can be automated with Playwright request fixture; the UI flow can be automated later.

#### 2. Test Planning
* **Scope**: Forgot Password flow only.
* **Testing types**: Functional, Security (token expiry, enumeration), UI.
* **Resources**: 1 QA, Chrome & Firefox, Postman.
* **Schedule**: 2 days design, 3 days execution.
* **Risks**: Email delivery delay may block tests.

#### 3. Test Case Development
* **Write cases**:
  * **TC01**: Registered email → verify reset email received.
  * **TC02**: Unregistered email → verify generic message, no email.
  * **TC03**: Expired reset link → verify “Link expired” error.
* Review with peer. Baseline.
* **Test data**: `testuser@example.com` (valid), `fake@example.com` (invalid).

#### 4. Test Environment Setup
* Deploy build to staging. Configure MailHog to capture emails.
* **Smoke test**: open login page, click “Forgot Password” → page loads.

#### 5. Test Execution & Defect Reporting
* Run **TC01** → ✅ Pass.
* Run **TC02** → ❌ Fail. Actual: “Email not found”. This is a security risk (user enumeration). Log Defect #101 with severity High, priority High.
* Developer fixes it. Retest **TC02** → now ✅ Pass.
* Run **TC03** → ✅ Pass.
* **Regression**: login with new password, normal login, all pass.

#### 6. Test Cycle Closure
* **Exit criteria**: 100% test cases executed, 0 critical defects open.
* **Test Closure Report**: 48 test cases, 95% pass, 2 low‑priority defects deferred.
* Archive RTM, test cases, defect reports.
* **Lesson learned**: involve security review earlier in the design phase.

---

### 14.11 ❓ Why This Matters for a QA/SDET
**STLC is your daily job structure.** Every task – from asking a question about a user story to logging a defect to signing off a release – fits into this model.

* In **Agile**, the phases still exist but are compressed into each sprint. You will do analysis, planning, design, and execution in days, not weeks.
* As an **SDET**, involvement spans the entire STLC, with particular focus on automation feasibility, framework development, automated execution, CI/CD integration, and test infrastructure.
* But you also contribute to test design (what to automate) and environment setup (CI/CD configuration). A complete understanding of STLC is what makes you a professional tester, not just a script runner.

---

### 14.12 📝 Explanation
> “The Software Testing Life Cycle is a structured six‑phase process that guides QA from the initial analysis of requirements through test planning, test case development, environment setup, execution and defect reporting, to final test closure. It ensures that testing is thorough, traceable, and repeatable. Even in Agile, these activities are performed continuously within each sprint.”

---

## 15. Test Plan vs Test Strategy

### 15.1 Simple Analogy

**Test Strategy** is like a company‑wide cooking rulebook that applies to all kitchens:
> "Every dish must be tasted before serving. We use only stainless steel utensils. All chefs must wash hands every 30 minutes."

This is a permanent, high‑level document that doesn't change for a specific wedding menu. It applies to all projects.

**Test Plan** is like the menu and schedule for a specific wedding:
> "For the Mehta wedding on 15th July, we need to cook 200 plates of biryani and 500 naan. The tasting will be done by Chef Ramesh on the 13th. Ingredients will arrive by the 10th."

This is a project‑specific, temporary document that changes for every new wedding.

**In short:**
- Strategy = what and how across **all** projects.
- Plan = who, when, where, and how much for **one** project.

---

### 15.2 Professional Comparison

| Parameter | Test Strategy | Test Plan |
| :--- | :--- | :--- |
| **What it is** | A high‑level, organization‑wide document that defines general testing principles, standards, and test levels. | A detailed, project‑specific document that describes how testing will be executed for a particular project. |
| **Scope** | Covers the entire organization or multiple projects. | Covers one specific project or release. |
| **Created by** | Senior QA Manager, QA Architects, or a central QA team. | Test Lead or Test Manager for that specific project. |
| **Frequency of change** | Static – changes rarely, only when organization‑level processes change. | Dynamic – created fresh for each new project or major release. |
| **Contents** | Testing objectives, Testing levels (unit, integration, system, UAT), Test design techniques (EP, BVA, etc.), Tools to be used (Playwright, Postman, JIRA), Defect management process, Risk management approach, Environment strategy. | Project scope (in‑scope / out‑of‑scope), Resources (who will test, which tools, which environments), Schedule (dates, milestones), Test deliverables (test cases, defect reports, closure report), Entry and exit criteria, Risks and mitigation specific to this project, Test data requirements. |
| **Answers the question** | "How do we test as a company?" | "How will we test this specific product?" |
| **Example** | "Our company uses a risk‑based testing approach. We test on Chrome, Firefox, and Safari. Regression tests are automated using Playwright. All defects go through JIRA." | "For the 'Forgot Password' feature, we will test on Chrome and Firefox only, using 2 testers over 5 days. Testing will start on 20th July. Entry criteria: all unit tests passed. Exit criteria: 100% critical test cases executed, zero Severity‑1 bugs open." |

---

### 15.3 Deep Dive: Test Strategy (The Master Rulebook)

This is the first document created when a QA organization matures. It is not project‑specific. It sets the standards that every project team will follow.

Typical sections of a Test Strategy:

* **Scope and Objectives** – overall quality goals.
* **Testing levels** – which levels will be applied (unit, integration, system, UAT).
* **Test design techniques** – which techniques are preferred (Equivalence Partitioning, Boundary Value Analysis, etc.).
* **Automation strategy** – which tools (Playwright, Selenium), what to automate, coding standards.
* **Defect management** – how bugs are logged, tracked, and closed.
* **Risk management** – how risks are identified, assessed, and mitigated.
* **Reporting** – how test results are communicated (daily status, test summary reports).
* **Environment strategy** – how test environments are provisioned and maintained.

> When you join a new company, you'll be handed (or expected to learn) the Test Strategy first. It tells you the rules of the house.

---

### 15.4 Deep Dive: Test Plan (The Project‑Specific Battle Plan)

A Test Plan is a project‑specific, living document that guides the entire testing effort for a particular release, feature, or sprint. It's owned by the Test Lead. It must answer:

- **Why** are we testing? (Objective)
- **What** exactly are we testing? (Scope)
- **Who** will test? (Resources)
- **When** will testing happen? (Schedule)
- **What** will be tested and how? (Approach)

In Agile, the Test Plan might be a lightweight, living document (e.g., a Confluence page), but the thinking behind each section remains identical.

#### Mandatory Sections of a Test Plan

| # | Section | Description | Example (Forgot Password feature) |
| :--- | :--- | :--- | :--- |
| 1 | **Introduction** | Brief overview of the project/feature being tested and why this Test Plan exists. | "This Test Plan outlines the testing approach for the Forgot Password feature of the XYZ Banking App. Its purpose is to ensure a secure and reliable password reset experience." |
| 2 | **Objective of Testing** | The specific quality goals. What are we trying to achieve? | "Verify that registered users can reset their password via email securely. Ensure no user enumeration. Validate token expiry works correctly." |
| 3 | **Scope of Testing** | In‑Scope: features and user journeys to test. Out‑of‑Scope: what will NOT be tested and why. | In‑Scope: Forgot Password UI, API, email delivery, token expiry, error messages. Out‑of‑Scope: Third‑party email server reliability (covered by separate SLA). |
| 4 | **Items to be Tested** | Concrete list of testable items, often referencing requirements or user stories. | REQ‑01: Forgot Password link on login page. REQ‑02: Reset email delivery. REQ‑03: Token validation and expiry. REQ‑04: Error handling for invalid emails. |
| 5 | **Resources & Responsibilities** | Names or roles of team members and what they are responsible for. | Test Lead: Priya (planning, closure). Tester 1: Ramesh (UI tests, defect logging). SDET: Anjali (API automation, CI integration). |
| 6 | **Schedule & Milestones** | Start/end dates for each test phase, milestones, and deadlines. | Test Design: 20‑22 July. Environment Setup: 23 July. Test Execution: 24‑28 July. Closure: 29 July. |
| 7 | **Testing Approach** | How testing will be performed: testing levels, test design techniques, automation vs manual, risk‑based priorities. | Functional testing on Chrome, Firefox. API testing via Playwright. Test design using Equivalence Partitioning and BVA. Automation for critical paths. |
| 8 | **Entry Criteria** | Conditions that must be met before testing begins. | Build deployed to staging. All unit tests passed. Test data created. RTM ready. |
| 9 | **Exit Criteria** | Conditions that must be met to declare testing complete. | 100% of critical test cases executed. Zero Severity‑1 defects open. Test coverage ≥ 95%. All automation scripts passing in CI. |
| 10 | **Test Deliverables** | Documents and artifacts to be produced. | RTM, Test Cases, Defect Reports, Test Execution Report, Test Closure Report. |
| 11 | **Test Environment** | Specific hardware, software, browsers, devices, and test data needed. | Staging server (URL: staging.xyz.com), Chrome v120, Firefox v118, MailHog for email capture. |
| 12 | **Risks and Mitigation** | Specific project risks and how to handle them. | Risk: Email delivery delay may block tests → Mitigation: Use MailHog to intercept locally. Risk: Third‑party token API unstable → Mitigation: Mock API in lower environments. |
| 13 | **Communication Plan** | How and when status is reported. | Daily status update in Scrum stand‑up. Weekly Test Summary Report emailed to stakeholders. |

---

### 15.5 Why This Distinction Matters for a QA/SDET

In an interview or conversation, mixing up these two documents shows a lack of fundamental knowledge.

As an SDET, you'll mostly interact with the Test Plan of your specific project (your sprint, your feature). But the Test Strategy defines which automation framework you'll use (Playwright), coding conventions you must follow, and how defects are logged.

- The **Test Strategy** empowers you to make decisions.
- The **Test Plan** tells you what to do tomorrow.

In small companies or startups, there might be no formal Test Strategy document, but the senior QA will still have a mental strategy. In large enterprises, both documents are mandatory and audited.

> **Key Takeaway:** "A Test Strategy is a high‑level, organization‑wide document that defines the general testing principles, tools, and standards. It's like a company rulebook for quality and changes rarely. A Test Plan is a project‑specific document that details the exact scope, schedule, resources, and entry/exit criteria for testing a particular product. The strategy answers 'How do we test as a company?' and the plan answers 'How will we test this project?' Both work together: the strategy sets the guidelines, and the plan applies them to a real situation."

---

## 16. Test Design Techniques

These are **test design techniques** — systematic ways to decide which test data to use so you can find bugs efficiently. They are mentioned in both the Test Strategy (as the company's preferred techniques) and the Test Plan (as the techniques chosen for this project). They are executed during Test Case Development (Phase 3 of STLC).

---

### 16.1 Equivalence Partitioning (EP)

> **Simple Analogy:** Imagine a roller coaster that only allows people between 120 cm and 200 cm tall. Testing every single height (1 cm, 2 cm, 3 cm…) would take forever. Instead, you split the heights into groups that behave the same:
> - **Too short (invalid):** below 120 cm → all rejected.
> - **Valid:** 120 cm to 200 cm → all allowed.
> - **Too tall (invalid):** above 200 cm → all rejected.
>
> You test one value from each group instead of testing 300 values. That's EP.

**Definition:** Divide input data into equivalence classes — groups expected to be treated the same way by the system — and test one representative from each class.

---

### 16.2 Boundary Value Analysis (BVA)

> **Simple Analogy:** Developers often make mistakes at the **edges** of those groups (like `>=120` instead of `>120`). So you test right at the boundaries:
> - 119 cm (just below valid)
> - 120 cm (exactly the minimum)
> - 200 cm (exactly the maximum)
> - 201 cm (just above valid)

**Definition:** Test at the extreme edges of the equivalence partitions. Bugs love boundaries — especially off‑by‑one errors.

#### Professional Comparison

| Technique | What it is | How to apply | Example (Age field, valid 18–60) |
| :--- | :--- | :--- | :--- |
| **Equivalence Partitioning (EP)** | Divide input data into valid and invalid partitions. Each partition is treated identically by the system. Test at least one value per partition. | Identify all possible inputs. Group into valid and invalid classes. Pick one representative from each. | Valid: 18–60 → test with 30. Invalid <18 → test with 10. Invalid >60 → test with 70. |
| **Boundary Value Analysis (BVA)** | Test at the exact boundaries and just inside/outside them. Defects often lurk at boundaries (off‑by‑one errors). | For each boundary, test: boundary‑1, boundary, boundary+1. | Lower boundary 18: test 17, 18, 19. Upper boundary 60: test 59, 60, 61. |

**Why these matter for a QA/SDET:**

* They reduce the number of test cases dramatically (from infinite to a handful) while finding the most critical bugs.
* They are the most frequently asked test design techniques in interviews.
* In automation, you parameterise test data using EP/BVA values — e.g., a Playwright test that runs the same login flow with a CSV of boundary values.
* They apply not just to numbers but also to strings (min/max length), dates, file sizes, etc.

---

### 16.3 Real‑World Example: Forgot Password – Email Field

**Requirement:** Email must be 6–50 characters long, contain "@", and have a valid domain.

**EP classes:**
- **Valid:** email with 6–50 chars, contains "@", valid domain (e.g., `test@example.com`)
- **Invalid:** less than 6 chars (`a@b`), more than 50 chars, no "@", invalid domain, empty field.

**BVA for length:**
- 5 chars (just below min), 6 chars (min), 7 chars (just above min)
- 49 chars (just below max), 50 chars (max), 51 chars (just above max)

You would combine EP and BVA to build a lean but powerful test data set.

> **Key Takeaway:** "Equivalence Partitioning divides input data into groups that the system treats the same, so we test one value per group instead of all. Boundary Value Analysis focuses on the edges of those groups — just inside and outside the limits — because that's where off‑by‑one errors hide. Together, they let us design the minimum number of test cases with maximum bug‑finding power."

---

### 16.4 Decision Table Testing

#### Simple Analogy
Imagine a restaurant's discount policy:
*   If a customer orders more than ₹1000 AND is a premium member → 20% discount.
*   If a customer orders more than ₹1000 BUT is not a premium member → 10% discount.
*   If a customer orders ≤₹1000 AND is a premium member → 5% discount.
*   If a customer orders ≤₹1000 AND is not a premium member → no discount.

Testing each condition separately might miss combinations. A Decision Table maps all possible combinations of conditions and their expected outcomes so you don't miss any scenario.

#### Professional Context
A Decision Table is a systematic way to represent complex business rules with multiple conditions. It ensures full combination coverage.

**Structure:**
*   **Conditions (inputs):** the factors that matter.
*   **Actions (outputs):** what the system should do for each combination.

**Example: Loan Eligibility**

| Rule # | Condition 1: Salary > ₹30,000? | Condition 2: Existing loan? | Action: Loan Approved? |
| :--- | :--- | :--- | :--- |
| 1 | Yes | No | Yes |
| 2 | Yes | Yes | Maybe (needs review) |
| 3 | No | No | No |
| 4 | No | Yes | No |

You create test cases for each column (each rule). Number of columns = 2 conditions → 2² = 4 combinations. Every combination is tested.

**Why it matters for QA/SDET:**
*   Catches logic bugs that happen only in specific combinations.
*   Used for authorization, pricing, feature flag toggles, complex business rules.
*   As an SDET, you can parameterise these combinations in Playwright test data arrays (e.g., run the same test with multiple input sets from the decision table).

---

### 16.5 Error Guessing

#### Simple Analogy
Imagine you're a car mechanic who's seen thousands of cars. You've never seen the official test manual for this new car model, but you already know to check the brakes, the battery, and the spark plugs – because your experience tells you those are the weak spots.

That's Error Guessing: using experience and intuition to guess where bugs are likely hiding, and designing test cases specifically for those areas.

#### Professional Context
Error Guessing is an informal, experience‑based test design technique. It has no fixed rules. You list scenarios based on:
*   Past defects in similar applications.
*   Common developer mistakes (off‑by‑one errors, missing null checks, case‑sensitivity issues).
*   Tricky situations (leaving fields blank, pressing back button mid‑flow, refreshing during a transaction).

**Example list of error guesses for a Login page:**
*   Submitting the form by pressing Enter with an empty field.
*   Copy‑pasting password with extra spaces.
*   Rapidly double‑clicking the Login button (two requests).
*   Using a very long email address (500 characters).
*   Unicode characters in the email.
*   Switching tabs and coming back after session timeout.
*   Submitting after the browser’s auto‑fill inserted wrong data.

**How QA/SDET uses it:**
*   In manual testing, error guessing is used during exploratory sessions.
*   In automation, experienced SDETs add "chaos" test cases based on their error guesses – e.g., a Playwright script that sends two parallel login requests.
*   It complements systematic techniques (EP, BVA) with real‑world cunning. It's not a replacement; it's a power‑up.

---

### 16.6 Summary of Techniques

| Technique | When to use | What it does |
| :--- | :--- | :--- |
| **Equivalence Partitioning** | When inputs can be grouped. | Reduces test count by picking one value per group. |
| **Boundary Value Analysis** | Together with EP. | Focuses on the edges of partitions. |
| **Decision Table** | When there are multiple conditions/combinations. | Ensures all combos are tested. |
| **Error Guessing** | Always, as a supplement. | Uses experience to target likely bugs. |

> **Explanation:** Test design techniques are systematic methods to select test data and scenarios. Equivalence Partitioning and Boundary Value Analysis are great for input validation. Decision Table Testing handles complex business rules with multiple conditions. Error Guessing uses tester experience to find defects that systematic methods might miss. In practice, we combine them: use EP/BVA for field validations, decision tables for business logic, and error guessing for exploratory edge cases.

---

## 17. Writing Effective Test Cases (Positive & Negative)

### 17.1 Simple Analogy
Think of a driving test. The examiner has a checklist:

- **Positive test:** "Drive straight, stop at the red light, signal, park correctly." These check that a normal, good driver can pass.
- **Negative test:** "What happens if you don't wear a seatbelt? What if you turn without signalling? What if you accelerate through a red light?" These check that the system (the car, the law) correctly catches and handles wrong behavior.

In software, positive test cases check that the system works with valid, expected inputs. Negative test cases check that the system gracefully rejects invalid, unexpected, or malicious inputs. Both are essential — one proves the system does its job; the other proves it doesn't break when things go wrong.

### 17.2 Professional Context
A test case is a single, detailed instruction that describes what to test, how to test it, and what the result should be. Writing effective test cases is the core manual testing skill — clear, repeatable, and unambiguous.

A standard test case template (fields you fill):

| Field | Description |
| --- | --- |
| **Test Case ID** | Unique identifier (e.g., TC‑LOGIN‑01) |
| **Test Scenario** | The high-level group or functionality (e.g., "Login" or "Authentication") |
| **Test Case Title** | The specific test objective (e.g., "Verify successful login with valid credentials") |
| **Type** | Positive (valid inputs) or Negative (invalid/unexpected inputs) |
| **Priority** | Execution order priority (High / Medium / Low) |
| **Severity** | Impact of a defect in this area (Critical / Major / Minor) |
| **Requirement Reference** | Which user story or requirement it covers (e.g., REQ-101) |
| **Pre-conditions** | What must be true before you start (e.g., "User is registered. Login page is loaded.") |
| **Test Steps** | Numbered actions you take |
| **Test Data** | Specific inputs used (e.g., "Email: test@example.com, Password: Pass@123") |
| **Expected Result** | What the system should do after each step |
| **Post-condition** | System state after execution |
| **Actual Result** | Filled after execution (what actually happened) |
| **Status** | Pass, Fail, Blocked, Not Executed |
| **Comments** | Any notes, screenshots, or defect IDs |

### 17.3 Positive Test Cases
**Definition:** A test case that uses valid, correct inputs and expects the system to perform its intended function — the "happy path".

**Purpose:**
- Confirms that the main functionality works.
- Builds confidence that the feature delivers business value.

**Example: Login feature**

| Field | Value |
| --- | --- |
| **Test Case ID** | TC‑LOGIN‑01 |
| **Test Scenario** | Login & Authentication |
| **Test Case Title** | Verify successful login with valid credentials |
| **Type** | Positive |
| **Priority** | High |
| **Severity** | Critical |
| **Requirement Reference** | REQ-AUTH-01 |
| **Pre-conditions** | User is registered with email "user@test.com" and password "Strong@123". Login page is open. |
| **Test Steps** | 1. Enter "user@test.com" in the email field.<br>2. Enter "Strong@123" in the password field.<br>3. Click "Login". |
| **Test Data** | Email: user@test.com, Password: Strong@123 |
| **Expected Result** | User is redirected to the dashboard. A welcome message with the user's name appears. No error messages shown. |
| **Post-condition** | User session is created and active. |
| **Actual Result** | |
| **Status** | Not Executed |
| **Comments** | |

**Other positive examples for the same login:**
- Login with "Remember Me" checked — session persists after browser close.
- Login using "Enter" key instead of clicking button.
- Login with an email containing special characters (if allowed, like "user+alias@domain.com").

### 17.4 Negative Test Cases
**Definition:** A test case that uses invalid, unexpected, or empty inputs and expects the system to reject them gracefully — no crashes, clear error messages, no security leaks.

**Purpose:**
- Prevents application crashes and ugly error pages.
- Ensures data integrity (wrong data shouldn't be accepted).
- Improves security and user experience under misuse.

**Example: Login feature – invalid password**

| Field | Value |
| --- | --- |
| **Test Case ID** | TC‑LOGIN‑02 |
| **Test Scenario** | Login & Authentication |
| **Test Case Title** | Verify error message on wrong password |
| **Type** | Negative |
| **Priority** | High |
| **Severity** | Major |
| **Requirement Reference** | REQ-AUTH-02 |
| **Pre-conditions** | User is registered. Login page is open. |
| **Test Steps** | 1. Enter valid email "user@test.com".<br>2. Enter wrong password "WrongPass".<br>3. Click Login. |
| **Test Data** | Email: user@test.com, Password: WrongPass |
| **Expected Result** | Error message displayed: "Invalid email or password." User remains on login page. Password field is cleared. No account lockout after one attempt (if policy allows). |
| **Post-condition** | User session is not created. |
| **Actual Result** | |
| **Status** | Not Executed |
| **Comments** | |

**Other negative examples for login:**
- Empty email and empty password → "Email is required."
- Invalid email format (missing @) → "Please enter a valid email."
- SQL injection attempt (' OR '1'='1) → system rejects, no database error exposed.
- XSS attempt (`<script>alert(1)</script>`) → script not executed.
- Very long email (5000 characters) → system rejects with length error.
- Disabled account login → "Your account has been disabled."

### 17.5 How to Write Effective Test Cases – 7 Golden Rules
1. **One test case, one objective.** Don't test multiple things in a single case. If you test "login" and "forgot password" in one case, you'll get confusing results.
2. **Clear, step‑by‑step instructions.** Imagine someone else executing it who has never seen the feature.
3. **Exact test data.** Never write "valid email" — write user@example.com. Exact values make tests repeatable.
4. **Unique and independent.** Each test case should be runnable on its own, without depending on other test cases.
5. **Self‑contained preconditions.** List everything needed before starting (user created, browser open, DB state).
6. **Measurable expected result.** "Should work" is useless. Write exactly what you expect to see: "Dashboard page loads. URL contains /dashboard. Greeting 'Hello, John' appears in top right."
7. **Both positive and negative.** Always complement happy path with at least two error scenarios.

### 17.6 Meaning
> “A test case is a documented set of steps, data, and expected results designed to verify a specific feature. Positive test cases use valid inputs and expect success; they prove the system does what it's supposed to. Negative test cases use invalid or unexpected inputs and expect the system to reject them safely with clear messages; they prove the system doesn't break under misuse. Effective test cases are independent, have exact data, clear preconditions, and a measurable expected result. They are the foundation of both manual and automated testing.”

### 17.7 Test Case Design Workflow

To design effective test cases, a tester should follow these sequential steps:
1. **Understand the Requirements:** Thoroughly analyze the Software Requirement Specification (SRS) or Product Requirements Document (PRD).
2. **Identify Test Scenarios:** Determine high-level scenarios and user flows that need validation.
3. **Design the Test Cases:** Draft individual test cases detailing preconditions, steps, test data, and expected results.
4. **Review the Test Cases:** Conduct peer reviews or lead reviews to ensure accuracy, coverage, and clarity.
5. **Update Test Cases:** Refine and optimize the test cases based on feedback received during the review.

### 17.8 Best Practices for Creating Good Test Cases

To ensure test cases are effective and maintainable, keep these guidelines in mind:

*   **Simplicity and Transparency:** Test cases should be simple, transparent, and easy for any team member to understand and execute.
*   **Traceability:** Every test case should be traceable and linked to a specific Requirement ID via the **Requirements Traceability Matrix (RTM)**.
*   **Conciseness:** Keep test cases brief and focused, containing only necessary and valid steps.
*   **Balanced Coverage:** Implement a combination of both **positive** and **negative** testing techniques.
*   **Maintainability:** Design test cases so they are easy to update when application requirements change.
*   **Usability Focus:** Incorporate usability aspects to ensure the application is user-friendly.
*   **Performance Considerations:** Cover basic performance testing, such as multi-user concurrency and capacity limits.
*   **Security Checkpoints:** Address critical security aspects including user permissions, session management, and access logs.

### 17.9 Detailed Breakdown of Test Case Fields

#### Core Fields
*   **Test Case ID:** A unique identifier for each test case. Following a naming convention (e.g., `TC_Project_Module_001`) helps in tracking and organization.
    *   *Example:* `TC_Yahoo_Inbox_001`
*   **Test Scenario:** Any high-level functionality that can be tested (e.g., "Login" or "Authentication"). It represents a collective set of test cases which helps the testing team determine the positive and negative characteristics of the project. Test scenarios are derived from test documents such as:
    *   **BRS (Business Requirement Specification):** A high-level document describing the business needs and what the final product should achieve from a client/business perspective.
    *   **SRS (Software Requirement Specification):** A detailed technical document that translates BRS into specific functional and non-functional requirements for the development team.
*   **Test Case Title:** A concise description of the specific objective this test case aims to verify (e.g., "Verify successful login with valid credentials").
*   **Type:** The nature of the test case, typically `Positive` (valid inputs/happy path) or `Negative` (invalid/unexpected inputs).
*   **Priority:** The importance of the test case, which serves as a parameter to decide the execution order and how fast associated defects should be fixed.
*   **Severity:** The potential business or technical impact a defect in this area would have on the system (e.g., Critical, Major, Minor).
*   **Requirement Reference:** The specific requirement this test case covers. This is often a **BRD** (Business Requirements Document - high-level business needs), **SRD** (Software Requirements Document - detailed functional requirements), or in Agile, a User Story ID (e.g., US-101) or Requirement ID (e.g., REQ-AUTH-01).
*   **Pre-conditions:** Prerequisites or conditions that must be met before executing the test case.
*   **Test Steps:** Numbered actions required to execute the test. Each step is marked pass or fail based on the comparison between expected and actual outcomes.
*   **Test Data:** The specific inputs, accounts, or configurations created or selected to satisfy the execution preconditions and execute the test steps.
*   **Expected Result:** The correct, expected outcome of the system after executing the test steps, as per the customer requirements. This is usually defined in the **SRS** or **FRS (Functional Requirement Specification)**.
*   **Post-condition:** Conditions that need to be achieved once the test case is successfully executed.
*   **Actual Result:** The observed system behavior after executing the test case. Based on the comparison between this and the expected result, the status is set.
*   **Status:** The final outcome (`Pass`, `Fail`, `Blocked`, `Not Executed`). If the actual and expected results match, the status is Passed. If they differ, it is Failed, and the defect goes through the bug life cycle.
*   **Comments:** Additional context, screenshots, or defect IDs that help the team.

#### Metadata & Tracking Fields
*   **Project Name:** Name of the project the test cases belong to.
*   **Module Name:** Name of the specific module or feature area under test.
*   **Reference Document:** Path or links to the reference documents (such as Requirement Document, Test Plan, Test Scenarios).
*   **Author (Created By):** Name of the tester who created the test cases.
*   **Date of Creation:** When the test cases were created.
*   **Reviewed By:** Name of the peer/lead who reviewed the test cases.
*   **Date of Review:** When the test cases were reviewed.
*   **Executed By:** Name of the tester who executed the test case.
*   **Date of Execution:** When the test case was executed.

### 17.10 Why Test Cases Matter (and the Risks of Omitting Them)

Skipping the creation of documented test cases is a common pitfall in software development. Here is why documenting them is critical and what happens when they are ignored:

#### Risks of Not Writing Test Cases
1.  **Inconsistent and Non-Repeatable Testing:** Without a step-by-step guide, testers will test differently every time, leading to missed bugs and inconsistent quality.
2.  **Poor Regression Coverage:** When code is updated, it is easy to forget to re-verify older features. Without a test suite, regression bugs will inevitably slip into production.
3.  **Knowledge Silos ("Key Person Dependency"):** If only one person knows how to test a feature, the team is blocked if that person leaves or is unavailable.
4.  **No Clear Definition of "Done":** Without structured test cases linked to requirements, there is no objective way to measure test coverage or know when a release is ready.
5.  **Difficulty in Automation:** Manual test cases serve as the blueprint for automation scripts. Without them, writing automation is chaotic and prone to design flaws.

#### Key Benefits of Writing Test Cases
*   **Ensures Full Coverage:** Maps tests directly to requirements (via the Requirements Traceability Matrix), ensuring every feature is fully validated.
*   **Improves Defect Tracking:** Provides a clear baseline to document exactly what failed, making it much easier for developers to reproduce and fix issues.
*   **Facilitates Team Collaboration:** Allows new team members, developers, or external stakeholders to execute tests with minimal training.
*   **Saves Time in the Long Run:** Clear preconditions and exact test data prevent confusion and execution delays during crunch times.

### 17.11 Comprehensive Test Case Example: Facebook Login

**Project Name:** Facebook  
**Module Name:** Login & Authentication  
**Reference Document:** FB_Auth_BRS_v1.2  
**Author:** Senior QA  
**Date of Creation:** 2026-06-17  
**Date of Review:** 2026-06-17  

| Test Case ID | Test Scenario | Test Case Title | Type | Priority | Severity | Requirement Reference | Pre-conditions | Test Steps | Test Data | Expected Result | Post-condition | Actual Result | Status | Comments |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC_Fb_Login_001** | Login & Auth | Verify successful login with a valid email address and password. | Positive | High | Critical | REQ-AUTH-01 | 1. Device has active internet connection.<br>2. User is on the Facebook login page. | 1. Enter valid email in the "Email or phone number" field.<br>2. Enter valid password in the "Password" field.<br>3. Click on the "Log In" button. | **Username:** testuser@email.com<br>**Password:** ValidPass123! | User should be successfully authenticated and redirected to their Facebook homepage/newsfeed. | User session is created and active. | | Not Executed | |
| **TC_Fb_Login_002** | Login & Auth | Verify successful login with a valid phone number and password. | Positive | High | Critical | REQ-AUTH-01 | 1. Device has active internet connection.<br>2. User is on the Facebook login page. | 1. Enter valid phone number in the "Email or phone number" field.<br>2. Enter valid password in the "Password" field.<br>3. Click on the "Log In" button. | **Phone:** +1234567890<br>**Password:** ValidPass123! | User should be successfully authenticated and redirected to their Facebook homepage/newsfeed. | User session is created and active. | | Not Executed | |
| **TC_Fb_Login_003** | Login & Auth | Verify login failure with valid email but incorrect password. | Negative | High | Major | REQ-AUTH-02 | 1. Device has active internet connection.<br>2. User is on the Facebook login page. | 1. Enter valid email.<br>2. Enter incorrect password.<br>3. Click "Log In". | **Username:** testuser@email.com<br>**Password:** WrongPass! | System should reject the login attempt and display an error message: "The password you've entered is incorrect." Password field should be cleared. | User session is not created. User remains on login page. | | Not Executed | |
| **TC_Fb_Login_004** | Login & Auth | Verify login failure with unregistered email/phone number. | Negative | High | Major | REQ-AUTH-02 | 1. Device has active internet connection.<br>2. User is on the Facebook login page. | 1. Enter unregistered email/phone.<br>2. Enter any password.<br>3. Click "Log In". | **Username:** unknown@email.com<br>**Password:** AnyPass123 | System should reject login and display: "The email address or mobile number you entered isn't connected to an account." | User session is not created. | | Not Executed | |
| **TC_Fb_Login_005** | Login & Auth | Verify login behavior when both fields are left empty. | Negative | Medium | Minor | REQ-AUTH-03 | 1. Device has active internet connection.<br>2. User is on the Facebook login page. | 1. Leave email field empty.<br>2. Leave password field empty.<br>3. Click "Log In". | *None* | System should highlight the fields in red and display a validation error asking the user to enter their credentials. | User session is not created. | | Not Executed | |
| **TC_Fb_Login_006** | Login & Auth | Verify login failure with invalid email format. | Negative | Medium | Minor | REQ-AUTH-03 | 1. Device has active internet connection.<br>2. User is on the Facebook login page. | 1. Enter email in invalid format.<br>2. Enter any password.<br>3. Click "Log In". | **Username:** testuser.email.com (missing @)<br>**Password:** AnyPass | System should display a validation message: "Please enter a valid email address or mobile number." | User session is not created. | | Not Executed | |
| **TC_Fb_Login_007** | Login & Auth | Verify system handles SQL Injection attempts in the email field. | Negative | High | Critical | REQ-SEC-01 | 1. Device has active internet connection.<br>2. User is on the Facebook login page. | 1. Enter SQL injection payload in the email field.<br>2. Enter any password.<br>3. Click "Log In". | **Username:** `admin' OR '1'='1`<br>**Password:** AnyPass | System should safely sanitize the input and reject the login attempt with a standard invalid account error. No database errors should be exposed. | User session is not created. DB remains secure. | | Not Executed | |
| **TC_Fb_Login_008** | Login & Auth | Verify system handles Cross-Site Scripting (XSS) attempts in input fields. | Negative | High | Critical | REQ-SEC-01 | 1. Device has active internet connection.<br>2. User is on the Facebook login page. | 1. Enter XSS payload in email or password field.<br>2. Click "Log In". | **Username:** `<script>alert('XSS')</script>`<br>**Password:** AnyPass | System should safely sanitize/encode the input and reject the login without executing the script. | User session is not created. | | Not Executed | |
| **TC_Fb_Login_009** | Login & Auth | Verify login using the "Enter" key instead of clicking the Log In button. | Positive | Medium | Minor | REQ-AUTH-04 | 1. Device has active internet connection.<br>2. User is on the Facebook login page. | 1. Enter valid email.<br>2. Enter valid password.<br>3. Press the "Enter" key on the keyboard. | **Username:** testuser@email.com<br>**Password:** ValidPass123! | User should be successfully authenticated and redirected to their Facebook homepage. | User session is created and active. | | Not Executed | |

### 17.12 Comprehensive Test Case Example: Google Account Login

**Project Name:** Google  
**Module Name:** Authentication (Single Sign-On)  
**Reference Document:** GOOG_Auth_BRS_v2.0  
**Author:** Senior QA  
**Date of Creation:** 2026-06-17  
**Date of Review:** 2026-06-17  

| Test Case ID | Test Scenario | Test Case Title | Type | Priority | Severity | Requirement Reference | Pre-conditions | Test Steps | Test Data | Expected Result | Post-condition | Actual Result | Status | Comments |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC_Goog_Login_001** | SSO Auth | Verify successful login with a valid Gmail address and password. | Positive | High | Critical | REQ-SSO-01 | 1. Device has active internet connection.<br>2. User is on the Google Sign-in page. | 1. Enter valid email in the "Email or phone" field.<br>2. Click "Next".<br>3. Enter valid password.<br>4. Click "Next". | **Email:** testuser@gmail.com<br>**Password:** ValidPass123! | User should be successfully authenticated and redirected to their Google Account dashboard or requested service (e.g., Gmail). | User session is created and active across Google services. | | Not Executed | |
| **TC_Goog_Login_002** | SSO Auth | Verify successful login with a registered phone number. | Positive | High | Critical | REQ-SSO-01 | 1. Device has active internet connection.<br>2. User is on the Google Sign-in page. | 1. Enter valid registered phone number.<br>2. Click "Next".<br>3. Enter valid password.<br>4. Click "Next". | **Phone:** +1234567890<br>**Password:** ValidPass123! | User should be successfully authenticated and redirected to their destination. | User session is created and active. | | Not Executed | |
| **TC_Goog_Login_003** | SSO Auth | Verify system behavior with an unregistered email address. | Negative | High | Major | REQ-SSO-02 | 1. Device has active internet connection.<br>2. User is on the Google Sign-in page. | 1. Enter an unregistered email address.<br>2. Click "Next". | **Email:** unknownuser99@gmail.com | System should halt the flow and display: "Couldn't find your Google Account." Password field should not be shown. | User session is not created. | | Not Executed | |
| **TC_Goog_Login_004** | SSO Auth | Verify login failure with valid email but incorrect password. | Negative | High | Major | REQ-SSO-02 | 1. Device has active internet connection.<br>2. User is on the Google Sign-in page. | 1. Enter valid email and click "Next".<br>2. Enter incorrect password.<br>3. Click "Next". | **Email:** testuser@gmail.com<br>**Password:** WrongPass! | System should reject the attempt and display: "Wrong password. Try again or click Forgot password to reset it." | User session is not created. | | Not Executed | |
| **TC_Goog_Login_005** | SSO Auth | Verify system behavior when the email field is left empty. | Negative | Medium | Minor | REQ-SSO-03 | 1. Device has active internet connection.<br>2. User is on the Google Sign-in page. | 1. Leave "Email or phone" field empty.<br>2. Click "Next". | *None* | System should highlight the field and display a validation error: "Enter an email or phone number." | User session is not created. | | Not Executed | |
| **TC_Goog_Login_006** | SSO Auth | Verify login failure with invalid email format. | Negative | Medium | Minor | REQ-SSO-03 | 1. Device has active internet connection.<br>2. User is on the Google Sign-in page. | 1. Enter email with invalid syntax (e.g., missing '@').<br>2. Click "Next". | **Email:** testusergmail.com | System should display a validation message: "Enter a valid email or phone number." | User session is not created. | | Not Executed | |
| **TC_Goog_Login_007** | SSO Auth | Verify system handles SQL Injection attempts in the email field. | Negative | High | Critical | REQ-SEC-01 | 1. Device has active internet connection.<br>2. User is on the Google Sign-in page. | 1. Enter SQL injection payload in the email field.<br>2. Click "Next". | **Email:** `admin' OR '1'='1` | System should safely sanitize the input and display the standard "Couldn't find your Google Account" error without exposing DB details. | DB remains secure. | | Not Executed | |
| **TC_Goog_Login_008** | SSO Auth | Verify system handles Cross-Site Scripting (XSS) attempts. | Negative | High | Critical | REQ-SEC-01 | 1. Device has active internet connection.<br>2. User is on the Google Sign-in page. | 1. Enter XSS payload in the email field.<br>2. Click "Next". | **Email:** `<script>alert('XSS')</script>` | System should sanitize/encode the input, reject the attempt, and prevent script execution. | System remains secure. | | Not Executed | |
| **TC_Goog_Login_009** | SSO Auth | Verify login using the "Enter" key for navigation. | Positive | Medium | Minor | REQ-SSO-04 | 1. Device has active internet connection.<br>2. User is on the Google Sign-in page. | 1. Enter valid email and press "Enter".<br>2. Enter valid password and press "Enter". | **Email:** testuser@gmail.com<br>**Password:** ValidPass123! | Flow should proceed to the next step identically to clicking the "Next" buttons, resulting in successful authentication. | User session is created and active. | | Not Executed | |

### 17.13 Use Case vs Test Scenario vs Test Case

#### 17.13.1 🔍 Simple Analogy
Imagine we are designing a new ATM machine.

* **Use Case**
  This is the whole story of how a customer withdraws cash.
  *"The customer walks up, inserts the card, enters the PIN, selects 'Withdraw', enters the amount, takes the cash, and gets a receipt."*
  It also says what can go wrong: wrong PIN, insufficient funds, machine out of cash.

* **Test Scenario**
  This is a single headline taken from that story.
  *"Check what happens when the customer enters a wrong PIN."*
  It says what we need to test, nothing more.

* **Test Case**
  This is the precise instruction manual for testing that one headline.
  *"Step 1: Insert a valid card. Step 2: Enter PIN 1234 (incorrect). Step 3: Verify the screen says 'Wrong PIN' and the card is ejected."*
  It lists exact actions and what the result must be.

So the relationship is a chain:
**Use Case (the full story) → Test Scenarios (the chapter titles) → Test Cases (the detailed recipes).**

#### 17.13.2 💼 Professional Definition

| Term | Definition | Format |
| :--- | :--- | :--- |
| **Use Case** | A description of all the ways a user (or system) can interact with the application to complete a goal. It covers the main success path, all possible alternate paths, and error situations. Created by a Business Analyst or Product Owner from the BRD/SRD. | Document with: Title, Actor, Preconditions, Main Flow, Alternate Flows, Exception Flows, Postconditions. |
| **Test Scenario** | A short, high‑level statement that covers one specific path through a use case. It answers "What should we test here?" but does not contain steps or data. One use case typically produces several test scenarios. | A single sentence. |
| **Test Case** | A detailed, step‑by‑step specification that tells the tester exactly how to perform the test, what data to use, and what the expected result is. It is executable and gives a clear Pass/Fail outcome. | Structured fields: Test Case ID, Requirement Reference, Preconditions, Test Steps, Test Data, Expected Result. |

#### 17.13.3 🧪 Real‑World Example – Login Feature

**Use Case (simplified):**
* **Title:** User Login
* **Actor:** Registered Customer
* **Preconditions:** The user is on the login page and has an active account.

**Main Flow:**
1. User enters a valid email address.
2. User enters the correct password.
3. User clicks the "Login" button.
4. The system checks the credentials.
5. The system opens the Dashboard and displays "Hello, Test User".

**Alternate Flows:**
* **A1:** Wrong password → The system shows "Invalid email or password."
* **A2:** Unregistered email → The system shows the same generic error.
* **A3:** Empty fields → The system highlights the empty fields and asks the user to fill them in.

**Exception Flow:**
* **E1:** The authentication server is down → The system shows "Service unavailable, please try later."

From this single use case, we can create several **Test Scenarios**:
* **Scenario 1:** Verify successful login with valid credentials (covers the Main Flow).
* **Scenario 2:** Verify error message when the password is wrong (covers Alternate Flow A1).
* **Scenario 3:** Verify error handling when the email is not registered (covers Alternate Flow A2).
* **Scenario 4:** Verify validation when fields are left empty (covers Alternate Flow A3).
* **Scenario 5:** Verify system behaviour when the authentication server is unreachable (covers Exception Flow E1).

Each Test Scenario then becomes one or more detailed **Test Cases**.

| Scenario | Example Test Case ID | Test Case Title |
| :--- | :--- | :--- |
| Scenario 1 | TC‑LOGIN‑001 | Login with valid email and password. |
| Scenario 2 | TC‑LOGIN‑004 | Enter a wrong password and check that the generic error message appears. |
| Scenario 3 | TC‑LOGIN‑005 | Enter an unregistered email and verify no account exposure. |
| Scenario 4 | TC‑LOGIN‑006 | Leave email and password empty, click Login, and check inline validation messages. |
| Scenario 5 | TC‑LOGIN‑010 | Simulate a server outage and verify the appropriate maintenance message. |

#### 17.13.4 📊 Use Case vs Test Scenario vs Test Case – Side‑by‑Side

| Aspect | Use Case | Test Scenario | Test Case |
| :--- | :--- | :--- | :--- |
| **What it answers** | "What does the user want to do, and what can happen along the way?" | "What are the specific paths that need testing?" | "How exactly do I test one particular path?" |
| **Level of detail** | High – the full story with all branches. | Medium – a single testing objective. | Low – step‑by‑step instructions with exact data. |
| **Created by** | Business Analyst, Product Owner. | QA or Test Lead. | Tester / QA. |
| **When it's created** | During requirements analysis (before coding). | During test planning. | During test case development. |
| **Contains** | Preconditions, main flow, alternate flows, exception flows. | A one‑line testing goal. | Test Case ID, steps, test data, expected results. |
| **Execution** | Not executed – it is a design document. | Not executed – it is a grouping label. | Executed by a tester or an automated script. |

#### 17.13.5 📝 Explanation
> "A use case is the complete story of a user’s interaction with the system, including all possible successes and failures. From that story, we extract test scenarios, which are high‑level statements identifying what needs to be tested. Each scenario is then broken into detailed test cases that give exact steps, data, and expected results. Use cases ensure we understand the user’s goal fully; test scenarios guarantee we cover all paths; test cases provide the executable verification. Together they form a traceable chain from requirement to execution."

---

## 18. Testing Types & Defect Management (Topic 27: Error, Bug, Defect, Failure – Definitions)

### 18.1 🔍 Simple Analogy
Imagine a restaurant order:

* **Error** → The waiter writes down “steak well‑done” but the customer actually said “steak medium‑rare”. The mistake happened in the waiter’s mind or action.
* **Bug / Defect** → The chef cooks the steak exactly as written (well‑done), but the customer receives a dish that doesn’t match what they wanted. The flaw is now in the dish.
* **Failure** → The customer cuts into the steak, finds it over‑cooked, and refuses to eat it. The system (the meal) has failed to meet the customer’s expectation.

**In software:**
* **Error** = human mistake (developer, analyst).
* **Bug / Defect** = flaw in the code or document caused by the error.
* **Failure** = the product misbehaves when used, visible to the end user.

---

### 18.2 💼 Professional Definitions

| Term | Definition | Who / What | When it occurs |
| :--- | :--- | :--- | :--- |
| **Error** | A human action that produces an incorrect result. A mistake in thinking, typing, or understanding. | Developer, Tester, Business Analyst. | During coding, design, or requirement writing. |
| **Bug / Defect** | A flaw in a product or its component that may cause it to fail to perform a required function. The concrete manifestation of an error in the code or document. | The code, specification, or test case. | After an error has been made; it exists even before testing. |
| **Failure** | The inability of a system or component to perform its required function within specified limits. It's the observable incorrect behavior during execution. | The running software. | During test execution or production use. |

**Key relationship:**
An error can lead to a defect in the code. When that defective code is executed, a failure may occur. Not every defect causes a failure (it might never be executed, or conditions not met). But every failure originates from a defect (except environment issues).

---

### 18.3 🧪 Real‑World Example – Login Feature

#### Error
A developer misreads the requirement: “Password must be at least 8 characters.” They write code:
`if (password.length >= 6) (thinking 6 is enough).`
This is a human mistake (an error in understanding).

#### Defect / Bug
The code now contains a flaw: it accepts a 6‑character password when it shouldn't. The defect is in the software, even before testing. A bug report would describe this flaw.

#### Failure
During testing, a QA executes TC‑LOGIN‑010: enters a 6‑character password, clicks Register, and the system accepts it. The expected result was an error message “Password too short”. The system failed. The failure is visible to the tester.

Another scenario: The developer also forgets to trim spaces (error), creating a defect. If the tester enters a password with trailing spaces and it's accepted, that's a failure.

---

### 18.4 🔁 Bug vs Defect – Are They the Same?
In most companies, Bug and Defect are used interchangeably. However, formally:

* Bug is a colloquial term often used by developers and testers for a coding mistake.
* Defect is a more formal term used in documentation, test reports, and audits. A defect can exist in requirements, design, or code, not just in code.

For interviews and day‑to‑day work, it's safe to say:
> “A bug is a defect found during testing; a defect is a flaw in any work product. I use them synonymously unless the context requires the distinction.”

---

### 18.5 📊 Summary Table

| Term | Analogy | Who makes it? | Where found? | Example |
| :--- | :--- | :--- | :--- | :--- |
| **Error** | Waiter's misheard order | Human | In the mind/action | Developer writes >=6 instead of >=8 |
| **Bug/Defect** | Over‑cooked steak | Code / Document | In the product | Password validation allows 6 chars |
| **Failure** | Customer rejects meal | Running system | During execution | Tester logs in with 6‑char password and succeeds |

---

### 18.6 ❓ Why This Matters for a QA/SDET
* As a QA, you find failures and report defects. You don't report an “error” — you report the bug that resulted from it.
* In defect triage, understanding the root cause often traces back to an error in requirements, design, or coding. This helps improve the process (shift‑left!).
* As an SDET, your automated tests detect failures. Your automation scripts check expected vs. actual behavior. When a test fails, you log a defect.
* The precise vocabulary separates a junior tester from a professional. Saying “I found an error in the code” when you mean a “defect” is technically incorrect.

---

### 18.7 📝 Explanation
> “An error is a human mistake that introduces a defect into the product. A defect (or bug) is the actual flaw in the code or documentation. A failure is what we observe when the defective part is executed — the software does something it shouldn't. As a QA, I identify failures and report defects, while working with the team to reduce future errors.”

---

## 19. Requirements Traceability Matrix (RTM)

### 19.1 🔍 Simple Analogy
Think of a wedding planner’s master checklist. On the left side, you have the list of everything the couple asked for:
* “Floral arch at the entrance”
* “Photo booth for 100 guests”
* “Vegan dinner option”

On the right side, you list who is handling each item and how you’ll confirm it’s done. You draw lines connecting each request to a verification task. No request is left without an owner and a check. That’s an RTM: a table that proves every requirement has been tested and nothing falls through the cracks.

---

### 19.2 💼 Professional Definition
The Requirements Traceability Matrix (RTM) is a document (usually a spreadsheet) that maps each business requirement or user story to one or more test scenarios or test cases. It’s created during **STLC Phase 1: Requirement Analysis** and is updated continuously throughout the testing lifecycle.

**Purpose:**
* Guarantees 100% test coverage of requirements.
* Makes it easy to see if any requirement lacks a test case.
* Shows the impact when a requirement changes — you instantly know which test cases to update.
* Provides an audit trail for regulated industries (banking, healthcare).
* Helps in test planning by showing how many test cases each requirement needs.

---

### 19.3 📊 Typical RTM Structure (Columns)
You create this in a Google Sheets tab named “RTM” inside your test suite workbook.

| Requirement ID | Requirement Description | Test Scenario(s) | Test Case ID(s) | Status | Comments |
| :--- | :--- | :--- | :--- | :--- | :--- |
| REQ‑AUTH‑01 | User must be able to log in with a valid email and password. | Verify successful login | TC‑LOGIN‑001, TC‑LOGIN‑002, TC‑LOGIN‑003 | 🟢 Pass | |
| REQ‑AUTH‑01 | *(same)* | Verify error handling for invalid login | TC‑LOGIN‑004, TC‑LOGIN‑005, TC‑LOGIN‑006, TC‑LOGIN‑007, TC‑LOGIN‑008, TC‑LOGIN‑009 | 🔵 In Progress | TC‑LOGIN‑009 blocked by account lockout issue |
| REQ‑AUTH‑02 | User can reset password via email. | Forgot Password – valid email | TC‑FP‑001, TC‑FP‑002 | ⚪ Not Started | |
| REQ‑AUTH‑02 | *(same)* | Forgot Password – invalid attempts | TC‑FP‑003, TC‑FP‑004 | ⚪ Not Started | |

**Column explanations:**
* **Requirement ID:** From the BRD/SRD or user story (e.g., US‑42).
* **Requirement Description:** One-line summary of what the requirement says.
* **Test Scenario(s):** High‑level scenario titles that cover this requirement.
* **Test Case ID(s):** Exact IDs of the detailed test cases that will verify the requirement.
* **Status:** Reflects the current state of testing for that requirement (Not Started, In Progress, Pass, Fail, Blocked). You update this after execution.
* **Comments:** Any notes, like why a test is blocked or if a defect was raised.

---

### 19.4 📝 Creating an RTM in Google Sheets – Step‑by‑Step Guide
I’ll use the exact login & forgot password requirements we’ve been working with. You’ll build this in your own workbook.

**Step 1: Open your Google Sheets workbook**
Use the same file that contains your “TestCases” sheet.

**Step 2: Create a new sheet**
* Click the “+” icon at the bottom left to add a new sheet.
* Double‑click the new sheet tab and rename it to **“RTM”**.

**Step 3: Freeze the top row**
* Click the row number “1” on the left to select the entire row.
* Go to `View → Freeze → 1 row`.

**Step 4: Enter column headers**
In row 1, type the following headers:

|  | A | B | C | D | E | F |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Requirement ID** | **Requirement Description** | **Test Scenario** | **Test Case ID(s)** | **Status** | **Comments** |

*You can bold the headers (Ctrl+B).*

**Step 5: List all requirements**
Fill the requirements from your BRD/SRD/User Stories. For our example:

|  | A | B |
| :---: | :--- | :--- |
| **1** | **Requirement ID** | **Requirement Description** |
| **2** | REQ‑AUTH‑01 | User must be able to log in with valid email and password. |
| **3** | REQ‑AUTH‑02 | User can reset password via email. |
| **4** | REQ‑AUTH‑03 | System must not reveal whether an email is registered. |

*(You can add more rows as needed. Use consistent IDs.)*

**Step 6: Add Test Scenarios and Test Case IDs**
For each requirement, add one row per test scenario and list the corresponding test case IDs. Example:

|  | A | B | C | D | E | F |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Requirement ID** | **Requirement Description** | **Test Scenario** | **Test Case ID(s)** | **Status** | **Comments** |
| **2** | REQ‑AUTH‑01 | User can log in with valid credentials | Verify successful login | TC‑LOGIN‑001, TC‑LOGIN‑002, TC‑LOGIN‑003 | | |
| **3** | REQ‑AUTH‑01 | *(same)* | Verify error handling for invalid login | TC‑LOGIN‑004, TC‑LOGIN‑005, TC‑LOGIN‑006, TC‑LOGIN‑007, TC‑LOGIN‑008, TC‑LOGIN‑009 | | |
| **4** | REQ‑AUTH‑02 | User can reset password via email | Forgot Password – valid flow | TC‑FP‑001, TC‑FP‑002 | | |
| **5** | REQ‑AUTH‑02 | *(same)* | Forgot Password – negative cases | TC‑FP‑003, TC‑FP‑004 | | |
| **6** | REQ‑AUTH‑03 | System must not reveal email registration | Verify generic error for unregistered email | TC‑LOGIN‑005, TC‑FP‑003 | | |

**Step 7: Apply conditional formatting to the “Status” column**
Let’s make Pass green, Fail red, Blocked yellow.
1. Select column E by clicking the column letter.
2. Go to `Format → Conditional formatting`.
3. Under *Format cells if…*, choose **Text is exactly**.
4. First rule: enter `Pass` → set the fill color to green (or light green). Click **Done**.
5. Click **Add another rule**: Text is exactly → `Fail` → fill color red (or light red).
6. Add another rule: Text is exactly → `Blocked` → fill color yellow.
*(Now whenever you type Pass/Fail/Blocked in column E, the cell will automatically color.)*

**Step 8: Add a coverage summary (using COUNTIF)**
At the bottom or in a new summary area, you can count the statuses. For example, in a cell below your data (say E10), type:
```text
=COUNTIF(E2:E9,"Pass") & " Passed"
```
*Similarly for Fail and Blocked. You could also compute percentage.*

**Step 9: Update regularly**
During test execution, update the Status column based on the overall result of the test cases for that requirement (if any test case fails, the requirement status could be “Fail”). Add comments when something is blocked or a defect is raised.

> **That’s your complete RTM in Google Sheets! You now have traceability from requirements to test cases, and a live status view.**

---

### 19.5 🏢 Real‑World Example – Login & Forgot Password RTM
We’ll connect the requirements we’ve been using all along.

**Requirements:**
* **REQ‑AUTH‑01:** User can log in with valid credentials.
* **REQ‑AUTH‑02:** User can reset password via email.

**RTM Table (in Google Sheets):**

|  | A | B | C | D | E |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **1** | **Requirement ID** | **Requirement Description** | **Test Scenario** | **Test Case ID(s)** | **Status** |
| **2** | REQ‑AUTH‑01 | User can log in with valid email and password | Verify successful login | TC‑LOGIN‑001, TC‑LOGIN‑002, TC‑LOGIN‑003 | 🟢 Pass |
| **3** | REQ‑AUTH‑01 | *(same)* | Verify error handling for invalid login | TC‑LOGIN‑004, TC‑LOGIN‑005, TC‑LOGIN‑006, TC‑LOGIN‑007, TC‑LOGIN‑008, TC‑LOGIN‑009 | TC‑LOGIN‑004 Pass, TC‑LOGIN‑005 Fail, rest Not Run |
| **4** | REQ‑AUTH‑02 | User can reset password via email | Forgot Password – valid flow | TC‑FP‑001, TC‑FP‑002 | ⚪ Not Started |
| **5** | REQ‑AUTH‑02 | *(same)* | Forgot Password – negative cases | TC‑FP‑003, TC‑FP‑004 | ⚪ Not Started |

*If you want to make it even more compact, you can add multiple test scenarios in one row if they belong to the same requirement, using line breaks or commas. Just ensure it’s readable.*

---

### 19.6 🔗 How RTM Links to Other STLC Phases
* **Phase 1 (Requirement Analysis):** You start building the RTM as soon as you understand the requirements. You may initially only have “Test Scenario” column filled, with empty Test Case IDs.
* **Phase 3 (Test Case Development):** You populate the Test Case IDs after you’ve written and baselined the test cases.
* **Phase 5 (Test Execution):** You update the Status column as you execute tests, giving real‑time coverage tracking.
* **Phase 6 (Test Closure):** The RTM is part of the test closure artifacts, demonstrating that all requirements were tested.

---

### 19.7 ❓ Why This Matters for a QA/SDET
* Interviewers will ask: “How do you ensure you’ve tested all requirements?” The RTM is your answer.
* As an SDET, you might generate the RTM automatically by linking test scripts to requirement IDs (e.g., in Playwright, you can tag tests with `@REQ-AUTH-01` and produce a coverage report).
* When a requirement changes (which happens constantly in Agile), you quickly identify impacted test cases and update them or your automation scripts accordingly. No guessing.

---

### 19.8 🗣️ Explanation
> “The Requirements Traceability Matrix is a spreadsheet that maps each functional requirement to its corresponding test scenarios and test cases. It ensures that every requirement has at least one test case covering it, giving us 100% traceability. I create it during requirement analysis and keep it updated throughout the testing lifecycle. It’s also my go‑to document when a requirement changes, because it shows exactly which test cases need to be updated.”

---

### 19.9 ⚠️ Important Summary Flow
You first have Requirements (from BRD/SRD). You put them in the RTM.

Then you design Test Cases in your “TestCases” sheet, each with its own unique ID (e.g., TC‑LOGIN‑001). You assign a requirement reference in the test case itself (the Requirement Reference column).

Then you go back to the RTM and fill in the Test Case ID(s) column with the IDs of the test cases that cover each requirement.

So the RTM is a central mapping that references the test case IDs you’ve already defined in your test case sheet. You don’t copy IDs from the RTM to the test case; you copy from the test case sheet to the RTM.

**Summary flow:**
`BRD/SRD → RTM (requirements listed) → Test Cases designed (with IDs) → RTM updated with those IDs.`

---

## 20. Test Execution & Test Closure Activities

### 20.1 🧪 Part 1 – Test Execution (STLC Phase 5)

#### 🔍 Simple Analogy
You’ve written the recipes (test cases), set up the kitchen (test environment), and now it’s the big day. You start cooking each dish exactly as the recipe says. For every dish you taste, you tick “perfect” or write a complaint note if it’s too salty. If a dish was sent back and the chef fixes it, you re‑taste it. And because the chef might have accidentally broken something else while fixing that dish, you also quickly re‑taste the other dishes nearby. That’s test execution: running the tests, finding failures, logging defects, retesting fixes, and checking nothing else broke.

#### 💼 Professional Definition
Test Execution is the phase where you actually run the prepared test cases, compare actual results with expected results, log any mismatches as defects, and re‑validate fixes. It begins as soon as the test environment is ready and a stable build is deployed.

#### 🧾 Key Activities During Test Execution
* **Execute test cases as per plan:**
  * Start from the highest‑priority test cases (smoke tests first, then functional, etc.).
  * Record actual results immediately; don’t trust memory.
* **Compare actual vs. expected results:**
  * If they match → mark the test case as Pass.
  * If they don’t match → mark it Fail and log a defect.
* **Log defects (defect reporting):**
  * Write a clear defect report with exact steps, screenshots, environment details, severity, and priority.
  * Link the defect ID back to the test case and the RTM.
* **Retest fixed defects:**
  * Once a developer marks a defect as “Fixed”, the same tester reruns the failed test case to confirm the fix works.
  * Only if the test case now passes is the defect closed.
* **Perform regression testing:**
  * Whenever code changes, re‑run a selected set of existing test cases that cover the critical business areas to ensure nothing else broke.
  * In automation, regression tests are often the entire automated suite.
* **Update RTM and status reports:**
  * Keep the RTM “Status” column current (Pass, Fail, Blocked).
  * Send daily/weekly test execution reports: how many tests run, how many passed/failed, defects found, and overall health.

#### 📊 Example: Login Feature Execution
Suppose you have these test cases to execute:

| TC‑ID | Title | Result | Action |
| :--- | :--- | :--- | :--- |
| **TC‑LOGIN‑001** | Login with valid credentials | 🟢 Pass | Mark Pass in sheet. |
| **TC‑LOGIN‑004** | Wrong password | 🔴 Fail – Error message missing “Invalid email or password” shown incorrectly. | Log Defect #101, mark Fail. |
| **TC‑LOGIN‑005** | Unregistered email | 🟡 Blocked – Test email server not responding. | Mark Blocked, escalate. |
| **TC‑LOGIN‑006** | Empty fields | 🟢 Pass | Mark Pass. |

**Later:**
* Developer fixes #101.
* You retest TC‑LOGIN‑004 → now Pass. Close defect #101.
* You run a quick regression: retest TC‑LOGIN‑001, TC‑LOGIN‑003, TC‑LOGIN‑007 (random sample) → all pass.

#### ❓ How This Fits into Automation
As an SDET, you don’t execute all test cases manually each time. You write automated scripts (e.g., in Playwright) that perform these steps for you and produce a report. But you still oversee results, investigate failures, log defects manually when needed, and run exploratory tests that aren’t scripted.

---

### 20.2 🧾 Part 2 – Test Cycle Closure (STLC Phase 6)

#### 🔍 Simple Analogy
After the wedding feast is over, the head chef doesn’t just walk away. They check:
* “Did we serve every dish on the menu?”
* “Were any complaints unresolved?”
* “What did we learn? Should we order extra dessert next time?”

Then they sign off the kitchen, pack up the leftover recipes, and write a note for the next event. That’s Test Closure – evaluating completion, making sure nothing is left open, and archiving the assets.

#### 💼 Professional Definition
Test Cycle Closure is the final phase where the testing team checks whether the predefined exit criteria are met, prepares a Test Closure Report, and archives all test artifacts. It’s the formal sign‑off that testing is complete (or, in Agile, that the sprint’s testing is done).

#### 🧾 Key Activities During Test Closure
* **Verify Exit Criteria:**
  * Exit criteria are defined during Test Planning. Examples:
    * All critical test cases executed.
    * All high‑severity defects closed or deferred with documented reasons.
    * Test coverage ≥ 95%.
    * Regression tests passed.
  * If any criterion is not met, testing is not closed; the release is delayed or a risk is accepted.
* **Prepare the Test Closure Report (Test Summary Report):**
  * A document summarizing the testing effort. Typical contents:

| Section | Description |
| :--- | :--- |
| **Project / Sprint Info** | What was tested (feature, release). |
| **Scope & Out‑of‑Scope** | What was planned vs. actually tested. |
| **Test Execution Summary** | Number of test cases planned, executed, passed, failed, blocked. |
| **Defect Summary** | Total defects found, by severity/priority, open vs. closed, defect density. |
| **Test Coverage** | Requirements covered (RTM status). |
| **Risks & Issues** | Any lingering risks, known issues going into production. |
| **Conclusion** | Recommendation: “Ready for release” or “Release at risk due to open critical defects”. |

* **Archive Test Artifacts:**
  * Store test cases, test data, automation scripts, RTM, logs, and reports in a shared repository (e.g., Google Drive, SharePoint, Confluence, GitHub).
  * This ensures future maintenance or regression suites can be picked up without reinventing the wheel.
* **Conduct Lessons Learned (Retrospective):**
  * Team discusses: What went well? What went wrong? What should we start/stop/continue?
  * QA may suggest improvements in test design, environment setup, or automation coverage.
  * This feeds back into the next test planning phase (Shift‑Left!).

#### 🧪 Real‑World Example – Test Closure for Login Feature
**Exit Criteria Check:**
* All 9 login test cases executed → 8 Pass, 1 Fail (TC‑LOGIN‑005 failed – cosmetic defect, agreed to defer).
* Zero Severity‑1 defects open.
* Regression tests passed.
* RTM shows 100% requirements coverage.

**Test Closure Report snippet (Google Sheets or Doc):**
* **Project:** Banking App v1.0 – Login Module
* **Test Period:** 24–28 July 2026
* **Test Cases:** 9 planned, 9 executed, 8 Pass, 1 Fail (deferred)
* **Defects:** 1 minor defect (ID #101 – deferred), 0 open
* **Conclusion:** Feature is ready for release. Deferred defect accepted by Product Owner.
* **Archive:** Upload test cases, RTM, and defect report to TeamDrive/QA/Releases/v1.0/.
* **Lesson learned:** “Security test cases (SQL injection) should be written earlier with security team input.”

---

### 20.3 🗣️ Explanation
> “Test Execution is when we actually run the test cases, compare actual outcomes with expected, log defects, and retest fixes along with regression testing. It’s the hands‑on phase where we find most of the bugs. Test Cycle Closure is the wrap‑up phase where we verify that all exit criteria are met, prepare a Test Closure Report, archive test artifacts, and capture lessons learned. Together, they ensure that testing is not only performed but also formally concluded with a clear go/no‑go recommendation.”

---

## 21. GUI Testing & Error Guessing
These are two separate things I'll cover together.

### 21.1 🖥️ Part A – GUI Testing (Graphical User Interface)

#### 🔍 Simple Analogy
You're buying a car. Before you even start the engine, you look at the paintwork, check that the doors align, see if the seat fabric is torn, and make sure the speedometer numbers are readable. That's GUI testing – you're checking the look and feel, the visual elements, not the engine.

#### 💼 Professional Definition
GUI Testing verifies the visual elements that users interact with – buttons, text fields, colors, fonts, alignment, images, error messages, and the overall layout. It's a subset of UI Testing. The goal is to ensure the application is aesthetically consistent and easy to use.

#### 🧾 What you check (examples from a login page):
* Are all labels visible (Email, Password)?
* Is the Login button the correct color and size?
* Do error messages appear in red under the correct field?
* Does the page layout break on different screen sizes?
* Are mandatory field indicators (*) shown?
* Are fonts consistent with the design mockup?
* Is the cursor position correct when tabbing between fields?

#### 🤖 GUI Testing and SDET:
* Fully automated GUI checks are possible (e.g., Playwright can verify visibility, color, position), but many teams still perform final visual validation manually because a human instantly spots a pixel misalignment.
* As an SDET, you may write visual regression tests using Playwright's `toHaveScreenshot()` to catch unintended layout changes automatically. But broad "does it look right?" still often needs a human eye.

#### 🧪 Example Test Case (GUI):
* **Title:** Verify error message color on login
* **Steps:** Leave fields empty, click Login.
* **Expected:** Error message "Email is required" appears in red (#FF0000) under the email field.

---

### 21.2 🎯 Part B – Error Guessing (as a Testing Type)
You saw this earlier as a test design technique; here we treat it as a testing type when you're executing tests.

#### 🔍 Simple Analogy
An experienced plumber walks into a new house and immediately checks under the sink, the toilet seal, and the water heater – because experience tells them those are the spots that always leak. No manual says that; it's intuition built over years. That's error guessing in testing.

#### 💼 Professional Definition
Error Guessing is an experience‑based testing technique where the tester uses intuition and past defect patterns to guess where bugs are likely hiding, then writes and executes test cases targeting those areas. It has no formal rules, only a checklist in the tester's mind.

#### 🧾 Common error‑guessing scenarios for a login page:
* Submitting with empty fields (obvious but often missed in early builds).
* Entering a very long password (maybe buffer overflow).
* Using special characters like `", \, or emojis`.
* Rapidly double‑clicking the Login button (submitting twice).
* Copy‑pasting spaces into the email field.
* Switching browser tabs while logging in, then coming back.
* Pressing the browser Back button right after login.

#### 🤖 Why SDETs use it:
* While automating, you add "chaos" test cases based on your own error guesses (e.g., a Playwright script that enters an extremely long string or two concurrent logins).
* Error guessing supplements formal techniques like Equivalence Partitioning – it fills gaps those techniques miss.

---

### 21.3 🗣️ Explanation & Malfunctions
> **Explanation:** “GUI testing focuses on the visual elements – layout, colors, fonts, and alignment – to ensure the user interface is clear and matches the design. Error guessing is an experience‑driven technique where testers use their knowledge of common failure points to design tests that target hidden defects. Both are critical: GUI testing keeps the product visually correct, and error guessing finds bugs that systematic techniques may overlook.”

> **Note on Malfunctions:** A malfunction simply means something isn't working the way it should. In software, when we say the system malfunctions, we mean it’s doing something wrong—like showing the wrong message, crashing, or not responding. That’s the failure the user experiences.

---

## 22. Smoke vs. Sanity Testing
These are two small, focused types of testing that are often mixed up. I’ll define each, then compare them directly.

### 22.1 🧪 Part A – Smoke Testing

#### 🔍 Simple Analogy
You buy a new car. Before taking it on a long road trip, you do a quick check:
* Do the doors lock?
* Does the engine start?
* Do the headlights turn on?

You’re not testing the air conditioning, the sunroof, or the stereo. You’re just confirming the car is fundamentally drivable. That’s smoke testing – a fast, shallow check of the most critical features to see if the build is stable enough for further testing.

#### 💼 Professional Definition
Smoke Testing (also called “Build Verification Test” or “Confidence Test”) is a small set of tests that verifies the core functionality of an application after a new build is deployed. Its purpose is to decide if the build is stable enough to proceed with full testing. If smoke tests fail, the build is rejected immediately.

#### 🧾 Typical smoke test scenarios for a banking app:
* App launches without crashing.
* Login with valid credentials works.
* Dashboard loads.
* Logout works.

If any of these fail, testers don’t waste time on detailed testing. The build goes back to the developers.

* **Who does it:** Usually QA, sometimes an automated smoke suite runs immediately after deployment in CI/CD.
* **Duration:** Minutes, not hours.

---

### 22.2 🧪 Part B – Sanity Testing

#### 🔍 Simple Analogy
The car went through a major repair (the engine was rebuilt). You don’t need to check the entire car again. You just want to verify that the engine repair worked and the car still starts and drives. You’re not checking the air conditioning. That’s sanity testing – a narrow, focused check after a specific change or bug fix.

#### 💼 Professional Definition
Sanity Testing is a quick, focused test performed after a bug fix or a small code change to confirm that the specific issue is resolved and that the immediately related functionality is not broken. It’s a subset of regression testing and is usually unscripted or partially scripted.

#### 🧾 Typical sanity test scenario:
* **A bug was fixed:** “Reset password link expired after 30 minutes wasn’t showing the expiry error.”
* **After the fix**, the tester runs a sanity check: manually test the expiry flow only.
* You don’t retest the entire login or registration module.

* **Who does it:** QA, often the tester who raised the bug.
* **Duration:** Very short – a few minutes to confirm the fix works.

---

### 22.3 ⚖️ Smoke vs Sanity – Side‑by‑Side

| Feature | Smoke Testing | Sanity Testing |
| :--- | :--- | :--- |
| **What it checks** | Core, critical functionality of the whole build. | Specific functionality after a fix or change. |
| **Scope** | Wide but shallow – touches many critical areas lightly. | Narrow but deep – focuses on one fix and its immediate impact. |
| **Performed when** | Every time a new build is deployed. | After a bug fix or code change is deployed. |
| **Purpose** | To decide if the build is stable enough for further testing. | To decide if the specific fix works and further planned testing can continue. |
| **Automation** | Often automated as part of CI/CD pipeline (smoke test suite). | Usually manual, sometimes an automated subset of regression. |
| **Reject Build?** | Yes – if smoke fails, the build is rejected outright. | If sanity fails, the build is sent back for that particular fix. |
| **Example** | Login, Dashboard, Logout work. | Password reset expiry now shows correct error. |

---

### 22.4 🧠 Why This Matters for an SDET
As an SDET, you’ll create and maintain a smoke test suite in Playwright that runs automatically on every build in CI/CD. If it fails, the pipeline stops and notifies the team.

For sanity tests, you might write a quick targeted automation script for a critical fix, or rely on a subset of existing regression tests to cover the changed area.

Understanding these two shows you can optimize test effort: you don’t run all 500 tests every time; you run smoke first, then full testing only if smoke passes, and sanity when a focused fix arrives.

---

### 22.5 📝 How to explain it clearly
> “Smoke testing is a quick, high‑level run of the most critical features to confirm the build is stable enough for detailed testing. Sanity testing is a narrow, focused check after a bug fix to verify the fix works and no immediate side effects appear. Smoke is broad and shallow; sanity is narrow and deep. In automation, I implement a smoke suite that runs on every CI/CD pipeline trigger, while sanity tests are often manual or a targeted subset of regression.”

---

### 22.6 🛠️ Smoke Tests for Login – Example Selection
We need broad, shallow, critical path only. These test cases check if the application is fundamentally alive and usable after a new build.

From your login test suite, these three qualify as smoke tests:

| TC‑ID | Title | Why it's a smoke test |
| :--- | :--- | :--- |
| **TC‑LOGIN‑001** | Verify successful login with valid credentials | Core functionality. If a user can't log in, nothing else matters. |
| **TC‑LOGIN‑003** | Verify login using "Enter" key instead of button click | Many users press Enter; it's a critical usability path. |
| **TC‑LOGIN‑006** | Verify validation for empty email and password | Basic input validation – ensures the page loads and client‑side checks work. This is the shallow "does the page even respond" check. |

*(We exclude error messages like wrong password because they test deeper logic; smoke only cares that the most essential happy path works and the page doesn't crash on simple interaction.)*

---

### 22.7 🔧 Sanity Test – After a Bug Fix
**Bug fix:** “The ‘Forgot Password’ link was not visible on mobile.”

**A one‑line sanity test:**
> On a mobile viewport (375px width), verify the ‘Forgot Password?’ link is visible below the password field and is clickable, leading to the reset page.

You're not retesting the entire Forgot Password flow. You're only confirming that the specific fix (visibility on mobile) works, and that the link still functions.

---

## 23. Functional vs. Non-Functional Testing Deep Dive

### 23.1 🔍 Simple Analogy
Imagine you’re buying a smartphone.
* **Functional testing** checks what the phone does: Can you make a call? Does the camera take a photo? Does the fingerprint scanner unlock the screen? These are the actions the phone is supposed to perform.
* **Non‑functional testing** checks how well the phone does those things: How fast does the camera open? How long does the battery last? Is the screen readable in direct sunlight? Can 100 people use the network without calls dropping? These are the qualities of the phone’s behaviour.

Both are essential. A phone that takes beautiful photos but shuts down after 20 minutes is useless. A phone with a 3‑day battery that can’t make calls is also useless.

---

### 23.2 💼 Professional Definition
In software testing, every test case falls into one of these two large buckets.

#### ✅ Functional Testing
* **What it is:** Testing that verifies the software does exactly what the requirements say it should do – feature by feature, function by function.
* **Focus:** The application’s behaviour against functional specifications.
* **Examples (from our login feature):**
  * Can a registered user log in with a valid email and password?
  * Does an invalid password show the correct error message?
  * Does the “Forgot Password” link navigate to the reset page?
  * Does the “Remember Me” checkbox keep the user logged in?
* **Sub‑types (some you already know):**
  * Unit testing
  * Integration testing
  * System testing
  * Smoke / Sanity testing
  * Regression testing (checking that existing functionality still works)

#### 🔧 Non‑Functional Testing
* **What it is:** Testing that verifies how the system behaves – its performance, security, usability, reliability, and other quality attributes. It’s not about a specific feature working, but about the overall experience and stability under different conditions.
* **Focus:** The system’s attributes, often called “quality attributes” or “‑ilities”.
* **Examples (from the same login feature):**
  * Does the login page load within 2 seconds on a slow 3G connection? *(Performance)*
  * Can 5,000 users log in at the same time without the server crashing? *(Load / Stress)*
  * Is the login page usable on a mobile screen without horizontal scrolling? *(Usability)*
  * Does the login page work in Chrome, Firefox, Safari, and Edge? *(Compatibility)*
  * Is the password transmitted over HTTPS and not stored in plain text? *(Security)*
  * If the server restarts during login, does the system recover without corruption? *(Reliability / Recovery)*

---

### 23.3 📊 Side‑by‑Side Comparison

| Feature | Functional Testing | Non‑Functional Testing |
| :--- | :--- | :--- |
| **Question it answers** | “Does the system do what it’s supposed to?” | “How well does the system perform under various conditions?” |
| **Based on** | Requirements / User Stories (functional spec). | Quality attributes, service‑level agreements (SLAs), industry standards. |
| **Test cases** | Clear pass/fail against expected behaviour. | Often have thresholds (e.g., “page load ≤ 3 seconds”) rather than a single exact expected result. |
| **When to perform** | Throughout the SDLC – every sprint. | Often after functional stability is reached, but ideally also early (shift‑left for performance, security). |
| **Automation** | Heavily automated (Playwright for UI, API tests). | Some can be automated (performance scripts with k6/JMeter, accessibility checks, Lighthouse for performance). Others (usability) are manual. |
| **Examples** | Login works, password reset email sent, error message appears. | Login page loads in < 2 sec, 10,000 concurrent logins, secure token storage. |

---

### 23.4 🧠 Why This Matters for an SDET
Your automation scripts are primarily functional. You write Playwright tests to verify that a user can log in, search, and check out.

However, you can also integrate non‑functional checks into your automation suite:
* **Performance:** Add `page.waitForLoadState('networkidle')` and measure navigation timing.
* **Accessibility:** Use `@axe-core/playwright` to run automated accessibility checks.
* **Visual regression:** Use `toHaveScreenshot()` to catch unexpected layout shifts (a non‑functional regression).

In CI/CD, functional tests run first. If they pass, non‑functional tests (like a short performance or security scan) may run in parallel or in a later stage.

As an SDET, you must know which test type you’re writing. When a product owner asks, “Did you test performance?”, you need to understand they’re talking about non‑functional, not just “did the button click work?”

---

### 23.5 📝 Explanation
> “Functional testing verifies that the software’s features work exactly as specified – it answers ‘Does it do what it should?’. Non‑functional testing checks how well the system operates – covering performance, security, usability, and reliability. Both are critical: a functionally perfect app that’s slow or insecure will fail users. As an SDET, I automate mostly functional checks, but I also include non‑functional validations like visual snapshots, accessibility, and performance assertions where possible.”

---

## 24. Retesting vs. Regression Testing Deep Dive

### 24.1 🔍 Simple Analogy
Think of a car repair shop.
* **Retesting** – The mechanic replaces a broken brake pad. You take the car out and test only the brakes to make sure they now work. You’re checking the exact fix.
* **Regression Testing** – After the brake job, you also test the steering, the engine, and the lights to make sure the mechanic didn’t accidentally disconnect something else while fixing the brakes. You’re checking that nothing else broke.

So:
* **Retesting** = verifying a specific fix.
* **Regression Testing** = verifying that the rest of the system is still stable after the fix.

---

### 24.2 💼 Professional Definition

| Feature | Retesting | Regression Testing |
| :--- | :--- | :--- |
| **What it is** | Running the same test case(s) that previously failed to confirm a defect is fixed. | Running a set of previously passed test cases to ensure recent changes haven’t broken anything. |
| **Trigger** | A specific defect is marked “Fixed” by the developer. | Any code change, new feature, bug fix, or environment update. |
| **Scope** | Very narrow – limited to the failed test case(s) linked to the defect. | Wide – covers the impacted module and often the critical paths of the whole application. |
| **Test cases used** | The exact test cases that exposed the defect. | A pre‑selected regression suite, often including smoke tests and high‑priority functional tests. |
| **Goal** | Confirm the bug is truly gone. | Confirm no new bugs were introduced. |
| **Automation** | Can be automated, but often done manually once to quickly close the defect. | Highly automated; regression suites run in CI/CD on every build. |
| **Outcome if it fails** | The defect is reopened and sent back to the developer. | The new code is considered unstable; the team investigates which change caused the break. |

---

### 24.3 🧪 Real‑World Example – Login Feature
**Scenario:** A defect was logged:
> *Defect #101: After entering a wrong password, the error message “Invalid email or password” is not displayed (the screen stays blank).*

Developer fixes it and marks the defect as “Fixed”.

**Retesting (what you do now):**
* Run the exact test case that failed: **TC‑LOGIN‑004** (Verify error for wrong password).
* You enter a valid email and wrong password, click Login.
* You see the error message. The test case now passes → defect closed.

**Regression Testing (what you do after retesting):**
* Because the developer changed the password validation code, you now worry: “Did this change accidentally break the normal login, or the empty‑field validation, or the account lockout?”
* You run a regression suite (a set of test cases related to login):
  * **TC‑LOGIN‑001** – Valid login *(Pass)*
  * **TC‑LOGIN‑006** – Empty fields validation *(Pass)*
  * **TC‑LOGIN‑009** – Account lockout after 5 failed attempts *(Pass)*

All pass → the code change is safe. If any fail, you log a new defect.

---

### 24.4 🔁 How They Fit Together (The Cycle)
1. Tester finds a bug → logs defect → test case fails.
2. Developer fixes the defect.
3. Tester retests the fix (same test case).
4. If retesting passes, tester performs regression testing around the changed area.
5. If regression passes, the defect is closed.

---

### 24.5 ❓ Why This Matters for an SDET
As an SDET, you will often automate the regression suite so that it runs on every commit. The retest, however, may still be done manually once before closing the defect (or you run just that one test script locally).

A common interview question is: “What is the difference between retesting and regression?” This table is your answer.

In continuous integration, the regression suite is your safety net. It must be fast, reliable, and cover critical paths.

---

### 24.6 📝 Explanation
> “Retesting is verifying that a specific defect has been fixed by re‑executing the exact test case that failed. Regression testing is running a broader set of tests to ensure that the fix or any new code has not broken existing functionality. Retesting is narrow and focused; regression is wide and preventive. In my automation work, I ensure a strong regression suite that runs on every build, while retesting is often done manually to close the defect loop.”

---

## 25. Exploratory vs. Ad-hoc Testing Deep Dive

### 25.1 🔍 Simple Analogy
* **Ad‑hoc Testing** is like walking into a dark room and randomly flipping switches to see what happens. No plan, no map, just curiosity.
* **Exploratory Testing** is like being a detective in that same room. You have a mission (“find where the fuse box is”), you test switches in a logical area, you observe what happens, and you adjust your next move based on what you discover. You’re still thinking on your feet, but you have a goal and you take notes.

Both are unscripted, but one is aimless and the other is guided by skill.

---

### 25.2 💼 Professional Definition

#### 🕵️‍♂️ Exploratory Testing
Exploratory testing is a structured, unscripted approach where the tester simultaneously learns about the application, designs tests, and executes them. It’s not random clicking; it’s a disciplined, thoughtful process that relies on the tester’s experience, curiosity, and critical thinking.

**Key characteristics:**
* **Simultaneous learning and execution:** You explore the feature, learn its behavior, and immediately test based on that learning.
* **Charter‑based:** Often guided by a test charter – a short mission statement that defines what to explore, what resources to use, and what risks to focus on.
* **Time‑boxed:** Usually performed in dedicated sessions (e.g., 60–90 minutes) called Session‑Based Test Management (SBTM).
* **Debrief notes:** After the session, you document what you tested, what bugs you found, and what areas still need deeper testing.

**Example Charter:**
> “Explore the ‘Forgot Password’ flow for 60 minutes. Focus on security concerns around token expiry and error message consistency. Use Chrome and Firefox. Note any unexpected behavior.”

**During that session, you may try:**
* Resetting password, then trying the old password.
* Using the back button after resetting.
* Opening the reset link on two different browsers.
* Requesting multiple resets and using the last link first.

*(These are not pre‑written test cases, but they come from real‑time thinking.)*

#### 🎲 Ad‑hoc Testing
Ad‑hoc testing is completely unplanned, unstructured, and undocumented testing. There’s no charter, no time‑box, no mission. You just open the application and click around, often trying to “break” it without any systematic approach.

**Key characteristics:**
* **No preparation:** No test cases, no test data prepared in advance.
* **No documentation:** Usually no notes are taken unless a bug is found.
* **Relies purely on intuition:** Often done when time is short or as a quick smoke‑type check.
* **Random:** The path followed is not guided by risk or functionality; it’s whatever the tester feels like doing.

**Example:**
> You have 10 minutes free. You open the login page and try clicking “Login” without entering anything, then refresh the page, then paste a long URL into the email field. That’s ad‑hoc.

---

### 25.3 📊 Ad‑hoc vs Exploratory – Side‑by‑Side

| Feature | Ad‑hoc Testing | Exploratory Testing |
| :--- | :--- | :--- |
| **Preparation** | None – completely unprepared. | Minimal – a charter or mission is defined. |
| **Structure** | Random, directionless. | Structured freedom – goal‑oriented but unscripted. |
| **Documentation** | Usually no notes, only defects reported. | Session notes, test ideas, and defects recorded. |
| **Learning** | Very little – you don’t reflect on what you learned. | High – you continuously learn and adapt. |
| **Repeatability** | Not repeatable – next time you might click differently. | Partially repeatable – the charter can be used again, but the exact steps may vary. |
| **Value** | Good for a quick sanity check or when time is extremely limited. | High value – finds deep, complex bugs that scripted tests miss. |
| **When to use** | Rarely used as a primary method. More of a “quick look”. | Regularly used in sprints, especially before release, or on complex features. |

> **Professional Note:** Many people wrongly use the terms interchangeably. In an interview, you should clearly distinguish them. Exploratory testing is a respected, formal technique. Ad‑hoc is a casual activity.

---

### 25.4 🧠 Why This Matters for an SDET
**Exploratory Testing informs automation:** During exploratory sessions, you discover edge cases, messy workflows, and surprising bugs. You then convert these findings into automated regression tests so they’re never missed again.

**Ad‑hoc testing** is rarely automated because it’s random. But the same quick‑check mentality can be applied to “chaos” automation scripts that send random inputs.

In an Agile SDET role, you might spend 80% of your time writing automated scripts and 20% doing exploratory testing to find gaps in automation coverage. This hybrid approach is highly valued.

When you present bugs found during exploratory testing, you describe them as *“found during structured exploratory session on the payment flow”* – which sounds far more professional than *“I was just clicking around”*.

---

### 25.5 📝 Explanation
> “Exploratory testing is a disciplined, unscripted testing approach where I simultaneously learn the system, design tests, and execute them, usually guided by a charter and time‑boxed. It’s excellent for finding edge cases that scripted tests miss. Ad‑hoc testing, in contrast, is completely random and undocumented, useful only for a very quick sanity look. I regularly use exploratory testing in sprints to uncover hidden risks, and I convert the most important scenarios into automated scripts for regression.”

---

## 26. Monkey vs. Gorilla Testing Deep Dive

### 26.1 🔍 Simple Analogy
* **Monkey Testing** – Imagine releasing a real monkey into a room full of buttons, levers, and screens. The monkey jumps randomly, presses anything, pulls wires, and you just watch to see if the machine breaks. You don’t tell the monkey what to press. It’s pure chaos.
* **Gorilla Testing** – Now imagine a huge gorilla that walks straight to one specific machine, say the “login” panel, and pounds on it repeatedly – hundreds of times, with heavy force. It’s not random; it’s focused, intense, and repetitive on just that one part.

In software, both are unscripted testing, but one is random everywhere, the other is intensely focused on one area.

---

### 26.2 💼 Professional Definition

#### 🐒 Monkey Testing
Monkey testing is a type of testing where random inputs, actions, or events are thrown at the application with no specific test cases, no plan, and often no knowledge of the system. The goal is to see if the system crashes, hangs, or misbehaves under chaotic usage.

**There are two common types:**
| Type | Description | Example (Login page) |
| :--- | :--- | :--- |
| **Dumb Monkey** | The tester/script clicks, types, and navigates totally randomly. It doesn't understand the application at all. It might try to click a button that doesn't exist or enter letters where numbers are expected. | Click everywhere on the screen, enter emojis in the password field, press random keyboard keys, navigate to random URLs. |
| **Smart Monkey** | The tester/script has some basic knowledge of valid inputs or the application’s data. It can fill fields with plausible data but still acts in unexpected sequences. | Fill email with a valid format (like monkey@test.com) and password with random characters, but try to submit without clicking Login (press Enter, then quickly click Logout). |

* **Who uses it:** Usually developers or SDETs who write monkey scripts that generate random UI events, or testers doing stress/robustness testing.
* **Why it matters:** It catches hard‑to‑predict crashes, memory leaks, and unexpected system states that formal test cases would never test.

#### 🦍 Gorilla Testing
Gorilla testing is a focused, repetitive testing technique where a single module or small feature is tested exhaustively, over and over, with intense load or random data, almost to the point of abuse. The idea is to see if that component can survive extreme usage.

**Key characteristics:**
* **Extremely narrow scope:** Only one module at a time (e.g., the login form, the file upload button, the search box).
* **High repetition:** The same test steps or variations are applied dozens or hundreds of times.
* **Often combined with load:** For example, 50 users resetting their passwords simultaneously.
* **Manual or automated:** A tester can manually keep resetting a password for 30 minutes, or an SDET can write a script that loops a login action 1000 times.

* **Why it matters:** It exposes memory corruption, session handling bugs, database deadlocks, and stability issues that appear only after repeated use of one feature.

---

### 26.3 📊 Monkey vs Gorilla – Side‑by‑Side

| Feature | Monkey Testing | Gorilla Testing |
| :--- | :--- | :--- |
| **Scope** | Entire application, random areas. | One module or one specific feature. |
| **Nature** | Random, chaotic, unpredictable. | Focused, repetitive, abusive. |
| **Goal** | Find unexpected crashes, exceptions, or odd system behaviour. | Test the robustness and stability of one component under heavy repeated load. |
| **Execution** | Often automated via random input generators. | Can be manual (a tester keeps testing the same flow) or automated (loop a test script many times). |
| **Knowledge of system** | Dumb monkey: none. Smart monkey: some. | Moderate to high – you know what you are attacking. |
| **Result** | System crash, unexpected error pages, memory leaks. | Component failure, performance degradation, session errors. |

---

### 26.4 🧠 Why This Matters for an SDET
As an SDET, you can write monkey scripts using Playwright or tools like Gremlin to randomly navigate pages and click buttons. This is called **fuzz testing** or random testing. It helps uncover broken links, JavaScript errors, and missing error handling.

For gorilla testing, you can write a single test and run it in a loop (e.g., `for (let i = 0; i < 1000; i++) { ... }`) to hammer a specific API or a critical checkout flow. This helps find race conditions and database contention issues.

These tests are usually not part of the main regression suite (they take time and are messy) but are run occasionally or as part of stability cycles.

---

### 26.5 📝 Explanation
> “Monkey testing is a random, chaotic approach where we throw unpredictable inputs at the entire application to see if it crashes or behaves unexpectedly. It mimics a user who has no idea what they’re doing. Gorilla testing, on the other hand, is intensely focused on one module, repeating tests over and over to check its stability under extreme conditions. I can automate both: monkey testing with random UI event generators to find hidden crashes, and gorilla testing by looping a critical test to verify a component won’t break under repeated use.”

---

## 27. The Defect Lifecycle Deep Dive

### 27.1 🔍 Simple Analogy
Imagine a complaint in a hotel.
* **New** – A guest tells the front desk: “The bathroom tap is leaking.” The complaint is recorded.
* **Assigned** – The manager assigns the job to the plumber.
* **Open / In Progress** – The plumber starts working on the tap.
* **Fixed** – The plumber says, “I’ve fixed it.”
* **Retest** – The front desk staff goes to the room, turns on the tap, and checks that it no longer leaks.
* **Closed** – The tap is dry. The complaint is marked as resolved.
* **Reopened** – But if the tap drips again a day later, the complaint is reopened and the cycle repeats.

The Defect Lifecycle is exactly this journey – from the moment a bug is reported to the moment it’s permanently resolved.

---

### 27.2 💼 Professional Definition
The Defect Lifecycle (also called the Bug Life Cycle) is the sequence of states a defect goes through, from discovery to closure. It provides a clear process for handling bugs and ensures every defect is tracked, assigned, fixed, and verified.

---

### 27.3 🧾 Standard Defect Lifecycle States

| State | Meaning | Who changes it |
| :--- | :--- | :--- |
| **New** | The defect is logged for the first time by the tester. It has not been reviewed yet. | Tester / QA |
| **Assigned** | The defect has been reviewed by the Test Lead or manager and assigned to a developer. | Test Lead / Manager |
| **Open** | The developer has accepted the defect and started working on the fix. | Developer |
| **Fixed** | The developer has made a code change and believes the defect is resolved. The defect is now ready for retesting. | Developer |
| **Retest** | QA is re‑testing the fix using the original test case that found the defect. | Tester / QA |
| **Closed** | Retesting passed – the defect is resolved. No further action is needed. | Tester / QA (or automatically) |
| **Reopened** | Retesting failed – the defect still exists or the fix created a new issue. It goes back to the developer. | Tester / QA |
| **Deferred / Postponed** | The defect is valid but not critical for the current release. It will be fixed in a future version. | Test Lead / Product Owner |
| **Duplicate** | The defect already exists. The current report is closed and linked to the original defect ID. | Tester / Developer |
| **Not a Bug / Rejected** | The developer determines the behavior is correct or the requirement was misinterpreted. | Developer |

---

### 27.4 🔁 The Ideal Flow (happy path)
`New → Assigned → Open → Fixed → Retest → Closed`

But real life has branches:
* `New → Assigned → Open → Fixed → Retest → Reopened → Assigned → Open → Fixed → Retest → Closed`
* `New → Assigned → Rejected (Not a Bug)`
* `New → Assigned → Duplicate → Closed`
* `New → Assigned → Deferred → (later) Open → ...`

---

### 27.5 🧪 Real‑World Example – Login Defect
* **New:** You test login with wrong password. The error message is missing. You log Defect #101 with the details. Status: New.
* **Assigned:** The Test Lead reviews it, confirms it’s valid, and assigns it to Developer Ravi. Status: Assigned.
* **Open:** Ravi accepts it and starts debugging. Status: Open.
* **Fixed:** Ravi changes the password validation code and marks the defect as Fixed. He adds a comment: “Error message now displays correctly.”
* **Retest:** You re‑run test case TC‑LOGIN‑004. The error message now appears. Status: Retest.
* **Closed:** Because retesting passed, you close the defect. Status: Closed.

Alternatively, if the error message still didn’t appear:
* Status changes from Retest to **Reopened**, and the defect goes back to Ravi.

---

### 27.6 ❓ Why This Matters for a QA/SDET
As a QA, you move the defect from New → Retest → Closed (or Reopened). You are responsible for the quality gate.

As an SDET, your automated test that found the defect may also verify the fix. If the test fails again during retesting, the automation report can automatically trigger a Reopened status in JIRA (via API integration).

In CI/CD, if a critical defect is reopened, the release pipeline may be blocked.

Knowing the lifecycle ensures you communicate clearly with developers and leads. You don’t say “the bug is done” – you say “defect #101 is closed after successful retest.”

---

### 27.7 📝 Explanation
> “The defect lifecycle tracks a bug from discovery to closure. It starts as New, gets Assigned to a developer, moves to Open while being worked on, then Fixed when a resolution is applied. QA then Retests the fix. If it passes, the defect is Closed; if it fails, it is Reopened. Other states like Rejected, Duplicate, or Deferred help manage edge cases. As a QA, I own the final verification step and ensure only truly fixed defects are closed.”

---

### 27.8 📍 Where exactly is each thing recorded?
The defect lifecycle states are not written inside a test case. They live in a separate place – either a defect tracking tool (like JIRA, Bugzilla, Azure DevOps) or, during manual practice, in a separate sheet in your Google Sheets workbook.

| Artifact | Where it lives |
| :--- | :--- |
| **Test Case** | Your "TestCases" sheet – it has columns like TC‑ID, Steps, Expected Result, Status (Pass/Fail). If a test case fails, you note the failure there, but not the whole defect lifecycle. |
| **Defect Report** | A separate defect log (in JIRA or a "Defects" sheet). It contains Defect ID, Description, Steps to Reproduce, Severity, Priority, and the lifecycle state (New, Assigned, Open, Fixed, Retest, Closed, Reopened). |
| **RTM** | Your "RTM" sheet – it links Requirements to Test Cases, and may optionally reference a Defect ID if a requirement is failing due to a specific bug. But the RTM doesn't track the defect's progress. |

---

### 27.9 🧩 How they connect in practice
1. You execute **TC‑LOGIN‑004** (Wrong password error). It fails because the error message is missing.
2. In your "TestCases" sheet, you mark its Status as "Fail" and in the Comments column write: *"Defect #101 raised."*
3. You open your "Defects" sheet (or JIRA) and log a new defect with all required details. You set its state to **New**.
4. As the defect progresses (Assigned, Fixed, Retested, Closed), you update the state **only** in the "Defects" sheet / JIRA, not in the test case.
5. After the fix is verified, you return to the "TestCases" sheet, update the status of **TC‑LOGIN‑004** from Fail to Pass, and close the defect in the defect log.

So the defect lifecycle states are tracked in the defect log, not inside the test case. The test case just records whether that particular test passed or failed.

> **💡 For your Google Sheets practice:**
> You can create a new sheet called "Defects" with columns like:
> `Defect ID | Title | Linked TC-ID | Severity | Priority | Status (Lifecycle) | Assigned To | Comments`
>
> That's where you'll manually move the status through New → Assigned → Fixed → Retest → Closed.

---

## 28. Defect Severity vs Priority Deep Dive

### 28.1 🔍 Simple Analogy
You’re in a hospital emergency room.
* **Severity** is how serious the injury is. A heart attack is critical; a small cut is minor.
* **Priority** is how quickly a doctor should see the patient. A heart attack patient gets highest priority, even if the ER is busy. A small cut might wait, even if the patient is impatient.

Now imagine a scenario:
* A VIP patient (the CEO of the hospital) arrives with a minor sprained finger. Medically, severity is low, but the priority to treat them might be high because of business pressure.
* A homeless patient with a severe allergic reaction has high severity, and medically they should also get high priority, even though they aren't a VIP.

In software:
* **Severity** = impact on the system (technical damage).
* **Priority** = urgency to fix (business decision).

---

### 28.2 💼 Professional Definition

| Feature | Severity | Priority |
| :--- | :--- | :--- |
| **What it measures** | The degree of damage the defect causes to the application or its users. | The order in which a defect should be fixed, driven by business needs, deadlines, and customer impact. |
| **Who defines it** | Usually the tester/QA, because you understand the technical impact. | Usually the Product Owner, Business Analyst, or Test Lead in collaboration with the tester. |
| **Answers the question** | “How badly does this bug break the system?” | “How urgently must we fix this bug?” |
| **Driven by** | Functional impact, data loss, crash, security hole. | Business value, release deadlines, number of affected users, workaround availability. |
| **Can change over time?** | Generally fixed (the impact is what it is). | Can change – a low‑priority bug before release may become a blocker if it affects a key client demo. |
| **Examples** | “Application crashes when clicking Login” – Critical severity. | “Cosmetic spelling mistake on an internal admin page” – Low priority. |

---

### 28.3 📊 Severity Levels (Typical)

| Severity | Description | Example |
| :--- | :--- | :--- |
| **Critical / Blocker** | System is completely unusable, data is lost or corrupted, or a core feature is entirely down. No workaround. | Clicking “Login” causes the server to crash. Users cannot access the app. |
| **Major / High** | A key feature is broken, but the system as a whole still operates. A difficult workaround exists. | The “Forgot Password” email is never sent. Users can’t reset passwords, but login still works. |
| **Minor / Medium** | A feature doesn’t work as expected, but an easy workaround exists. No data loss. | The “Remember Me” checkbox doesn’t persist, but users can log in manually each time. |
| **Cosmetic / Low** | Visual or textual issues – spelling mistakes, misalignment, wrong colors. No functional impact. | The welcome message says “Hello, User” instead of “Hello, Test User!”. |

---

### 28.4 📊 Priority Levels (Typical)

| Priority | Description | Example |
| :--- | :--- | :--- |
| **High / P1** | Must be fixed immediately, before anything else. Blocking the release. | The login page is completely broken for all users. |
| **Medium / P2** | Should be fixed in the current sprint or release, but doesn’t block basic functionality. | The “Forgot Password” flow fails on Firefox but works on Chrome. |
| **Low / P3** | Can be deferred to a future release. Nice to have fixed. | A typo in the terms and conditions page that only admins see. |

---

### 28.5 🧩 The Classic Combinations (and why they’re different)

| Combination | Scenario | Example |
| :--- | :--- | :--- |
| **High Severity, High Priority** | The worst bug. System‑breaking and must be fixed now. | Login crashes the server. Fix immediately. |
| **High Severity, Low Priority** | Serious damage, but happens in a very rare edge case that almost no user encounters, and the release is urgent. | The application crashes only when a user enters a 10,000‑character name in a hidden debug menu. The release goes out, with a note. |
| **Low Severity, High Priority** | Little functional damage, but for business reasons it’s urgent. | The company logo on the homepage is slightly distorted. The CEO wants it fixed before the press launch tomorrow. |
| **Low Severity, Low Priority** | Trivial. Fix when there’s time. | A spelling mistake in an internal error log message. |

---

### 28.6 🧪 Real‑World Example – Login Feature
**You log defect #101:**
* **Title:** “Application shows a blank white page after 3 failed login attempts.”
* **Severity:** Critical – the application becomes unusable (blank page).
* **Priority:** High – it can happen easily and blocks any further use.

**Defect #102:**
* **Title:** “The ‘Login’ button is slightly misaligned by 2 pixels on IE11.”
* **Severity:** Cosmetic – no functional problem.
* **Priority:** Low – IE11 is used by less than 0.1% of visitors, and it still works.

---

### 28.7 ❓ Why This Matters for a QA/SDET
As a QA, you assign severity based on what you observe. You can suggest priority, but the final priority often comes from the Product Owner.

In an interview, if they ask “What’s the difference between severity and priority?” you must clearly separate them and give the “High severity, low priority” example. That shows deep understanding.

As an SDET, your automated test report can automatically set a suggested severity based on the test’s importance (e.g., a failed smoke test = Blocker). The priority is then decided in the defect triage meeting.

Misunderstanding these can cause chaos: a cosmetic bug fixed urgently while a crash sits in the backlog.

---

### 28.8 📝 Explanation
> “Severity is the technical measure of how badly a defect damages the system – from cosmetic to critical. Priority is the business measure of how urgently the defect must be fixed. A tester defines severity based on impact; the product owner or lead decides priority based on business needs. They don’t always align: a high‑severity crash in a rare feature might be low priority, while a cosmetic logo issue might be high priority before a major launch. I always assign severity when logging a defect and collaborate with the team to determine priority.”

---

## 29. Advanced Defect Concepts Deep Dive

### 29.1 🩺 Defect Triage
**🔍 Simple Analogy**
You are the emergency room nurse. Five patients just arrived:
* One with a heart attack.
* One with a broken arm.
* One with a mild headache.
* One who is a famous VIP with a cold.
* One who has already been treated but came back with the same pain.

You can’t treat them all at the exact same second, so you decide the order of treatment based on severity and resources. That’s triage.

**💼 Professional Definition**
Defect Triage is a regular meeting (often called a triage call) where the QA, Product Owner, and Development Lead together review open defects and decide:
* **Priority** – which bugs to fix now, which can wait.
* **Assignment** – who should fix each.
* **Resolution** – whether a bug is actually a defect, a duplicate, or “won’t fix”.

The goal is to keep the defect list clean and focused so the team only works on what truly matters.

**🧪 Example – Login feature**
* **Defect #101:** Login page crashes when password is exactly 257 characters. Severity: Critical. Priority: Must fix now.
* **Defect #102:** Label “Password” is missing a colon. Severity: Cosmetic. Priority: Deferred to next sprint.
* **Defect #103:** Same crash as #101 but reported twice. Duplicate.

In triage, #101 gets assigned to a senior dev, #102 gets moved to the backlog, and #103 is closed as duplicate.

**❓ Why an SDET needs to know this**
* You may be asked to join a triage meeting to defend the severity of a bug you logged.
* Automated test runs can generate dozens of failures. Triage thinking helps you filter out flaky tests, known issues, and real new defects quickly.

---

### 29.2 💧 Defect Leakage
**🔍 Simple Analogy**
You check a boat for holes, patch everything you find, and sail out. Mid‑ocean, water starts gushing in because you missed a tiny crack. That crack leaked into the live journey. In testing, a bug that escapes detection and reaches the end‑user is defect leakage.

**💼 Professional Definition**
Defect Leakage is the percentage or number of defects that are found after release (in production) that should have been found during the testing phase. It is a metric for test effectiveness.

**Calculation:**
`Defect Leakage = (Defects found in production / Total defects found in production + testing) × 100`

**🧪 Example – Login feature**
After releasing the new login page, users report that clicking the browser’s back button after login shows a blank screen. This was never tested. It’s a leaked defect because it escaped the test cycle.

**❓ Why an SDET needs to know this**
* Every leaked defect is a signal to improve test coverage. For example, you would add a new Playwright test for “back‑button after login”.
* Low leakage means your automation suite + manual testing is doing its job.

---

### 29.3 🐜 Defect Clustering
**🔍 Simple Analogy**
In a garden, you notice that 80% of the weeds are in just one corner. Instead of weeding the whole lawn, you focus on that corner. In software, a small number of modules tend to contain the majority of bugs.

**💼 Professional Definition**
Defect Clustering (also called the Pareto principle: 80% of defects are found in 20% of the system) is the observation that defects are not evenly spread across the application. Some components are inherently more complex, older, or poorly designed and attract more bugs.

**🧪 Example – Login feature**
If you log 20 defects across the app:
* 12 are in the password reset module.
* 4 in the dashboard.
* 4 in the profile page.

You now know the password reset module is a cluster. More testing (manual + automation) should be focused there.

**❓ Why an SDET needs to know this**
* When deciding where to invest automation effort, target the clusters first. Write more tests for the buggy areas.
* Retros may lead to refactoring those modules to reduce future defects.

---

### 29.4 ⌛ Defect Age
**🔍 Simple Analogy**
A carton of milk sits in your fridge. You check the expiry date: it’s been there for 12 days. The older it is, the more likely it’s spoiled and needs to be thrown out. In testing, a bug that’s been open too long might have become irrelevant or a bigger problem.

**💼 Professional Definition**
Defect Age is the time elapsed between a defect being reported and its closure. It can be measured in hours or days. Also, “defect age in phase” is the time since the defect was first logged without being fixed. A high defect age indicates delays in resolution.

**🧪 Example – Login feature**
* **Defect #100** was reported 45 days ago and is still in “Assigned” state because the developer was busy on another feature. It’s aged.
* **Defect #110** was logged this morning and fixed by lunch. Age is small.

*Metric:* Average defect age helps teams gauge their response time.

**❓ Why an SDET needs to know this**
* If a critical automated test fails and a defect is logged, you’d expect a short age before fix (hours/days). Long age on a blocker is a process problem.
* In CI/CD, if a test fails and no one acts, the defect age grows, and the release pipeline stays broken.

---

### 29.5 🎭 Defect Masking
**🔍 Simple Analogy**
You’re cleaning a wall, and you paint over a big stain without removing it first. The stain looks gone, but it’s still there — just hidden. Later, the stain bleeds through. In testing, a defect is masked when another defect prevents it from being seen.

**💼 Professional Definition**
Defect Masking occurs when one defect hides or prevents another defect from being visible or executable. The tester cannot find the second bug until the first one is fixed. Masking can lead to defect leakage.

**🧪 Example – Login feature**
* **Bug A:** The “Login” button doesn’t work at all (Critical). Because the button is dead, you can never test the “Remember Me” functionality.
* **Bug B:** “Remember Me” doesn’t persist session. (Hidden/masked by Bug A.)

Once Bug A is fixed, you can finally test Remember Me and discover Bug B. Bug B was masked.

**❓ Why an SDET needs to know this**
* When an automation test fails for an obvious reason, you may not realize other assertions later in the test are never reached. Fix the first bug, then run the test again to uncover any masked bugs.
* This is why after a big fix, regression testing is essential: unmask hidden defects.

---

### 29.6 📝 Explanation
> “Defect Triage is the meeting where we prioritize bugs for fixing. Defect Leakage measures how many bugs escape to production; we want it as low as possible. Defect Clustering tells us which modules are most bug‑prone, so we focus testing there. Defect Age tracks how long a bug stays unresolved, which reflects team responsiveness. Defect Masking happens when one bug hides another, so we retest thoroughly after fixes. Understanding these helps me not just log bugs, but also manage them effectively and improve the overall test strategy.”

---

## 30. Manual Testing Workbook Structure

A single Google Sheets workbook (e.g., `TestSuite_BankingApp`) organized into six tabs acts as the central hub for all manual testing artifacts:

| Tab Name | Purpose |
| :--- | :--- |
| **Requirements** | Extracted user stories, BRD/SRD references, and use case summaries. Acts as the source of truth for all testable requirements. |
| **TestCases** | Detailed test cases with columns: TC‑ID, Requirement Ref, Type, Title, Preconditions, Steps, Test Data, Expected Result, Actual Result, Status, Comments. |
| **SmokeTests** | A subset of critical test case IDs used for build acceptance. Run on every new build. |
| **Defects** | Full defect log with lifecycle tracking: Defect ID, Title, Linked TC‑ID, Severity, Priority, Status (New/Assigned/Open/Fixed/Retest/Closed/Reopened), Assigned To, Date Logged, Date Closed, Comments. |
| **RTM** | Requirements Traceability Matrix mapping Requirement ID → Test Scenario → Test Case IDs, with current execution status. |
| **TestSummary** | Executive dashboard containing test execution metrics, defect statistics, defect leakage, age, and clustering observations. Used for daily stand‑ups and release readiness. |

*Note: All manual testing artifacts are maintained here. Automation results (like Playwright test runs) are usually reported separately via CI/CD pipelines.*

---

## 31. Essential Manual Testing Concepts for SDETs

Since you are learning JavaScript/TypeScript with Playwright (a modern web automation tool), these 5 concepts are explained specifically through the lens of Web Applications and Playwright automation.

### 31.1 Test Data Management 
**🔍 Simple Analogy**
Imagine you are shooting a bank robbery scene in a movie. Do you use real million-dollar bills? No, you use prop money (fake cash) so nothing gets stolen. But sometimes, you need a prop that looks incredibly real, so you take a real $100 bill and cross out the serial number with a black marker.

**💼 Professional Definition**
Test Data Management is how you gather and control the data (users, products, credit cards) you use during testing.
* **Synthetic Data (Prop Money):** Fake data generated purely for testing (e.g., creating a fictional "john.doe123@fake.com").
* **Data Masking (Crossing out the serial number):** Taking real production data (actual users) and scrambling their names, emails, and passwords so developers and testers can use realistic data without violating privacy laws.
  * *Note on Privacy Laws:* **GDPR** (General Data Protection Regulation) is a strict European law that protects personal data. **HIPAA** (Health Insurance Portability and Accountability Act) is a US law that protects sensitive patient medical records. If you use unmasked real data in testing, your company can be fined millions!

**✋ Manual Testing Context**
As a manual tester, you will often need to ask your Database Administrator (DBA) to provide you with a "masked database dump" so you can manually log in and test different edge cases without seeing real customer passwords or credit cards. You might also manually create your own synthetic users through the UI to test the registration flow.

**🤖 Playwright/Automation Context**
When writing a Playwright test, **never hardcode a real user's password**. Instead, before your test runs, you might call an API to generate a brand new synthetic user dynamically, use that user to log in, test the UI, and then delete the user when the test finishes.

### 31.2 Test Environment Management
**🔍 Simple Analogy**
Think of a car factory:
1. **DEV:** The engineer's workbench where they are bolting random parts together. It's messy and breaks often.
2. **QA:** The private test track. Only testers are allowed here. You crash cars on purpose to see what happens.
3. **UAT / Staging:** The showroom. It looks *exactly* like the real dealership. You do a final walk-around to make sure the paint is shiny before handing the keys to a customer.
4. **Production:** The public highway. Real customers driving real cars.

**💼 Professional Definition**
Environments are different server setups where the application lives. They allow teams to test safely without ruining the live app for actual customers.

**✋ Manual Testing Context**
As a manual tester, you must always double-check the URL in your browser before you start clicking around. Are you manually testing a new bug fix? Make sure you are on `https://qa.myapp.com` and NOT `https://live.myapp.com`! It is a common beginner mistake to manually enter test data (like "Test Comment 123") into the Production environment where real users can see it.

**🤖 Playwright/Automation Context**
In Playwright, you handle environments using configurations (like `playwright.config.ts`). You set a `baseURL`.
* Run `npx playwright test --project=QA` → tests run against `https://qa.myapp.com`.
* Run `npx playwright test --project=Staging` → tests run against `https://staging.myapp.com`.
* You *rarely* run heavy automated tests on Production because you don't want to accidentally create 10,000 fake user accounts in your live database!

### 31.3 End-to-End (E2E) Testing vs. System Testing
**🔍 Simple Analogy**
* **System Testing:** You buy a toaster, plug it into the wall, push the lever down, and check if the coils get hot. You are just testing the toaster.
* **E2E Testing:** You go to the grocery store, buy bread, bring it home, put it in the toaster, toast it, put butter on it, and eat it. You are testing the entire "breakfast journey".

**💼 Professional Definition**
* **System Testing:** Verifying that a fully integrated application works as specified. It usually isolates the app from outside services (mocking the database or payment gateway).
* **E2E Testing:** Validating the software from start to finish along with all external interfaces (like a real database, real 3rd-party Stripe APIs, real email servers) to ensure the complete user journey works.

**✋ Manual Testing Context**
To perform an E2E manual test, you have to behave exactly like a real customer. You don't just click the "Buy" button; you start by creating a brand new account, adding an item, checking out with a test credit card provided by Stripe, opening your actual Gmail inbox to verify the receipt arrived, and then logging into the Admin dashboard to make sure the order appears there. It is slow and tedious, but highly accurate.

**🤖 Playwright/Automation Context**
Playwright is literally built to automate these tedious E2E manual tests! A true E2E Playwright test will:
1. Open a Chromium browser.
2. Log into the web app.
3. Add a product to the cart.
4. Type in a test credit card number that is sent to the real Stripe testing API.
5. Wait for the success page.
6. Check a real email inbox (using an API) to verify the receipt was actually delivered.

### 31.4 Mobile Web Testing Basics
**🔍 Simple Analogy**
Reading a giant broadsheet newspaper sitting at a big desk is easy. Taking that same newspaper, folding it up, and trying to read it with one hand on a crowded moving train is hard. The content is the same, but the environment completely changes how you interact with it.

**💼 Professional Definition**
Testing how a web application behaves on mobile devices. It involves checking responsiveness (does the CSS shrink properly?), orientation (Portrait vs. Landscape), touch gestures (swiping instead of clicking), and device-specific conditions (low battery, poor 3G network).

**✋ Manual Testing Context**
Manual mobile testing often involves keeping a drawer full of real physical devices (iPhones, Androids, Tablets). You literally pick up the phone, install the app or open Safari, and poke the screen with your finger. You manually check what happens when you rotate the phone (Landscape mode), when you receive a phone call mid-test, or when you switch from Wi-Fi to a cellular hotspot. 

**🤖 Playwright/Automation Context**
You don't always need a physical iPhone in your hand! Playwright has built-in mobile emulation. In your config, you can define projects using `devices['iPhone 13']`. Playwright will automatically resize the viewport, emulate the user agent, and simulate touch events so you can test if your mobile "hamburger menu" opens correctly, all on your laptop.

### 31.5 Root Cause Analysis (RCA) - The "5 Whys" & "Fishbone Diagram"
**🔍 Simple Analogy**
You walk into your kitchen and find a puddle of water on the floor.
* **Fixing the Symptom:** You grab a mop and clean up the water. (The bug is "fixed", but the floor will get wet again tomorrow).
* **Root Cause Analysis (RCA):** You look up, find a leaky pipe in the ceiling, and replace the pipe. (The bug is gone forever).

**💼 Professional Definition**
RCA is a systematic process for identifying the fundamental, underlying reason a defect occurred, so you can prevent it from ever happening again, rather than just patching the immediate code error.

#### Technique A: The "5 Whys"
A simple technique where you ask "Why?" repeatedly until you hit the core process failure.

**✋ Manual Testing Context Example:**
Imagine you are manually testing and you click a "Submit" button, but the page freezes for 30 seconds and then shows a generic "Error 500" screen. A poor tester will log a defect saying: *"Submit button is broken."* A great SDET/QA will use the 5 Whys to investigate:
1. **Why did it break?** Because the server returned a 500 error.
2. **Why did the server return a 500 error?** I checked the DevTools network tab, and the API request timed out.
3. **Why did it time out?** I checked the server logs, and the database took too long to respond.
4. **Why did the database take too long?** Because it had to search 1 million records without an index.
5. **Why was there no index?** *(Root Cause)* Because the developer forgot to include the index script.

**🤖 Playwright/Automation Context Example:**
If your automated Playwright test fails overnight with a "TimeoutError" trying to click that same 'Submit' button, Playwright is just telling you the symptom (the button didn't appear). Your job as an SDET is to pause the automation, look at the Playwright Trace Viewer or video recording, and then manually apply the "5 Whys" (just like above) to figure out if it was a flaky test, a slow network, or a true database bug.

#### Technique B: The Fishbone (Ishikawa) Diagram
A visual tool used in meetings when a bug is very complex and could have multiple causes. You draw a "fish skeleton" with the main problem at the head, and "bones" representing different categories that might have contributed.

* **The Head (The Problem):** The Production server crashed during Black Friday sales.
* **The Bones (Categories):**
  * **People:** The junior dev deployed unapproved code.
  * **Process:** The QA team skipped the manual Load Testing phase because they ran out of time.
  * **Technology:** The AWS servers were not configured to auto-scale.
  * **Environment:** The staging environment didn't have enough data to simulate a real Black Friday load, so the manual tests passed in Staging but failed in Prod.

By looking at the Fishbone, the team realizes the Root Cause isn't just one thing—it's a combination of a broken process (skipping load tests) and a bad environment (Staging not matching Prod).
