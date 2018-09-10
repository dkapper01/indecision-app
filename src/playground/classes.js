class Person {
  constructor(name = "anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `name is ${this.name} and age is ${this.age}`;
  }
}

const daniel = new Person("daniel", 29);
const other = new Person();

console.log(daniel.getDescription());
console.log(other.getDescription());
