const longestPalindromeSubstring = require('./longestPalindromeSubstring');

test('longestPalindromeSubstring finds bab in babad', () => {
    expect(["bab","aba"]).toContain(longestPalindromeSubstring("babad"));
});

test('longestPalindromeSubstring finds bb in cbbd', () => {
    expect(longestPalindromeSubstring("cbbd")).toBe("bb");
});
