const calculator = require('../libraries/calculator');
const myCalc = new calculator();

test('subtract 1 from 1 to get 0', () => {
    expect(myCalc.subtract(1, 1)).toBe(0)
});

test('subtract 10 from 1 to get -9', () => {
    expect(myCalc.subtract(1, 10)).toBe(-9)
});