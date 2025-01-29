let num1 = 10;
let num2 = 5;
let string1 = "10";
let isActive = true;


console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === string1); //false
console.log(num1 == string1); //true

console.log(num2 != num2);

let and = (num1 < num2); //false

console.log(and && isActive);
console.log(and || isActive);
console.log(and != isActive);
