const permutations = require('./permutations');

describe('permutations', () => {
    test('returns all permutations for [1,2,3]', () => {
        const result = permutations([1,2,3]);
        expect(result).toEqual(
            expect.arrayContaining([
                [1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]
            ])
        );
    });
});
