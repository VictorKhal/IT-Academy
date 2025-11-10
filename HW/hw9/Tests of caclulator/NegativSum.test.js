const Calculator = require('../calculator.js')
const calc = new Calculator();

describe ("Negative tests of sum ", function() {
    test("Test of sum: 'asd' + 5", async() => {
        expect(calc.add('asd', 5)).toEqual(NaN);
    });
    test("Test of sum: '5' + '4'", async() => {
        expect(calc.add('5', '4')).toEqual(54);
    });
    test("Test of sum: undefined + 20", async() => {
        expect(calc.add(undefined, 20)).toEqual(NaN);
    });
    test("Test of sum: [1, 2] + 3", () => {
    expect(calc.add([1,2],3)).toEqual(NaN);
    });
    test("Test of sum: 1 + undefined", () => {
    expect(calc.add(1, undefined)).toEqual(NaN);
    });
    test("Test of sum: Number.MAX_SAFE_INTEGER + 1", async() => {
        expect(calc.add(Number.MAX_SAFE_INTEGER, 10)).toEqual(9007199254741001);
    });
});