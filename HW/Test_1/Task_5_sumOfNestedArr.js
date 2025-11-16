function countArray(arr) {
    const result = arr.flat(Infinity).reduce((sum, value) => {
        if(typeof value === "number") {
            return sum += value; 
        }
        return sum;
    }, 0);
    console.log(result);
    return result;
}

const arr = [[1, 2, [3, [4, 5], 6], [7, 5, 5]],["a", 2, 10]];
countArray(arr);
