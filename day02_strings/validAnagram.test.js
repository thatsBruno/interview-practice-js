const validAnagram = require('./validAnagram');

describe('validAnagram', () => {
    test('returns true for anagram', () => {
        expect(validAnagram("anagram", "nagaram")).toBe(true);
    });

    test('returns false for non-anagram', () => {
        expect(validAnagram("rat", "car")).toBe(false);
    });
});
