class Person {
  constructor(name = "anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `name is ${this.name} and age is ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, degree) {
    super(name, age); 
    this.degree = degree;
  }

  getCollageInfo() {
    return `name is ${this.name} and age is ${this.age} and degree is ${this.degree}`
  }
}

class Traveler extends Student {
  constructor(name, age, degree, state) {
    super(name, age, degree); 
    this.state = state;
  }
  getTest() {
    return `name is ${this.name} and ${this.age} and ${this.degree} and ${this.state}`
  }
  addOn() {
    let newTest = super.getCollageInfo(); 

    return newTest += "Done";
  }
}

const daniel = new Person("daniel", 29);
const other = new Traveler("kapper", 28, "CS", "MO");
const bob = new Student("gulcan", 29, "MBA"); 
const test = new Traveler("Allan", 25, "MSD");

console.log(test.addOn()); 

console.log(daniel.getDescription());
console.log(other.getDescription());
