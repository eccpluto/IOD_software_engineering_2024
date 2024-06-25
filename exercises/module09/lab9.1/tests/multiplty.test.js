const calculator = require('../libraries/calculator');
const myCalc = new calculator();

test('multiply 1 by -1 to get -1', () => {
    expect(myCalc.multiply(1, -1)).toBe(-1)
});

test('multiply 1 by 0 to get 0', () => {
    expect(myCalc.multiply(1, 0)).toBe(0)
});