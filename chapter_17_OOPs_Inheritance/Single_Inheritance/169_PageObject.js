// Parent class representing a generic web page
class BasePage {
    verify() {
        console.log("Verifying base page");
    }
}

// Child classes for specific pages, each overriding the verify() method with its own checks
class LoginPage extends BasePage {
    verify() {
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button is visible");
    }
}

class DashboardPage extends BasePage {
    verify() {
        console.log("Verify: welcome message shown");
        console.log("Verify: sidebar menu loaded");
    }
}

class CartPage extends BasePage {
    verify() {
        console.log("Verify: cart items displayed");
        console.log("Verify: total price is correct");
    }
}

// Create an array of different page objects
let pages = [new LoginPage(), new DashboardPage(), new CartPage()];

// Loop through the pages and verify each one
pages.forEach(function (page) {
    // The correct verify() method is automatically called based on the object type
    page.verify();
    console.log("---"); // Separator for readability
});