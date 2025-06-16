const climbStairs = require('./climbStairs');

describe('climbStairs', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(climbStairs()).toBeDefined();
    });

    test('returns 2 for n=2', () => {
        expect(climbStairs(2)).toBe(2);
    });

    test('returns 3 for n=3', () => {
        expect(climbStairs(3)).toBe(3);
    });
});
