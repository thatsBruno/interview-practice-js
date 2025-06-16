const minWindowSubstring = require('./minWindowSubstring');

describe('minWindowSubstring', () => {
    test('finds BANC in ADOBECODEBANC for ABC', () => {
        expect(minWindowSubstring("ADOBECODEBANC", "ABC")).toBe("BANC");
    });

    test('returns empty string if no window', () => {
        expect(minWindowSubstring("a", "aa")).toBe("");
    });
});
