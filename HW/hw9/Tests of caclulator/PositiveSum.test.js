const Calculator = require('../calculator.js')
const calc = new Calculator();


describe ("Positive tests of sum ", function() {
    test("Test of sum: 10 + 5", async() => {
        expect(calc.add(10, 5)).toEqual(15);
    });
    test("Test of sum: 156 + 53", async() => {
        expect(calc.add(156, 53)).toEqual(209);
    });
    test("Test of sum: 5 + (-20)", async() => {
        expect(calc.add(5, -20)).toEqual(-15);
    });
    test("Test of sum: 5 - (-20)", async() => {
        expect(calc.add(5, -20)).toEqual(-15);
    });
    test("Test of sum: 5 + 10 + 30 + 8 + 6", async() => {
        expect(calc.add(5, 10, 30, 8, 6)).toEqual(59);
    });
    test("Test of sum: (-2) + (-15) + (-50) + (-20)", async() => {
        expect(calc.add(-2, -15, -50, -20)).toEqual(-87);
    });
    test("Test of sum: -15 + (-20) + 15 + (-30)", async() => {
        expect(calc.add(-15, -20, 15, -30)).toEqual(-50);
    });
    test("Test of sum: 6,7 + 3,4 + 4,5", async() => {
        expect(calc.add(6.7, 3.4, 4.5)).toEqual(14.6);
    });
    test("Test of sum: 0 + 2 + 3", async() => {
    expect(calc.add(0, 2, 3)).toEqual(5);
    });
    test("Test of sum: 1.5 + 2.5", async() => {
    expect(calc.add(1.5, 2.5)).toEqual(4);
    });
    test("Test of sum: 5", async() => {
    expect(calc.add(5)).toEqual(5);
    });
});
