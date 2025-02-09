const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["apple", "banana", "fruit"];

const sumElements = (array) => {
    let sum = 0;
    array.forEach(value => {
        sum = sum + value;
    });
    return sum;
};


console.log(sumElements(numberArray));
console.log(sumElements(stringArray));

