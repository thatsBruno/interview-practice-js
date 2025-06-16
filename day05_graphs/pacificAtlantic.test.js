const pacificAtlantic = require('./pacificAtlantic');

describe('pacificAtlantic', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(pacificAtlantic()).toBeDefined();
    });

    test('returns empty for empty matrix', () => {
        expect(pacificAtlantic([])).toEqual([]);
    });
});
