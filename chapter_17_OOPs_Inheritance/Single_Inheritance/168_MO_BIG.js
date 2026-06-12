// Parent class with a generic execute method
class TestCase {
    execute() {
        console.log("Running generic test");
    }
}

// Child classes that override the execute method with their own specific implementations (Polymorphism)
class UnitTest extends TestCase {
    execute() {
        console.log("Running unit test — checking one function");
    }
}

class APITest extends TestCase {
    execute() {
        console.log("Running API test — sending HTTP request");
    }
}

class E2ETest extends TestCase {
    execute() {
        console.log("Running E2E test — opening browser");
    }
}

// Create an array containing different types of test objects
let tests = [new UnitTest(), new APITest(), new E2ETest()];

// Loop through each test object in the array
tests.forEach(function (test) {
    // Each object calls its own specific version of execute()
    // This is Polymorphism in action: same method name, different behaviors!
    test.execute();
});