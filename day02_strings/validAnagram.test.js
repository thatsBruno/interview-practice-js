const validAnagram = require('./validAnagram');

test('validAnagram returns true for anagram', () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
});

test('validAnagram returns false for non-anagram', () => {
    expect(validAnagram("rat", "car")).toBe(false);
});
