const functionsToTest = require('../../js/playground/functionsToTest');

test('adds 2 +2 to equal 4', ()=> {
    expect(functionsToTest.add(2,2)).toBe(4);
});

test('adds 2 +2 to equal to NOT equal 5', ()=> {
    expect(functionsToTest.add(2,2)).not.toBe(5);
});
