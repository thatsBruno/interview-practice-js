const houseRobber = require('./houseRobber');

test('houseRobber returns 4 for [1,2,3,1]', () => {
    expect(houseRobber([1,2,3,1])).toBe(4);
});

test('houseRobber returns 12 for [2,7,9,3,1]', () => {
    expect(houseRobber([2,7,9,3,1])).toBe(12);
});
