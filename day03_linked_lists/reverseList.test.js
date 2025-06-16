const reverseList = require('./reverseList');

describe('reverseList', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(reverseList()).toBeDefined();
    });

    test('returns null for null input', () => {
        expect(reverseList(null)).toBeNull();
    });
});
