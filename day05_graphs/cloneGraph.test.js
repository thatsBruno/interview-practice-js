const cloneGraph = require('./cloneGraph');

test('cloneGraph basic test', () => {
    // TODO: add tests
    expect(cloneGraph()).toBeDefined();
});

test('cloneGraph returns null for null input', () => {
    expect(cloneGraph(null)).toBeNull();
});
