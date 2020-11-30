const bus = require('./sort-bus');

describe('test sort function', () => {

    const dataTest = [4,3,2,1];
    const dataTest2 = [1,4,2,5,3,6];
    const dataTest3 = [10, 7, 8, 9, 1, 5];

    test('selction [4,3,2,1] first should = 1', () => {
        expect(bus.sortSelection(dataTest)[0]).toBe(1);
    });

    test('selction [4,3,2,1] last should = 4', () => {
        expect(bus.sortSelection(dataTest)[dataTest.length-1]).toBe(4);
    });

    test('bubble first should = 1', () => {
        expect(bus.sortBubble(dataTest2)[0]).toBe(1);
    });

    test('bubble last should = 6', () => {
        expect(bus.sortBubble(dataTest2)[dataTest2.length-1]).toBe(6);
    });

    test('fibonacci n=9 should 34', () => {
        expect(bus.fibonacci(9)).toBe(34);
    });

    test('fibonacci n=12 should 144', () => {
        expect(bus.fibonacci(12)).toBe(144);
    });

    test('fibonacci sum from value=4,000,000 should 4613732', () => {
        expect(bus.findSumFibonacci(4000000)).toBe(4613732);
    });

    test('quicksort first should = 1', () => {
        expect(bus.sortQuickSort(dataTest3)[0]).toBe(1);
    })

    test('quicksort last should = 10', () => {
        expect(bus.sortQuickSort(dataTest3)[dataTest3.length-1]).toBe(10);
    })
});