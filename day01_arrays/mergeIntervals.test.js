const mergeIntervals = require('./mergeIntervals');

describe('mergeIntervals', () => {
    test('merges overlapping intervals', () => {
        expect(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
    });

    test('with no overlap', () => {
        expect(mergeIntervals([[1,4],[5,6]])).toEqual([[1,4],[5,6]]);
    });
});
