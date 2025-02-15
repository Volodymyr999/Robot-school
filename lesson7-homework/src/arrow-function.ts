const numberArray2: number [] = [1, 2, 3, 4, 5];
const stringArray2: string [] = ['apple', 'banana', 'fruit'];


const sumNumElement = (array: number []): number => {
    let sum = 0;
    array.forEach((value: number) => {
        sum = sum + value;
    });
    return sum;
};


const sumStrElement = (array: string[]): string => {
    return array.join(' ');
};


const SumAnyArray = (array: number [] | string[]): number | string => {
    if (typeof array[0] === 'number') {
        return sumNumElement(array as number[]);
    }
    if (typeof array[0] === 'string') {
        return sumStrElement(array as string[]);
    }
    else {
        throw new Error('Error');
    }
};

console.log("Sum of String Array:", SumAnyArray(stringArray2));
console.log("Sum of num Array:", SumAnyArray(numberArray2));

