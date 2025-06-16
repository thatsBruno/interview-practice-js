const copyRandomList = require('./copyRandomList');

describe('copyRandomList', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(copyRandomList()).toBeDefined();
    });

    test('returns null for null input', () => {
        expect(copyRandomList(null)).toBeNull();
    });
});
