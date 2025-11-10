const Calculator = require('../calculator.js');
const calc = new Calculator;

describe("Positive test exponentiation", function() {
    test("Exponentiation: 4 ", async() => {
        expect(calc.exponentiation(4)).toEqual(16);
    });
    test("Exponentiation: 0", async() => {
        expect(calc.exponentiation(0)).toEqual(0)
    });
     test("Exponentiation: -3", async() => {
        expect(calc.exponentiation(-3)).toEqual(9)
    });
});