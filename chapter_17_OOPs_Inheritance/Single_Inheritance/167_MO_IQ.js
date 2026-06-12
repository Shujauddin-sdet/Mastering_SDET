// Parent class with generic setup and teardown methods
class BaseTest {
    setup() {
        console.log("Base: open browser");
    }

    teardown() {
        console.log("Base: close browser");
    }
}

// Child class overriding parent methods
class UITest extends BaseTest {
    setup() {
        // super.setup() calls the parent's setup() method first!
        // super() is for constructors, super.methodName() is for functions.
        super.setup(); 
        console.log("UI: maximize window"); // Then it adds its own extra step
    }

    teardown() {
        console.log("UI: take screenshot"); // First does its own specific teardown step
        super.teardown(); // Then calls the parent's teardown() to finish up
    }
}

// Create a UITest object
let test = new UITest();
// Calls the overridden setup which does both parent and child steps
test.setup();
console.log("---"); // Separator for clear output
// Calls the overridden teardown which does both child and parent steps
test.teardown();