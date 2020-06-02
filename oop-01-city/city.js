class City {
	constructor(name, country, population) { 
		this.name = name;
		this.country = country;
		this.population = population;
	}
	printInfo() { 
		return `${this.name}: ${this.country}: ${this.population}`;
    }
}

const lisbon = new City('Lisbon', 'Portugal', '505,526');
const paris = new City('Paris', 'France', 2140526);

console.log(lisbon.printInfo());
console.log(paris.printInfo());