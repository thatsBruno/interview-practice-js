const invertTree = require('./invertTree');

describe('invertTree', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(invertTree()).toBeDefined();
    });

    test('returns null for null', () => {
        expect(invertTree(null)).toBeNull();
    });
});
