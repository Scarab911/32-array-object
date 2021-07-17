class Person {
    constructor(data) {
        this.personData = data;
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
        const children = this.personData.children;
        console.log(`${children[0].firstname} ${children[0].lastname} (${children[0].age})`);

    };

    lastChild() {
        const children = this.personData.children;
        const lastKid = children[children.length - 1]
        console.log(`${lastKid.firstname} ${lastKid.lastname} (${lastKid.age})`);
    };

    firstCar() {
        const cars = this.personData.cars;
        console.log(`${cars[0].brand} ${cars[0].model} (${cars[0].color})`);
    };

    lastCar() {
        const cars = this.personData.cars;
        const lastCar = cars[cars.length - 1];
        console.log(`${lastCar.brand} ${lastCar.model} (${lastCar.color})`);
    };

    apartmentPrice() {
        const apartment = this.personData.adress;
        console.log(`${this.personData.firstname} has an apartment for ${apartment.price} ${apartment.currency}.`);
    };

    chidren() {
        let count = 0;
        const children = this.personData.children;
        console.log(`This is a chidren of ${this.fullName(false)}:`)
        for (const child of children) {
            ++count;
            console.log(`${count}. ${child.firstname} ${child.lastname}(${child.age})`)
        }
    };

    aliveChildren() {
        let count = 0;
        const children = this.personData.children;

        for (const child of children) {
            if (child.alive) {
                count++;
            }
        }
        console.log(`${this.fullName(false)} has only ${count} children alive.`);
    };

    autopark() {
        let carCount = 0;
        const cars = this.personData.cars;
        console.log(`This is ${this.personData.firstname} cars:`)
        for (const car of cars) {
            ++carCount;
            console.log(`${carCount}. ${car.brand} ${car.model} (${car.color})`);
        }
    };


    wherePersonLive() {
        const personHome = this.personData.adress;
        console.log(`${this.personData.firstname} is living at ${personHome.city} ${personHome.street} ${personHome.houseNumber}`);
    };

    carPrice(index) {
        const cars = this.personData.cars;
        const id = index;
        console.log(`--- ${cars[id].brand} ${cars[id].model} is purchased for ${cars[id].price} ${cars[id].currency}.`);
    };

    totalSpentForCars(print = true) {
        let totalSpent = 0;
        const cars = this.personData.cars;
        for (const car of cars) {
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