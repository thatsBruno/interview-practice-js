const hammingDistance = require('./hammingDistance');

test('hammingDistance between 1 and 4 is 2', () => {
    expect(hammingDistance(1, 4)).toBe(2);
});

test('hammingDistance between 3 and 1 is 1', () => {
    expect(hammingDistance(3, 1)).toBe(1);
});
