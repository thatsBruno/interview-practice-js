const candy = require('./candy');

describe('candy', () => {
    test('returns 5 for [1,0,2]', () => {
        expect(candy([1,0,2])).toBe(5);
    });

    test('returns 4 for [1,2,2]', () => {
        expect(candy([1,2,2])).toBe(4);
    });
});
