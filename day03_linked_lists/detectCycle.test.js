const detectCycle = require('./detectCycle');

test('detectCycle basic test', () => {
    // TODO: add tests
    expect(detectCycle()).toBeDefined();
});

test('detectCycle returns null for null input', () => {
    expect(detectCycle(null)).toBeNull();
});
