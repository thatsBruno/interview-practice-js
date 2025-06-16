const gasStation = require('./gasStation');

test('gasStation returns 3 for [1,2,3,4,5], [3,4,5,1,2]', () => {
    expect(gasStation([1,2,3,4,5],[3,4,5,1,2])).toBe(3);
});

test('gasStation returns -1 for [2,3,4], [3,4,3]', () => {
    expect(gasStation([2,3,4],[3,4,3])).toBe(-1);
});
