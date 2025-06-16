const diameterOfBinaryTree = require('./diameterOfBinaryTree');

test('diameterOfBinaryTree basic test', () => {
    // TODO: add tests
    expect(diameterOfBinaryTree()).toBeDefined();
});

test('diameterOfBinaryTree returns 0 for null', () => {
    expect(diameterOfBinaryTree(null)).toBe(0);
});
