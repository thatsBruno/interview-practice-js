const reorderList = require('./reorderList');

test('reorderList basic test', () => {
    // TODO: add tests
    expect(reorderList()).toBeDefined();
});

test('reorderList does not throw for null input', () => {
    expect(() => reorderList(null)).not.toThrow();
});
