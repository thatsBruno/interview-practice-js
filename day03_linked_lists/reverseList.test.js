const reverseList = require('./reverseList');

test('reverseList basic test', () => {
    // TODO: add tests
    expect(reverseList()).toBeDefined();
});

test('reverseList returns null for null input', () => {
    expect(reverseList(null)).toBeNull();
});
