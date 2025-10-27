console.log("Task 5");

const arr = [1, 345, 3, 65, 76, 98, 123];

const sortedArr = arr.toSorted((a, b) => a - b);
console.log(sortedArr);

const sortedArrRevers = arr.toSorted((a, b) => b- a);
console.log(sortedArrRevers);