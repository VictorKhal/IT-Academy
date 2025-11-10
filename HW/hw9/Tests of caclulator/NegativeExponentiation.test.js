const Calculator = require('../calculator.js');
const calc = new Calculator;

describe("Negative test exponentiation", function() {
    test("Exponentiation: 'a' ", async() => {
        expect(calc.exponentiation('a')).toEqual(NaN);
    });
    test("Exponentiation: object {}", async() => {
        expect(calc.exponentiation({})).toEqual(NaN)
    });
     test("Exponentiation: undefined", async() => {
        expect(calc.exponentiation(undefined)).toEqual(NaN)
    });
});