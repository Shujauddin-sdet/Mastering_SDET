// Define a base class named Father
class Father {
  // Define a method that can be shared with derived classes
  sleep() {
    // Output a message indicating the action of sleeping
    console.log("Sleeping...");
  }
}

// Define the Son1 class that inherits from the Father class
class Son1 extends Father {
  // Define a method specific to Son1
  walk() {
    // Output a message indicating the action of walking
    console.log("Walking...");
  }
}

// Define the Son2 class that also inherits from the Father class (Hierarchical Inheritance)
class Son2 extends Father {
  // Define a method specific to Son2
  run() {
    // Output a message specific to Son2's behavior
    console.log("Need to wake up Father to go for a run...");
  }
}

// Create an instance of the Son1 class
const obj1 = new Son1();
// Call the sleep method inherited from the Father class
obj1.sleep();
// Call the walk method defined in the Son1 class
obj1.walk();

// Output a visual separator for clarity in the console
console.log("---------------------------------------------------");

// Create an instance of the Son2 class
const obj2 = new Son2();
// Call the sleep method inherited from the Father class
obj2.sleep();
// Call the run method defined in the Son2 class
obj2.run();
