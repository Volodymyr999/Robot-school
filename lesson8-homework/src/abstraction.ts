// Абстрактний клас Vehicle
abstract class Vehicle {
    public constructor(public brand: string, public model: string) {}

    // Абстрактний метод, який повинен бути реалізований у підкласах
    public abstract start(): void;

    // Загальний метод для всіх транспортних засобів
    public stop(): void {
        console.log(`${this.brand} ${this.model} has stopped.`);
    }
}

// Клас Engine (композиція)
class Engine {
    public constructor(public type: string) {}

    public startEngine(): void {
        console.log(`Engine (${this.type}) started.`);
    }

    public stopEngine(): void {
        console.log(`Engine (${this.type}) stopped.`);
    }
}

// Клас Car, який наслідує Vehicle і використовує композицію з Engine
class Car extends Vehicle {
    private engine: Engine;

    public constructor(brand: string, model: string, engineType: string) {
        super(brand, model);
        this.engine = new Engine(engineType); // Композиція
    }

    // Реалізація абстрактного методу
    public start(): void {
        console.log(`Starting ${this.brand} ${this.model}.`);
        this.engine.startEngine();
    }

    // Додатковий метод для Car
    public accelerate(): void {
        console.log(`${this.brand} ${this.model} is accelerating.`);
    }
}

// Клас Bicycle, який наслідує Vehicle
class Bicycle extends Vehicle {
    public constructor(brand: string, model: string) {
        super(brand, model);
    }

    // Реалізація абстрактного методу
    public start(): void {
        console.log(`Pedaling ${this.brand} ${this.model}.`);
    }

    // Додатковий метод для Bicycle
    public ringBell(): void {
        console.log(`${this.brand} ${this.model} is ringing the bell.`);
    }
}

// Приклад використання
const myCar = new Car("Toyota", "Corolla", "V6");
myCar.start(); // Starting Toyota Corolla. Engine (V6) started.
myCar.accelerate(); // Toyota Corolla is accelerating.
myCar.stop(); // Toyota Corolla has stopped.

const myBicycle = new Bicycle("Trek", "FX 2");
myBicycle.start(); // Pedaling Trek FX 2.
myBicycle.ringBell(); // Trek FX 2 is ringing the bell.
myBicycle.stop(); // Trek FX 2 has stopped.
