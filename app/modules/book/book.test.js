const bus = require('./book-bus');

describe('test sort function', () => {

    const expected = 
    '    *    '+'\n'+
    '   ***   '+'\n'+
    '  *****  '+'\n'+
    ' ******* '+'\n'+
    '*********'+'\n'+
    ' ******* '+'\n'+
    '  *****  '+'\n'+
    '   ***   '+'\n'+
    '    *    ';


    test('should ', () => {
        expect(bus.cardDiamond()).toBe(expected);
    });

    test('abcd first arr should ab', () => {
        const actual = bus.splitArr('abcd');
        expect(actual[0]).toBe('ab');
    })

    test('abcd last arr should cd', () => {
        const actual = bus.splitArr('abcd');
        expect(actual[actual.length-1]).toBe('cd');
    })

    test('abcd last arr should e*', () => {
        const actual = bus.splitArr('abcde');
        expect(actual[actual.length-1]).toBe('e*');
    })

    test('abcdefg last arr should g*', () => {
        const actual = bus.splitArr('abcdefg');
        expect(actual[actual.length-1]).toBe('g*');
    })


    test('multiple below 10 should 23', () => {
        expect(bus.sumMultiple(10)).toBe(23);
    });

    test('multiple below 10 should 23', () => {
        expect(bus.sumMultiple(1000)).toBe(233168);
    });


});