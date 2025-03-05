import { expect } from 'chai';
import { Car } from 'src/abstraction';
import  sinon  from 'sinon';

describe('Car test suite (Mocha)', () => { //тестсет

    describe('Verify Car brand', () => { // TC 1
        it('creating my car', () => {
            //Arrange
            const ownCar = new Car('BMW', '5 series', 'L6');

            // Act
            // ownCar.start();

            // Assert
            expect(ownCar.brand).to.be.equal('BMW');
        });
    });


    describe('Verify Car model', () => { // TC 2

        it('calling "start" method', () => {
        //Arrange
            const ownCar = new Car('BMW', '5 series', 'L6'); // ініціалізація змінної

            // Act
            ownCar.start();

            // Assert
            expect(ownCar.model).to.be.equal('5 series');
        });
    });


    describe('Verify "accelerate" method', () => { // TC 3 перевірка accelerate методу
        let ownCar: Car; //оголошення змінних
        let consoleLogSpy: sinon.SinonSpy;

        beforeEach(() => {
            ownCar = new Car('Trabant', '601', 'L3');
            consoleLogSpy = sinon.spy(console, 'log');
        });

        afterEach(() => {
            consoleLogSpy.restore();
        });

        it('calling "accelerate" method for Trabant', () => {
            // Act
            ownCar.accelerate();

            // Assert
            expect(consoleLogSpy.calledWith('Trabant 601 is accelerating.')).to.be.true;
        });
    });
});
