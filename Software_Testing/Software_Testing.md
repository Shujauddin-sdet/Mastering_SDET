# Topics

* [What is Software Testing?](#what-is-software-testing)
* [Types of Software Testing](#types-of-software-testing)
* [Types of Manual Testing](#types-of-manual-testing)
    * [1. Testing Methodologies (Techniques)](#1-testing-methodologies-techniques)
    * [2. Levels of Testing](#2-levels-of-testing)
    * [3. Testing Types (Functional vs. Non-Functional)](#3-testing-types-functional-vs-non-functional)
    * [4. Static vs. Dynamic Testing](#4-static-vs-dynamic-testing)
    * [5. Positive vs. Negative Testing](#5-positive-vs-negative-testing)
    * [6. Re-testing vs. Regression Testing](#6-re-testing-vs-regression-testing)
    * [7. Other Testing Types](#7-other-testing-types)
    * [8. Maintenance Testing](#8-maintenance-testing)
    * [9. Experience-Based Testing](#9-experience-based-testing)
    * [10. Globalization vs. Localization Testing](#10-globalization-vs-localization-testing)
    * [11. Accessibility Testing (A11y)](#11-accessibility-testing-a11y)
    * [12. Compatibility Testing](#12-compatibility-testing)



## What is Software Testing?

* Software Testing is a process of evaluating and verifying that a software product or application does what it is supposed to do. It helps identify defects, gaps, or missing requirements in the software.
* Testing of an application to find the defects.
* Testing of an application to meet the requirements.

--------------------------

## Types of Software Testing

* Manual Testing: Testing done by human, Human performs the tests step by step without test scripts.(test scripts means a set of instructions that are written to perform a specific task.)
  The tester performs the tests step by step manually.

* Automated Testing: Testing done by machine. Tests are executed automatically via test automation frameworks , along with other tools and softwares.

--------------------------
## Types of Manual Testing

![Manual Testing](../Self_Learnings/Images/TypesofManual_Testing.png)

Manual Testing can be broadly classified into three main approaches:

### 1. Testing Methodologies (Techniques)
* **Black Box Testing:** Testing without knowing the internal code/structure. Focuses on inputs and outputs.
* **White Box Testing:** Testing with full knowledge of the internal code and structure. (Also known as Glass Box Testing).
* **Gray Box Testing:** A mix of both; testing with partial knowledge of the internal workings.

### 2. Levels of Testing
![Levels of Testing](../Self_Learnings/Images/Levels_of_Testing.png)

* **Unit Testing:** Testing individual components or modules in isolation.
* **Integration Testing:** Testing how different modules work together.
* **System Testing:** Testing the complete and integrated software as a whole.
* **Acceptance Testing:** Final testing to ensure the software is ready for the end-user.
    * **Alpha Testing:** Performed by internal employees at the developer's site.
    * **Beta Testing:** Performed by real users in their own environment.

### 3. Testing Types (Functional vs. Non-Functional)

![Functional vs Non-Functional testing](../Self_Learnings/Images/Functional_vs_NonFunctional.png)

**Functional Testing:** Verifying **what** the software does.
* **Smoke Testing:** Checking if the build is stable enough for further testing.
* **Sanity Testing:** A quick check of specific functionality after a bug fix or change.
* **Regression Testing:** Ensuring new changes haven't broken existing functionalities.

**Non-Functional Testing:** Verifying **how** the software performs.
* **Performance Testing:** Checking responsiveness, stability, and speed.
* **Usability Testing:** Checking how user-friendly the application is.
* **Compatibility Testing:** Checking if the app works on different browsers, OS, or devices.
* **Security Testing:** Identifying vulnerabilities and ensuring data protection.

### 4. Static vs. Dynamic Testing
* **Static Testing:** Testing without executing the code. Examples: Code reviews, inspections, and walkthroughs.
* **Dynamic Testing:** Testing by executing the code and validating the output against expected results.

### 5. Positive vs. Negative Testing
* **Positive Testing:** Validating the system with "Happy Path" data (valid inputs). It checks if the system does what it's supposed to.
* **Negative Testing:** Validating how the system handles invalid data or unexpected behavior. It checks if the system doesn't do what it's NOT supposed to (error handling).

### 6. Re-testing vs. Regression Testing
This is a critical distinction to remember:

| Feature | Re-testing | Regression Testing |
| :--- | :--- | :--- |
| **Purpose** | To verify a specific bug fix. | To ensure existing features still work after changes. |
| **Execution** | Done before Regression testing. | Done after Re-testing is successful. |
| **Scope** | Only the failed test cases are re-run. | All related features are checked. |
| **Automation** | Difficult to automate (one-time fix). | Highly recommended for automation. |

### 7. Other Testing Types
* **Ad-hoc Testing:** Informal testing performed without any plan or documentation.
* **Exploratory Testing:** Simultaneous learning, test design, and test execution.

### 8. Maintenance Testing
Testing on software already in production.
    * **Purpose:** Checking the system after Bug Fixes, New Features, or Migrations.
    * **Focus:** Ensuring updates haven't introduced "side-effect" bugs.

### 9. Experience-Based Testing
Relies on the tester's intuition and past knowledge.
    * **Error Guessing:** Guessing where developers usually make mistakes.
    * **Monkey Testing:** Providing random, senseless data to see if it crashes.
    * **Gorilla Testing:** Repeatedly testing one specific module until it breaks.

### 10. Globalization (i18n) vs. Localization (l10n)
* **Globalization:** Technically supporting different languages, formats, and currencies.
* **Localization:** Adapting the app for a specific region (e.g., right-to-left text for Arabic).

### 11. Accessibility Testing (A11y)
Ensuring use for people with disabilities.
    * **Focus:** Screen readers, high-contrast modes, and keyboard-only navigation.

### 12. Compatibility Testing
Verifying if the app works across different:
    * **Browsers:** Chrome, Safari, Firefox.
    * **Operating Systems:** Windows, macOS, Linux.
    * **Mobile Devices:** iOS, Android.

-----------
## How to Perform Manual Testing?
* **Analyze:** Understand the requirements and project scope.
* **Plan:** Define the test strategy, resources, and schedule.
* **Design:** Create detailed test cases and scenarios.
* **Execute:** Perform tests manually and record results.
* **Log:** Report defects and track them to resolution.
* **Close:** Verify fixes and provide a final summary report.

![Manual Testing Steps](../Self_Learnings/Images/Perform_Manual_Testing.png)

1. Understand the requirements.
-------
## SDLC (Software Development Life Cycle)

### Differnt stakeholders of SDLC
* 1. Business Analyst
* 2. Project Manager
* 3. Development Team
* 4. Quality Assurance Team
* 5. End User

---

Six phases of SDLC, Any project Developmeent has to follow th ebelow phases :

1. **Planning**: Gathering requirements and defining the project scope.
![Planning](../Self_Learnings/Images/Planning.png)
2. **Analysis**: Evaluating requirements for feasibility and technical details.
    * **Key documents used:**
        * **BRD (Business Requirement Document):** High-level goals of what the business needs.
        * **SRS (System Requirement Specification):** Detailed technical and functional requirements.
        * **FRD/FRS (Functional Requirement Document/Specification):** Specific description of how individual features should work.

3. **Design**: Creating the system architecture and user interface blueprints.
4. **Implementation (Coding)**: Writing the actual source code to build the product.
5. **Testing**: Verifying the software to find defects and ensure quality.
6. **Maintenance**: Fixing bugs and updating the system after it goes live.
----
Types of model of

1. **Waterfall Model**: A linear and sequential approach where each phase must be completed before the next one begins. It is simple to manage but lacks flexibility for changes.
2. **V-Model**: An extension of the Waterfall model that emphasizes a "Verification and Validation" approach, where a corresponding testing phase is planned for every development stage.
3. **Incremental Model**: The software is developed and delivered in small, functional parts (increments). Each increment adds new functionality until the full system is complete.
4. **Spiral Model**: A risk-driven model that combines iterative development with the systematic aspects of the Waterfall model, focusing heavily on identifying and minimizing project risks.
5. **Agile Model**: An iterative and incremental approach that focuses on flexibility, continuous feedback, and rapid delivery of functional software in short cycles called sprints.
6. **DevOps Model**: A cultural and technical approach that integrates development (Dev) and operations (Ops) teams to automate and streamline the entire software lifecycle for faster, more reliable releases.
