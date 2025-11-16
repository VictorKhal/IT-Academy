function squareNumber(number) {
    return Math.pow(number, 2)
}

const promise1 = new Promise ((resolved, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Сгенерированное число от (1 до 10): " + randomNumber);
    return resolved(randomNumber);
})

const promise2 = promise1.then (result1 => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(squareNumber(result1));
        }, 3000)
    })
})
const promise3 = promise2.then (result2 => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(squareNumber(result2));
        }, 3000)
    })
})

promise3.then(result => console.log("Итог:", result))