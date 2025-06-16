const lcaBST = require('./lcaBST');

test('lcaBST basic test', () => {
    // TODO: add tests
    expect(lcaBST()).toBeDefined();
});

test('lcaBST returns undefined for null root', () => {
    expect(lcaBST(null, null, null)).toBeUndefined();
});
