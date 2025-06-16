const validateBST = require('./validateBST');

test('validateBST returns true for null', () => {
    expect(validateBST(null)).toBe(true);
});

test('validateBST returns true for valid BST', () => {
    expect(validateBST({val:2,left:{val:1,left:null,right:null},right:{val:3,left:null,right:null}})).toBe(true);
});

test('validateBST returns false for invalid BST', () => {
    expect(validateBST({val:5,left:{val:1,left:null,right:null},right:{val:4,left:{val:3,left:null,right:null},right:{val:6,left:null,right:null}}})).toBe(false);
});
