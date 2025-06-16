const longestCommonSubsequence = require('./longestCommonSubsequence');

test('longestCommonSubsequence returns 3 for abcde, ace', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
});

test('longestCommonSubsequence returns 0 for abc, def', () => {
    expect(longestCommonSubsequence('abc', 'def')).toBe(0);
});
