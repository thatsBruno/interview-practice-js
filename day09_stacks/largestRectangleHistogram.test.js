const largestRectangleHistogram = require('./largestRectangleHistogram');

test('largestRectangleHistogram returns 10 for [2,1,5,6,2,3]', () => {
    expect(largestRectangleHistogram([2,1,5,6,2,3])).toBe(10);
});
