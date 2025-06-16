const singleNumber = require('./singleNumber');

describe('singleNumber', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(singleNumber()).toBeDefined();
    });

    test('finds 1 in [2,2,1]', () => {
        expect(singleNumber([2,2,1])).toBe(1);
    });

    test('finds 4 in [4,1,2,1,2]', () => {
        expect(singleNumber([4,1,2,1,2])).toBe(4);
    });
});
