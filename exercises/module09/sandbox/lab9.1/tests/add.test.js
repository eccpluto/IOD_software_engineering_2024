const calculator = require('../libraries/calculator');
const myCalc = new calculator();

test('add 1 to -1 to get 0', () => {
    expect(myCalc.add(1, -1)).toBe(0)
});

test('add 0 to 0 to get 0', () => {
    expect(myCalc.add(0, 0)).toBe(0)
});

test('add 999 to 1 to get 1000', () => {
    expect(myCalc.add(999, 1)).toBe(1000)
});