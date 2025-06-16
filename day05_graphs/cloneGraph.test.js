const cloneGraph = require('./cloneGraph');

describe('cloneGraph', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(cloneGraph()).toBeDefined();
    });

    test('returns null for null input', () => {
        expect(cloneGraph(null)).toBeNull();
    });
});
