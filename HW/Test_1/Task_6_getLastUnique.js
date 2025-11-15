const cars = [
    {
        user: "1",
        brand: "Toyota",
        model: "Camry",
        year: 2023
    },
    { 
        user: "2",
        brand: "Honda",
        model: "Civic",
        year: 2022,
        be: 3
    },
    {
        user: "3",
        brand: "BMV",
        model: "X6",
        year: 2025
    },
    {
        user: "3",
        brand: "BMV",
        model: "X6",
        year: 2025,
        be: 2
    },
    {
        user: "1",
        brand: "Toyota",
        model: "Camry",
        year: 2023,
        be: 1
    }
]

function compareUser(a, b) {
  return a.user === b.user;
}

function getLastUnique(cars, compare) {
    const result = [];

    for (let i = cars.length - 1; i >= 0; i--) {
        const current = cars[i];

        const exists = result.some(value => compare(value, current));

        if (!exists) {
        result.push(current);
        }
    }
    const finalResult =result.reverse();
    console.log(finalResult);
    return finalResult;
}
getLastUnique(cars, compareUser);
