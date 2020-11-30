const bus = require('./price-bus');

describe('test sum function', () => {

    beforeEach(() => {
        
    });

    test('adds 1 + 2 to equal 3', () => {
        expect(bus.plus(1, 2)).toBe(3);
    });

    test('minus 3 - 2 to equal 1', () => {
        expect(bus.minus(3, 2)).toBe(1);
    });

    test('multiply 2 * 3 to equal 6', () => {
        expect(bus.multiply(3, 2)).toBe(6);
    });

    test('divide 3 / 2 to equal 6', () => {
        expect(bus.divide(3, 2)).toBe(1.5);
    });

    test('mod 3 % 2 to equal 1', () => {
        expect(bus.mod(3, 2)).toBe(1);
    });

    test('bank 500 from 1000 count 2', () => {
        expect(bus.countBank(500, 1000)).toBe(2);
    });

    test('bank 100 from 1000 count 10', () => {
        expect(bus.countBank(100, 1000)).toBe(10);
    });

});