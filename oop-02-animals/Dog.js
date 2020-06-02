const Animal = require('./Animal');

class Dog extends Animal {
    bark() {
        return 'woof woof'
    }
}

const puppy = new Dog('Rex', 'dog');

console.log(puppy.bark())