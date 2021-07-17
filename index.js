const data = require('./data');
const Person = require('./Person');

const jonas = new Person(data);
// console.log(jonas);
jonas.fullName();
// Jonas Jonaitis

jonas.intro();
// Hi, my name is Jonas and I am 99 years old.

jonas.firstChild();
// Ona Onaite (70)

jonas.lastChild();
// Alfas Marsietis (50)

jonas.firstCar();
// Audi 80 (red)

jonas.lastCar();
// Tesla S (silver)

jonas.apartmentPrice();
// Jonas has an apartment for 500000 Euros.

jonas.chidren();
// This is a chidren of Jonas Jonaitis:
// 1. Ona Onaite (70)
// 2. Petras Patraitis (80)
// 3. Alfas Marsietis (50)

jonas.aliveChildren();
// Jonas Jonatis has only 2 children alive.

jonas.autopark();
// This is Jonas cars:
// 1. Audi 80 (red)
// 2. Volvo S40 (black)
// 3. Tesla S (silver)

jonas.wherePersonLive();
// Jonas is living at Vilnius Gedimino pr. 1

jonas.carPrice(0);
// Audi 80 is purchased for 1000 Litas.

jonas.carPrice(1);
// Volvo S40 is purchased for 5000 Litas.

jonas.carPrice(2);
// Tesla S is purchased for 100000 Euros.

jonas.totalSpentForCars();
// KOMANTARAS: Litas -> Euras = 3.45
// Jonas has spent 101739.13 Euros for his cars.

jonas.totalSpentForApartments();
// Jonas has spent 500000 Euros for his apartments.

jonas.totalSpendings();
// Jonas has spent 601739.13 Euros tottaly.