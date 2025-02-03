
const stringArray = ["apple", "banana", "fruit"];
const numberArray = [1, 2, 3, 4, 5];
const booleanArray = [true, false, true, false];
const anyArray = [10, "hello", true, null, { name: "John" }];

numberArray.push(6); //adding new value

stringArray.pop();// removing last value

booleanArray.shift();//removing first value

console.log("-------------");

anyArray.forEach((item, index) => {
    console.log(`index ${index}: ${item}`);
});

console.log("-------------");

const stringArrayAddition = stringArray.map((item) => item + " addition");

console.log(stringArrayAddition);
