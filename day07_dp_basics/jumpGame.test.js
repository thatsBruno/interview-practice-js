const jumpGame = require('./jumpGame');

test('jumpGame returns true for [2,3,1,1,4]', () => {
    expect(jumpGame([2,3,1,1,4])).toBe(true);
});

test('jumpGame returns false for [3,2,1,0,4]', () => {
    expect(jumpGame([3,2,1,0,4])).toBe(false);
});
