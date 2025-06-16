const groupAnagrams = require('./groupAnagrams');

describe('groupAnagrams', () => {
    test('groups anagrams', () => {
        const input = ["eat","tea","tan","ate","nat","bat"];
        const output = groupAnagrams(input);
        expect(output).toEqual(
            expect.arrayContaining([
                expect.arrayContaining(["eat","tea","ate"]),
                expect.arrayContaining(["tan","nat"]),
                expect.arrayContaining(["bat"])
            ])
        );
    });
});
