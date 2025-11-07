function getNum() {
    return new Promise((resolved, reject) => {
        const randomNum = Math.floor(Math.random() * 5) + 1;
        setTimeout(() => {
            console.log(`Рандомная цифра: ${randomNum}`);
            resolved(randomNum);
        }, 3000)
    });
}  
async function result() {
    let result = await getNum();
    console.log("Возведение в квадрат: " + Math.pow(result, 2))
}
result();