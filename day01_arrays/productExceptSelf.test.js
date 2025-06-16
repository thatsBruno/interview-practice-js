const productExceptSelf = require('./productExceptSelf');

test('productExceptSelf returns correct output for [1,2,3,4]', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
});

test('productExceptSelf returns correct output for [0,1,2,3]', () => {
    expect(productExceptSelf([0,1,2,3])).toEqual([6,0,0,0]);
});
