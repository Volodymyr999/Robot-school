import { actionWithAVehicle } from './function';
import { Car, Plane } from './classes';

//створення обʼєктів на основі класів
const myCar = new Car('BMW');
const myPlane = new Plane('Cessna');

//виклик функції з ʼfunctionʼ

actionWithAVehicle(myCar);
console.log('--------');
actionWithAVehicle(myPlane);
