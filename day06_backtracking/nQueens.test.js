const nQueens = require('./nQueens');

describe('nQueens', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(nQueens()).toBeDefined();
    });

    test('returns 2 solutions for n=4', () => {
        expect(nQueens(4).length).toBe(2);
    });
});
