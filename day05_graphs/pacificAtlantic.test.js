const pacificAtlantic = require('./pacificAtlantic');

test('pacificAtlantic basic test', () => {
    // TODO: add tests
    expect(pacificAtlantic()).toBeDefined();
});

test('pacificAtlantic returns empty for empty matrix', () => {
    expect(pacificAtlantic([])).toEqual([]);
});
