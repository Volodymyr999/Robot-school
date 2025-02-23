//Коменти для майбутнього використання як приклад
// Абстрактний клас Vehicle
abstract class Vehicle {
    public constructor(public brand: string, public model: string) {}

    // Абстрактний метод,без реалізації який повинен бути реалізований у підкласах
    public abstract start(): void;

    // Загальний метод для всіх транспортних засобів з реалізацією
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
export class Car extends Vehicle {
    private engine: Engine; // Створюється властивість engine з типом Engine

    public constructor(brand: string, model: string, engineType: string) {
        super(brand, model); // Виклик конструктора батьківського класу
        this.engine = new Engine(engineType); // створюється новий об'єкт Engine і присвоюється властивості engine
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
export class Bicycle extends Vehicle {
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
