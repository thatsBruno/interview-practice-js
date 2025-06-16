const countingBits = require('./countingBits');

describe('countingBits', () => {
    test('returns correct bit counts for n = 2', () => {
        expect(countingBits(2)).toEqual([0,1,1]);
    });

    test('returns correct bit counts for n = 5', () => {
        expect(countingBits(5)).toEqual([0,1,1,2,1,2]);
    });
});
