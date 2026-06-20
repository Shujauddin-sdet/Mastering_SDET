// Exporting the BasePage class so it can be imported and used in other files
export class BasePage {
    // Constructor method that initializes the class with a specific name
    constructor(name) {
        // Assign the passed 'name' argument to the instance property 'this.name'
        this.name = name;
    }

    // A method to simulate opening a page
    open() {
        // Output a message indicating which page is being opened using the instance property
        console.log("Opening " + this.name);
    }
}