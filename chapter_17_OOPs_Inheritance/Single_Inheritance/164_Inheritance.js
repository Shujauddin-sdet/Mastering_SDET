// Inheritance in JavaScript: A way for one class to use methods and properties from another class.

// This is the parent class (BasePage)
class BasePage {
    constructor(pageName) {
        this.pageName = pageName; // Sets the name of the page
    }

    open() {
        console.log("Opening the page "); // Simulates opening a page
    }
    close() {
        console.log("Closing the page "); // Simulates closing a page
    }

}

// This is the child class (LoginPage) that inherits from BasePage using 'extends'
class LoginPage extends BasePage {
    // It's empty, but it automatically gets open() and close() from BasePage!
}

// Create a new object of the child class
let page = new LoginPage();
// Even though LoginPage is empty, we can call open() and close() because it inherited them
page.open();
page.close();

// LoginPage never defined open() or close() — it got them from BasePage. That's inheritance.

