export const car = {
    brand: "BMW",
    series: "5",
    country: "German",
    detailes: {
        year: "2005",
        color: "green",
        condition: "normal"
    },

    get fullInfo() {
        return `this is ${this.brand} ${this.series} series, from ${this.country}`;
    },

    get _series(){
        return this.series;
    },

    set _series(modelUPD) {
        if (modelUPD >= 1 && modelUPD <= 8){
            this.series = modelUPD;
        } else {
            console.log("Model must be between 1 and 8");
        }
    }
};

//test function
function calculateCarAge(yo){
    const age = 2025 - yo;
    return (age);
};


console.log(car.fullInfo);
console.log("-------");
console.log(car.series);
car._series = 8;
console.log(car.series);
console.log("-------");
console.error(car.fullInfo);
console.log(`Your car is ${calculateCarAge(car.detailes.year)} years old!`);
