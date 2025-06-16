const largestRectangleHistogram = require('./largestRectangleHistogram');

describe('largestRectangleHistogram', () => {
    test('returns 10 for [2,1,5,6,2,3]', () => {
        expect(largestRectangleHistogram([2,1,5,6,2,3])).toBe(10);
    });
});
