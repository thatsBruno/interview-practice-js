const longestConsecutive = require('./longestConsecutive');

test('longestConsecutive returns 4 for [100,4,200,1,3,2]', () => {
    expect(longestConsecutive([100,4,200,1,3,2])).toBe(4);
});

test('longestConsecutive returns 0 for []', () => {
    expect(longestConsecutive([])).toBe(0);
});
