const lcaBST = require('./lcaBST');

describe('lcaBST', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(lcaBST()).toBeDefined();
    });

    test('returns undefined for null root', () => {
        expect(lcaBST(null, null, null)).toBeUndefined();
    });
});
