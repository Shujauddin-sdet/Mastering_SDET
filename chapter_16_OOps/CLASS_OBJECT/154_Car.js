class Car {
  // Attribute
  // Constructor
  constructor(assigned_name) {
    this.name = assigned_name;
  }
  drive() {
    console.log("Driving the car " + this.name);
  }
  printDetailsCar(description) {
    this.description = description;
    console.log(
      "Car Name: " + hyndai_car.name + " Description: " + hyndai_car.description
    );
  }
}

let hyndai_car = new Car("i10");
hyndai_car.drive();
hyndai_car.printDetailsCar("Car in a budget");
