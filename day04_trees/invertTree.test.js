const invertTree = require('./invertTree');

test('invertTree basic test', () => {
    // TODO: add tests
    expect(invertTree()).toBeDefined();
});

test('invertTree returns null for null', () => {
    expect(invertTree(null)).toBeNull();
});
