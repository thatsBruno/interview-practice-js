const jumpGameII = require('./jumpGameII');

test('jumpGameII basic test', () => {
    // TODO: add tests
    expect(jumpGameII()).toBeDefined();
});

test('jumpGameII returns 2 for [2,3,1,1,4]', () => {
    expect(jumpGameII([2,3,1,1,4])).toBe(2);
});

test('jumpGameII returns 0 for [0]', () => {
    expect(jumpGameII([0])).toBe(0);
});
