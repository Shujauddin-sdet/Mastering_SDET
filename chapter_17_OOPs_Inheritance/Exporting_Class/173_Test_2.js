// Importing the LoginPage class from the local LoginPage.js file
import { LoginPage } from "./LoginPage.js";

// Create a new instance (object) of the LoginPage class
let page = new LoginPage();

// Call the open method, which is inherited from the BasePage class
page.open();

// Call the login method, which is defined in the LoginPage class
page.login("admin");