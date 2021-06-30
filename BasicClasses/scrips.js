// CLASS ANIMALS
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



// CLASS PERSON
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