const Calculator = require('../calculator.js');
const calc = new Calculator;

describe ("Negative test multiply" , function() {
    test("Test of multiply: 3 * 4", async() => {
        expect(calc.multiply(3, 4)).toEqual(12);
    });
    test("Test of multiply: 'x' * 2", async() => {
    expect(calc.multiply('x',2)).toEqual(NaN);
    });
    test("Test of multiply: {} * 2", async() => {
    expect(calc.multiply({},2)).toEqual(NaN);
    });
    test("Test of multiply: undefined * 5", async() => {
    expect(calc.multiply(undefined,5)).toBeNaN();
    });
});