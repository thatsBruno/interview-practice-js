const longestPalindromeSubstring = require('./longestPalindromeSubstring');

describe('longestPalindromeSubstring', () => {
    test('finds bab in babad', () => {
        expect(["bab","aba"]).toContain(longestPalindromeSubstring("babad"));
    });

    test('finds bb in cbbd', () => {
        expect(longestPalindromeSubstring("cbbd")).toBe("bb");
    });
});
