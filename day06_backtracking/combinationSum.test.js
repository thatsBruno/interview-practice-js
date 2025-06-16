const combinationSum = require('./combinationSum');

describe('combinationSum', () => {
    test('finds all combinations', () => {
        expect(combinationSum([2,3,6,7], 7)).toEqual(
            expect.arrayContaining([[7],[2,2,3]])
        );
    });
});
