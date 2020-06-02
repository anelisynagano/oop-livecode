class Animal {
    constructor (name, type) {
    this.name = name;
    this.type = type;
    }
    eat() {
        return `${this.name} is eating`;
    }
    sleep() {
      return `${this.name}: zzzzZZZZ`;
    }
}


module.exports = Animal;