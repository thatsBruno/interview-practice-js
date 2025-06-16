const nonOverlappingIntervals = require('./nonOverlappingIntervals');

describe('nonOverlappingIntervals', () => {
    test('returns 1 for [[1,2],[2,3],[3,4],[1,3]]', () => {
        expect(nonOverlappingIntervals([[1,2],[2,3],[3,4],[1,3]])).toBe(1);
    });

    test('returns 2 for [[1,2],[1,2],[1,2]]', () => {
        expect(nonOverlappingIntervals([[1,2],[1,2],[1,2]])).toBe(2);
    });
});
