const wordSearch = require('./wordSearch');

describe('wordSearch', () => {
    test('finds word in board', () => {
        expect(wordSearch([
            ['A','B','C','E'],
            ['S','F','C','S'],
            ['A','D','E','E']
        ], "ABCCED")).toBe(true);
    });

    test('returns false if word not found', () => {
        expect(wordSearch([
            ['A','B','C','E'],
            ['S','F','C','S'],
            ['A','D','E','E']
        ], "ABCB")).toBe(false);
    });
});
