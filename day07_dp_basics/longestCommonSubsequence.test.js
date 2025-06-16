const longestCommonSubsequence = require('./longestCommonSubsequence');

describe('longestCommonSubsequence', () => {
    test('returns 3 for abcde, ace', () => {
        expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
    });

    test('returns 0 for abc, def', () => {
        expect(longestCommonSubsequence('abc', 'def')).toBe(0);
    });
});
