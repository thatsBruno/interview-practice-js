const jumpGameII = require('./jumpGameII');

describe('jumpGameII', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(jumpGameII()).toBeDefined();
    });

    test('returns 2 for [2,3,1,1,4]', () => {
        expect(jumpGameII([2,3,1,1,4])).toBe(2);
    });

    test('returns 0 for [0]', () => {
        expect(jumpGameII([0])).toBe(0);
    });
});
