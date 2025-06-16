const maxDepth = require('./maxDepth');

test('maxDepth returns 0 for null', () => {
    expect(maxDepth(null)).toBe(0);
});

test('maxDepth returns 1 for single node', () => {
    expect(maxDepth({val:1,left:null,right:null})).toBe(1);
});
