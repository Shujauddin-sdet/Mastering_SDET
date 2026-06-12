// Parent class representing a generic Animal
class Animal {
    constructor(name) {
        this.name = name; // Every animal has a name
    }

    eat() {
        console.log(this.name + " is eating"); // Generic eating action
    }

    sleep() {
        console.log(this.name + " is sleeping"); // Generic sleeping action
    }
}

// Child class Dog that inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // 'super' calls the constructor of the parent (Animal) class to set the name.
        this.breed = breed; // Dog has an extra property 'breed'
    }

    bark() {
        console.log(this.name, " is barking!"); // Dog-specific action
    }
}

// Create a new Dog object
let dog = new Dog("Rex", "Labrador");
// Dog can eat and sleep (inherited from Animal)
dog.eat();
dog.sleep();
// Dog can also bark (its own method)
dog.bark();
// Dog has a breed (its own property)
console.log(dog.breed);