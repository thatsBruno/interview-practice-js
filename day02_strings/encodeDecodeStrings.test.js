const encodeDecodeStrings = require('./encodeDecodeStrings');

describe('encodeDecodeStrings', () => {
    test('encodes and decodes correctly', () => {
        const strs = ["lint","code","love","you"];
        const encoded = encodeDecodeStrings.encode(strs);
        expect(encodeDecodeStrings.decode(encoded)).toEqual(strs);
    });
});
