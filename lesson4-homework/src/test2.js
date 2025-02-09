import { car } from "./test.js";

function calculateCarAge(yo){
    const age = 2025 - yo;
    return (age);
};


console.log(`Your car is ${calculateCarAge(car.detailes.year)} years old!`);
