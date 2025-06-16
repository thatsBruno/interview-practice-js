const maxDepth = require('./maxDepth');

describe('maxDepth', () => {
    test('returns 0 for null', () => {
        expect(maxDepth(null)).toBe(0);
    });

    test('returns 1 for single node', () => {
        expect(maxDepth({val:1,left:null,right:null})).toBe(1);
    });
});
