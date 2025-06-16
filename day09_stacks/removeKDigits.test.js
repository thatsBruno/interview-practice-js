const removeKDigits = require('./removeKDigits');

describe('removeKDigits', () => {
    test('returns "1219" for "1432219", 3', () => {
        expect(removeKDigits("1432219", 3)).toBe("1219");
    });

    test('returns "200" for "10200", 1', () => {
        expect(removeKDigits("10200", 1)).toBe("200");
    });
});
