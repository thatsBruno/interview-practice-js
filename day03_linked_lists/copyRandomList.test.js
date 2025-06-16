const copyRandomList = require('./copyRandomList');

test('copyRandomList basic test', () => {
    // TODO: add tests
    expect(copyRandomList()).toBeDefined();
});

test('copyRandomList returns null for null input', () => {
    expect(copyRandomList(null)).toBeNull();
});
