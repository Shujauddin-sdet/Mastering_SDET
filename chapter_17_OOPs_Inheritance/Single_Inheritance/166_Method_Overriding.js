// Parent class
class BaseTest {
    setup() {
        console.log("Base: open browser"); // Default setup
    }
}

// Child class inheriting from BaseTest
class APITest extends BaseTest {
    // This method has the same name 'setup' as the parent's method.
    // This is called "Method Overriding". The child's method replaces the parent's method.
    setup() {
        console.log("APITest: open browser"); // Specific setup for API test
    }
}

// Create an object of the child class
let test = new APITest();
test.setup(); // Because we created an APITest object, its own overridden setup() is called, not the parent's.