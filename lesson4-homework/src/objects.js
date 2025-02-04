const car = {
    brand: "BMW",
    country: "German",
    model: {
        series: "3",
        engine: "2.0",
        power: "170 hp"
    },
    additionalInfo: [
        {color: "white"}, {wheels:"black"}, {interier: "brown"}
    ]
};

function yourCar(){
    console.log("Your car is " + car.brand + " from " + car.country);

    console.log(`Model Info:
        - Series: ${car.model.series}
        - Engine: ${car.model.engine}
        - Power: ${car.model.power}`);
    console.log(car.additionalInfo);
}

yourCar();

//console.log(Object.values(car.model));
