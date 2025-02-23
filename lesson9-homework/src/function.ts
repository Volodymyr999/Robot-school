import { Vehicle } from './interface';

export function actionWithAVehicle(vehicle: Vehicle): void {
    console.log(`your vehicle is: ${vehicle.brand}`);
    vehicle.start();
};
