## Animals

0. - Create 3 files `Animal.js`, `Person.js` and `Dog.js`  file

1. - Create an Animal class with two properties: name and type
(type is human, dog, cat, etc)
and two methods eat() and sleep()

2. - Create a Person class that inherits from Animal and has a method greet()

3. - Create 2 instances of person: Alice and Bob
Do this in `Person.js`

4. - call the methods greet(), eat() and sleep() on Alice and Bob
e.g:
greet() should return 'Hi, I'm Alice'
eat() should return 'Alice is eating'
sleep() should return 'Bob: zzzzZZZZZ'

5. - Create a Dog class with a method bark() that returns 'woof woof'.
Dog inherits from Animal also.

6. - Create an instance of Dog and make it bark.
Do this in `Dog.js`.

note: you will need `require` and `module.exports` to be able to use multiple files:
[https://flaviocopes.com/node-export-module/]

module.exports = car


const car = require('./car')