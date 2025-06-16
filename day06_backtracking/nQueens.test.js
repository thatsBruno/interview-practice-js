const nQueens = require('./nQueens');

test('nQueens basic test', () => {
    // TODO: add tests
    expect(nQueens()).toBeDefined();
});

test('nQueens returns 2 solutions for n=4', () => {
    expect(nQueens(4).length).toBe(2);
});
