const calculator = require('../libraries/calculator');
const myCalc = new calculator();

test('divide 1 by 1 to get 1', () => {
    expect(myCalc.divide(1, 1)).toBe(1)
});

test('divide 100 by 10 to get 10', () => {
    expect(myCalc.divide(100, 10)).toBe(10)
});