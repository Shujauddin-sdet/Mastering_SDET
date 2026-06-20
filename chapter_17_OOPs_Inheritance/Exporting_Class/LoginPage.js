// Importing the BasePage class from the local Basepage.js file to enable inheritance
import { BasePage } from "./Basepage.js";

// Exporting the LoginPage class, which extends (inherits from) the BasePage class
export class LoginPage extends BasePage {
    // Constructor method for the LoginPage class
    constructor() {
        // Call the parent class's constructor (BasePage) and pass "Login Page" as the name
        super("Login Page");
    }

    // A method specific to LoginPage to simulate a user logging in
    login(user) {
        // Output a message showing which user has successfully logged in
        console.log(user + " logged in");
    }
}