const mergeTwoSortedLists = require('./mergeTwoSortedLists');

describe('mergeTwoSortedLists', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(mergeTwoSortedLists()).toBeDefined();
    });

    test('returns null for two null lists', () => {
        expect(mergeTwoSortedLists(null, null)).toBeNull();
    });
});
