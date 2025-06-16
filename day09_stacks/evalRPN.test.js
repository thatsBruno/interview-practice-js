const evalRPN = require('./evalRPN');

describe('evalRPN', () => {
    test('returns 9 for ["2","1","+","3","*"]', () => {
        expect(evalRPN(["2","1","+","3","*"])).toBe(9);
    });

    test('returns 6 for ["4","13","5","/","+"]', () => {
        expect(evalRPN(["4","13","5","/","+"])).toBe(6);
    });
});
