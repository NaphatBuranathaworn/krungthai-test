const bus = require('./app-bus');

describe('test function', () => {

    const dataTest = [
        [1,2,3],
        [4,5,6],
        [9,8,9]
    ]
    
    const dataTest2 = [
        [-1, 2, 3],
		[4, -5, 6],
		[9, 8, -9]
    ]

    const dataTest3 = [
        [1, 1, 1, 1, 1, 1, 1],
		[3, 3, 3, 3, 3, 3, 3],
		[0, 0, 4, 5, 4, 0, 0],
		[0, 0, 0, 5, 0, 0, 0],
		[0, 0, -4, 5, -4, 0, 0],
		[0, -3, 0, 5, 0, -3, 0],
		[-1, 0, 0, 5, 0, 0, -1]
    ]

    test('shoult 32', () => {
        expect(bus.calculate(dataTest)).toBe(2);
    })

    test('shoult 22', () => {
        expect(bus.calculate(dataTest2)).toBe(22);
    })

    test('shoult 0', () => {
        expect(bus.calculate(dataTest3)).toBe(0);
    })
   
});