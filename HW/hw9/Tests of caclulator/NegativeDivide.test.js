const Calculator = require('../calculator.js');
const calc = new Calculator;

describe("Negative test divide", function() {
    test("Divide: 5 / 0", async() => {
        expect(calc.divide(5, 0)).toEqual(Infinity);
    });
    test("Divide: 'a'/ 2", async() => {
        expect(calc.divide('a', 2)).toEqual(NaN)
    });
    test("Divide: object / 2", async() => {
        expect(calc.divide({}, 2)).toEqual(NaN)
    });
     test("Divide: undefined / 2", async() => {
        expect(calc.divide(undefined, 2)).toEqual(NaN)
    });
});