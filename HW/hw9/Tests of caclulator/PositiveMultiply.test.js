const Calculator = require('../calculator.js');
const calc = new Calculator;

describe ("Positive test of multiply", function() {
    test("Multiply: 2 * 3 * 4", async() => {
        expect(calc.multiply(2, 3, 4)).toEqual(24);
    });
    test("Multiply: 1 * 5", async() =>{
        expect(calc.multiply(1, 5)).toEqual(5);
    })
    test("Multiply: -2 * 3", async() => {
        expect(calc.multiply(-2, 3)).toEqual(-6);
    });
    test("Multiply: 1,5 * 2", async() => {
        expect(calc.multiply(1.5, 2)).toEqual(3);
    });
    test("Multiply: 5 * 0", () => {
        expect(calc.multiply(5,0)).toEqual(0);
    });
})