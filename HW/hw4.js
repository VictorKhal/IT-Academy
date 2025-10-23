const  booleanTrue = true;
const booleanFalse = false;
const string = "Hello world";
const number1 = 12;

console.log();
console.log("Первый пункт: ");
console.log("string + boolean: " + (string + booleanTrue));
console.log("string + booleanFalse: " + (string + booleanFalse));
console.log("string + number1: " + (string + number1));
console.log("number1 + boolean: " + (number1 + booleanTrue));
console.log("number1 + booleanFalse: " + (number1 + booleanFalse));

console.log();
console.log("Второй пункт: ");
console.log("string * boolean: " + (string * booleanTrue));
console.log("string * booleanFalse: " + (string * booleanFalse));
console.log("string * number1: " + (string * number1));
console.log("number1 * boolean: " + (number1 * booleanTrue));
console.log("number1 * booleanFalse: " + (number1 * booleanFalse));

console.log();
console.log("Третий пункт: ");
console.log("string / boolean: " + (string / booleanTrue));
console.log("string / booleanFalse: " + (string / booleanFalse));
console.log("string / number1: " + (string / number1));
console.log("number1 / boolean: " + (number1 / booleanTrue));
console.log("number1 / booleanFalse: " + (number1 / booleanFalse));

console.log("Четвертый пункт: ");
console.log(Number(string));
console.log(Number(booleanFalse));
console.log(Number(booleanTrue));
console.log(Number(" 123 "));

console.log();
console.log(String(number1));
console.log(String(booleanFalse));
console.log(String(booleanTrue));
console.log(String("12345486"));

console.log();+
console.log(Boolean(number1));
console.log(Boolean(string));
console.log(Boolean(0));
console.log(Boolean("12345486"));