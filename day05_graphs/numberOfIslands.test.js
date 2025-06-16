const numberOfIslands = require('./numberOfIslands');

test('numberOfIslands basic test', () => {
    // TODO: add tests
    expect(numberOfIslands()).toBeDefined();
});

test('numberOfIslands returns 0 for empty grid', () => {
    expect(numberOfIslands([])).toBe(0);
});
