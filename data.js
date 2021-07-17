const person = {
    firstname: 'Jonas',
    lastname: 'Jonaitis',
    age: 99,
    children: [
        {
            firstname: 'Ona',
            lastname: 'Onaite',
            age: 70,
            alive: true
        },
        {
            firstname: 'Petras',
            lastname: 'Petraitis',
            age: 80,
            alive: false
        },
        {
            firstname: 'Alfas',
            lastname: 'Marsietis',
            age: 50,
            alive: true
        }
    ],
    adress: {
        city: 'Vilnius',
        street: 'Gedimino pr.',
        houseNumber: 1,
        price: 500000,
        currency: 'Euros'
    },
    cars: [
        {
            brand: 'Audi',
            model: '80',
            color: 'red',
            price: 1000,
            currency: 'Litas'
        },
        {
            brand: 'Volvo',
            model: 'S40',
            color: 'black',
            price: 5000,
            currency: 'Litas'
        },
        {
            brand: 'Tesla',
            model: 'S',
            color: 'silver',
            price: 100000,
            currency: 'Euros'
        },
    ]
}

module.exports = person;