// OBJECT CAR
// let car1 = {
//     brand: "Tesla",
//     color: "blue",
//     type: "electronic",
//     carSpecs: function () {
//         return "My car is " + car1.brand + ". The color is " + this.color + ". It is " + this.type + " type. <br>"
//     }
// }

// let car2 = {
//     brand: "Nissan",
//     color: "purple",
//     type: "benzin",
//     carSpecs: function () {
//         return "My car is " + this.brand + ". The color is " + this.color + ". It is " + this.type + " type. <br>"
//     }
// }

// let car3 = {
//     brand: "Audi",
//     color: "red",
//     type: "diesel",
//     carCarSpecs: function () {
//         return "My car is " + this.brand + ". The color is " + this.color + ". It is " + this.type + " type. <br>"
//     }
// }

// document.write(car3.carSpecs())
// document.write(car2.carSpecs())
// document.write(car1.carSpecs())


////////////////////////////////////////// CLASS CARS
class Cars {
    brand;
    color;
    type;

    constructor(brand, color, type) {
        this.brand = brand;
        this.color = color;
        this.type = type;
    }

    carSpecs() {
        return "My car is " + this.brand + ". The color is " + this.color + ". It is " + this.type + " type."
    }
}

class Specs extends Cars {
    numWheels;
    horsePower;

    constructor(brand, color, type, numWheels, horsePower) {
    super(brand, color, type);
    this.numWheels = numWheels;
    this.horsePower = horsePower;
    }

    carSpecs() {
        return super.carSpecs() + " It has " + this.numWheels + " wheels" + " and " + this.horsePower + "HP.";
    }
}


// let car1 = new Cars("Tesla", "blue", "electronic")
// let car2 = new Cars("Nissan", "purple", "benzin")
// let car3 = new Cars("Audi", "red", "diesel")
let car4 = new Specs("BMW", "yellow", "benzin", 4, 150)

document.write(car4.carSpecs());
console.log(car4.carSpecs())

// document.write(car3.carSpecs())
// document.write(car2.carSpecs())
// document.write(car1.carSpecs())


/////////////////////////////////////// CLASS ANIMALS
class Animals {
    color;
    species;
    area;

    constructor(a, b, c) {
        this.color = a;
        this.species = b;
        this.area = c;
    }

    animalSpecs() {
        return "The animal is a " + this.color + " " + this.species + " and lives in " + this.area;
    }
}

let animal1 = new Animals("brown", "bear", "woods")
let animal2 = new Animals("black", "cat", "city")

console.log(animal1.animalSpecs())
console.log(animal2.animalSpecs())



//////////////////////////////////////////// CLASS PERSON
class Person {
    name;
    age;
    weight;
    city;

    constructor(a, b, c, d) {
        this.name = a;
        this.age = b;
        this.weight = c;
        this.city = d;
    }

    personSpecs() {
        return `${this.name} is ${this.age} years old, weights ${this.weight}kg and lives in ${this.city}.<br>`
    }
}

let person1 = new Person("Serri", "31", "90", "Vienna");
let person2 = new Person("Irati", "27", "60", "Madrid");

console.log(person1.personSpecs())
document.write(person1.personSpecs())

console.log(person2.personSpecs())
document.write(person2.personSpecs())