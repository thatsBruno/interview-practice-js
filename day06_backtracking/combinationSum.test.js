const combinationSum = require('./combinationSum');

test('combinationSum finds all combinations', () => {
    expect(combinationSum([2,3,6,7], 7)).toEqual(
        expect.arrayContaining([[7],[2,2,3]])
    );
});
