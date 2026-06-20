class Father {
  sleep() {
    console.log("Sleeping...");
  }
}

class Son1 extends Father {
  walk() {
    console.log("Walking...");
  }
}
class Son2 extends Father {
  run() {
    console.log("Need to wake up Father to go for a run...");
  }
}

const obj1 = new Son1();
obj1.sleep();
obj1.walk();

console.log("---------------------------------------------------");
const obj2 = new Son2();
obj2.sleep();
obj2.run();
