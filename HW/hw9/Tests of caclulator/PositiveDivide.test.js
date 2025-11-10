const Calculator = require('../calculator.js');
const calc = new Calculator;

describe("Positive test divide", function() {
    test("Divide: 10 / 5", async() => {
        expect(calc.divide(10, 5)).toEqual(2)
    });
    test("Divide: -10 / 5", async() => {
        expect(calc.divide(-10, 5)).toEqual(-2)
    });
    test("Divide: 7 / 2", async() => {
        expect(calc.divide(7, 2)).toEqual(3,5)
    });
});