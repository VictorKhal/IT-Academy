const users = [
    {age: 20, name: "Ivan"},
    {age: 40, name: "Petya"},
    {age: 50, name: "Ignat"},
    {age: 20, name: "Marina"},
    {age: 30, name: "Sveta"},
    {age: 50, name: "Artyom"},
    {age: 20, name: "Zlata"},
    {age: 40, name: "Alina"},
    {age: 50, name: "Ylia"},
    {age: 30, name: "Olya"},
    {age: 20, name: "Gleb"},
];

function sortByAge(users) {
    const result = {};

    for (let i = 0; i < users.length; i++) {
        const age = users[i].age;
        const name = users[i].name;

        if (!result[age]) {
        result[age] = [];
        }

        result[age].push(name);
    }

    console.log(result);
    return result;
}

sortByAge(users);