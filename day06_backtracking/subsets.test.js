const subsets = require('./subsets');

describe('subsets', () => {
    test('returns all subsets for [1,2,3]', () => {
        const result = subsets([1,2,3]);
        expect(result).toEqual(
            expect.arrayContaining([
                [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]
            ])
        );
    });
});
