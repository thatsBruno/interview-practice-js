const candy = require('./candy');

test('candy returns 5 for [1,0,2]', () => {
    expect(candy([1,0,2])).toBe(5);
});

test('candy returns 4 for [1,2,2]', () => {
    expect(candy([1,2,2])).toBe(4);
});
