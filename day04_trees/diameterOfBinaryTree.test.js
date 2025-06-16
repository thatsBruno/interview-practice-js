const diameterOfBinaryTree = require('./diameterOfBinaryTree');

describe('diameterOfBinaryTree', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(diameterOfBinaryTree()).toBeDefined();
    });

    test('returns 0 for null', () => {
        expect(diameterOfBinaryTree(null)).toBe(0);
    });
});
