// Інтерфейс для опису форми об'єкта
interface Animal {
    name: string;
    makeSound(): void;
}

// Клас, який реалізує інтерфейс
class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} says: Woof!`);
    }
}

const dog = new Dog("Rex");
const dog2 = new Dog("Rexton");
//dog.makeSound(); // Виведе: "Rex says: Woof!"

console.log(dog);
console.log(dog2);
dog2.makeSound(); // Виведе: "Rex says: Woof!"

