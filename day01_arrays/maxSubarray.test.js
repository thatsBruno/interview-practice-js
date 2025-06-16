const maxSubarray = require('./maxSubarray');

test('maxSubarray returns 6 for [-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maxSubarray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
});

test('maxSubarray returns 1 for [1]', () => {
    expect(maxSubarray([1])).toBe(1);
});
