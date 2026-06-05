// Define a class named TestRunner
class TestRunner {
    // STATIC PROPERTIES: belong to the class itself, NOT to individual instances.
    // All instances share the same totalTests and passCount.
    static totalTests = 0;   // counts how many test objects have been created
    static passCount = 0;    // counts how many of those tests passed

    // The constructor runs every time we create a new instance (new TestRunner(...))
    constructor(name, passed) {
        // INSTANCE PROPERTY: each test object gets its own `name`
        this.name = name;

        // ❗ IMPORTANT: Inside a constructor, `this` refers to the NEW instance.
        // Static properties do NOT belong to the instance, so we must access them
        // using the class name: `TestRunner.totalTests`.
        TestRunner.totalTests++;   // increment total test count by 1

        // If the `passed` argument is true, increment the static passCount.
        if (passed) {
            TestRunner.passCount++;
        }
    }

    // INSTANCE METHOD: called on a specific test object.
    // `this` inside here refers to that instance.
    non_static_display() {
        return this.name;   // returns the name of this specific test
    }

    // STATIC METHOD: called on the class itself (TestRunner.summary()).
    // Inside a static method, `this` refers to the class (TestRunner).
    // So we could also write `this.passCount` and `this.totalTests`.
    static summary() {
        // Return a string showing how many tests passed out of total created.
        return TestRunner.passCount + "/" + TestRunner.totalTests + " passed";
    }
}

// Create four test objects (instances)
new TestRunner("Login", true);    // totalTests = 1, passCount = 1
new TestRunner("Signup", false);  // totalTests = 2, passCount = 1
new TestRunner("Cart", true);     // totalTests = 3, passCount = 2
new TestRunner("Checkout", true); // totalTests = 4, passCount = 3

// Call the static method on the class (NOT on any instance)
console.log(TestRunner.summary()); // Output: "3/4 passed"

// ❗ Static methods belong to the class, so you cannot call them on an instance:
// const runner = new TestRunner("Dummy", true);
// runner.summary(); // ❌ TypeError: runner.summary is not a function