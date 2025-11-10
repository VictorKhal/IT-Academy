const Calculator = require('../calculator.js')
const calc = new Calculator();

describe ("Positive tests of subtraction ", function() {
    test("Test of subtraction: 10 - 5", async() => {
        expect(calc.subtraction(10, 5)).toEqual(5);
    });
    test("Test of subtraction: 156 - 53", async() => {
        expect(calc.subtraction(156, 53)).toEqual(103);
    });
    test("Test of subtraction: 5 - 20", async() => {
        expect(calc.subtraction(5, 20)).toEqual(-15);
    });
    test("Test of subtraction: 5 - (-20)", async() => {
        expect(calc.subtraction(5, -20)).toEqual(25);
    });
    test("Test of subtraction: 0 - 20", async() => {
        expect(calc.subtraction(0, 20)).toEqual(-20);
    });
    test("Test of subtraction: 20 - 0", async() => {
        expect(calc.subtraction(20, 0)).toEqual(20);
    });
    test("Test of subtraction: -15 - 20", async() => {
        expect(calc.subtraction(-15, -20)).toEqual(5);
    });
    test("Test of subtraction: 6,7 - 3,4", async() => {
        expect(calc.subtraction(6.7, 3.4)).toEqual(3.3);
    });
});