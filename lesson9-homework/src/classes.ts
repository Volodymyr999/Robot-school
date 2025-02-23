import { Vehicle } from './interface';

export class Car implements Vehicle {
    public constructor(public brand: string) {}

    public start(): void {
        console.log(`${this.brand} has started`);
    }
}


export class Plane implements Vehicle {
    public constructor(public brand: string) {}

    public start(): void {
        console.log(`${this.brand} has launched`);
    }
}
