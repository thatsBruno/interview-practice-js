const missingNumber = require('./missingNumber');

test('missingNumber finds 2 in [3,0,1]', () => {
    expect(missingNumber([3,0,1])).toBe(2);
});

test('missingNumber finds 8 in [9,6,4,2,3,5,7,0,1]', () => {
    expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8);
});
