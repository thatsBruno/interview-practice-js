const mergeTwoSortedLists = require('./mergeTwoSortedLists');

test('mergeTwoSortedLists basic test', () => {
    // TODO: add tests
    expect(mergeTwoSortedLists()).toBeDefined();
});

test('mergeTwoSortedLists returns null for two null lists', () => {
    expect(mergeTwoSortedLists(null, null)).toBeNull();
});
