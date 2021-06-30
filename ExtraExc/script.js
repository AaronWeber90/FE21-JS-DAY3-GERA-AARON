class Hotel {
    hotelName;
    numberOfNights;
    address;
    image;

    constructor(a, b, c , d) {
        this.hotelName = a;
        this.numberOfNights = b;
        this.address = c;
        this.image = d;
    }

    showAvailability() {
    if (numberOfNights >= 3) {
        document.getElementById("msg").innerHTML = `<button>I'll reserve</button>`;
    } else {
        document.getElementById("msg").innerHTML = `<p>"Sorry, no available nights for ${this.hotelName}"</p>`
    }
    }
}

let numberOfNights = Math.floor(Math.random() * 10) +1;
let image = https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80;
let hotel1 = new Hotel("Hilton", numberOfNights, "Washington", )

hotel1.showAvailability()