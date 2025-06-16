const numberOfIslands = require('./numberOfIslands');

describe('numberOfIslands', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(numberOfIslands()).toBeDefined();
    });

    test('returns 0 for empty grid', () => {
        expect(numberOfIslands([])).toBe(0);
    });
});
