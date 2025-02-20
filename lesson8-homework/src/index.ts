import { Car, Bicycle } from './abstraction';
import { getJson } from './function';
import { getJson3 } from './function';
import { User, Geo, Address, Company } from './class';


console.log('Abstraction class Vehicle work below');
//викристання калсів Car, Bicycle

const myCar = new Car("Toyota", "Corolla", "V6");
const ownCar = new Car("BMW", "5 series", "L6");
ownCar.start();
myCar.start(); // Starting Toyota Corolla. Engine (V6) started.
myCar.accelerate(); // Toyota Corolla is accelerating.
myCar.stop(); // Toyota Corolla has stopped.

const myBicycle = new Bicycle("Trek", "FX 2");
myBicycle.start(); // Pedaling Trek FX 2.
myBicycle.ringBell(); // Trek FX 2 is ringing the bell.
myBicycle.stop(); // Trek FX 2 has stopped.і


//асинхронний виклик getJson, виклик конструкторів класу User з class.ts
(async () => {
    console.log('--------------');
    console.log('class User work below');
    const data = await getJson();
    console.log(data.name);
    console.log(data.address.geo.lat);
    console.log('--------------');
    const geo = new Geo("-37.3159", "81.1496");
    const address = new Address("Kulas Light", "Apt. 556", "Gwenborough", "92998-3874", geo);
    const company = new Company("Delasport", "Multi-layered client-server neural-net", "harness real-time e-markets");
    const user = new User(1, "Volodymyr", "Sport", "Sincere@april.biz", address, "1-770-736-8031 x56442", "hildegard.org", company);
    user.displayInfo();
    const geo2 = new Geo("-37", "81");
    console.log(geo2);
})();

//асинхронний виклик getJson3 (інтерфейс)
(async () => {
    console.log('--------------');
    console.log('interface User3 work below');
    const data = await getJson3();
    console.log(data.name);
    console.log(data.address.geo.lat);
})();

