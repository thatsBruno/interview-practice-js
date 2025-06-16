const wordSearch = require('./wordSearch');

test('wordSearch finds word in board', () => {
    expect(wordSearch([
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ], "ABCCED")).toBe(true);
});

test('wordSearch returns false if word not found', () => {
    expect(wordSearch([
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ], "ABCB")).toBe(false);
});
