const twoSum = require( './twoSum');

describe('twoSum', () => {
  test('twoSum finds indices for [1,2,3,4,5], target 5', () => {
    expect(twoSum([1,2,3,4,5], 5)).toEqual([0,3]);
  });

  test('twoSum finds indices for [10,15,3,7], target 17', () => {
    expect(twoSum([10,15,3,7], 17)).toEqual([0,3]);
  });

  test('twoSum finds indices for [1,2,3], target 4', () => {
    expect(twoSum([1,2,3], 4)).toEqual([0,2]);
  });
  
  test('twoSum finds indices for [2,7,11,15], target 9', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
  });
  
  test('twoSum finds indices for [3,2,4], target 6', () => {
    expect(twoSum([3,2,4], 6)).toEqual([1,2]);
  });
});
