let num1 = 7;
let num2 = 5;
let num3 = 30;
let num4 = 20;

switch(true) {
case(num1 < num2):
    console.log("condition1");
    break;
case(num3 >= num4 && num2 > num1):
    console.log("condition2");
    break;
default:
    console.log("condition3");
    break;
}

console.log("----------");


let age = 66;

switch(age){
case(55):
    console.log("condition1");
    break;
case(65):
    console.log("condition2");
    break;
case(66):
    console.log("condition3");
    break;
default:
    console.log("default condition");
    break;
}