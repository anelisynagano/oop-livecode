const Animal = require('./Animal');

class Person extends Animal {
//   constructor(name, type) {
//     super(name, 'Human')
//   }
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

const alice = new Person('Alice', 'Human');
const bob = new Person('Bob', 'Another Human');

console.log(alice.greet());
console.log(alice.sleep());
console.log(alice.eat());