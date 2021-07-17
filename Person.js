class Person {
    constructor(data) {
        this.personData = data;

        this.children = this.personData.children;
        this.cars = this.personData.cars;
    }
    fullName(print = true) {

        const fullName = this.personData.firstname + ' ' + this.personData.lastname;
        if (print) {

            console.log(fullName);
        }
        return fullName;
    };

    intro() {
        console.log(`Hi, my name is ${this.personData.firstname} and I am ${this.personData.age} years old.`);
    };

    firstChild() {

        console.log(`${this.children[0].firstname} ${this.children[0].lastname} (${this.children[0].age})`);

    };

    lastChild() {

        const lastKid = this.children[this.children.length - 1]
        console.log(`${lastKid.firstname} ${lastKid.lastname} (${lastKid.age})`);
    };

    firstCar() {

        console.log(`${this.cars[0].brand} ${this.cars[0].model} (${this.cars[0].color})`);
    };

    lastCar() {

        const lastCar = this.cars[this.cars.length - 1];
        console.log(`${lastCar.brand} ${lastCar.model} (${lastCar.color})`);
    };

    apartmentPrice() {
        const apartment = this.personData.adress;
        console.log(`${this.personData.firstname} has an apartment for ${apartment.price} ${apartment.currency}.`);
    };

    chidren() {
        let count = 0;

        console.log(`This is a chidren of ${this.fullName(false)}:`)
        for (const child of this.children) {
            console.log(`${++count}. ${child.firstname} ${child.lastname}(${child.age})`)
        }
    };

    aliveChildren() {
        let count = 0;

        for (const child of this.children) {
            if (child.alive) {
                count++;
            }
        }
        console.log(`${this.fullName(false)} has only ${count} children alive.`);
    };

    autopark() {
        let carCount = 0;

        console.log(`This is ${this.personData.firstname} cars:`)
        for (const car of this.cars) {
            console.log(`${++carCount}. ${car.brand} ${car.model} (${car.color})`);
        }
    };

    wherePersonLive() {
        const personHome = this.personData.adress;
        console.log(`${this.personData.firstname} is living at ${personHome.city} ${personHome.street} ${personHome.houseNumber}`);
    };

    carPrice(index) {

        const id = index;
        console.log(`--- ${this.cars[id].brand} ${this.cars[id].model} is purchased for ${this.cars[id].price} ${this.cars[id].currency}.`);
    };

    totalSpentForCars(print = true) {
        let totalSpent = 0;

        for (const car of this.cars) {
            if (car.currency === 'Litas') {
                totalSpent += car.price / 3.45;
            } else {
                totalSpent += car.price;
            }
        }
        if (print) {

            console.log(`==${this.personData.firstname} has spent ${totalSpent.toFixed(2)} Euros for his cars.`);
        }
        return totalSpent;
    };

    totalSpentForApartments(print = true) {
        const apartments = this.personData.adress;
        const cost = apartments.price;
        if (print) {

            console.log(`==${this.personData.firstname} has spent ${cost} ${apartments.currency} for his apartments.`);
        }
        return cost;
    };

    totalSpendings() {
        const allTimeSpent = this.totalSpentForApartments(false) + this.totalSpentForCars(false);
        console.log(`==${this.personData.firstname} has spent ${allTimeSpent.toFixed(2)} Euros tottaly.`);
    };
}

module.exports = Person;