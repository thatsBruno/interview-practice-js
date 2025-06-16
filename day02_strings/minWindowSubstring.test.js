const minWindowSubstring = require('./minWindowSubstring');

test('minWindowSubstring finds BANC in ADOBECODEBANC for ABC', () => {
    expect(minWindowSubstring("ADOBECODEBANC", "ABC")).toBe("BANC");
});

test('minWindowSubstring returns empty string if no window', () => {
    expect(minWindowSubstring("a", "aa")).toBe("");
});
