const detectCycle = require('./detectCycle');

describe('detectCycle', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(detectCycle()).toBeDefined();
    });

    test('returns null for null input', () => {
        expect(detectCycle(null)).toBeNull();
    });
});
