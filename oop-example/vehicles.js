// Create a class Vehicle 
// with attributes for the color and the model
// with  a method displaying the model and the color
class Vehicle {
    constructor(color, model, type) {
        this.color = color;
        this.model = model;
        this.type = type; 
    }

    display() {
        return `${this.type}: ${this.color} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(color, model) {
       super(color, model, 'car');
    }
}

class Moto extends Vehicle {
    constructor(color, model) {
       super(color, model, 'moto');
    }
}

const car = new Car('black', 'honda');

console.log(car)
const bike = new Moto('black', 'honda');
console.log(car.display());
console.log(bike.display());

// Create the Car and Moto classes that inherit from Vehicle,
// these classes must override the display method to specify
// whether
// it is a car or a motorcycle
