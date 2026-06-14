# Topics

* [1. What is Software Testing?](#1-what-is-software-testing)
  * [1.1 Why do we need Software Testing?](#11-why-do-we-need-software-testing)
* [2. Types of Software Testing](#2-types-of-software-testing)
* [3. Types of Manual Testing](#3-types-of-manual-testing)
  * [3.1 Testing Methodologies (Techniques)](#31-testing-methodologies-techniques)
  * [3.2 Levels of Testing](#32-levels-of-testing)
  * [3.3 Testing Types (Functional vs. Non-Functional)](#33-testing-types-functional-vs-non-functional)
  * [3.4 Static vs. Dynamic Testing](#34-static-vs-dynamic-testing)
  * [3.5 Positive vs. Negative Testing](#35-positive-vs-negative-testing)
  * [3.6 Re-testing vs. Regression Testing](#36-re-testing-vs-regression-testing)
  * [3.7 Other Testing Types](#37-other-testing-types)
  * [3.8 Maintenance Testing](#38-maintenance-testing)
  * [3.9 Experience-Based Testing](#39-experience-based-testing)
  * [3.10 Globalization (i18n) vs. Localization (l10n)](#310-globalization-i18n-vs-localization-l10n)
  * [3.11 Accessibility Testing (A11y)](#311-accessibility-testing-a11y)
  * [3.12 Compatibility Testing](#312-compatibility-testing)
* [4. How to Perform Manual Testing?](#4-how-to-perform-manual-testing)
* [5. SDLC (Software Development Life Cycle)](#5-sdlc-software-development-life-cycle)
  * [5.1 Different Stakeholders of SDLC](#51-different-stakeholders-of-sdlc)
  * [5.2 SDLC Phases](#52-sdlc-phases)
  * [5.3 SDLC Models](#53-sdlc-models)
    * [5.3.1 Waterfall Model / Linear Sequential Model](#531-waterfall-model--linear-sequential-model)
    * [5.3.2 Iterative Model](#532-iterative-model)
    * [5.3.3 Spiral Model](#533-spiral-model)
    * [5.3.4 V-Model (Verification & Validation Model)](#534-v-model-verification--validation-model)
    * [5.3.5 Agile Development Model](#535-agile-development-model)
    * [5.3.6 Prototype Model](#536-prototype-model)
    * [5.3.7 Hybrid Model](#537-hybrid-model)
    * [5.3.8 Derived Model](#538-derived-model)
    * [5.3.9 DevOps Model (Modern)](#539-devops-model-modern)
* [6. Project vs. Product](#6-project-vs-product)
* [7. Product-Based vs. Service-Based Companies](#7-product-based-vs-service-based-companies)

## 1. What is Software Testing?

* Software Testing is a process of evaluating and verifying that a software product or application does what it is supposed to do. It helps identify defects, gaps, or missing requirements in the software.
* Testing of an application to find the defects.
* Testing of an application to meet the requirements.

### 1.1 Why do we need Software Testing?

* **Quality Assurance**: Ensures the final product is reliable, functions correctly, and meets user expectations.
* **Cost Effectiveness**: Finding bugs early in the development phase is much cheaper than fixing them after the software goes live.
* **Security**: Identifies vulnerabilities and protects sensitive user data from hackers and malicious attacks.
* **User Satisfaction**: A bug-free and smooth application provides a great user experience, building trust with customers.
* **Business Reputation**: Launching a faulty product can damage a company's reputation and result in loss of business.
* **Performance Check**: Ensures the software can handle expected user loads and doesn't crash under pressure.

---

## 2. Types of Software Testing

* Manual Testing: Testing done by human, Human performs the tests step by step without test scripts.(test scripts means a set of instructions that are written to perform a specific task.)
  The tester performs the tests step by step manually.

* Automated Testing: Testing done by machine. Tests are executed automatically via test automation frameworks , along with other tools and softwares.

---

## 3. Types of Manual Testing

![Manual Testing](../Images/TypesofManual_Testing.png)

Manual Testing can be broadly classified into three main approaches:

### 3.1 Testing Methodologies (Techniques)

* **Black Box Testing:** Testing without knowing the internal code/structure. Focuses on inputs and outputs.
* **White Box Testing:** Testing with full knowledge of the internal code and structure. (Also known as Glass Box Testing).
* **Gray Box Testing:** A mix of both; testing with partial knowledge of the internal workings.

### 3.2 Levels of Testing

![Levels of Testing](../Images/Levels_of_Testing.png)

* **Unit Testing:** Testing individual components or modules in isolation.
* **Integration Testing:** Testing how different modules work together.
* **System Testing:** Testing the complete and integrated software as a whole.
* **Acceptance Testing:** Final testing to ensure the software is ready for the end-user.
  * **Alpha Testing:** Performed by internal employees at the developer's site.
  * **Beta Testing:** Performed by real users in their own environment.

### 3.3 Testing Types (Functional vs. Non-Functional)

![Functional vs Non-Functional testing](../Images/Functional_vs_NonFunctional.png)

**Functional Testing:** Verifying **what** the software does.

* **Smoke Testing:** Checking if the build is stable enough for further testing.
* **Sanity Testing:** A quick check of specific functionality after a bug fix or change.
* **Regression Testing:** Ensuring new changes haven't broken existing functionalities.

**Non-Functional Testing:** Verifying **how** the software performs.

* **Performance Testing:** Checking responsiveness, stability, and speed.
* **Usability Testing:** Checking how user-friendly the application is.
* **Compatibility Testing:** Checking if the app works on different browsers, OS, or devices.
* **Security Testing:** Identifying vulnerabilities and ensuring data protection.

### 3.4 Static vs. Dynamic Testing

* **Static Testing:** Testing without executing the code. Examples: Code reviews, inspections, and walkthroughs.
* **Dynamic Testing:** Testing by executing the code and validating the output against expected results.

### 3.5 Positive vs. Negative Testing

* **Positive Testing:** Validating the system with "Happy Path" data (valid inputs). It checks if the system does what it's supposed to.
* **Negative Testing:** Validating how the system handles invalid data or unexpected behavior. It checks if the system doesn't do what it's NOT supposed to (error handling).

### 3.6 Re-testing vs. Regression Testing

This is a critical distinction to remember:

| Feature | Re-testing | Regression Testing |
| :--- | :--- | :--- |
| **Purpose** | To verify a specific bug fix. | To ensure existing features still work after changes. |
| **Execution** | Done before Regression testing. | Done after Re-testing is successful. |
| **Scope** | Only the failed test cases are re-run. | All related features are checked. |
| **Automation** | Difficult to automate (one-time fix). | Highly recommended for automation. |

### 3.7 Other Testing Types

* **Ad-hoc Testing:** Informal testing performed without any plan or documentation.
* **Exploratory Testing:** Simultaneous learning, test design, and test execution.

### 3.8 Maintenance Testing

Testing on software already in production.
    ***Purpose:** Checking the system after Bug Fixes, New Features, or Migrations.
    * **Focus:** Ensuring updates haven't introduced "side-effect" bugs.

### 3.9 Experience-Based Testing

Relies on the tester's intuition and past knowledge.
    ***Error Guessing:** Guessing where developers usually make mistakes.
    * **Monkey Testing:** Providing random, senseless data to see if it crashes.
    * **Gorilla Testing:** Repeatedly testing one specific module until it breaks.

### 3.10 Globalization (i18n) vs. Localization (l10n)

* **Globalization:** Technically supporting different languages, formats, and currencies.
* **Localization:** Adapting the app for a specific region (e.g., right-to-left text for Arabic).

### 3.11 Accessibility Testing (A11y)

Ensuring use for people with disabilities.
    * **Focus:** Screen readers, high-contrast modes, and keyboard-only navigation.

### 3.12 Compatibility Testing

Verifying if the app works across different:
    ***Browsers:** Chrome, Safari, Firefox.
    * **Operating Systems:** Windows, macOS, Linux.
    * **Mobile Devices:** iOS, Android.

---

## 4. How to Perform Manual Testing?

* **Analyze:** Understand the requirements and project scope.
* **Plan:** Define the test strategy, resources, and schedule.
* **Design:** Create detailed test cases and scenarios.
* **Execute:** Perform tests manually and record results.
* **Log:** Report defects and track them to resolution.
* **Close:** Verify fixes and provide a final summary report.

![Manual Testing Steps](../Images/Perform_Manual_Testing.png)

1. **Understand the requirements**: Analyze the business and system needs before starting the testing process.

---

## 5. SDLC (Software Development Life Cycle)

### 5.1 Different Stakeholders of SDLC

1. Business Analyst
2. Project Manager
3. Development Team
4. Quality Assurance Team
5. End User

---

### 5.2 SDLC Phases

Any project development has to follow the below phases:

1. **Planning**: Gathering requirements and defining the project scope.
![Planning](../Images/Planning.png)
2. **Analysis**: Evaluating requirements for feasibility and technical details.
    * **Key documents used:**
        * **BRD (Business Requirement Document):** High-level goals of what the business needs.
        * **SRS (System Requirement Specification):** Detailed technical and functional requirements.
        * **FRD/FRS (Functional Requirement Document/Specification):** Specific description of how individual features should work.

3. **Design**: Creating the system architecture and user interface blueprints.
4. **Implementation (Coding)**: Writing the actual source code to build the product.
5. **Testing**: Verifying the software to find defects and ensure quality.
6. **Maintenance**: Fixing bugs and updating the system after it goes live.
   * **Feedback**: Gathering user input to improve the system.

---

### 5.3 SDLC Models

![SDLC Models](../Images/Model_SDLC.png)

#### 5.3.1 Waterfall Model / Linear Sequential Model

![Waterfall Model Phases](../Images/Waterfall_Phases.png)
![When to choose waterfall model](../Images/Choose_Waterfall_Model.png)
![Advantages of Waterfall](../Images/Advantage_waterfall_model.png)
![Disadvantages of Waterfall](../Images/Disadvantage_waterfall.png)

* **Meaning**: The oldest and simplest model where development flows steadily downwards through several phases.
* **Easy to Remember**: Like a **Waterfall**, the flow is only **downward**. Once you cross a stage, you cannot go back easily.
* **Key Highlights**:
  * Linear and sequential.
  * Best for small projects with fixed, clear requirements.
  * **Cons**: Extremely rigid; not suitable for projects where requirements change.

#### 5.3.2 Iterative Model

![Iterative Model Phases](../Images/Iterative_Phases.png)

* **Meaning**: Instead of starting with full requirements, you build a small part, then repeatedly enhance it in "iterations."
* **Easy to Remember**: **"Repeat and Improve."** Think of it like a **Draft**—you write one, then improve it again and again.
* **Key Highlights**:
  * Builds the system in small cycles.
  * Helps in finding design flaws early.

**Advantages of Iterative Model:**

* **Flexible**: Easy to adapt to changes between iterations.
* **Manageable**: Breaking the project into smaller cycles makes it easier to track.
* **Early Flaw Detection**: Design flaws are identified and fixed early in the process.

**Disadvantages of Iterative Model:**

* **Not for Large Projects**: Can become complex and hard to track for massive systems.
* **Requirement Changes**: While flexible, frequent core requirement changes can still disrupt the flow.

#### 5.3.3 Spiral Model

![Spiral Model Phases](../Images/Spiral_Phases.png)

* **Meaning**: A mix of Waterfall and Iterative models with a heavy focus on **Risk Analysis**.
* **Easy to Remember**: It **spirals** through four quadrants: Planning, Risk Analysis, Engineering, and Evaluation.
* **Key Highlights**:
  * Best for large, expensive, and high-risk projects.
  * Continuous feedback and risk assessments are the core.

#### 5.3.4 V-Model (Verification & Validation Model)

![V-Model Phases](../Images/V_Model_Phases.png)

* **Meaning**: An extension of Waterfall where every development phase has a corresponding testing phase happening side-by-side.
* **Easy to Remember**: Look at it as a **"V" shape**. For every **Dev** step on the left, there is a **Test** step on the right.
* **Key Highlights**:
  * Proactive; testing is planned right from the start.
  * Very disciplined and easy to manage.

#### 5.3.5 Agile Development Model

![Agile Development Phases](../Images/Agile_Phases.png)

* **Meaning**: Focuses on iterative development, customer feedback, and small, rapid releases called **Sprints**.
* **Easy to Remember**: **"Fast & Flexible."** It's like a **Marathon of Sprints**—fast cycles with constant communication.
* **Key Highlights**:
  * Highest customer satisfaction due to continuous delivery.
  * Embraces changes even late in the project.

#### 5.3.6 Prototype Model

* **Meaning**: A "Sample" or "Mock-up" of the product is built first to show the client before the actual coding starts.
* **Easy to Remember**: **"Trial First."** Building a **Toy Model** of a car before building the real one.
* **Key Highlights**:
  * Reduces the gap between client expectations and final product.
  * Helps in gathering accurate requirements.

#### 5.3.7 Hybrid Model

* **Meaning**: A combination of two or more models (like Waterfall + Agile) to get the benefits of both.
* **Easy to Remember**: **"Best of Both Worlds."** Using different tools and styles to fit a unique project.
* **Key Highlights**:
  * Very flexible and tailored to specific business needs.

#### 5.3.8 Derived Model

* **Meaning**: These are models modified or "derived" from traditional ones to fit specialized industry standards.
* **Easy to Remember**: **"Customized."** Tailoring a suit—it starts from a pattern but is adjusted to fit perfectly.
* **Key Highlights**:
  * Highly specialized for complex, large-scale systems.

#### 5.3.9 DevOps Model (Modern)

![DevOps Model Phases](../Images/DevOps_Phases.png)

* **Meaning**: A combination of **Development (Dev)** and **Operations (Ops)** to automate and speed up the software delivery.
* **Easy to Remember**: **"Continuous Loop."** An infinite sign (∞) showing constant coding, testing, and deployment.
* **Key Highlights**:
  * Focuses on automation and continuous monitoring.
  * Enables multiple releases in a single day.

---

## 6. Project vs. Product

* **Project**: When software is developed for a **specific client** based on their unique requirements, within a fixed budget and timeline.
  * **Easy to Remember**: **"Custom Made."** Like getting a suit tailored just for you.
  * **Example**: A custom banking app built only for "HDFC Bank."
* **Product**: When software is developed for the **general market** or multiple users (not just one client).
  * **Easy to Remember**: **"Ready to Wear."** Like buying a shirt from a store that anyone can buy.
  * **Example**: WhatsApp, Microsoft Word, or Google Maps.

---

## 7. Product-Based vs. Service-Based Companies

### 7.1 Product-Based Companies

These companies build their **own products** to sell directly to the market or users.

* **Focus**: Improving their own software, innovation, and user experience.
* **Examples**:
  * **Google** (Search, Gmail)
  * **Microsoft** (Windows, Office)
  * **Meta** (Facebook, Instagram)
  * **Amazon** (Shopping site, AWS)

### 7.2 Service-Based Companies

These companies provide **services** or build software for **other clients** (they work on Projects).

* **Focus**: Delivering projects on time and meeting the client's specific needs.
* **Examples**:
  * **TCS** (Tata Consultancy Services)
  * **Infosys**
  * **Accenture**
  * **Wipro**
  * **Cognizant**

---

   What is Risk?
   Risk is the possibility of something bad happening that could affect the project.

   differnt type of Risk:
   a) Technical Risk
   b) Schedule Risk
   c) Cost Risk
   d) Resource Risk
   e) Management Risk
   f) External Risk
