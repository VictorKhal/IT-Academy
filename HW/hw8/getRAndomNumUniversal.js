function getNum(startNum, endNum, delay) {
    return new Promise((resolved, reject) => {
        const randomNum = Math.floor(Math.random() * (endNum - startNum + 1) + startNum);
        
        setTimeout(() => {
            console.log('Рандомная цифра', randomNum);
            resolved(randomNum);
        }, delay);
    });
}

async function result() {
    let result1 = await getNum(1, 5, 3000);
    let result2 = await getNum(6, 10, 5000);

    console.log("Сумма: ", result1 + result2);
}

result();