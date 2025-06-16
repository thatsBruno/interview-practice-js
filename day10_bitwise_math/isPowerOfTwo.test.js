const isPowerOfTwo = require('./isPowerOfTwo');

describe('isPowerOfTwo', () => {
    test('returns true for 1', () => {
        expect(isPowerOfTwo(1)).toBe(true);
    });
    test('returns true for 16', () => {
        expect(isPowerOfTwo(16)).toBe(true);
    });
    test('returns false for 3', () => {
        expect(isPowerOfTwo(3)).toBe(false);
    });
});
