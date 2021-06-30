let car1 = {
    brand: "Tesla",
    color: "blue",
    type: "electronic",
    fullSpecs: function () {
        return "My car is " + car1.brand + ". The color is " + this.color + ". It is " + this.type + " type. <br>"
    }
}

let car2 = {
    brand: "Nissan",
    color: "purple",
    type: "benzin",
    fullSpecs: function () {
        return "My car is " + this.brand + ". The color is " + this.color + ". It is " + this.type + " type. <br>"
    }
}

let car3 = {
    brand: "Audi",
    color: "red",
    type: "diesel",
    fullSpecs: function () {
        return "My car is " + this.brand + ". The color is " + this.color + ". It is " + this.type + " type. <br>"
    }
}

document.write(car3.fullSpecs())
document.write(car2.fullSpecs())
document.write(car1.fullSpecs())