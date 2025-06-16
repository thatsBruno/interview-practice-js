const coinChange = require('./coinChange');

test('coinChange returns 3 for [1,2,5], 11', () => {
    expect(coinChange([1,2,5], 11)).toBe(3);
});

test('coinChange returns -1 for [2], 3', () => {
    expect(coinChange([2], 3)).toBe(-1);
});
