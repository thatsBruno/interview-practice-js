const reorderList = require('./reorderList');

describe('reorderList', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(reorderList()).toBeDefined();
    });

    test('does not throw for null input', () => {
        expect(() => reorderList(null)).not.toThrow();
    });
});
