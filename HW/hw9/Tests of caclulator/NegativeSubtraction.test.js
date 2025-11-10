const Calculator = require('../calculator.js')
const calc = new Calculator();

describe ("Negative tests of subtraction", function() {
    test("Test of subtraction: 'asd' - 5", async() => {
        expect(calc.subtraction('asd', 5)).toEqual(NaN);
    });
    test("Test of subtraction: NaN - 53", async() => {
        expect(calc.subtraction(NaN, 53)).toEqual(NaN);
    });
    test("Test of subtraction: Number.MAX_VALUE - 20", async() => {
        expect(calc.subtraction(Number.MAX_VALUE, 20)).toEqual(1.7976931348623157e+308);
    });
    test("Test of subtraction: Number.MIN_VALUE - 20", async() => {
        expect(calc.subtraction(Number.MIN_VALUE, 20)).toEqual(Infinity);
    });

});