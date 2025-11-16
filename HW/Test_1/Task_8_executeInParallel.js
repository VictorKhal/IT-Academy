async function executeInParallel(array) {
    const promises = array.map(func => func());
    return Promise.all(promises);
}

const arr = [
function task1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("H"), 3000);
    });
},

function task2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("E"), 1000);
    });
},

function task3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("L"), 6000);
    });
},

function task4() {
    return new Promise(resolve => {
        setTimeout(() => resolve("L"), 2000);
    });
},

function task5() {
    return new Promise(resolve => {
        setTimeout(() => resolve("O"), 5000);
    });
}]

executeInParallel(arr)
    .then(results => console.log(results));

