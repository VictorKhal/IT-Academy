function getRandomTimeOut () {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
        return randomNumber * 1000;
}

const promise1 = new Promise ((resolved, reject) => {
    setTimeout(() => {
    // console.log(1);
        return resolved(1)
    }, getRandomTimeOut())
})

const promise2 = new Promise ((resolved, reject) => {
    setTimeout(() => {
    // console.log(2);
        return resolved(2)
    }, getRandomTimeOut())
})

const promise3 = new Promise ((resolved, reject) => {
    setTimeout(() => {
        // console.log(3);
        return resolved(3)
    }, getRandomTimeOut())
})
 
Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log(result)
    })

// Тут все равно все промисы выполняюстся идет задержка, можно это отключить?